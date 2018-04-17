function AddRequiredValidation(fn) {
    return function (...args) {
        let value = args[0];

        this.valid =  !(typeof value === "undefined" || value.length == 0);

        if (!this.valid) {
            this.errorMessage = "Iinput value is an empty string or undefined";
            return; 
        }

        return fn.apply(this, args);
    }    
}

function AddNumberValidation(fn) {
    return function (...args) {
        let value = args[0];

        this.valid = typeof value === "number";
        if (!this.valid) {
            this.errorMessage = "Input value is not of type 'number'";
            return;
        }

        return fn.apply(this, args);
    }
}

function AddMaxLengthValidation(fn, len) {
    return function (...args) {
        
        let value = args[0];

        this.valid = typeof value === "number" && value.toString().length <= len;

        if (!this.valid) {
            this.errorMessage = "Input value length bigger then maxLength parameter provided to the decorator";
            return;
        }

        return fn.apply(this, args);
    }
    var len = len;
    
    target.valid = target.value.toString().length == len;
}


class Input {
    constructor(placeHolder) {
        this.placeHolder = placeHolder || "Type...";
        this._value = "";
    }

    get value() {
        return this._value;
    }

    setValue(newValue) {
        this._value = newValue;
    }
}

Object.defineProperty(Input.prototype, 'setValue', {
    value: AddRequiredValidation(AddNumberValidation(AddMaxLengthValidation(Input.prototype.setValue, 5)))
});

class NumberInput extends Input {
    constructor(placeHolder){
        super(placeHolder);

        this.type = "number";   
    }
}

let numberInput = new NumberInput("Type numbers...");

//  Then you can create add validation decorators and add functionality to numberInput
//  AddRequiredValidation Decorator that add required validation
//  AddMaxLengthValidation Decorator that add max length validation
//  AddNumberValidation Decorator for only number values validation

// The desired behaviour would be
console.log(numberInput)
numberInput.setValue();
console.log(numberInput.valid) //---> false, because of required validator
numberInput.setValue("1");
console.log(numberInput.valid) // ---> false, because of number validator
numberInput.setValue(1);
console.log(numberInput.valid) // ---> true, all validators pass
numberInput.setValue(1111111111111111111111111111);
console.log(numberInput.valid) // ---> false, because of max length validator

// Notice after applying some validator to an object, it gets additional "valid" property;


