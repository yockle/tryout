process.stdin.resume()
process.stdin.setEncoding('utf8')

var answer = ['', '', '', '']
var cnt = 0

//0～9ランダムな４桁を設定
setAnswer()
//console.log(answer)
console.log('4桁の数字は？')


// 標準入力がくると発生するイベント
process.stdin.on('data', function(chunk) {
  chunk
    .trim()
    .split('\n')
    .forEach(function(line) {
      // 1行ずつ処理
      checkAnswer(line)
    })
})

//答えを配列に格納
function setAnswer() {
  var num
  for (var i = 0; i < 4; ) {
    //0～9ランダムな４桁を取得
    num = Math.floor(Math.random() * 10)
    //未使用の数字であれば格納
    if (0 > answer.indexOf(num)) {
      answer[i] = num
      i++
    }
  }
}

function checkAnswer(line) {
  var arrLine = ['', '', '', '']
  var numLine
  var numAnswer
  var cntHit = 0
  var cntBlow = 0

  //回答回数をインクリメント
  cnt++
  //回答を配列に格納
  for (var i = 0; i < arrLine.length; i++) {
    arrLine[i] = Number(line.slice(i, i + 1))
  }
  //HitとBlowを判定
  arrLine.forEach(function(numLine, i) {
    answer.forEach(function(numAnswer, j) {
      if (numLine == numAnswer) {
        if (i == j) {
          cntHit++
        } else {
          cntBlow++
        }
      }
    })
  })
  //結果出力
  if (cntHit == 4) {
    console.log(cnt + '回で正解！')
  } else {
    console.log('外れ： ' + cntHit + 'Hits, ' + cntBlow + 'Blow')
    console.log('4桁の数字は？')
  }
}
