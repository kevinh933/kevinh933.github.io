window.onload= ()=> {

    const feetToInchesAction = document.getElementById('feetToInchesAction');
    feetToInchesAction.onclick = () => {
        const feetToInchesInput = document.getElementById('feetToInchesInput');
        const feetToInchesDisplay = document.getElementById('feetToInchesDisplay');
        feetToInchesDisplay.textContent = feetToInches(feetToInchesInput.value);
}

const feetToInches = (feet) => {
    return feet * 12;
}

    const milesToFeetAction = document.getElementById('milesToFeetAction');
    milesToFeetAction.onclick = () => {
        const milesToFeetInput = document.getElementById('milesToFeetInput');
        const milesToFeetIDisplay = document.getElementById('milesToFeetDisplay');
        milesToFeetIDisplay.textContent=milesToFeet(milesToFeetInput.value)
}

const milesToFeet = (miles) => {
    return miles * 5280;
}

    const areaOfTriangleAction = document.getElementById('areaOfTriangleAction');
    areaOfTriangleAction.onclick = () => {
        const areaOfTriangleInputB = document.getElementById('areaOfTriangleInputB');
        const areaOfTriangleInputH = document.getElementById('areaOfTriangleInputH');
        const areaOfTriangleDisplay = document.getElementById("areaOfTriangleDisplay");
        areaOfTriangleDisplay.textContent=areaOfTriangle(areaOfTriangleInputB.value, areaOfTriangleInputH.value);
}

const areaOfTriangle =(base, height) => {
    return base * height / 2;
}

    const areaOfCircleAction = document.getElementById('areaOfCircleAction');
    areaOfCircleAction.onclick= () => {
        const areaOfCircleInput = document.getElementById('areaOfCircleInput');
        const areaOfCircleDisplay = document.getElementById('areaOfCircleDisplay');
        areaOfCircleDisplay.textContent = areaOfCircle(areaOfCircleInput.value);
}

const areaOfCircle = (radius) => {
    return Math.pow(radius, 2) * Math.PI;
}
}