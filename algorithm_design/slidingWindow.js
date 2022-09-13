maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3)

function maxSum(arr, size) {
  let max_value = -Infinity
  if (size > arr.length) {
    return null
  }
  // should be arr.length - 1 - (n-1);
  for (let i = 0; i <= arr.length - size; i++) {
    let window = []
    let attempt = 0
    for (let j = i; j < i + size; j++) {
      window.push(arr[j])
      console.log(i, j)
      attempt += arr[j]
    }

    if (attempt > max_value) {
      max_value = attempt
    }
    console.log(window)
  }
  console.log(max_value)
  return max_value
}

// better solution because next array is only different with 1 digit compare with current array
// e.g current array is [2,7,3] and next array is [7,3,0]
function maxSum2(arr, size) {
  if (size > arr.length) {
    return null
  }

  let maxValue = 0
  for (let i = 0; i < size; i++) {
    maxValue += arr[i]
  }
  let tempValue = maxValue
  for (let j = size; j < arr.length; j++) {
    tempValue = tempValue + arr[j] - arr[j - size]
    if (tempValue > maxValue) {
      maxValue = tempValue
    }
  }
  console.log('maxSum2', maxValue)
  return maxValue
}

console.log(maxSum2([2, 7, 3, 7, 25, 0, 6, 1, -5, -12, -11], 3))
