// 標準入力がくると発生するイベント
process.stdin
  .resume()
  .setEncoding('utf8')
  .on('data', function(chunk) {
    chunk
      .trim()
      .split('\n')
      .forEach(function(line) {
        // 1行ずつ処理
        outLines(line)
      })
  })

function outLines(num) {
  const MOD3_0 = 'Fizz'
  const MOD5_0 = 'Buzz'
  let outStr = []
  let tmpStr
  for (var i = 1; i < num; i++) {
    tmpStr = ''
    if (i % 3 === 0) {
      tmpStr = MOD3_0
    }
    if (i % 5 === 0) {
      tmpStr += MOD5_0
    }
    // 割り切れた場合はtmpStrに文字が格納されるため、
    // tmpStrが空文字の場合に数字をそのまま出力する
    if (tmpStr === '') {
      tmpStr = i
    }
    outStr.push(tmpStr)
  }
  console.log(outStr.join(','))
}
