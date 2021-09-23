import data from "../../res/domains.json"
const dom = data as string[]
import stack from "./stack"

export const ReturnFirst = async() => {

    // return the first domain that open a https request with us

    for (let i = 0; i < dom.length; i++) {
        const element = dom[i];
        if(await stack("https://"+element)){
            domain = element
            return element
        }
        
    }
}
export var domain = ""