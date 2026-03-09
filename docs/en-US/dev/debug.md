# Debug

## 1. Process exception

### 1.1. window

> With the help of the tools `Event Viewer` and `gflags(requires WinDbg)`.

#### 1.1.1. Install `gflags`

:::tip Microsoft's official instructions

[x64 arch refer to this tutorial](https://learn.microsoft.com/en-us/windows-hardware/drivers/debugger/)-This version of the method is as follows

[arm arch refer to this tutorial](https://learn.microsoft.com/en-us/windows-hardware/drivers/download-the-wdk)

:::

- Method①: Use `Microsoft Store` to install, [click here to download](https://apps.microsoft.com/detail/9pgjgd53tn86?launch=true&mode=mini&hl=zh-CN&gl=CN)
- Method②: Use `PowerShell` to enter the command
  ```PowerShell
  winget install Microsoft.WinDbg
  ```

#### 1.1.2. Monitor

:::tip info

Start the software before setting `image`.

:::

`Silent Process Exit` -> `image`(Enter the process name. Press tab to take effect.) -> `Enable Silent Process Exit Monitoring`(Check Process Listening) -> `Apply`

![process-monitor-win](/dev/debug/process-monitor-win.png)

#### 1.1.3. Reappear

Normal reproduction of faults is sufficient here, no special requirements.

#### 1.1.4. Log

1. `win + r` type `eventvwr.msc` to open `Event Viewer`.
2. Select `Event Viewer` -> `Windows Logs` -> `Applications`.
3. conclude that `windows` has analyzed it for you

![process-log-win](/dev/debug/process-log-win.png)

### 1.2. MAC

> With the help of the tools `HRSword`

#### 1.2.1. Install `HRSword`

[Click to download](https://www.huorong.cn/mac_download.html)

#### 1.2.2. Monitor

![process-monitor-mac](/dev/debug/process-monitor-mac.png)

#### 1.2.3. Reappear

Normal reproduction of faults is sufficient here, no special requirements.

#### 1.2.4. Log

- stat:0 indicates that the process exited normally
- stat:256 indicates that the process may have exited due to some kind of error or exception.
- stat:15 means that the process may have exited because it received a signal.

```text
Process ID 34395 sends a SIGTERM signal (termination signal) to target process ID 34397
This indicates that process 34397 was explicitly terminated by process 34395, whose exit status code was stat:15, which is consistent with the expected behavior of the SIGTERM signal

Conclusion: The sub-process was killed by the software itself, and the cause should be investigated from the software itself.
```

### 1.3. Linux

> With the help of the tools `audit`

#### 1.3.1. Install `audit`

On `Debian|Ubuntu` based systems (e.g. `UOS|Kylin`)

```bash
sudo apt update
sudo apt install auditd
```

On `Euler|Anolis` based systems

```bash
sudo yum update
sudo yum install audit
```

![process-audit-install-linux](/dev/debug/process-audit-install-linux.png)

#### 1.3.2. Enable `audit`

```bash
sudo systemctl start auditd
```

![process-audit-start-linux](/dev/debug/process-audit-start-linux.png)

#### 1.3.3. Add `audit` rule

```bash
sudo auditctl -a exit,always -F arch=b64 -S kill -k zyfun_kill
```

![process-audit-monitor-linux](/dev/debug/process-audit-monitor-linux.png)

#### 1.3.4. Reappear

Normal reproduction of faults is sufficient here, no special requirements.

#### 1.3.5. Log

:::tip info

Use `auditctl -h` to view

:::

```bash
sudo sudo ausearch -k zyfun_kill
```

![process-audit-log-linux](/dev/debug/process-audit-log-linux.png)

#### 1.3.5. Analyze

```text
type=PROCTITLE msg=audit(1744900347.539:197): proctitle=2F6F70742F7A7966756E2F7A7966756E002F6F70742F7A7966756E2F7265736F75726365732F6170702E617361722F6F75742F6D61696E2F736974655F647270795F776F726B65722E6A73

type=PROCTITLE: Process title information
proctitle: Process command line arguments (in hex), decoded：`/opt/zyfun/zyfun /opt/zyfun/resources/app.asar/out/main/site_dropy_worker.js`
```

```text
type=OBJ_PID msg=audit(1744900347.539:197): opid=12600 oauid=1000 ouid=1000 oses=2 ocomm="zyfun"

type=OBJ_PID: 表示Information on the target process
opid=12600: PID of the target process: 12600
oauid=1000: Audit user ID (auidt) of the target process: 1000
ocomm="zyfun": Command name of the target process: zyfun
```

```text
type=SYSCALL msg=audit(1744900347.539:197): arch=c00000b7 syscall=129 success=yes exit=0 a0=3138 a1=f a2=1 a3=420043d0f9 items=0 ppid=12107 pid=12584 auid=1000 uid=1000 gid=1000 euid=1000 suid=1000 fsuid=1000 egid=1000 sgid=1000 fsgid=1000 tty=(none) ses=2 comm="zyfun" exe="/opt/zyfun/zyfun" key="zyfun_kill"

type=SYSCALL：Indicates that this is a system call event
arch=c00000b7：Indicates that the architecture of the system call is 64-bit (b64)
syscall=129：indicates that the system call number is 129, which corresponds to the kill system call
success=yes：Indicates successful execution of the system call
exit=0：Indicates that the return value of the system call is 0, which means success
a0=3138：First parameter, the PID (opid) of the target process
a1=f：Second parameter, indicating the number of the signal to be sent (SIGTERM, value 15)
a2=1：The third parameter, indicating the source of the signal (1 means from user space)
comm="zyfun"：The process that calls the kill system call is named zyfun
exe="/opt/zyfun/zyfun"：Path to the executable that invokes the kill system call
key="zyfun_kill"：This log matches the key you set zyfun_kill to
```

```text
1. The process was sent a SIGTERM signal
    - syscall=129 means that this is a kill system call
    - a1=f means that the signal number sent is 15, i.e. SIGTERM
    - a0=3138 means the PID of the target process is 12600
2. The signal is sent by the process itself
    - comm="zyfun" and exe="/opt/zyfun/zyfun" means that the process calling the kill system call is zyfun itself
    - ppid=12107 and pid=12584 indicate the IDs of the parent process and the current process

Conclusion: The process was terminated by itself, not killed by other software (`need to find out why from the software itself`)
```

## 2. App exception

A `dmp` file will be generated

### 2.1. Install `google breakpad`

```bash
git clone https://chromium.googlesource.com/breakpad/breakpad
cd breakpad
./configure && make
make install
```

### 2.2 Install symbols

:::tip info

- You need to download the `symbols` for the `electron` version of the application.
- Download `symbols` for your operating system.
- For mac (`arm architecture` - `electron v37.1.0 version`), download `electron-v37.1.0-darwin-arm64-symbols.zip`.

:::

[Click to download](https://github.com/electron/electron/releases)

### 2.3. Generate information

#### 2.3.1 Installation dependencies

```bash
yarn install minidump
```

#### 2.3.2 Modify and save the script

:::tip info

- symbolPaths: Paths to symbols for electron versions.
- file: path to the dmp file (zyfun stores the path as `logs/crash/`)

:::

```js {6-7}
const path = require('node:path')
const minidump = require('minidump')

// https://github.com/electron/electron/releases
// The symbolPaths and file addresses need to be changed.
const symbolPaths =
  '/Users/xxx/Downloads/electron-v37.1.0-darwin-arm64-symbols/breakpad_symbols'
const file =
  '/Users/xxx/Library/Application Support/zyfun/log/crash/pending/a7c15378-df3d-4810-a832-50ba6ae95ad6.dmp'

minidump.walkStack(file, symbolPaths, (err, result) => {
  if (err) {
    console.error('Error reading minidump:', err)
    return
  }

  fs.writeFileSync('dump.txt', result.toString())
})
```

#### 2.3.3 Run code

A `dump.txt` file is generated

```bash
# The path after node is changed to the name of the saved file.
node minidump_crash.js
```

### 2.4. Analyze

`minidump`Stack information and reason will be generated (`Crash reason` field)
![dmp-minidump](/dev/debug/dmp-minidump.png)
If you can't analyze it, just throw it to `ai`.
![dmp-minidump-ai](/dev/debug/dmp-minidump-ai.png)
Check out the code (yes, that's me manually creating the runaround)
![dmp-review](/dev/debug/dmp-review.png)

## 3. Api exception

:::tip info

code:0 for success, others for failure.

:::

![f12-network-preview](/dev/debug/f12-network-preview.png)
