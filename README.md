<div align="center">
  <img src="https://raw.githubusercontent.com/igorskyflyer/npm-mp3size/main/media/mp3size.png" alt="Icon of Mp3 Size" width="256" height="256">
  <h1>Mp3 Size</h1>
</div>

<br>

<h4 align="center">
  🧮 Calculates an estimated file size of Mp3 files. 🎶
</h4>

<br>
<br>

## 📃 Table of Contents

- [Features](#-features)
- [Usage](#-usage)
- [API](#-api)
- [Changelog](#-changelog)
- [Support](#-support)
- [License](#-license)
- [Related](#-related)
- [Author](#-author)

<br>
<br>

## 🤖 Features

- 🎧 Estimate MP3 file size from duration and bitrate
- ⏱️ Calculate audio duration from file size and bitrate
- 📊 Derive bitrate from file size and duration
- 🧠 Accepts `HH:MM:ss` or `MM:ss` formats for input
- 🔁 Converts between bits and KiB seamlessly
- 🧮 No dependencies, pure math and logic
- 🚫 Gracefully handles invalid or missing input
- ⚡ Instant results, ideal for CLI tools or dashboards
- 🛠️ Drop‑in ready for audio editors, upload validators, or file previews

<br>
<br>

## 🕵🏼 Usage

Install it by executing any of the following, depending on your preferred package manager:

```bash
pnpm add @igorskyflyer/mp3size
```

```bash
yarn add @igorskyflyer/mp3size
```

```bash
npm i @igorskyflyer/mp3size
```

<br>
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
<br>

## 📝 Changelog

📑 The changelog is available here, [CHANGELOG.md](https://github.com/igorskyflyer/npm-mp3size/blob/main/CHANGELOG.md).

<br>
<br>

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/npm-mp3size/blob/main/LICENSE).

<br>
<br>

## 💖 Support

<div align="center">
  I work hard for every project, including this one and your support means a lot to me!
  <br>
  Consider buying me a coffee. ☕
  <br>
  <br>
  <a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="180" height="46"></a>
  <br>
  <br>
  <em>Thank you for supporting my efforts!</em> 🙏😊
</div>

<br>
<br>

## 🧬 Related

[@igorskyflyer/valid-path](https://www.npmjs.com/package/@igorskyflyer/valid-path)

> _🧰 Provides ways of testing whether a given value can be a valid file/directory name. 🏜_

[@igorskyflyer/adblock-filter-counter](https://www.npmjs.com/package/@igorskyflyer/adblock-filter-counter)

> _🐲 A dead simple npm module that counts Adblock filter rules.🦘_

[@igorskyflyer/my-file-path](https://www.npmjs.com/package/@igorskyflyer/my-file-path)

> _🌟 An npm module that strongly types file paths! 🥊_

[@igorskyflyer/astro-post-excerpt](https://www.npmjs.com/package/@igorskyflyer/astro-post-excerpt)

> _⭐ An Astro component that renders post excerpts for your Astro blog - directly from your Markdown files. Astro v2 collections are supported as well! 💎_

[@igorskyflyer/clone](https://www.npmjs.com/package/@igorskyflyer/clone)

> _🧬 A lightweight JavaScript utility allowing deep copy-by-value of nested objects, arrays and arrays of objects. 🪁_

<br>
<br>
<br>

## 👨🏻‍💻 Author
Created by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).
