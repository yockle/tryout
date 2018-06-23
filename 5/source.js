var array
var res_sum = 0
var res_ave = 0
var res_max = Number.MIN_VALUE
var res_min = Number.MAX_VALUE
var num

function init() {
  array = [20, 31, 42, 13, 5, 38]
}

//配列初期化
init()
console.log('初期配列：' + array)

for (var i = 0; i < array.length; i++) {
  //合計に加算
  res_sum += array[i]
  //最大値より大きければ最大値とする
  if (res_max < array[i]) {
    res_max = array[i]
  }
  //最小値より小さければ最小値とする
  if (res_min > array[i]) {
    res_min = array[i]
  }
}
//平均値を算出
res_ave = res_sum / array.length

console.log('合計値：' + res_sum)
console.log('平均値：' + res_ave)
console.log('最大値：' + res_max)
console.log('最小値：' + res_min)

//バブルソート（小さい順）
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
init()
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

//クイックソート（小さい順）
init()
q_sort(array,0,array.length-1)
function q_sort(numbers, left, right) {
  var pivot
  var l_hold
  var r_hold

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
  if (left < pivot) q_sort(numbers, left, pivot - 1)
  if (right > pivot) q_sort(numbers, pivot + 1, right)
}
console.log('クイックソート（小さい順）：' + array)

//クイックソート（大きい順）
init()
q_sort2(array,0,array.length-1)
function q_sort2(numbers, left, right) {
  var pivot
  var l_hold
  var r_hold

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
  if (left < pivot) q_sort2(numbers, left, pivot - 1)
  if (right > pivot) q_sort2(numbers, pivot + 1, right)
}
console.log('クイックソート（大きい順）：' + array)
