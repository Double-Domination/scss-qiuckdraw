const sortByKey = (recivedObj) => {
  let unsortedMap = new Map(Object.entries(recivedObj));
  let sortedMap = new Map([...unsortedMap.entries()].sort());
  return sortedMap;
};

const testobj = {
  gne: '2',
  two: '3',
  abc: '4',
  bca: '6',
  ccd: '2',
  def: '6',
  eud: '5',
  fw: '9',
};

// console.table(sorted)

const sorted = new Map([...Object.entries(testobj)].sort());

console.table(sorted);
