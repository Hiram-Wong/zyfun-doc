# Usage

::: tip Info

- Use the instructions as `must-read`, **If you don't read it, please don't waste each other's time**
- This document aims to reduce user questions.

:::

## 1. Info

### 1.1. Player Description

- If there's picture but no sound, there's no sound track
- If there is a black screen with sound - usually the player does not support H265[HEVC]
- Player selection should take into account format compatibility, such as the difference between h264 and h265
- If `playback fails`, we suggest to switch player or call system player
  - Windows: `potplayer` `vlc` `mpv`
  - Mac: `iina` `vlc` `mpv`
  - Linux: `vlc` `mpv`

### 1.2. First use

Please read the User Agreement for the first time; if you start to use the software, you agree to the Agreement; if you do not agree to the Agreement, please stop using the software immediately.

[Click to view disclaimer](disclaimer)

### 1.3. Issue

| Question                                                                          | Solution                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| :-------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| How to Configure Data Source                                                      | The software `does not provide any data source`, all data sources need to be the user's own responsibility to confirm the validity of the data (do not blame the software for everything).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| White screen<br/>No interface but processes<br/>Tip `sonic boom is not ready yet` | 1. Port Occupancy (9978)<br/>2. New and old versions cannot run simultaneously</br>3. Dirty data (the data is not as required by the field)<br/>4. database version upgrade                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| No change in data after data import                                               | 1. Manually click to try to refresh <br/>2. Try to restart the software<br/>3. Make sure the link is correct (whether duplicate paste, missing characters)<br/>4. Make sure the data is okay and try to import again.                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| T3[py] adapter data source has no content to                                      | 1. Lab-Extension Manager-Environment install `uv` <br/>2. initialize dependencies <br/>3. child process killed by other software                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Some videos cannot be played                                                      | 1. De-wide logic conflict, `Turn off the de-wide function`<br/>2. The player cannot be decoded. Try to switch the player or call the system player.<br/>3. Preload conflict (such as dynamic link timeliness), `turn off the preload function`<br/>4. When the video format is `mkv`, the compatibility is poor. Try to `call the system player`<br/>5. Cloud disk compatibility is poor<br/>6. The ability of magnetic analysis resources is poor                                                                                                                                                                                                                            |
| Data import failed                                                                | 1. Make sure that the link is `correct url` <br/>2. Make sure that the duration of the `network normal` request data does not exceed the timeout time <br/>3. The data should be according to the database `field type, field length, field name`                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Prompt for data source formatting episode error                                   | 1. Data source failure, change of source<br/>2. Subthread conflicts, restart software                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Search                                                                            | 1. It is recommended to combine several frequently used sources into a search, `global search` is not recommended <br/>2. Data return is not related to keywords, indicating that the source is returning randomly, `close the source search` or `enable the search filtering` <br/>3. Data is dead looped, a certain source keeps on returning a few same data or keeps on returning data, `close the source search` <br/>4. It is not recommended to click on the source operation `before searching is completed` <br/>5. Clicking before the search is complete is not recommended <br/>5. Do not scroll up or down during the search, it will cause the data to explode. |

## 2. Main

![main-layout](/guide/usage/main-layout.png)

- ①: Side menu - `Film | Live | Parse | Moment | Lab | Setting`
- ②: Top bar
  - Navigator: `Back | Forward | Refresh`
  - Search: Only `Film | Live | Parse`
  - Play show: Only open `Play Program` exists
  - Function: `Sponsor | AIGC | Pin`
  - Systerm Control: `Minimize | Zoom | Close` (Only `Windows | Linux` exists)
- ③: Main content

### 2.2. Film

![main-film](/guide/usage/main-film.png)

- ①: Search - Enter keywords to search for data
  - `Group | Site | All`
  - It is not recommended to search globally or search within the group (when there are more group data sources)
- ②: Data source - Click to switch data source
- ③: Class - Click to switch class
- ④: Sift - Select subdivision field data
- ⑤: Main Content

| Question                                                  | Solution                                                                                    |
| :-------------------------------------------------------- | :------------------------------------------------------------------------------------------ |
| Please go to [Setting->Film Config] to configure the data | Go to the specified path you need to add a data source.                                     |
| Load Complete                                             | The data is loaded.                                                                         |
| Load Error                                                | 1. Incorrect data type.<br/>2. Try to refresh or restart the software.                      |
| Picture not displayed                                     | 1. The data source does not have a vod_pic field<br/> 2. Proxy may be needed for the images |

### 2.3. Live

