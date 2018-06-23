process.stdin.resume()
process.stdin.setEncoding('utf8')

var MSG1 = '「じゃんけん・・・」'
var MSG2 = '>0.グー 1.チョキ 2.パー'
var MSG3 = '「ぽい！」'
var MSG4 = '「アイコでしょ！」'
var MSG5 = '「あなたの勝ち！」'
var MSG6 = '「あなたの負け！！」'

outMSG()

function outMSG() {
  console.log(MSG1)
  console.log(MSG2)
}

// 標準入力がくると発生するイベント
process.stdin.on('data', function(chunk) {
  chunk
    .trim()
    .split('\n')
    .forEach(function(line) {
      // 1行ずつ処理
      console.log(MSG3)
      outLines(line)
    })
})

function outLines(line) {
  var rnd

  //0～2の値をランダムで取得
  rnd = Math.floor(Math.random() * 3)

  console.log('コンピュータ：' + getHand(rnd))
  console.log('あなた　：' + getHand(Number(line)))

  if (line == rnd) {
    console.log(MSG4)
    outMSG()
  } else if ((line == 0 && rnd == 1) || (line == 1 && rnd == 2) || (line == 2 && rnd == 0)) {
    console.log(MSG5)
  } else {
    console.log(MSG6)
  }
}

function getHand(num) {
  var hand
  switch (num) {
    case 0:
      hand = 'グー'
      break
    case 1:
      hand = 'チョキ'
      break
    case 2:
      hand = 'パー'
      break
    default:
      hand = '???'
  }
  return hand
}
