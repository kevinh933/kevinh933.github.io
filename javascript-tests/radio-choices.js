window.onload = () => {
    const myForm = document.getElementById('sort-type');
    
    myForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const value = document.querySelector('input[name="sorter"]:checked').value;
        if (value.toLowerCase() === 'gray') {
            setColor("grayBackground");
            showChoice(value);
        }if (value.toLowerCase() === 'black') {
            setColor("blackBackground");
            showChoice(value);
        }if (value.toLowerCase() === 'red'){
            setColor("redBackground");
            showChoice(value);
        }if (value.toLowerCase() === 'white'){
            setColor("whiteBackground");
            showChoice(value);
        }else {
            setColor("goldBackground");
            showChoice(value);
        }
    })
    
    let currentClass = null;
    
    const setColor = (className) => {
        console.log("SET CLASS TO", className);
        var element = document.getElementById("form-section");
        if (currentClass) {
            element.classList.remove(currentClass);        
        }
        currentClass = className;
        element.classList.add(className);
    }
    }
    var showChoice = (color) => {
        let userChoiceDisplay = document.getElementById('user-choice');
        userChoiceDisplay.textContent = (color);
    }