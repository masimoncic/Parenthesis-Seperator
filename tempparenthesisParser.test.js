it('findParenthesisIndices-1', () => {
    let result = findParenthesisIndices('((a))');
    assert.deepEqual(result, [[0,1], [3,4]]);
  })
  
  it('findParenthesisIndices-2', () => {
    let result = findParenthesisIndices('a');
    assert.deepEqual(result, [[], []]);
  })
  
  it('findParenthesisIndices-3', () => {
    let result = findParenthesisIndices('((@((');
    assert.deepEqual(result, [[0,1,3,4], []]);
  })
  
  
  it('findParenthesisIndices-4', () => {
    let result = findParenthesisIndices('a@(b@c)@(d@e)((@))');
    assert.deepEqual(result, [[2,8,13,14], [6,12,16,17]]);
  })
  
  it('findParenthesisIndices-5', () => {
    let result = findParenthesisIndices('(a@((((b@c)@(d@e))@f)@g))');
    assert.deepEqual(result, [[0,3,4,5,6,12], [10,16,17,20,23,24]]);
  })
  
  
  it('getPairs-1', () => {
    let result = getPairs([[0,1], [3,4]]);
    assert.deepEqual(result, [[1,3], [0,4]]);
  })
  
  it('getPairs-2', () => {
    let result = getPairs([[], []]);
    assert.deepEqual(result, []);
  })
  
  it('getPairs-3', () => {
    let result = getPairs([[0,1,3,4], []]);
    assert.deepEqual(result, null);
  })
  
  it('getPairs-4', () => {
    let result = getPairs( [ [2,8,13,14], [6,12,16,17] ]);
    assert.deepEqual(result, [[2,6], [8,12], [14,16], [13,17]]);
  })
  
  it('getPairs-5', () => {
    let result = getPairs( [[0,3,4,5,6,12], [10,16,17,20,23,24]]);
    assert.deepEqual(result, [[6,10], [12,16], [5,17], [4,20], [3,23], [0,24]]);
  })
  
  it('getSubStrs-1', () => {
    let result = getSubStrs(
      '((a))', 
      [[1,3], [0,4]]
    );
    assert.deepEqual(result, ['(a)', '((a))']);
  })
  
  it('getSubStrs-2', () => {
    let result = getSubStrs(
      'a', 
      []
    );
    assert.deepEqual(result, ['a']);
  })
  
  it('getSubStrs-3', () => {
    let result = getSubStrs(
      '((@((', 
      null
    );
    assert.deepEqual(result, null);
  })
  
  it('getSubStrs-4', () => {
    let result = getSubStrs(
      'a@(b@c)@(d@e)((@))', 
      [[2,6], [8,12], [14,16], [13,17]]
    );
    assert.deepEqual(result, 
      ['(b@c)', '(d@e)', '(@)', '((@))', 'a@(b@c)@(d@e)((@))']);
  })
  
  it('getSubStrs-5', () => {
    let result = getSubStrs(
      '(a@((((b@c)@(d@e))@f)@g))', 
      [[6,10], [12,16], [5,17], [4,20], [3,23], [0,24]]
    );
    assert.deepEqual(result, 
      ['(b@c)', '(d@e)', '((b@c)@(d@e))', '(((b@c)@(d@e))@f)', 
      '((((b@c)@(d@e))@f)@g)', '(a@((((b@c)@(d@e))@f)@g))']);
  })
  
  it('seperateParenthesis-1', () => {
    let result = seperateParenthesis('((a))');
    assert.deepEqual(result, 
      ['(a)', '((a))']);
  })
  
  it('seperateParenthesis-2', () => {
    let result = seperateParenthesis('a');
    assert.deepEqual(result, 
      ['a']);
  })
  
  it('seperateParenthesis-3', () => {
    let result = seperateParenthesis('((@((');
    assert.deepEqual(result, 
      null);
  })
  
  it('seperateParenthesis-4', () => {
    let result = seperateParenthesis('a@(b@c)@(d@e)((@))');
    assert.deepEqual(result, 
      ['(b@c)', '(d@e)', '(@)', '((@))', 'a@(b@c)@(d@e)((@))']);
  })
  
  it('seperateParenthesis-5', () => {
    let result = seperateParenthesis('(a@((((b@c)@(d@e))@f)@g))')
    assert.deepEqual(result, 
      ['(b@c)', '(d@e)', '((b@c)@(d@e))', '(((b@c)@(d@e))@f)', 
      '((((b@c)@(d@e))@f)@g)', '(a@((((b@c)@(d@e))@f)@g))']);
  })