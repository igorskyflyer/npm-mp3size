# mp3size

<p align="center" style="text-align: center; margin: auto">
	<img src="https://github.com/igorskyflyer/npm-mp3size/raw/main/public/mp3size.png">
	<br>
🧮 Calculates an estimated file size of Mp3 files. 🎶
</p>

<br>
<br>

<div align="center">
	<blockquote>
		<h4>💖 Support further development</h4>
		<span>I work hard for every project, including this one and your support means a lot to me!
		<br>
		Consider buying me a coffee. ☕
		<br>
		<strong>Thank you for supporting my efforts! 🙏😊</strong></span>
		<br>
		<br>
		<a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="150"></a>
		<br>
		<br>
		<a href="https://github.com/igorskyflyer"><em>@igorskyflyer</em></a>
		<br>
		<br>
	</blockquote>
</div>

<br>

## 🕵🏼 Usage

Install it by executing:

```shell
npm i "@igor.dvlpr/mp3size"
```

<br>

## 🤹🏼 API

`getFileSize(time: string, rate: number = 160): number`

> Gets the estimated size of the MP3 file based on the audio time and bitrate.

- **time**: _string_, the duration of the MP3 file, expects either HH:MM:ss or MM:ss format

- **rate**: _number_, the bitrate of the file, defaults to 160

returns a number, the estimated MP3 file size or -1 in case of an error

<br>

`getAudioDuration(size: number, rate: number): string`

> Gets the estimated audio duration for the provided file size and bitrate.

- **size**: _number_, file size (in KiB)

- **rate**: _number_, the bitrate of the file

returns a string, the estimated audio duration formatted as HH:MM:ss or '-1' in case of an error.

<br>

`getAudioBitrate(time: string, size: number): number`

> Gets the estimated bitrate for the provided audio duration and file size.

- **time**: _string_, the duration of the MP3 file, expects either HH:MM:ss or MM:ss format

- **size**: _number_, the size of the audio file (in KiB)

returns a number, the estimated bitrate of the MP3 file or -1 in case of an error

<br>

---

>
> *If you are looking for a pure JavaScript implementation of this, have a look at [mp3size.js](https://github.com/igorskyflyer/mp3size.js).*
>

---

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/npm-mp3size/blob/main/LICENSE).

---

## 🧬 Related

[@igor.dvlpr/valid-path](https://www.npmjs.com/package/@igor.dvlpr/valid-path)

> _🧰 Provides ways of testing whether a given value can be a valid file/directory name. 🏜_

[@igor.dvlpr/adblock-filter-counter](https://www.npmjs.com/package/@igor.dvlpr/adblock-filter-counter)

> _🐲 A dead simple npm module that counts Adblock filter rules.🦘_

[@igor.dvlpr/my-file-path](https://www.npmjs.com/package/@igor.dvlpr/my-file-path)

> _🌟 An npm module that strongly types file paths! 🥊_

[@igor.dvlpr/astro-post-excerpt](https://www.npmjs.com/package/@igor.dvlpr/astro-post-excerpt)

> _⭐ An Astro component that renders post excerpts for your Astro blog - directly from your Markdown files. Astro v2 collections are supported as well! 💎_

[@igor.dvlpr/node-clone-js](https://www.npmjs.com/package/@igor.dvlpr/node-clone-js)

> _🧬 A lightweight JavaScript utility allowing deep copy-by-value of nested objects, arrays and arrays of objects. 🪁_

<br>
<br>

>
> Provided by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).
>
