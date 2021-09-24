const Sync = require('../sync');

describe('Testing class first method - .compress()', () => {
  metil = new Sync();

  beforeEach(() => {
    arrayTestData = ['str', '', 1, false, NaN, false, null];
  });

  afterAll(() => {
    metil = new Sync();
  });

  test('working array must be editable', () => {
    arrayTestData.push('first');
    arrayTestData.push('second');
    arrayTestData.push(...['third', 'fourth']);

    expect(arrayTestData).toContain('first');
    expect(arrayTestData).toContain('second');
    expect(arrayTestData).toContain('third');
    expect(arrayTestData).toContain('fourth');
  });

  test('Sync.compress() testing-should be defined', () => {
    expect(metil).toBeDefined();
    expect(metil.compress).toBeDefined();
  });

  test('should delete falsy fromm array', () => {
    expect(metil.compress(arrayTestData)).not.toContain(false);
  });

  test('should NOT contain falsy values', () => {
    expect(metil.compress([1, 3, false, null, 4])).not.toContain(false);
    expect(metil.compress([1, 3, false, null, 4])).not.toContain(0);
    expect(metil.compress([1, 3, false, null, 4])).not.toContain('');
  });
});

describe('Testing .group() method of class', () => {
  beforeEach(() => {
    arrTestFloatNumbers = [
      2.2, 9.1, 3, 2, 2, 4, 1.1, 2.1, 3.3, 1.1, 1, 1, 2.1, 5.1, 5.2,
    ];

    arrMutatorCheck = [false, 42, 0, '', true, null, 'hello'];
  });

  // aferEach(() => )
  test('.group() must be defined', () => {
    expect(metil.group).toBeDefined();
    expect(metil.group).not.toBeUndefined();
  });

  test('should group items by recived predicate <<groupBy>>', () => {
    const arrTestFloatNumbers = [
      2.2, 9.1, 3, 2, 2, 4, 1.1, 2.1, 3.3, 1.1, 1, 1, 2.1, 5.1, 5.2,
    ];
    const processedObject = { 1: 4, 2: 5, 3: 2, 4: 1, 5: 2, 9: 1 };
    expect(metil.group(arrTestFloatNumbers)).toEqual(processedObject);
  });

  test('shound NOT return array', () => {
    expect(metil.group(arrTestFloatNumbers)).not.toBeInstanceOf(Array);
  });

  test('working array should be editable', () => {
    arrMutatorCheck.push(...['f1', 'f2']);
    expect(arrMutatorCheck).toContain('f1');
    expect(arrMutatorCheck).toContain('f2');
  });

  test('beforeEach should reset all test values to their default state', () => {
    expect(arrMutatorCheck).not.toContain('f1');
    expect(arrMutatorCheck).not.toContain('f2');
  });
});

describe('group2() method enchanced testing', () => {
  beforeEach(() => {
    let metil = new Sync();
  });

  test('should group2 values by Math.floor()', () => {
    const arrCheckGroups = [2.2, 2.4, 2.4, 4.2, 3.1];

    const resultingArr = {
      2: [2.2, 2.4],
      4: [4.2],
      3: [3.1],
    };

    expect(metil.group2(arrCheckGroups, Math.floor)).toEqual(resultingArr);
  });

  test('should be grouped by length', () => {
    const arrCheckGroupingByLength = ['one', 'two', 'three'];

    const resGroupByLength = {
      3: ['one', 'two'],
      5: ['three'],
    };
    expect(metil.group2(arrCheckGroupingByLength, ' length')).toEqual(
      resGroupByLength,
    );
  });

  test('shoud return object', () => {
    expect(metil.group2([], Math.trunc)).toBeInstanceOf(Object);
  });
});
