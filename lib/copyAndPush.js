const copyAndPush = (arr, item) => {
  const newArr = arr.slice();
  newArr.push(item);
  return newArr;
};

module.exports = { copyAndPush };
