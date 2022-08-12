isSubsequence('hello', 'hello Dear')
isSubsequence('book', 'brooklyn')
isSubsequence('abc', 'bac')
isSubsequence('abc', 'abc')

function isSubsequence(str1, str2) {
  if (str1.length == 0) {
    return true
  }

  let pointer1 = 0
  let pointer2 = 0

  while (pointer2 < str2.length) {
    if (str1[pointer1] == str2[pointer2]) {
      pointer1++
    }
    if (pointer1 >= str1.length) {
      console.log(true)
      return true
    }
    // pointer2 should still be counting on no matter if it's matched with pointer1
    pointer2++
  }
  console.log(false)
  return false
}
