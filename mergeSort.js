function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }

  let midPoint = array.length / 2;
  let left = array.slice(0, midPoint);
  let right = array.slice(midPoint);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let array = [];
  while (left.length !== 0 && right.length !== 0) {
    if (left[0] <= right[0]) {
      array.push(left[0]);
      left.shift();
    } else {
      array.push(right[0]);
      right.shift();
    }
  }
  return array.concat(left).concat(right)
}

mergeSort([1, 0, 4, -10, 34, 12, -7, 9])

// => [ -10, -7, 0, 1, 4, 9, 12, 34 ]