![main-live](/guide/usage/main-live.png)

- ①: Search - Enter keywords to search for data
- ②: Data source - Click to switch data source
- ③: Class - Click to switch class
- ④: Main Content
  - `IP Mark` `Delay` needs to be turned on in setting [for reference only].
  - Station icon priority `[Programs -> Db Config -> Global -> Default]`
  - Enable `Thumbnail` in setting, then use preview image instead of station `[ffmpeg env required] `

| Question                                                  | Solution                                                 |
| :-------------------------------------------------------- | :------------------------------------------------------- |
| Please go to [Setting->Live Config] to configure the data | Go to the specified path you need to add a data source.  |
| Load Complete                                             | The data is loaded.                                      |
| Load Error                                                | Try to refresh or restart the software.                  |
| Please select a data source                               | A data source must be selected.                          |
| Data source unchecked, data still available               | Then I clicked on the data source but it failed to load. |
| Search without data                                       | A data source must be selected.                          |

### 2.5. Parse

![main-parse](/guide/usage/main-parse.png)

- ①: Search - Enter keywords to search for data.
- ②: Data source - Click to switch data source
- ③: Top Operation Bar
  - History Navigation: `Forward | Backward | Refresh`
  - Platform: Load platform address
  - Address: Current address (manually loaded by typing enter)
  - Play: Parse address data
- ④: Main Content - Display address bar page data

| Question                                        | Solution                        |
| :---------------------------------------------- | :------------------------------ |
| Invalid address bar address                     | Enter a correct address.        |
| Invalid parsing interface                       | Try switching data source.      |
| No parsing source selected                      | A data source must be selected. |
| Load failed, try switching to another interface | Try switching data source.      |

### 2.6. Moment

![main-moment](/guide/usage/main-moment.png)

- ①: Data source - Click to switch data source
- ②: Main Content
  - History sorted by `[today > within 7 days -> further back]`
  - Mouse over - support for deleting individual records

| Question                                                           | Solution                                                                       |
| :----------------------------------------------------------------- | :----------------------------------------------------------------------------- |
| Load Complete                                                      | The data is loaded.                                                            |
| The source should have been deleted                                | Generally, data is imported multiple times, with different source identifiers. |
| 1.Video playback for video progress unchanged<br> 2.Data not added | The data will not be refreshed in real time, you need to refresh manually.     |
| Time page access error, movie page access normal                   | The vod_id returned by the first level and the second level is inconsistent.   |

### 2.7. Setting

#### 2.7.1. Base Config

![main-setting-base_config](/guide/usage/main-setting-base_config.png)

- Theme: `Light | Dark | Auto`
- Language: `zh-CN | zh-TW | English | Auto`
- BossKey: One click hiding software
- Timeout: Global network request timeout, in milliseconds
- Zoom: Scaling software size
- Hot: Search bar displays hot search data
- Film
  - Search: Default search group - `Local | Group | All`
  - Filter: Search data for secondary filtering (Some site return data indiscriminately)
