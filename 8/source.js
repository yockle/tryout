var hash = {
  main: {
    first: { 'text': 'foobar' },
    second: { 'text': 'fizzbuzz', child: { 'text': 'foobar' } },
  },
  sub: {
    first: { 'text': 'fizzbuzz', child: { 'text': 'foobar' } },
    second: {
      third: { 'text': 'barfoo', child: { 'text': 'foobar' } },
      forth: { child: { 'text': 'jit_foo_foo' } },
    },
  },
  'text': 'foofava',
}

console.log('変換前')
console.log(hash)

toUry(hash)

console.log('変換後')
console.log(hash)

function toUry(argHash) {
  for (key in argHash) {
    if (key == 'text') {
      argHash[key] = argHash[key].replace(/foo/g,'uryyyy!!')
      //console.log(argHash[key])
    } else {
      toUry(argHash[key])
    }
  }
}

