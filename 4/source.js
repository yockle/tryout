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

var records

function outLines(line) {
  records = []
  setRecords(Number(line))
  let results = records.reduce(function(prev, record) {
    return prev + record
  }, 0)
  console.log('1から' + line + 'までの合計　：' + results)
}

//reduceで合計値を算出するため、
//入力値から１までを格納した配列をreturnする
function setRecords(num) {
  records.push(num)
  if (num > 1) {
    setRecords(num - 1)
  }
}
