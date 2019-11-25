window.onload = () => {
    const simpleObjectDisplay = document.getElementById('simpleObjectDisplay');

    const functionObjectDisplay = document.getElementById('functionObjectDisplay');

    const customClassDisplay = document.getElementById('customClassDisplay');

    const simpleObject = {
        firstName: 'James',
        lastName: 'Watson',
        fullName: 'James Watson',
        }
        console.log(simpleObject);
    
    simpleObjectAction.onclick = function() {
        simpleObject.sayName();
        simpleObjectDisplay.textContent=fullName;
    }

    simpleObject.sayName();

    simpleObject.dynamicMethod = () => {
        console.log("Dynamic Method");
    }

    simpleObject.dynamicMethod();

    functionObjectAction.onclick = function() {
        functionObject.sayName();
        functionObjectDisplay.textContent=fullName;
    }

    const functionObject = new FunctionObject();

    function FunctionObject() {
        FunctionObject.prototype.sayName = function () {
            console.log("Function Object");
        }
    }

    functionObject.sayName();

    function privateFunction() {
        return "Private Function";
    }

    privateFunction.sayName();
}