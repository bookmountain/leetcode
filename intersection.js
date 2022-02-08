function intersection(arr1, arr2) {
  const array = arr1.concat(arr2)
  const result = array.filter((item, index) => array.indexOf(item) !== index)
  console.log(result)
  return result
}

// intersection([1, 2, 3, 4, 5, 7], [3, 4, 6, 7])

// or 2 for loops

// or use counter

function counterIntersection(arr1, arr2) {
  let result = []
  let arr3 = arr1.concat(arr2)
  let counter = {}

  for (let i = 0; i < arr3.length; i++) {
    if (!counter[arr3[i]]) {
      counter[arr3[i]] = 1
    } else {
      counter[arr3[i]]++
    }
  }

  // Loop over the counter
  for (let property in counter) {
    if (counter[property] >= 2) {
      result.push(property)
    }
  }
  console.log(result)
  return result
}

counterIntersection([1, 2, 3, 4, 5, 7], [3, 4, 6, 7])
