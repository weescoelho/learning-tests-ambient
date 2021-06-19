const map = (arr = [], callbackFn = (item) => item) => {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(callbackFn(arr[i], i, arr));
  }
  return newArray;
};

export default map;
