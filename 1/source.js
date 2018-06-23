process.stdin.resume()
process.stdin.setEncoding('utf8')
// 標準入力がくると発生するイベント
process.stdin.on('data', function(chunk) {
  chunk
    .trim()
    .split('\n')
    .forEach(function(line) {
      // 1行ずつ処理
      outLines(line)
    })
})

function outLines(num) {
  var outStr
  var tmpStr
  outStr = '' // 1から入力された数字-1までループ
  for (var i = 1; i < num; i++) {
    tmpStr = '' // ３で割り切れる場合
    if (i % 3 == 0) {
      tmpStr = 'Fizz'
    }
    // ５で割り切れる場合
    if (i % 5 == 0) {
      tmpStr += 'Buzz'
    }
    // 割り切れなかった場合
    if (tmpStr == '') {
      tmpStr = i
    }
    outStr += tmpStr + ','
  }
  // 末尾の','を除いて出力
  console.log(outStr.slice(0, -1))
}
