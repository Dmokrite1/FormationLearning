function addition(a, b){
    if(typeof a !== "number" || typeof b !== "number"){
        throw new Error("a and b must be numbers")
    }
    return a + b
}


addition(1,2)

export default addition