- Live
  - IP Mark: Display ip mark (reference only)
  - Delay: Display of delayed markings (reference only)
  - Thumbnail: Display thumbnail image (ffmpeg required)
  - Epg: Support `diyp` and `xml`
  - Logo: Priority([Channel's own logo field] > [Setting-Live Config-Single Source-Logo field] > Setting-BasicConfig-Live- Logo field)
- AIGC:
  - Provider: OpenAI
  - Api: Api address
  - Key: Password
  - Model: Model
- Player
  - 内置: `xgplayer | artplayer`
  - Customized player will call the system installed software (need to fill in the installation path)
  - Sniffer
    - Automation: Calling the software itself
    - Third-party: call third-party interface (need to fill in the interface address)
  - Barrage
    - Api: Address of the requested data
    - Id: Returns the data that uniquely represents the
    - Data: Returns the popup field in the data
    - Map Parameter: Returns the subscript of the data in the field-`Scroll | Barrage | Time | Color`
- Security
  - Proxy: Global network proxy
  - User Agent: Global request header
  - DNS: Request secure doh
- Permission
  - Auto Launch: Whether or not the software starts together when the pc is booted
  - Hardware Acceleration: Gpu acceleration
  - Debug Mode: Turn on some development logs or data
- Other
  - Factory Reset: Restore default config
  - Check Update: Check if the latest version of the software exists (only window supports online update)
  - Privacy Policy: View User Agreement

#### 2.7.2. Data Manage

![main-setting-data_manage](/guide/usage/main-setting-data_manage.png)

- Quick Config: Specify the data to be imported into the database
- Data Import: Import data into the database
- Data Export: Export the specified data in the database
- Data clear: Delete the specified data in the database
- Data Sync:
  - `iCloud | webdav`
  - Auto Sync: Automatic synchronization when data changes

#### 2.7.3. Source Config

![main-setting-source](/guide/usage/main-setting-source.png)

> `Film Config` `Live Config` `Parse Config`

- Add: Fill in data as required
- Enable: Quickly enable a data source (multiple or single selection).
- Disable: Disable to disable the data source (multiple or single selection)
- Delete: Delete a data source (multiple or single)
- Search: Enter keywords to quickly retrieve the data you need.
- Default: Set the selected data source as the default loader.
- Check: Data finiteness detection
  - Judgment rule: Judge the classification first and then judge the first classified data (for reference only).
  - If there is data after checking, then it will be changed to enable, otherwise it will be changed to disable.

### 2.8. Lab

#### 2.8.1. Char Encoding

![main-lab-char_encoding](/guide/usage/main-lab-char_encoding.png)

- Encrypt: `RSA` `RC4` `AES` `DES` `3DES` `Rabbit` `RabbitLegacy` `SM4`
- Hash: `Hash` `Hmac`
- Encode: `html` `unicode` `base64` `url` `hex` `gzip`

#### 2.8.2. Text Diff

> Compare text data differences

![](/guide/usage/main-lab-text_diff.png)

#### 2.8.3. IDE

> Used to debug the data source, [Click to see detail](/en-US/source/ide)

![main-lab-ide](/guide/usage/main-lab-ide.png)

#### 2.8.4. Sift

> Used to generate sift, [Click to see detail](/en-US/source/sift)

![main-lab-sift](/guide/usage/main-lab-sift.png)

#### 2.8.5. Media Sniffer

![main-lab-media_sniffer](/guide/usage/main-lab-media_sniffer.png)

- Url: Sniffer link
- Optional Params:
  - Init Script: Run the script before execution
  - Run Script: Run the script in execution
  - Custom Regex: Regular Match Media Connection Rules
  - Sniffer Exclude: Regular Exclusion Media Connection Rules

#### 2.8.6. Play Test

![main-lab-play_test](/guide/usage/main-lab-play_test.png)

- Url: Play link
- Decoder: `Auto | Audio | Hls | Flv | Mp4 | Dash | Torrent`
- Player: `xgplayer | artplayer`
- Optional Params:
  - Headers

#### 2.8.7. Extension Manager

> Deficiencies in software used to extend, [Click to see detail](/en-US/dev/plugin)

![main-lab-plugin](/guide/usage/main-lab-plugin.png)

![main-lab-env](/guide/usage/main-lab-env.png)

## 3. Play

![play-layout](/guide/usage/play-layout.png)

- ①: Back to home: Show main program
- ②: Video name
- ③: Action
  - Function: `Pin`
  - Systerm Control: `Minimize | Zoom | Close` (Only `Windows | Linux` exists)
- ③: Main content

#### 3.1. Film

![play-film](/guide/usage/play-film.png)

- ①: Description-View the current program presentation
- ②: Action
  - Favorite: Add to Favorite
  - Down: Links only
  - Share: Share current data
  - Setting: `Skip Progress | Auto Next | Preload Next | Smart Skip Ad`
- ③: Tab
  - Anthology:
    - Analyze: Display only when matching the parsing logo
    - Sort: Supports forward and reverse order
    - Line: Switch different lines
    - Episode: Switch different episodes
  - Recommend: Search for the data and switch the data source

#### 3.2. Live

![play-live](/guide/usage/play-live.png)

- ①: Action
  - Favorite: Add to Favorite
  - Down: Links only
  - Share: Share current data
- ②: Tab
  - Epg-View current playing electronic program list
  - Channel-View other channel data

#### 3.3. Parse

![play-live](/guide/usage/play-parse.png)

- ①: Action
  - Favorite: Add to Favorite
  - Down: Links only
  - Share: Share current data
  - Setting: `Skip Progress | Smart Skip Ad`
- ②: Tab
  - Analyze: Switch the analyze line

## 4. Tray

![tray](/guide/usage/tray.png)

- Open: Open the main program
- Version number
- Website: Go to the Github site
- Documentation: Go to the documentation site
- Report an issue: Go to the Github site to report an issue.
- Open the data folder: Go to the user data folder
- Toggle developer tools: show/hide per-page developer tools
- Exit: Exit the program
