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

    simpleObject.dynamicMethod = () => {
        console.log("Dynamic Method");
    }

    functionObjectAction.onclick = function() {
        functionObject.sayName();
        functionObjectDisplay.textContent=fullName;
    }

    function FunctionObject() {
        FunctionObject.prototype.sayName = function () {
            console.log("Function Object");
        }
    }

    customClassAction.onclick = function() {
        customClass.sayName();
        customClassDisplay.textContent=fullName;
    }

    simpleObject.sayName();
    simpleObject.dynamicMethod(); 
    const functionObject = new FunctionObject();
    functionObject.sayName();

}