function makeList () {
    let input = document.getElementById('htmlInput1Id');
    const list = document.getElementById('list');
    let subStrs = seperateParenthesis(input.value);
    for (i = 0; i < subStrs.length; i++) {
        let li = document.createElement('li');
        li.innerText = subStrs[i];
        list.appendChild(li);
    }
}



const button = document.getElementById('generateOOOId');
button.addEventListener('click', makeList);