function makeList () {
    let input = document.getElementById('htmlInput1Id');
    const list = document.getElementById('list');
    let errMsg = document.getElementById('errMsg');
    let subStrs = seperateParenthesis(input.value);
    list.innerHTML = '';
    errMsg.hidden = true;
    if (testValidInput(subStrs) === null) {return;};
    for (let i = 0; i < subStrs.length; i++) {
        let li = document.createElement('li');
        li.innerText = subStrs[i];
        list.appendChild(li);
    }
}

function testValidInput(subStrs) {
    if (subStrs === null) {
        errMsg.hidden = false;
        return null;
    }
}

const button = document.getElementById('generateOOOId');
button.addEventListener('click', makeList);