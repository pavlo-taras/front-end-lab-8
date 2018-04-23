import { addition, subtraction, multiplication, division } from './calculating-module'

export function result(type, val1, val2) {
    let value = 0;
    switch (type) {
        case '+':
            value = addition(val1, val2);
            break;
        case '-':
            value = subtraction(val1, val2);
            break;
        case '*':
            value = multiplication(val1, val2);
            break;
        case '-':
            value = division(val1, val2);
            break;        
    }

    return value;
}
