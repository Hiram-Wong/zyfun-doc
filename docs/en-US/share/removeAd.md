# Remove M3U8 Ad

## 1. Summarize

This project is designed as a M3U8 playback address processing tool, the core function is to automatically detect and remove advertisement clips embedded in M3U8 playlists, and at the same time, it is compatible to process nested M3U8 links.

## 2. Selection

- **Duties**:
  - **Intelligent Recognition of Advertisements**: Recognize advertisement content by comparing playback clip characteristics
  - **Nesting Handling**: Handles other M3U8 links nested in the M3U8 list.
  - **URL Fixing**: Convert all clip URLs to absolute paths.
- **Technical Highlights**:
  - Asynchronous data fetching
  - Accurate advertisement recognition algorithm
- **Workflow**:
  - 1. **Input**: Receives the M3U8 playback address from the user.
  - 2. **Get M3U8 content**: use `axios` to perform network requests.
  - 3. **Basic Processing**: clean up text, convert URLs to absolute form.
  - 4. **Advertisement identification and culling**:
    - 4.1. Analyze the first and last playback clips and calculate the similarity.
    - 4.2. Remove suspected advertising URLs based on a threshold.
  - 5. **Recursively handle nested M3U8** (if present).
  - 6. **Output**: Returns a list of processed pure M3U8s.
  - 7. **Logging**: Full documentation of key steps and performance metrics.

## 3. Sample code

> The removal of online advertisements, while meeting the needs of some users, takes into account the legal, technical and ethical consequences that may arise. While seeking to improve their online experience, users should choose legal and safe methods and respect the rights of content creators and platforms.

> Main algorithm provided by `@hpindigo`

Refer to [github](https://github.com/Hiram-Wong/zyfun/blob/main/src/main/services/FastifyService/routes/v1/system/utils/m3u8.ts)

## 4. Conclusion

The core of the algorithm is very important, and small logical errors can trigger a chain reaction that leads to the accidental deletion of key data from the normal content of the non-advertising section. Therefore, when faced with ambiguous decisions, one should be more cautious and meticulous, striving to achieve an upgraded experience while preserving the integrity and accuracy of the data.
