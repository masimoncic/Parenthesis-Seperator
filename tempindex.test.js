it('testValidInput-1', () => {
    let result = testValidInput(null);
    assert.deepEqual(result, null);
});

it('testValidInput-2', () => {
    let result = testValidInput(['a']);
    assert.deepEqual(result, undefined);
});

it('makeList-1', () => {
    let button = document.getElementById('generateOOOId');
    let input = document.getElementById('htmlInput1Id')
    input.value = '((a))';
    button.addEventListener('click', makeList);
    button.dispatchEvent(new Event('click'));
    const list = document.querySelector('#list');
    let liElements = list.querySelectorAll('li')
    assert.deepEqual(liElements.length, 2)
})

it('makeList-2', () => {
    let button = document.getElementById('generateOOOId');
    let input = document.getElementById('htmlInput1Id')
    input.value = 'a';
    button.addEventListener('click', makeList);
    button.dispatchEvent(new Event('click'));
    const list = document.querySelector('#list');
    let liElements = list.querySelectorAll('li')
    assert.deepEqual(liElements.length, 1)
})

it('makeList-3', () => {
    let button = document.getElementById('generateOOOId');
    let input = document.getElementById('htmlInput1Id')
    input.value = '((@((';
    button.addEventListener('click', makeList);
    button.dispatchEvent(new Event('click'));
    const list = document.querySelector('#list');
    let liElements = list.querySelectorAll('li');
    assert.deepEqual(liElements.length, 0);
})

it('makeList-4', () => {
    let button = document.getElementById('generateOOOId');
    let input = document.getElementById('htmlInput1Id')
    input.value = 'a@(b@c)@(d@e)((@))';
    button.addEventListener('click', makeList);
    button.dispatchEvent(new Event('click'));
    const list = document.querySelector('#list');
    let liElements = list.querySelectorAll('li');
    assert.deepEqual(liElements.length, 5);
})

it('makeList-5', () => {
    let button = document.getElementById('generateOOOId');
    let input = document.getElementById('htmlInput1Id');
    input.value = '(a@((((b@c)@(d@e))@f)@g))';
    button.addEventListener('click', makeList);
    button.dispatchEvent(new Event('click'));
    const list = document.querySelector('#list');
    let liElements = list.querySelectorAll('li');
    assert.deepEqual(liElements.length, 6);
})