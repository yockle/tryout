const MSG_READY = '「じゃんけん・・・」'
const MSG_CHOOSE = '>0.グー 1.チョキ 2.パー'
const MSG_GO = '「ぽい！」'
const MSG_DROW = '「アイコでしょ！」'
const MSG_WIN = '「あなたの勝ち！」'
const MSG_LOSE = '「あなたの負け！！」'

outMSG_FIRST()

function outMSG_FIRST() {
  console.log(MSG_READY)
  console.log(MSG_CHOOSE)
}

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
        console.log(MSG_GO)
        outLines(line)
      })
  })

function outLines(line) {
  const HANDS = ['グー', 'チョキ', 'パー']

  //0～2の値をランダムで取得
  const COM_HAND = Math.floor(Math.random() * 3)
  console.log('コンピュータ：' + HANDS[COM_HAND])

  const YOUR_HAND = Number(line)
  console.log('あなた　：' + HANDS[YOUR_HAND])

  if (YOUR_HAND === COM_HAND) {
    console.log(MSG_DROW)
    outMSG_FIRST()
  } else if (
    (YOUR_HAND === 0 && COM_HAND === 1) ||
    (YOUR_HAND === 1 && COM_HAND === 2) ||
    (YOUR_HAND === 2 && COM_HAND === 0)
  ) {
    console.log(MSG_WIN)
  } else {
    console.log(MSG_LOSE)
  }
}
