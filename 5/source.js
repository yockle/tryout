var array
var resultSum = 0
var resultAvg = 0
var resultMax = -Number.MAX_VALUE
var resultMin = Number.MAX_VALUE

//ソート時に配列の中身を入れ替えるので、
//次のソート時に配列を初期化するための関数
function init() {
  return [20, 31, 42, 13, 5, 38]
}

//配列初期化
array = init()
console.log('初期配列：' + array)

array.forEach(function(record) {
  //合計に加算
  resultSum += record
  //最大値より大きければ最大値とする
  if (resultMax < record) {
    resultMax = record
  }
  //最小値より小さければ最小値とする
  if (resultMin > record) {
    resultMin = record
  }
})
//平均値を算出
resultAvg = resultSum / array.length

console.log('合計値：' + resultSum)
console.log('平均値：' + resultAvg)
console.log('最大値：' + resultMax)
console.log('最小値：' + resultMin)

//バブルソート用の変数定義
var num

//バブルソート（小さい順）
array = init()
for (var i = 0; i < array.length; i++) {
  for (var j = array.length - 1; j > i; j--) {
    if (array[j - 1] > array[j]) {
      num = array[j - 1]
      array[j - 1] = array[j]
      array[j] = num
    }
  }
}
console.log('バブルソート（小さい順）：' + array)

//バブルソート（大きい順）
array = init()
for (var i = 0; i < array.length; i++) {
  for (var j = array.length - 1; j > i; j--) {
    if (array[j - 1] < array[j]) {
      num = array[j - 1]
      array[j - 1] = array[j]
      array[j] = num
    }
  }
}
console.log('バブルソート（大きい順）：' + array)

//クイックソート用の変数定義
var pivot
var l_hold
var r_hold

//クイックソート（小さい順）
array = init()
quickSortAsc(array, 0, array.length - 1)
function quickSortAsc(numbers, left, right) {
  l_hold = left
  r_hold = right
  pivot = numbers[left]
  while (left < right) {
    while (numbers[right] >= pivot && left < right) right--
    if (left != right) {
      numbers[left] = numbers[right]
      left++
    }
    while (numbers[left] <= pivot && left < right) left++
    if (left != right) {
      numbers[right] = numbers[left]
      right--
    }
  }
  numbers[left] = pivot
  pivot = left
  left = l_hold
  right = r_hold
  if (left < pivot) quickSortAsc(numbers, left, pivot - 1)
  if (right > pivot) quickSortAsc(numbers, pivot + 1, right)
}
console.log('クイックソート（小さい順）：' + array)

//クイックソート（大きい順）
array = init()
quickSortDesc(array, 0, array.length - 1)
function quickSortDesc(numbers, left, right) {
  l_hold = left
  r_hold = right
  pivot = numbers[left]
  while (left < right) {
    while (numbers[right] <= pivot && left < right) right--
    if (left != right) {
      numbers[left] = numbers[right]
      left++
    }
    while (numbers[left] >= pivot && left < right) left++
    if (left != right) {
      numbers[right] = numbers[left]
      right--
    }
  }
  numbers[left] = pivot
  pivot = left
  left = l_hold
  right = r_hold
  if (left < pivot) quickSortDesc(numbers, left, pivot - 1)
  if (right > pivot) quickSortDesc(numbers, pivot + 1, right)
}
console.log('クイックソート（大きい順）：' + array)
