class SyncroFase {
  compress(recivedArray) {
    let result = [];
    result = recivedArray.filter((x) => !!x);
    return result;
  }

  group(recivedArray, groupBy) {
    let result = [];

    result = recivedArray.map((x) => {
      return Math.floor.call(null, x);
    });

    const joinDuplicates = (recievedArr) => {
      let objectWithGroups = {};
      for (const current of recievedArr) {
        if (
          Object.keys(objectWithGroups).includes(current.toString()) === true
        ) {
          objectWithGroups[current] += 1;
          // console.log('trigered');
        } else if (Object.keys(objectWithGroups).includes(current) === false) {
          Object.defineProperty(objectWithGroups, current, {
            value: 1,
            enumerable: true,
            writable: true,
            configurable: true,
          });
        }
      }
      return objectWithGroups;
    };
    // console.log(result)
    result = joinDuplicates(result);
    // console.log(result)

    const sortByKey = (recivedObj) => {
      return new Map([...Object.entries(recivedObj)].sort());
    };

    result = sortByKey(result);

    return Object.fromEntries(result);
  }
}

let executor = new SyncroFase();
// console.log(
//   executor.group([
//     2.2, 9.1, 3, 2, 2, 4, 1.1, 2.1, 3.3, 1.1, 1, 1, 2.1, 5.1, 5.2,
//   ]),
// );

module.exports = SyncroFase;
