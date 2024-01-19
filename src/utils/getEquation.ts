function getRndInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const operators = ["+", "-"];

function getEquation() {
    const a = getRndInteger(0, 999);
    const operator = operators[getRndInteger(0, 1)];
    let b;
    const lenB = 4 - a.toString().length;
    if (operator == "+") {
        b = getRndInteger(0, Math.min(10 ** lenB - 1, 999 - a));
        let leftEquation = a.toString() + operator + b.toString();
        while (leftEquation.length < 5) leftEquation = "0" + leftEquation;
        let rightEquation = (a + b).toString();
        while (rightEquation.length < 3) rightEquation = "0" + rightEquation;
        return {
            leftEquation,
            rightEquation,
        };
    } else {
        b = getRndInteger(Math.max(a - 999, 0), Math.min(a, 10 ** lenB - 1));
        let leftEquation = a.toString() + operator + b.toString();
        while (leftEquation.length < 5) leftEquation = "0" + leftEquation;
        let rightEquation = (a - b).toString();
        while (rightEquation.length < 3) rightEquation = "0" + rightEquation;
        return {
            leftEquation,
            rightEquation,
        };
    }
}

export default getEquation;
