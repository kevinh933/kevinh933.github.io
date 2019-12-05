window.onload = () => {
    
    const simpleFunctionDisplay = document.getElementById('simpleFunctionDisplay');
    function simple() {
        simpleFunctionDisplay.textContent = "Functions should consist of statements designed to perform a single task.";
        console.log('simple');
    }

    const functionParametersDisplay = document.getElementById('functionParametersDisplay');
    function testParameters(a) {
            functionParametersDisplay.textContent = a;
            console.log(a);
    }

    const functionReturnDisplay = document.getElementById('functionReturnDisplay');
    
    function functionReturn() {
        return("Many functions return values"); 
    }

    const functionCallsAction = document.getElementById('functionCallsAction');
    functionCallsAction.onclick = function() {
        simple();
        testParameters("Many functions take parameters");
        var returnValue = functionReturn() 
            functionReturnDisplay.textContent = returnValue;
    }

    const listButton = document.getElementById('addToListAction');
    listButton.onclick = () => {
        const myList = document.getElementById('listDisplay');
        const inputText = document.getElementById('nameDisplay').value;
            elfCode.appendToList(myList, inputText);
    }

    const elfCode = {
        appendToList: (list, value) => {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(value));
            list.appendChild(li);
        }
    }      
}