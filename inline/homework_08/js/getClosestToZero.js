const getClosestToZero = (...parameters) => { 
    
    let indexMin = 0;

    for (let i = 1; i < parameters.length; i++) {
        if (Math.abs(parameters[i]) < Math.abs(parameters[indexMin])) {
            indexMin = i
        }
    }

    return parameters[indexMin]
}
