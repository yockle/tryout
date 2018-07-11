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
  const sLine = line.split(' ')
  const wordCounts = {}

  sLine.forEach(function(word) {
    if (wordCounts[word]) {
      wordCounts[word]++
    } else {
      wordCounts[word] = 1
    }
  })

  console.log(wordCounts)
}
