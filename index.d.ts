declare module "mp3size" {
    /**
     * Gets the estimated size of the Mp3 file based on the audio time and bitrate.
     * @public
     * @param {string} time the length of the Mp3 file
     * @param {number} rate the bitrate of the file, defaults to 160
     * @returns {number} the estimated Mp3 file size (in KB) or -1 in case of an error
     */
    export function getFileSize(time: string, rate?: number): number;
}
