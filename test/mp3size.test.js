const mp3 = require('../lib/mp3size')
const chai = require('chai').assert

/** Since MP3 files are loosly compressed files and can have a variable bitrate, a function of allowed value deviation is used.
 * @param {number} value
 * @param {number} offset
 * @param {number} expect
 * @returns {boolean}
 */

function deviation(value, offset, expect) {
  return value >= expect - offset && value <= expect + offset
}

// the tests up ahead consist of real data of audio files stored on my computer

describe('getFileSize()', () => {
  it('Should return -1', () => {
    chai.equal(mp3.getFileSize(''), -1)
  })

  it('Should return 16', () => {
    chai.equal(mp3.getFileSize('00:01', 128), 16)
  })

  it('Should return 86680', () => {
    chai.equal(mp3.getFileSize('01:12:14'), 86680)
  })

  it('Should return 173360', () => {
    chai.equal(mp3.getFileSize('01:12:14', 320), 173360)
  })

  it('Should return 4464', () => {
    chai.equal(mp3.getFileSize('03:06', 192), 4464)
  })
})

describe('getAudioBitrate()', () => {
  it('Should return -1', () => {
    chai.equal(mp3.getAudioBitrate(''), -1)
  })

  it('Should return ~192', () => {
    const bitrate = mp3.getAudioBitrate('03:42', 5346)

    chai.equal(deviation(bitrate, 3, 192), true)
  })

  it('Should return ~160', () => {
    const bitrate = mp3.getAudioBitrate('01:12:14', 86680)

    chai.equal(deviation(bitrate, 3, 160), true)
  })

  it('Should return ~320', () => {
    const bitrate = mp3.getAudioBitrate('02:47', 6715)

    chai.equal(deviation(bitrate, 3, 320), true)
  })
})
