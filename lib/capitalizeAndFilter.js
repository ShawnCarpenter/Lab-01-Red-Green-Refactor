const capitalizeAndFilter = (arr) => {
  const newArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].charAt(0) !== 'f') {
      newArr.push(arr[i].toUpperCase());
    }
  }
  return newArr;
};

module.exports = { capitalizeAndFilter };
