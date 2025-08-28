// Author: Igor Dimitrijević (@igorskyflyer)

import { assert, describe, suite, test } from 'vitest'
import { getAudioBitrate, getAudioDuration, getFileSize } from '../src/index.ts'

/** Since MP3 files are lossy compressed files and can have a variable bitrate, a function of allowed value deviation is used.
 */
function deviation(value: number, offset: number, expect: number): boolean {
  return value >= expect - offset && value <= expect + offset
}

describe('🧪 mp3size tests 🧪', () => {
  suite('getFileSize()', () => {
    test('#1 should return -1', () => {
      assert.equal(getFileSize(''), -1)
    }) // #1

    test('#2 should return 16', () => {
      assert.equal(getFileSize('00:01', 128), 16)
    }) // #2

    test('#3 should return 86680', () => {
      assert.equal(getFileSize('01:12:14'), 86680)
    }) // #3

    test('#4 should return 173360', () => {
      assert.equal(getFileSize('01:12:14', 320), 173360)
    }) // #4

    test('#5 should return 4464', () => {
      assert.equal(getFileSize('03:06', 192), 4464)
    }) // #5
  })

  suite('getAudioBitrate()', () => {
    test('#6 should return -1', () => {
      // @ts-expect-error
      assert.equal(getAudioBitrate(''), -1)
    }) // #6

    test('#7 should return ~192', () => {
      const bitrate = getAudioBitrate('03:42', 5346)

      assert.isTrue(deviation(bitrate, 3, 192))
    }) // #7

    test('#8 should return ~160', () => {
      const bitrate = getAudioBitrate('01:12:14', 86680)

      assert.isTrue(deviation(bitrate, 3, 160))
    }) // #8

    test('#9 should return ~320', () => {
      const bitrate = getAudioBitrate('02:47', 6715)

      assert.isTrue(deviation(bitrate, 3, 320))
    }) // #9
  })

  suite('getAudioDuration()', () => {
    test('#10 should return 00:03:15', () => {
      assert.equal(getAudioDuration(4672, 192), '00:03:15')
    }) // #10

    test('#11 should return -1', () => {
      assert.equal(getAudioDuration(500, 640), '-1')
    }) // #11
  })
})
