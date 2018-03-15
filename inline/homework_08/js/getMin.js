const getMin = (...parameters) => { 
    let indexMin = 0;

    for (let i = 1; i < parameters.length; i++) {
        if (parameters[i] < parameters[indexMin]) {
            indexMin = i
        }
    }

    return parameters[indexMin]
}
