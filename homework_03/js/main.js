function Company(params) {
    let {name: _name, owner: _owner, maxCompanySize: _maxCount} = params

    let _logs = []
    this._employees = [];

    const setHistory = function(log) {
        _logs.push(log)
    }

    this.getName = function() {
        return _name;
    }

    this.addNewEmployee = function(employee) {
        if (employee instanceof Employee) {
            let isAddedNewEmployee = false;

            do {
                if (this._employees.length < _maxCount) {
                    isAddedNewEmployee = this._employees.push(employee) > 0;
                    setHistory(`${employee.getName()} starts working at ${this.getName()} in ${new Date()}`)
                    employee.hire(this.getName());
                } else {
                    let indexOfMinEmployeeSalary = this._employees.reduce((indexMin, currentEmployee, index, employees) => {
                        return currentEmployee.getSalary() < employees[indexMin].getSalary() ? index : indexMin
                    }, 0);
                    this.removeEmployee(indexOfMinEmployeeSalary);
                }
            } while (!isAddedNewEmployee);
        } else {
            console.log(`Please try to add Employee instance`);
        }
    }

    this.removeEmployee = function(indexEmployee) {
        let arrRemovedEmployees = this._employees.splice(indexEmployee, 1);
        if (arrRemovedEmployees.length) {
            let removedEmployee = arrRemovedEmployees[0]
            setHistory(`${removedEmployee.getName()} ends working at ${this.getName()} in ${new Date()}`);
            removedEmployee.fire(this.getName());
        }
    }

    this.getAvarageSalary = function() {
        return this._employees.reduce((sum, employee) => sum += employee.getSalary(), 0) / this._employees.length;
    }

    this.getEmployees = function() {
        return this._employees;
    }

    this.getFormattedListOfEmployees = function() {
        return this._employees.map((employee) => `${employee.getName()} - works in ${this.getName()} ${(new Date()).getTime() - employee.getLastHireTime()} seconds`);
    }

    this.getAvarageAge = function() {
        return this._employees.reduce((sum, employee) => sum += employee.getAge(), 0) / this._employees.length;
    }

    this.getHistory = function() {
        return _logs.join("\n");
    }
}

function Employee(dataEmployee) {
    let _name = dataEmployee["name"],
        _primarySkill = dataEmployee["primarySkill"],
        _age = dataEmployee["age"],
        _salary = dataEmployee["salary"],
        _logs = [],
        _companyName = '',
        _timeHire = [],
        _timeFire = [];
    
    const setHistory = function(log) {
        _logs.push(log);
    }

    const _setTimeFire = function(time) {
        _timeFire.push(time);
    }

    const _setTimeHire = function(time) {
        _timeHire.push(time);
    }

    this.getLastHireTime = function() {
        return _timeHire.slice(-1)[0];
    }

    this.getName = function() {
        return _name;
    }
    
    this.getAge = function() {
        return _age;
    }

    this.getSalary = function() {
        return _salary;
    }
    this.setSalary = function(salary) {
        if (salary > _salary && isFinite(salary)) {
            setHistory(`change salary from ${_salary} to ${salary}`)
            _salary = salary;
        } else {
            setHistory(`try to change salary from ${_salary} to ${salary}`)
        }
    }
    this.getWorkTimeInSeconds = function() {
        let timeFire = _timeFire.slice(-1)[0];

        return ((timeFire ? timeFire : (new Date()).getTime()) - _timeHire[0])  / 1000;
    }
    this.hire = function(companyName) {
        _companyName = companyName
        let date = new Date();
        _setTimeHire(date.getTime());
        setHistory(`${this.getName()} is hired to ${_companyName} in ${date}`);
    }
    this.fire = function(companyName) {
        let date = new Date();
        _setTimeFire(date.getTime());
        setHistory(`${this.getName()} is fired to ${_companyName} in ${date}`);
        _companyName = '';
    }
    this.getHistory = function() {
        return _logs.join("\n");
    }
    
}
