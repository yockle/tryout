var counter = 0

//0～9ランダムな４桁を設定
const answer = createAnswer()
console.log('4桁の数字は？')

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
        checkAnswer(line)
      })
  })

function createAnswer() {
  let records = []
  for (let i = 0; i < 4; ) {
    //0～9ランダムな４桁を取得
    const num = Math.floor(Math.random() * 10)
    //同じ数字を重複させないため、未使用の数字の場合のみ追加する
    if (records.indexOf(num) < 0) {
      records.push(num)
      i++
    }
  }
  return records
}

function checkAnswer(line) {
  //回答回数をインクリメント
  counter++
  //回答を配列に格納
  let inputRecords = line.split('')

  let countHit = 0
  let countBlow = 0
  //HitとBlowを判定
  inputRecords.forEach(function(inputRecord, i) {
    answer.forEach(function(numAnswer, j) {
      if (Number(inputRecord) === numAnswer) {
        if (i === j) {
          countHit++
        } else {
          countBlow++
        }
      }
    })
  })

  //結果出力
  if (countHit === 4) {
    console.log(counter + '回で正解！')
  } else {
    console.log('外れ： ' + countHit + 'Hits, ' + countBlow + 'Blow')
    console.log('4桁の数字は？')
  }
}
