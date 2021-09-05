function indexEqualsValue(recivedArr) {
  let matched = [];
  for (let index = 0; index < recivedArr.length; index++) {
    const element = recivedArr[index];
    if (element < 0) {
      continue;
    } else if (index === element) {
      matched.push(index);
    }
  }

  if (matched.length > 0) {
    return Math.min(...matched);
  } else {
    return -1;
  }
}

