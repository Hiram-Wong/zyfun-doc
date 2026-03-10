# Introduction

::: tip Important Reminder

- Only released on this site and Github, please do not be deceived!
- Please do not promote or divert traffic to this software!
- Please support `copyright protection`, we do not advocate piracy!
- Before starting, please read and agree to the user agreement to ensure compliance with regulations!
- This software is only for learning and exchange use, please do not use for commercial purposes, otherwise the consequences will be borne by yourself, please delete within 24 hours after download!
- This document is applicable to the latest version of the software, older versions may have some layout differences!
  :::

## 1. Info

> Name description: `zyfun` [new name >=3.3.8] `zyplayer` [old name <=3.3.7].

`zyfun` is a free, minimalist, all-in-one cross-platform audio/video manager, one-stop management of all types of T1-T4 resources, built-in multi-core player switching at will. Exclusive boss key, one key invisibility to touch the fish without worry. Discover the world with movie watching!

### 1.1. Logo Meaning

![Logo Meaning](/guide/app/logoExplain.png)

### 1.2. Construct

![Construct](/guide/app/arch.png)

### 1.3. AI Knowledge

- [Powered by readmex [click me to go there]](https://readmex.com/Hiram-Wong/ZyPlayer)
- [Powered by eepwiki [click me to go there]](https://deepwiki.com/Hiram-Wong/zyfun)
- [Powered by zread [click me to go there]](https://zread.ai/Hiram-Wong/zyfun)

## 2. Preview

::: details Click me to view partial screenshots
| Film | Live |
| :-----------------------------------------: | :--------------------------------------: |
| ![Film](/guide/app/app-film.png) | ![Live](/guide/app/app-live.png) |
| **History** | **Play** |
| ![History](/guide/app/app-history.png) | ![Play](/guide/app/app-play.png) |
:::

## 3. Install

### 3.1. Compatibility

> The following are physical + virtual machine tests (with x86+arm)

> China's own R&D system involves `UOS (deepin)` `Anolis` `Kylin` `openEuler` `SuperRed`

|   OS    |                                                                                             Operating system (version) [chip architecture]                                                                                              |
| :-----: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| windows |                                                                                                    `win10[arm]` `win11[arm｜x86_64]`                                                                                                    |
|   mac   |                                                                                                         `Sequoia(15.1)[m1-pro]`                                                                                                         |
|  linux  | `Ubuntu 20.04 LTS[arm]` `Anolis OS8.9[arm]` `UOS v20(1070)[arm]` `Kali(2022.1)[arm]` `Cinnamon 5.6.8[x86_64]` `Kylin SP1(2403)[arm]` `openEuler-24.03-LTS[arm] + UKUI` `ElementaryOS 8[x86_64]` `Mint 22[x86_64]` `SuperRed 32[x86_64]` |
| chromos |                                                                                                           `FydeOS 19[x86_64]`                                                                                                           |

::: details Click me to see some of the test screenshots
| Ubuntu 20.04 LTS[arm] | Anolis OS8.9[arm] |
| :-------------------------------------------------------------: | :------------------------------------------------------------: |
| ![Ubuntu](/guide/app/test-linux-ubuntu.png) | ![Anolis](/guide/app/test-linux-anolis.png) |
| **UOS v20(1070)[arm]** | **Kali[arm]** |
| ![UOS](/guide/app/test-linux-uos.png) | ![Kali](/guide/app/test-linux-kali.png) |
| **Kylin SP1(2403)[arm]** | **openEuler-24.03-LTS[arm]** |
| ![Kylin](/guide/app/test-linux-kylin.png) | ![openEuler](/guide/app/test-linux-openEuler.png) |
| **ElementaryOS 8[x86_64]** | **Mint 22[x86_64]** |
| ![ElementaryOS](/guide/app/test-linux-elementaryos.png) | ![Mint](/guide/app/test-linux-mint.png) |
| **SuperRed 32[x86_64]** | **FydeOS 19[x86_64]** |
| ![SuperRed](/guide/app/test-linux-superred.png) | ![FydeOS](/guide/app/test-fydeos.png) |
:::

### 3.2. Download

> **Developer download**: Github login required

> **Minimum Requirements**: Aligned with chromium kernel requirements.

|   OS    | X64 | Arm64 | Loong64 | Release                                                                                                                                                                                                      | Development                                                                       | Minimum requirements |
| :-----: | :-: | :---: | :-----: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------- | -------------------- |
| Windows | ✅  |  ✅   |   ➖    | [GitHub](https://github.com/Hiram-Wong/zyfun/releases)                                                                                                                                                       | [GitHub](https://github.com/Hiram-Wong/zyfun/actions/workflows/nightly-build.yml) | >= win10             |
|  MacOS  | ✅  |  ✅   |   ➖    | [GitHub](https://github.com/Hiram-Wong/zyfun/releases)                                                                                                                                                       | [GitHub](https://github.com/Hiram-Wong/zyfun/actions/workflows/nightly-build.yml) | >= macOS12           |
|  Linux  | ✅  |  ✅   |   ❌    | [GitHub](https://github.com/Hiram-Wong/zyfun/releases) <br/> [LINYAPS](https://store.linyaps.org.cn/) <br/> [AUR](https://aur.archlinux.org/packages?O=0&SeB=nd&K=zyfun&outdated=&SB=p&SO=d&PP=50&submit=Go) | [GitHub](https://github.com/Hiram-Wong/zyfun/actions/workflows/nightly-build.yml) |                      |
| Harmony | ❌  |  ❌   |   ➖    |                                                                                                                                                                                                              |

### 3.3. Common problems

#### 3.3.1. MacOS installs and opens with the message "File is corrupted".

```bash
sudo spctl --master-disable
sudo xattr -cr /Applications/zyfun.app
```

#### 3.3.2. Linux Appimage Run Failure

> Running as root without --no-sandbox is not supported

```bash
./zyfun.AppImage --no-sandbox
```

> dlopen()：error loading libfuse.so.2

```bash
sudo apt-get install libfuse2
```

> Exiting GPU process due to errors during initialization

```bash
xhost +
```

#### 3.3.3. Linux deb package installation failed

> Package libnss3-1d is not installed

```bash
sudo apt-get install libnss3-1d
```

> Package libxss1 is not installed

```bash
sudo apt-get install libxss1
```

###### 3.3.4. Linux rpm package installation failed

> Dependency check failed libXScrnSaver is needed

```bash
sudo yum install epel-release
sudo yum install libXScrnSaver
```

> Dependency check failed xdg-utils is needed

```bash
sudo yum install xdg-utils
```

## 4. Path

### 4.1. Default Path

- **MacOS**:
  - Database/file/plug-in/log Path: `~/Library/Application Support/zyfun/`
  - Binary Path: `~/.zy/bin/`
- **Linux**:
  - Database/file/plug-in/log Path: `~/.config/zyfun/`
  - Binary Path: `~/.zy/bin/`
- **Windows**:
  - Database/file/plug-in/log Path: `%USERPROFILE%\AppData\Roaming\zyfun\`
  - Binary Path: `%USERPROFILE%\.zy\bin\`
  <!-- - **OpenHarmony**:
  - Database/file/plug-in/log Path: `/data/storage/zyfun/base/files/log`
  - Binary Path: `~/.zy/bin/`-->

### 4.2. Custom Path

#### 4.2.1. View custom path

Refer to the default path

#### 4.2.2. Configuration method [reset for reinstallation]

> Replace `{custom_path}` with your desired path; `--user-data-dir` preceded by a space

- MacOS:
  ```bash
  appname=zyfun
  cd "/Applications/$appname.app/Contents/MacOS/"
  sudo mv "$appname" $appname.real
  sudo printf '#!/bin/bash\ncd "/Applications/%s.app/Contents/MacOS"\n"/Applications/%s.app/Contents/MacOS/%s.real" --user-data-dir="{custom_path}"' "$appname" "$appname" "$appname" > $appname
  sudo chmod +x $appname
  ```
  ![MacCustomPath](/guide/app/mac-custom-path.png)
- Linux:
  - Appimage
  ```bash
  ./zyfun.AppImage --user-data-dir={custom_path}
  ```
  ![LinuxCustomPath](/guide/app/linux-custom-path-appimage.png)
  - deb
    > No program found
- Windows:
  ```bash
  Right click Properties->Target->Add at the end --user-data-dir="{custom_path}"
  ```
  ![WinCustomPath](/guide/app/win-custom-path.png)

## 5. Journey

- 2.x version is `ZY-Player` by `@Hunlongyu`.
  - Only `xml` is supported as data source
- 3.x version is `ZyPlayer` developed by `@Hiram-Wong`
  - Icon designed by `@fourbeauty`
  - Data source support multiple formats
    - `[t0]xml` `[t1]json` supported by `@Hiram-Wong`
    - `[t3]drpy` `t4[drpyS]` `[t3]py` supported by `@hjdhnx`
    - `[t3]csp_xbpq` `[t3]csp_xyq` `[t3]csp_appysv2` supported by `@LoyDgIk` `@α`
    - `[t4]catvod` `[t3]catopen` supported by `@catvod`
  - Cheng Duo Player
    - Built-in `xgplayer` `artplayer` ~~`oplayer`~~ ~~`nplayer`~~ ~~`dplayer`~~
    - Support calling the system player
  - **Destructive (important note)**
    - `<=3.3.7` All functions based on the front-end (including webworker), data for the json file [`Good compatibility`]
    - `>3.3.7 & <=3.4.1` Front-end and back-end separation (with fork threads), Data is `pglite database` [`conforms to design logic` `compatibility is reduced`]
    - `>3.3.8 & <=3.4.1` Data is `sqlite database`
