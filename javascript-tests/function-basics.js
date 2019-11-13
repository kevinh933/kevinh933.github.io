function simpleFunction () {
    console.log("functions should consist of statements designed to perform a single task.");
}

function functionParameters(value) {
    console.log(value);
}

function functionreturn() {
    return "Many functions return values.";
}

function add(a, b) {
    const addResult = a + b;
    console.log('inside add', addResult);
    return a + b;
}

simpleFunction();

functionParamters("Many functions return values.");

const addResult = add(2, 3);

const returnValue = functionReturn(addResult);
console.log(returnValue);

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
