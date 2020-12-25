function makeList () {
    let input = document.getElementById('htmlInput1Id');
    const list = document.getElementById('list');
    errMsg = document.getElementById('errMsg');
    let subStrs = seperateParenthesis(input.value);
    errMsg.hidden = true;
    list.innerHTML = '';
    if (subStrs === null) {
        errMsg.hidden = false;
        return;
    }
    for (i = 0; i < subStrs.length; i++) {
        let li = document.createElement('li');
        li.innerText = subStrs[i];
        list.appendChild(li);
    }
}



const button = document.getElementById('generateOOOId');
button.addEventListener('click', makeList);