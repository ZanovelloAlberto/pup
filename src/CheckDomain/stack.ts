import * as https from "https";

// Return true if the URL is found and returns 200. Returns false if there are
// network errors or the status code is not 200. It will throw an exception
// for configuration errors (e.g. malformed URLs).
//
// Note this only supports https, not http.
//
export default async function isUrlFound(url: string, maxRedirects = 20): Promise<boolean> {
  const [statusCode, location] = await new Promise<[number?, string?]>(
    (resolve, _reject) => {
      const req = https.request(
        url,
        {
          method: "HEAD",
        },
        response => {
          // This is necessary to avoid memory leaks.
          response.on("readable", () => response.read());
          resolve([response.statusCode, response.headers["location"]]);
        },
      );
      req.on("error", _err => resolve([undefined, undefined]));
      req.end();
    },
  );

  if (
    statusCode !== undefined &&
    statusCode >= 300 &&
    statusCode < 400 &&
    location !== undefined &&
    maxRedirects > 0
  ) {
    return isUrlFound(location, maxRedirects - 1);
  }
  return statusCode === 200;
}