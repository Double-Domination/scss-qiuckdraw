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
  var arrTestFloatNumbers = [
    2.2, 9.1, 3, 2, 2, 4, 1.1, 2.1, 3.3, 1.1, 1, 1, 2.1, 5.1, 5.2,
  ];

  // aferEach(() => )
  test('.group() must be defined', () => {
    expect(metil.group).toBeDefined();
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
});
