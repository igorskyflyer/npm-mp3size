const Benchmark = require('benchmark')
const Beautifier = require('beautify-benchmark')
const mp3 = require('../lib/mp3size')

const suite = new Benchmark.Suite()

suite.add('getFileSize("")', {
  fn: () => {
    mp3.getFileSize('')
  },
})

suite.add('getFileSize("00:01", 128)', {
  fn: () => {
    mp3.getFileSize('00:01', 128)
  },
})

suite.add('mp3.getFileSize("01:12:14")', {
  fn: () => {
    mp3.getFileSize('01:12:14')
  },
})

suite.add('mp3.getFileSize("01:12:14", 320)', {
  fn: () => {
    mp3.getFileSize('01:12:14', 320)
  },
})

suite
  .add('mp3.getFileSize("03:6", 192)', {
    fn: () => {
      mp3.getFileSize('03:6', 192)
    },
  })
  .on('cycle', (event) => {
    Beautifier.add(event.target)
  })
  .on('complete', () => {
    Beautifier.log()
  })
  .on('error', (event) => {
    console.log(event.target.error.message)
  })
  .run({ async: false })
