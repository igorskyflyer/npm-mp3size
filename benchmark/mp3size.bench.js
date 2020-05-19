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

suite.add('mp3.getFileSize("03:06", 192)', {
  fn: () => {
    mp3.getFileSize('03:06', 192)
  },
})

suite.add('mp3.getAudioBitrate("")', {
  fn: () => {
    mp3.getAudioBitrate('')
  },
})

suite.add('mp3.getAudioBitrate("03:42", 5346)', {
  fn: () => {
    mp3.getAudioBitrate('03:42', 5346)
  },
})

suite.add('mp3.getAudioBitrate("01:12:14", 86680', {
  fn: () => {
    mp3.getAudioBitrate('01:12:14', 86680)
  },
})

suite
  .add('mp3.getAudioBitrate("02:47", 6715)', {
    fn: () => {
      mp3.getAudioBitrate('02:47', 6715)
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
