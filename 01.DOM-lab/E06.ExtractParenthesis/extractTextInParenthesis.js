function extractTextInParenthesis(elementId) {
    const regex = /\(([^)]+)\)/gm;
    let text = document.getElementById(elementId).textContent;
    let output = '';
    let m;
    while ((m = regex.exec(text)) !== null) {
        output += m[1] + '; ';
    }
    return output.slice(0, -2);
}