var counter = 0
//0～100の値をランダムで取得
const answer = Math.floor(Math.random() * 101)
console.log('0-100で数字を当てて')

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
        checkAnswer(Number(line))
      })
  })

function checkAnswer(inputNum) {
  counter++
  if (inputNum === answer) {
    console.log('正解！・・・' + counter + '回目で当てました')
  } else if (inputNum < answer) {
    console.log('もっと上')
  } else {
    console.log('もっと下')
  }
}
