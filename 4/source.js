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

function outLines(line) {
  const result = sumToOne(Number(line))
  console.log('1から' + line + 'までの合計　：' + result)
}

//入力値から１までを再起処理で加算する
function sumToOne(num) {
  if (num > 1) {
    num += sumToOne(num - 1)
  }
  return num
}
