// Author: Igor Dimitrijević (@igorskyflyer)

/**
 * *mp3size*
 *
 * Calculates an estimated file size of MP3 files.
 *
 * Author: Igor Dimitrijević <igor.dvlpr@gmail.com>, 2024.
 * License: MIT, see LICENSE.txt.
 *
 * Note: does NOT validate any input, that's up to you. :)
 */

/**
 * Gets the size of 1 second of MP3 file for the provided bitrate.
 * @private
 * @param rate the bitrate, defaults to 160Kbps
 * @returns the size of 1 second of MP3 file in bits
 */
function bitrateInBits(rate: number = 160): number {
	if (rate >= 8) {
		return rate / 8
	}

	return 160 / 8
}

/**
 * Returns the size in bits.
 * @private
 * @param size the input value
 * @returns the size in bits
 */
function sizeInBits(size: number): number {
	return size * 8
}

/**
 * Parses and returns the duration of the MP3 file.
 * @private
 * @param time expects HH:MM:ss or MM:ss formatted string
 * @returns the number of seconds or -1 if the provided input is not valid
 */
function getDuration(time: string): number {
	try {
		if (typeof time === 'string') {
			const params: string[] = time.split(':')
			const count: number = params.length

			// assuming MM:ss format
			if (count === 2) {
				const minutes: string = params[0]
				const seconds: string = params[1]

				// @ts-ignore
				return minutes * 60 + seconds * 1
			}

			// assuming HH:MM:ss format
			if (count === 3) {
				const hours: string = params[0]
				const minutes: string = params[1]
				const seconds: string = params[2]

				// @ts-ignore
				return hours * 3600 + minutes * 60 + seconds * 1
			}
		}

		return -1
	} catch {
		return -1
	}
}

/**
 * Pads the number, internal use only.
 * @private
 * @param value the number to pad
 * @returns a string that contains the the padded value
 */
function padNumber(value: number): string {
	if (value < 10) {
		return `0${value}`
	}

	return `${value}`
}

/**
 * Gets the estimated size of the MP3 file based on the audio time and bitrate.
 * @public
 * @param time the duration of the MP3 file
 * @param rate the bitrate of the file, defaults to 160
 * @returns the estimated MP3 file size (in KiB) or -1 in case of an error
 */
export function getFileSize(time: string, rate: number = 160): number {
	const audioDuration: number = getDuration(time)

	if (audioDuration > -1) {
		return audioDuration * bitrateInBits(rate)
	}

	return -1
}

/**
 * Gets the estimated audio duration for the provided file size and bitrate.
 * @public
 * @param size file size (in KiB)
 * @param rate bitrate (in Kbps)
 * @returns the estimated audio duration formatted as HH:MM:ss or '-1' in case of an error
 */
export function getAudioDuration(size: number, rate: number): string {
	if (!size || !rate || size === 0 || rate > size) {
		return '-1'
	}

	try {
		const audioDuration: number = Math.round(sizeInBits(size) / rate)
		const hours: string = padNumber(Math.floor(audioDuration / 3600))
		const minutes: string = padNumber(
			Math.floor((audioDuration - +hours * 3600) / 60)
		)
		const seconds: string = padNumber(Math.floor(audioDuration % 60))

		return `${hours}:${minutes}:${seconds}`
	} catch {
		return '-1'
	}
}

/**
 * Gets the estimated bitrate for the provided audio duration and file size.
 * @public
 * @param time the duration of the audio
 * @param size the size of the audio file (in KiB)
 * @returns the estimated bitrate or -1 in case of an error
 */
export function getAudioBitrate(time: string, size: number): number {
	const audioDuration: number = getDuration(time)

	if (audioDuration > -1) {
		try {
			return Math.round(sizeInBits(size) / audioDuration)
		} catch {
			return -1
		}
	} else {
		return -1
	}
}
