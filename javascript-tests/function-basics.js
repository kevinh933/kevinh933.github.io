const simpleFunction = "functions should consist of statements designed to perform a single task.";
console.log(simpleFunction);

const functionParameters;
console.log(functionParameters);

const functionReturn = "Many functions return values.";
console.log(functionReturn);

window.onload = () => {
    const simpleFunctionDisplay = document.getElementById('simpleFunctionDisplay');
    const functionCallsAction = document.getElementById('functionCallsAction');

    function simple() {
        console.log('simple');
        simpleFunctionDisplay.textContent = "simple";
    }
    }
    functionCallsAction.onclick = simple;
    
    const data = nameDisplay.value;
    
    const elfCode = {
        appendToList: (list, value) => {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(value));
            list.appendChild(li);
        }
    }
    const someAction = document.getElementById('someAction');
    someAction.onclick = function() {
    }
