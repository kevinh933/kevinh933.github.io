window.onload = () => {
    const simpleFunction = document.getElementById('simpleFunctionDisplay');
    const functionReturn = document.getElementById('functionReturnDisplay');
    const functionParameters = document.getElementById('functionParametersDisplay');

    function simpleFunction () {
        console.log("Functions should consist of statements designed to perform a single task.");
        simpleFunctionDisplay.textContent = "simple";
    }

    function functionParameters(value) {
        console.log(value);
    }

    function functionReturn() {
        return "Many functions return values.";
    }
    }
    functionCallsAction.onclick = function(){
        simple();
        functionParametersDisplay("Many functions take parameters");
        let returnValue=functionReturn() 
            functionParametersDisplay.textContent = returnValue;
    
    const data = nameDisplay.value;
    
    const elfCode = {
        appendToList: (list, value) => {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(value));
            list.appendChild(li);
        }
    }
    const functionCallsAction = document.getElementById('functionCallsAction');
    functionCallsAction.onclick = function() {
        
    }

    simpleFunction();

    functionParameters("Many functions take parameters.");

    const returnValue = functionReturn(addResult);
    console.log(returnValue);
    }