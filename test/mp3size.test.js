const mp3 = require('../lib/mp3size')
const chai = require('chai').assert

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
    chai.equal(mp3.getFileSize('03:6', 192), 4464)
  })
})
