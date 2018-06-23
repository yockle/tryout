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

function outLines(line) {
  var outStr
  var word

  var sLine = line.split(' ')
  var array = []
  var arr1 = []
  var idx

  sLine.forEach(function(word) {
    idx = -1
    array.forEach(function(arr1, i) {
      if (arr1[0] == word) {
        idx = i
      }
    })
    if (idx < 0) {
      //進出の単語の場合、追加する
      array.push([word, 1])
    } else {
      //既出の単語の場合、カウンターを＋１
      array[idx][1] += 1
    }
  })

  outStr = '{'
  array.forEach(function(arr1) {
    outStr += arr1[0] + ':' + arr1[1] + ','
  })
  console.log(outStr.slice(0, -1) + '}')
}
