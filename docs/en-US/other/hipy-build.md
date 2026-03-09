# hipy

::: info Project Information

- web: [hipy-ui](https://github.com/hjdhnx/hipy-ui)
- server: [hipy-server](https://github.com/hjdhnx/hipy-server)
- sniffer: [hipy-sniffer](https://github.com/hjdhnx/hipy-sniffer)

:::

::: warning Rrerequisites

- [x] Paid build questions and answers (tutorials are not easy, expect your reward)
- [x] Do not consult without reading the documentation (waste of each other's time)
- [x] This page is for building services, not for projects or data.
- [x] This script is for Linux only, not mobile.

:::

::: tip Server recommend

If you don't have a server yet, feel free to shop around via the discount link below.

1. Aliyun: [Free trial ECS, starting at 0.9 yuan/month](https://www.aliyun.com/daily-act/ecs/activity_selection?userCode=hlco4dmi), more discounts available [here](https://www.aliyun.com/minisite/goods?userCode=hlco4dmi);
2. TencentCloud: [2C2G3M cloud server from ¥7.92/month](https://curl.qcloud.com/jogYnC7h), more discounts available [here](https://curl.qcloud.com/1JcRxEfV);
3. JDCloud: [2C2G3M cloud server first year only ¥49](https://3.cn/20Z-Xyf4);
4. BaiduCloud: [2C2G1M cloud server first year only ¥59](https://cloud.baidu.com/campaign/ambassador-product/index.html?ambassadorId=2e198a5e0dac4c5aa9fe44457e2e9cb4#knowledge-bcc);
5. **Rainyun(Recommend)**: [1C1G50M U.S. only ¥16/month](https://www.rainyun.com/hiram_), There are even sign-up bonuses to reduce the purchase price;

:::

## 1. Default Account

| Role     | User  | Password |
| -------- | ----- | -------- |
| Admin    | admin | admin123 |
| Operator | opt   | opt123   |
| User     | user  | 123456   |

## 2. Script

Patiently wait for the installation process to complete, measured 1MB bandwidth 2h2g machine the whole process takes 5 minutes.

> Note that scripts are not infallible, read the following restrictions before using them

- Valid only for mainstream operating systems.
- Only support `yum` `apt` `apt-get` `dnf` `pkg` package managers.
- Confirm the availability of the system source by yourself, the script does not have the ability to check and modify it.

```bash
# Install/Update are all this command
bash -c "$(curl -fsSLk https://zy.catni.cn/release/latest/hipy.sh)"
```

::: details Click to see script

```bash:line-numbers
#!/bin/bash
#Copyroght @ 2024 by zy(Hiram)
#Install Latest Stable Hipy Release

log() {
	local RED="\033[0;31m"
	local GREEN="\033[0;32m"
	local YELLOW="\033[0;33m"
	local BLUE="\033[0;34m"
	local PURPLE="\033[0;35m"
	local NC="\033[0m"

    local message="$2"

    case "$1" in
        primary )
            echo -e "${BLUE}${message}${NC}"
            ;;
		secondly )
            echo -e "${PURPLE}${message}${NC}"
            ;;
        danger )
            echo -e "${RED}${message}${NC}"
            ;;
        success )
            echo -e "${GREEN}${message}${NC}"
            ;;
        warn )
            echo -e "${YELLOW}${message}${NC}"
            ;;
        * )
            echo -e "${NC}${message}${NC}"
            ;;
    esac
}

input_info() {
	echo -e -n "\033[0;35m[输入] $*\033[0m"
}

abort() {
    log danger "[终止] $*"
	log danger "[终止] 查阅安装文档: https://zy.catni.cn/hipy-build.html"
	log danger "[终止] 有偿咨询脚本安装问题解答, 联系QQ:29794882"
    exit 1
}

copy_info() {
	log success "[赞助] 🔥由雨云提供服务器赞助, 买服务器上雨云, 优惠码(不含逗号): hiram, 注册地址(含最后下划线): https://www.rainyun.com/hiram_"
	echo
	log primary "[版权] Copyroght @ 2024 zy(源动力) desgin by Hiram, Updated 2025.1.17 17:28:58"
	log danger "[版权] 众所周知, Hiram出品必属垃圾, 所以不建议小白(没脑子)食用"
	log danger "[版权] 倒卖脚本死全家"
	echo
	log default "[声明] 项目提供内容和数据均与脚本作者无关, 该脚本只提供安装服务"
	log default "[声明] 脚本仅可运行在主流操作系统, 常见有Ubuntu Debine CentOS; 国产或非主流操作系统可能存在异常"
	log default "[声明] 使用前自行确认系统源是否可用, 如不可用自行停止运行该脚本, 该脚本不具备修改系统源能力"
	log default "[声明] 安装预计需半小时, 更新预计需五分钟 (取决于网络)"
}

project_info() {
	echo
	log default "  _       _
 | |     (_)
 | |__    _   _ __    _   _
 | '_ \  | | | '_ \  | | | |
 | | | | | | | |_) | | |_| |
 |_| |_| |_| | .__/   \__, |
             | |       __/ |
             |_|      |___/ "
	echo
	log default "[项目] 开源地址如下"
	log default "[项目] 前端: https://github.com/hjdhnx/hipy-ui"
	log default "[项目] 后端: https://github.com/hjdhnx/hipy-server"
	log default "[项目] 嗅探: https://github.com/hjdhnx/hipy-sniffer"
}

server_recommend() {
	echo
	log primary "[广告] 服务器滞销, 帮帮孩子吧"
	log primary "[广告] 润雨云(推荐): 首月5折,半年7折,消费有返利 https://www.rainyun.com/hiram_"
	log primary "[广告] 阿里云: 0元试用,首购低至0.9元/月起 https://www.aliyun.com/daily-act/ecs/activity_selection?userCode=hlco4dmi"
	log primary "[广告] 腾讯云: 2核2G3M云服务器7.92元/月起 https://curl.qcloud.com/jogYnC7h"
	log primary "[广告] 京东云: 2核2G3M云服务器仅58元 https://3.cn/20Z-Xyf4"
	log primary "[广告] 百度云: 2核2G1M云服务器仅59元 https://cloud.baidu.com/campaign/ambassador-product/index.html?ambassadorId=2e198a5e0dac4c5aa9fe44457e2e9cb4#knowledge-bcc"
	log primary "[广告] UCLOUD: 2核2G4M云服务器仅71元 https://www.ucloud.cn/site/active/kuaijiesale.html?invitation_code=C1xDC5B2B581E6C"
}

qrcode_pay() {
    echo

    echo "███████████████████████████████"
    echo "█ ▄▄▄▄▄ █▀ █▀▀ █▀ ▀▄▄ █ ▄▄▄▄▄ █"
    echo "█ █   █ █▀ ▄ █▄▄▀▀▀▄ ▄█ █   █ █"
    echo "█ █▄▄▄█ █▀█ █▄▀██▀  ▄▀█ █▄▄▄█ █"
    echo "█▄▄▄▄▄▄▄█▄█▄█ ▀ ▀▄█▄█ █▄▄▄▄▄▄▄█"
    echo "█  ▄ ▄▀▄   ▄█▄▀▄ ▄ █ ▀ ▀ ▀▄█▄▀█"
    echo "█▀▄▄▀▄▀▄█  ▀ ▄▄▀▀▄█ ▀ ▀▄▄ ▀█▀██"
    echo "███▀▄▄█▄▄▀▄▀▄▀▀▀▄▀█▄ ▀▀▀▀▀▄▄█▀█"
    echo "█▀ █ ██▄▄ ▀▄█▀▄▀▄▄█ ▀▄▄▄▀█▄▄▀██"
    echo "█▀▀ █▄ ▄ ▀ ▄█▄▄ ▀▄▄ ▀▀█▀█▀▄ █▀█"
    echo "█ █▀█  ▄██▀  ▄▄▀▄▄▀ ▀▀ ██▀█▄▀██"
    echo "█▄████▄▄█  █▄ ▀ █▀▀▄▄ ▄▄▄ ▀   █"
    echo "█ ▄▄▄▄▄ █▄▄██ ▀▀ █ █▄ █▄█ ▄▄███"
    echo "█ █   █ █ ▀▀██▀▀▄██ ▀▄▄▄ ▄▀ ▄▄█"
    echo "█ █▄▄▄█ █  ▄█ ▄▀▄▄▀ ▀  ▄   ▄ ██"
    echo "█▄▄▄▄▄▄▄█▄▄▄████▄█▄█▄████▄▄▄███"

    echo
	log primary "[赞助] 支付宝扫描如上二维码请脚本作者喝杯咖啡吧"
}

command_exists() {
    command -v "$1" 2>&1
}

get_country() {
    local country

	log default "[网络] 正在获取服务器位置信息, 请稍后"

    if ! country=$(curl -s -m 30 "https://ipapi.co/country" 2>/dev/null); then
        log warn "[网络] 无法获取服务器位置信息"
        result=-1
    elif [ "$country" = "CN" ]; then
        log warn "[网络] 服务器位置可能位于国内"
        result=1
    else
        log warn "[网络] 服务器位置可能位于国外"
        result=0
    fi

    return $result
}

get_local_ips() {
    local ips=""

    local ipv4
    ipv4=$(ip route get 8.8.8.8 2>/dev/null | awk 'NR==1 {print $7}')
    if [ ! -z "$ipv4" ]; then
        ips="${ips}${ipv4}\n"
    fi

    local ipv6
    ipv6=$(ip route get 2001:4860:4860::8888 2>/dev/null | awk 'NR==1 {print $7}')
    if [ ! -z "$ipv6" ]; then
        ips="${ips}[$ipv6]\n"
    fi

    echo -e "$ips"
}

get_public_ips() {
    local ips=""

    local ipv4
    ipv4=$(curl -s4 https://ifconfig.co || curl -s4 https://api64.ipify.org)
    if [[ -n "$ipv4" ]]; then
        ips="${ips}${ipv4}\n"
    fi

    local ipv6
    ipv6=$(curl -s6 https://ifconfig.co || curl -s6 https://api64.ipify.org)
    if [[ -n "$ipv6" ]]; then
        ips="${ips}[$ipv6]\n"
    fi

    echo -e "$ips"
}

build_url() {
    local protocol="${1:-http}"
    local ip="${2}"
    local port="${3:-}"
    local path="${4:-}"

    # 确保 protocol 以 :// 结尾
    if [[ ! "$protocol" =~ ://$ ]]; then
        protocol="$protocol://"
    fi

    # 构建 URL
    local url="$protocol$ip"
    if [[ -n "$port" ]]; then
        url="$url:$port"
    fi
    if [[ -n "$path" ]]; then
        # 确保 path 以 / 开头
        if [[ ! "$path" =~ ^/ ]]; then
            path="/$path"
        fi
        url="$url$path"
    fi

    echo "$url"
}

get_access_info() {
	local local_ips=$(get_local_ips)
	local public_ips=$(get_public_ips)

	local protocol="${1:-http}"
	local port="${2:-}"
	local path="${3:-}"

	log warn "[信息] 请使用您的浏览器访问面板:"
    if [[ -n "$local_ips" ]]; then
        for ip in $local_ips; do
            local url=$(build_url "$protocol" "$ip" "$port" "$path")
            log warn "[信息] 内部地址: $url"
        done
    fi

    if [[ -n "$public_ips" ]]; then
        for ip in $public_ips; do
            local url=$(build_url "$protocol" "$ip" "$port" "$path")
            log warn "[信息] 外部地址: $url"
        done
    fi

	log warn "[信息] 如果您需使用域名访问, 请自行反向代理"
	log warn "[信息] 如果您的服务器开启了防火墙(iptables ufw selinux firewalld), 请自行放行或关闭防火墙"
	log warn "[信息] 如果您使用的是云服务器, 请在安全组中打开端口 $port"
}

preferred_github_hosts() {
    declare -a urls=(
        "https://hosts.gitcdn.top/hosts.txt"
        "https://raw.hellogithub.com/hosts"
    )

	if [ ! -z `command_exists sed` ]; then
		sed -i "/# preferred-github-hosts begin/Q" /etc/hosts
		log default "[GitHub] 预处理hosts"
	fi

    for url in "${urls[@]}"; do
		log default "[GitHub] 尝试从 $url 获取优选hosts信息"
        if curl -s -o /dev/null -m 30 "$url"; then
			echo "# preferred-github-hosts begin" >> /etc/hosts
            curl "$url" >> /etc/hosts
			echo "# preferred-github-hosts end" >> /etc/hosts
			log success "[GitHub] 获取优选hosts成功"
            return
        else
			log warn "[GitHub] 优选超时, 尝试下一个"
        fi
    done

    log warn "[GitHub] 所有节点优选均超时, 将使用原生请求"
}

fallback_github_hosts() {
	if [ -z `command_exists sed` ]; then
		log warn "[GitHub] 回退hosts失败, 操作系统不支持sed, 请手动回退"
	else
		sed -i "/# preferred-github-hosts begin/Q" /etc/hosts
		log success "[GitHub] 回退hosts成功"
	fi
}

preferred_docker_proxy() {
	if [ -f "/etc/docker/daemon.json" ]; then
		log default "[Docker] 备份daemon"
		cp "/etc/docker/daemon.json" "/root/"
	fi

	log warn "[Docker] 即将写入代理数据"
    cat <<EOF > /etc/docker/daemon.json
{
    "registry-mirrors": [
		"https://dockerproxy.net",
        "https://backbone.littlediary.cn:49443",
        "https://docker.1panel.live",
        "https://registry.cn-hangzhou.aliyuncs.com",
        "https://docker.m.daocloud.io"
    ]
}
EOF

	log warn "[Docker] 即将重启docker服务"
	systemctl daemon-reload && systemctl restart docker
}

fallback_docker_proxy() {
	log warn "[Docker] 即将回退代理数据"
	rm -rf "/root/daemon.json"
	if [ -f "/root/daemon.json" ]; then
		log default "[Docker] 备份daemon"
		rm -rf "/etc/docker/daemon.json"
		cp "/root/daemon.json" "/etc/docker/"
	fi
	log warn "[Docker] 即将重启docker服务"
	systemctl daemon-reload && systemctl restart docker
}


check_stdin() {
    if [ ! -t 0 ]; then
        abort "STDIN 不是标准的输入设备"
    fi
}

check_root() {
    if [[ $EUID -ne 0 ]]; then
        abort "请以 root 权限运行"
    fi
}

check_bash() {
    if [ -z "$BASH" ]; then
        abort "请用 bash 执行本脚本"
    fi
}

check_arch() {
	local architecture
    local arch=`uname -a`
	if [[ $arch =~ "x86_64" ]];then
		architecture="amd64"
	elif [[ $arch =~ "arm64" ]] || [[ $arch =~ "aarch64" ]];then
		architecture="arm64"
	elif [[ $arch =~ "armv7l" ]];then
		architecture="armv7"
	elif [[ $arch =~ "ppc64le" ]];then
		architecture="ppc64le"
	elif [[ $arch =~ "s390x" ]];then
		architecture="s390x"
	else
		abort "暂不支持$arch系统架构"
	fi
}

check_pkg_manage_tool() {
	local pkg_manage_tool
	if [ ! -z `command_exists yum` ]; then
		# Fedora CentOS
        pkg_manage_tool=yum
	elif [ ! -z `command_exists apt-get` ]; then
		# Debian Ubuntu
        pkg_manage_tool=apt-get
	elif [ ! -z `command_exists apt` ]; then
        pkg_manage_tool=apt
    elif [ ! -z `command_exists dnf` ]; then
		# RedHat AnolisOS
        pkg_manage_tool=dnf
	elif [ ! -z `command_exists zypper` ]; then
		# openSUSE
        pkg_manage_tool=zypper
	elif [ ! -z `command_exists pkg` ]; then
		# Solaris Termux
        pkg_manage_tool=pkg
    else
        abort "仅支持yum apt apt-get dnf pkg zypper包管理工具"
    fi

	echo $pkg_manage_tool
}

check_depends() {
	check_bash
# 	check_stdin
  check_root
	check_arch
}

check_install_unzip() {
	if [ -z `command_exists unzip` ]; then
		log default "[pkg] 即将开始安装unzip"

		pkg_git_name="unzip"

		if ! $pkg_manage_tool install -y $pkg_git_name; then
			abort "安装 $pkg_git_name 失败"
		fi
	fi
}

get_average_delay() {
    local source=$1
    local total_delay=0
    local iterations=3

    for ((i = 0; i < iterations; i++)); do
        # check timeout
        if ! curl -o /dev/null -m 1 -s -w "%{http_code}\n" "$source" > /dev/null; then
            delay=999
        else
            delay=$(curl -o /dev/null -s -w "%{time_total}\n" "$source")
        fi
        total_delay=$(awk "BEGIN {print $total_delay + $delay}")
    done

    average_delay=$(awk "BEGIN {print $total_delay / $iterations}")
    echo "$average_delay"
}

start_docker() {
    systemctl enable docker
    systemctl daemon-reload
    systemctl start docker
}

install_docker() {
    curl -fsSL "https://zy.catni.cn/release/latest/get-docker.sh" -o get-docker.sh
    sources=(
        "https://mirrors.aliyun.com/docker-ce"
        "https://mirrors.tencent.com/docker-ce"
        "https://download.docker.com"
    )
    min_delay=${#sources[@]}
    selected_source=""
    for source in "${sources[@]}"; do
        average_delay=$(get_average_delay "$source")
        echo "source: $source, delay: $average_delay"
        if (( $(awk 'BEGIN { print '"$average_delay"' < '"$min_delay"' }') )); then
            min_delay=$average_delay
            selected_source=$source
        fi
    done

    echo "selected source: $selected_source"
    export DOWNLOAD_URL="$selected_source"
    bash get-docker.sh

    start_docker
    docker version > /dev/null 2>&1
    if [ $? -ne "0" ]; then
        echo "Docker 安装失败, 请检查网络连接或手动安装 Docker"
        echo "参考文档: https://docs.docker.com/engine/install/"
        abort "Docker 安装失败"
    fi
    log default "[pkg] Docker 安装成功"
}

check_install_docker() {
	if [ -z `command_exists docker` ]; then
		log default "[pkg] 即将开始安装Docker"
        install_docker
		if [ $? -ne "0" ]; then
			abort "Docker 安装失败"
		fi
		log default "[pkg] Docker安装完成"
    fi

    log default "[pkg] 发现 Docker 环境: '`command -v docker`'"

    docker version > /dev/null 2>&1
    if [ $? -ne "0" ]; then
        abort "Docker 服务工作异常"
    fi

    compose_command="docker compose"
    if ! $compose_command version; then
		log default "[pkg] 即将开始安装Docker Compose Plugin"
        install_docker
		if [ $? -ne "0" ]; then
			abort "Docker Compose Plugin 安装失败"
		fi
		log default "[pkg] Docker Compose Plugin 安装完成"
    fi

    # check docker compose support -d
    if ! $compose_command up -d --help > /dev/null 2>&1; then
		log warn "[pkg] Docker Compose Plugin 不支持 '-d' 参数"
		log default "[pkg] 即将开始升级Docker Compose Plugin"
		install_docker
		if [ $? -ne "0" ]; then
			abort "Docker Compose Plugin 升级失败"
		fi
		log default "[pkg] Docker Compose Plugin 升级完成"
    fi
}

check_docker_health() {
    local container_name=$1
    local max_retry=30
    local retry=0
    local health_status="unhealthy"
    log default "[Docker] 等待容器 $container_name 状态检测"
    while [[ "$health_status" == "unhealthy" && $retry -lt $max_retry ]]; do
        health_status=$(docker inspect --format='{{.State.Health.Status}}' $container_name 2>/dev/null || info 'unhealthy')
        sleep 5
        retry=$((retry+1))
    done
    if [[ "$health_status" == "unhealthy" ]]; then
        abort "容器 $container_name 健康状态异常"
    fi
    log default "[Docker] $container_name 健康状态良好"
}

project_default_show() {
	log warn "[信息] 请自行牢记或保存默认数据[如已经修改则忽略](关闭ssh或清屏后不再显示):"
    log warn "[信息] 登录用户: admin"
	log warn "[信息] 登录密码: admin123"
}

project_replace_domain() {
    local directory="$1"
    local old_domain="$2"
    local new_domain="$3"

    # 使用sed命令替换文件中的域名
	sed -i "s#$old_domain#$new_domain#g" $(grep -rl "$old_domain" "$directory")
	sed -i "s#^API_DOMAIN=.*\$#API_DOMAIN=$new_domain#" ".env"

    log default "[项目] 域名已替换为: $new_domain"
}

project_work() {
	local container_id=$(docker ps -n 1 --filter name=.*hipy.* --format '{{.ID}}')
	local run_path=$(docker inspect --format '{{index .Config.Labels "com.docker.compose.project.working_dir"}}' "$container_id" 2>/dev/null)
	local base_path=$(pwd)

	if [ -n "$run_path" ]; then
		log default "[项目] 检测到已存在的项目"
		base_path="$run_path"
	else
		input_info "设置安装目录(30秒无输入或留空则为$base_path):"
		read -t 30 input_path

		if [ -z "$input_path" ]; then
			echo
		fi

		# 如果用户没有输入路径，则使用默认路径
		input_path=${input_path:-$base_path}

		# 检查目录是否存在，如果不存在则创建
		if [ ! -d "$input_path" ]; then
			log default "[项目] 目录不存在, 即将创建"
			mkdir -p "$input_path"
		fi

		base_path="$input_path"
	fi
	log default "[项目] 工作目录: $base_path"
	cd "$base_path"

	if [ -d "./resources" ]; then
		log default "[项目] 即将开始备份数据"
		local back_path="$base_path/../bak-hipy"
		local timestamp1=`date +%s`
		local timestamp2=`date +%Y%m%d`
		local backup_dir="$back_path/$timestamp2-$timestamp1"
		if [ ! -d "$back_path" ]; then
			mkdir -p "$back_path"
		fi
		mkdir -p "$backup_dir"
		if cp -r "$base_path/"* "$backup_dir"; then
			log default "[项目] 数据备份成功"
		else
			log default "[项目] 数据备份失败"
		fi
	fi

	log default "[项目] 创建临时目录"
	local tmp_path="./tmp"
	if [ -e "$tmp_path" ]; then
		rm -rf "$tmp_path"
	fi
	mkdir -p "$tmp_path"

	local env_path=".env"
	if [ ! -f "$env_path" ]; then
		touch "$env_path"
	fi

	grep "HIPY_DIR" "$env_path" >/dev/null || echo "HIPY_DIR=$base_path" >> "$env_path"
	grep "FASTAPI_PORT" "$env_path" >/dev/null || echo "FASTAPI_PORT=5707" >> "$env_path"
	grep "VUE_PORT" "$env_path" >/dev/null || echo "VUE_PORT=8707" >> "$env_path"
	grep "SNIFFER_PORT" "$env_path" >/dev/null || echo "SNIFFER_PORT=5708" >> "$env_path"
	grep "POSTGRES_PASSWORD" "$env_path" >/dev/null || echo "POSTGRES_PASSWORD=$(LC_ALL=C tr -dc A-Za-z0-9 </dev/urandom | head -c 32)" >> "$env_path"
	grep "REDIS_PASSWORD" "$env_path" >/dev/null || echo "REDIS_PASSWORD=$(LC_ALL=C tr -dc A-Za-z0-9 </dev/urandom | head -c 32)" >> "$env_path"
	grep "SUBNET_PREFIX" "$env_path" >/dev/null || echo "SUBNET_PREFIX=172.23.0" >> "$env_path"
	grep "API_DOMAIN" "$env_path" >/dev/null || echo "API_DOMAIN=" >> "$env_path"
	grep "GIT_PERMIT" "$env_path" >/dev/null || echo "GIT_PERMIT=" >> "$env_path"
	grep "GIT_USER" "$env_path" >/dev/null || echo "GIT_USER=" >> "$env_path"
	grep "GIT_TOKEN" "$env_path" >/dev/null || echo "GIT_TOKEN=" >> "$env_path"

	# server部分
	log default "[项目] 开始处理后端部分"
	local fastapi_path="./resources/fastapi"
	if [ -e "$fastapi_path" ]; then
		rm -rf "$fastapi_path"
	fi
	mkdir -p "$fastapi_path"

	local GIT_PERMIT=$(grep "^GIT_PERMIT=" "$env_path" | awk -F '=' '{print $2}' | xargs)
	local GIT_USER=$(grep "^GIT_USER=" "$env_path" | awk -F '=' '{print $2}' | xargs)
	local GIT_TOKEN=$(grep "^GIT_TOKEN=" "$env_path" | awk -F '=' '{print $2}' | xargs)
	if [ -z $GIT_PERMIT ]; then
		input_info "设置Github是否有私有权限[输入 Y(y)/N(n)](30秒无输入或留空则为N):"
        read -t 30 input_git_permit

		if [ -z "$input_git_permit" ]; then
			echo
		fi

        input_git_permit=${input_git_permit:-N}
        case "$input_git_permit" in
            'y' | 'Y' )GIT_PERMIT=0 ;;
            *) GIT_PERMIT=-1 ;;
        esac

        sed -i "s|^GIT_PERMIT=.*|GIT_PERMIT=$GIT_PERMIT|" "$env_path"
	fi
	if [ $GIT_PERMIT -eq 0 ]; then
		if [ -z $GIT_USER ]; then
			while true; do
				input_info "设置GitHub用户名:"
				read -t 30 input_git_username

				if [ -z "$input_git_username" ]; then
					log warn "用户名不可为空"
					continue
				else
					GIT_USER=$input_git_username
					sed -i "s|^GIT_USER=.*|GIT_USER=$input_git_username|" "$env_path"
					break
				fi
			done
		fi

		if [ -z $GIT_TOKEN ]; then
			while true; do
				input_info "设置GitHub密钥:"
				read -t 30 input_git_token

				if [ -z "$input_git_token" ]; then
					log warn "密钥不可为空"
					continue
				else
					GIT_TOKEN=$input_git_token
					sed -i "s|^GIT_TOKEN=.*|GIT_TOKEN=$input_git_token|" "$env_path"
					break
				fi
			done
		fi
	fi

	log default "[项目] 即将开始拉取 server 代码,  请耐心等待"
	if [ $GIT_PERMIT -eq 0 ]; then
		curl -H "Authorization: token $GIT_TOKEN" "https://github.com/hjdhnx/hipy-server/archive/refs/heads/master.zip" -sSLk -o "$tmp_path/server.zip" -w "[下载] 总大小: %{size_download} bytes, 速率: %{speed_download}\n"
	else
		curl "https://github.com/sanshu-rom/server-release/releases/download/latest/hipy-server-latest.zip" -sSLk -o "$tmp_path/server.zip" -w "[下载] 总大小: %{size_download} bytes, 速率: %{speed_download}\n"
	fi
	if [ $? -ne "0" ]; then
		abort "下载 server 代码失败"
	fi
	unzip -q "$tmp_path/server.zip" -d "$tmp_path/server"
	if [ $? -ne "0" ]; then
		abort "解压 server 失败"
	fi
	cat > "$tmp_path/server/hipy-server-latest/app/.env" <<EOF
ECHO_SQL=false
# selenium,hipy-sniffer,playwright 三选一
DEFAULT_SNIFFER=hipy-sniffer
SNIFFER_URL=http://127.0.0.1:5708
API_DOMAIN=http://127.0.0.1:5707
AUTO_ADD_PERM_LABEL=true
PORT=5707
RELOAD=false
LOGIN_WITH_CAPTCHA=false
PROJECT_NAME=HiPy-嗨派
WEB_DOMAIN=https://hipy-ui.vercel.app
SECRET_KEY=DFGG45645674GHFGHFH

SQLALCHEMY_ENGINE=postgresql
# SQL_HOST=hipy_pg
SQL_HOST=172.23.0.4
SQL_PORT=5432
SQL_USERNAME=hipy
SQL_DATABASE=hipy

REDIS_HOST=hipy-redis
REDIS_PORT=6379
REDIS_DB=3

SMTP_HOST=smtp.qq.com
SMTP_USER=john_doe_1996@foxmail.com
SMTP_PASSWORD=ndkhgrgoimyvbhei
EMAIL_FROM_EMAIL=john_doe_1996@foxmail.com

IP_AGENTS=[""]
EOF
	mv "$tmp_path/server/hipy-server-latest/app/"* "$fastapi_path"

	# sniffer部分
	log default "[项目] 开始处理嗅探部分"
	log default "[项目] 即将开始拉取 sniffer 代码, 请耐心等待"
	local sniffer_path="./resources/sniffer"
	if [ -e "$sniffer_path" ]; then
		rm -rf "$sniffer_path"
	fi
	mkdir -p "$sniffer_path"
	curl "https://github.com/hjdhnx/hipy-sniffer/archive/refs/heads/main.zip" -sSLk -o "$tmp_path/sniffer.zip" -w "[下载] 总大小: %{size_download} bytes, 速率: %{speed_download}\n"
	if [ $? -ne "0" ]; then
		abort "下载 sniffer 代码失败"
	fi
	unzip -q "$tmp_path/sniffer.zip" -d "$tmp_path/sniffer"
	if [ $? -ne "0" ]; then
		abort "解压 sniffer 失败"
	fi
	sed -i 's/"USE_CHROME": true,/"USE_CHROME": false,/g' "$tmp_path/sniffer/hipy-sniffer-main/quart_config.json"
	touch "$tmp_path/sniffer/hipy-sniffer-main/nohup.out"
	mv "$tmp_path/sniffer/hipy-sniffer-main/"* "$sniffer_path"

	# vue部分
	log default "[项目] 开始处理前端部分"
	log default "[项目] 即将开始拉取 vue 代码,  请耐心等待"
	local vue_path="./resources/vue"
	if [ -e "$vue_path" ]; then
		rm -rf "$vue_path"
	fi
	mkdir -p "$vue_path"
	curl "https://zy.catni.cn/release/latest/vue.zip" -sSLk -o "$tmp_path/vue.zip" -w "[下载] 总大小: %{size_download} bytes, 速率: %{speed_download}\n"
	if [ $? -ne "0" ]; then
		abort "下载 vue 代码失败"
	fi
	unzip -q "$tmp_path/vue.zip" -d "$tmp_path/vue"
	if [ $? -ne "0" ]; then
		abort "解压 vue 失败"
	fi
	mv "$tmp_path/vue/"* "$vue_path"

	local API_DOMAIN=$(grep "^API_DOMAIN=" "$env_path" | awk -F '=' '{print $2}' | xargs)
	if [ -z $API_DOMAIN ]; then
		local default_ip=$(ip route get 8.8.8.8 2>/dev/null | awk 'NR==1 {print $7}')
		local default_api_domain="http://$default_ip:5707/"
		while true; do
			input_info "设置后端接口地址(30秒无输入或留空则为${default_api_domain}):"
			read -t 30 input_api_domain

			if [ -z "$input_api_domain" ]; then
				input_api_domain=$default_api_domain
				API_DOMAIN=$input_api_domain
				sed -i "s|^API_DOMAIN=.*|API_DOMAIN=$input_api_domain|" "$env_path"
				break
			elif ! [[ $input_api_domain =~ ^https?://[^/]+/$ ]]; then
				log warn "'$input_api_domain' 不是合法的域名，必须以'http://'或'https://'开头，并以'/'结尾。"
				continue
			else
				API_DOMAIN=$input_api_domain
				sed -i "s|^API_DOMAIN=.*|API_DOMAIN=$input_api_domain|" "$env_path"
				break
			fi
		done
	fi
	project_replace_domain "$vue_path" "http://172.23.0.3:5707/" "$API_DOMAIN"

	# compose部分
	log default "[项目] 即将开始写入 compose 代码"
	cat > "./compose.yaml" <<'EOF'
networks:
  hipy-network:
    name: hipy-network
    driver: bridge
    ipam:
      driver: default
      config:
        - gateway: ${SUBNET_PREFIX:?SUBNET_PREFIX required}.1
          subnet: ${SUBNET_PREFIX}.0/24
    driver_opts:
      com.docker.network.bridge.name: hipy-network

services:
  sniffer:
    container_name: hipy-sniffer
    restart: always
    image: hiramwong/hipy-sniffer:latest
    deploy:
      resources:
        limits:
          memory: 1G
    volumes:
      - ${HIPY_DIR}/resources/sniffer:/home/hipy-sniffer
    ports:
      - ${SNIFFER_PORT:-5708}:5708
    networks:
      hipy-network:
        ipv4_address: ${SUBNET_PREFIX}.6
  redis:
    container_name: hipy-redis
    restart: always
    image: redis:7.4.0
    volumes:
       - ${HIPY_DIR}/resources/redis:/data
    command: ["redis-server", "--appendonly", "yes", "--requirepass", "${REDIS_PASSWORD:?redis password required}"]
    networks:
      hipy-network:
        ipv4_address: ${SUBNET_PREFIX}.5
  postgres:
    container_name: hipy-pg
    restart: always
    image: postgres:15.2
    volumes:
      - ${HIPY_DIR}/resources/postgres:/var/lib/postgresql/data
    environment:
      - POSTGRES_USER=hipy
      - POSTGRES_PASSWORD=${POSTGRES_PASSWORD:?postgres password required}
    networks:
      hipy-network:
        ipv4_address: ${SUBNET_PREFIX}.4
    command: [postgres, -c, max_connections=200]
    healthcheck:
      test: pg_isready -U hipy -d hipy
  fastapi:
    container_name: hipy-fastapi
    image: hiramwong/hipy-fastapi:latest
    restart: always
    volumes:
      - ${HIPY_DIR}/resources/fastapi:/hipy
    environment:
      - REDIS_PASSWORD=${REDIS_PASSWORD:?redis password required}
      - SQL_PASSWORD=${POSTGRES_PASSWORD:?db password required}
    depends_on:
      - postgres
      - redis
    dns:
      - 119.29.29.29
      - 223.5.5.5
      - 180.76.76.76
      - 1.2.4.8
      - 114.114.114.114
      - 8.8.8.8
    ports:
      - ${FASTAPI_PORT:-5707}:5707
    networks:
      hipy-network:
        ipv4_address: ${SUBNET_PREFIX}.3
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost/", "||", "exit", "1"]
      interval: 60s
      timeout: 60s
      retries: 3
  vue:
    container_name: hipy-vue
    image: hiramwong/hipy-vue:latest
    restart: always
    volumes:
      - ${HIPY_DIR}/resources/vue:/usr/share/nginx/html
    depends_on:
      - fastapi
    ports:
      - ${VUE_PORT:-8707}:80
    networks:
      hipy-network:
        ipv4_address: ${SUBNET_PREFIX}.2

EOF

	# 启动容器
	log default "[项目] 即将启动服务"
	$compose_command down --remove-orphans
	$compose_command up -d

	check_docker_health hipy-pg
	check_docker_health hipy-fastapi
	sleep 1

	local table_exists=$(docker exec hipy-pg psql -U hipy -t -c "SELECT * FROM t_users;")
	if [ -z "$table_exists" ]; then
		log info "[项目] 即将开始初始化数据库"
		docker exec hipy-fastapi python3 initial_data.py > /dev/null 2>&1
	fi
}

main() {
	shopt -s dotglob
	copy_info
	project_info
	check_depends
	pkg_manage_tool=$(check_pkg_manage_tool)
	log default "[系统] 即将更新系统依赖, 请耐心等待, 可能较久哦"
	$pkg_manage_tool update -y
	check_install_unzip
	check_install_docker

	get_country
	country_code=$?

	if [ $country_code -ne 0 ]; then
		preferred_github_hosts
		preferred_docker_proxy
	fi

	project_work

	if [ $country_code -ne 0 ]; then
		fallback_github_hosts
		fallback_docker_proxy
	fi

	log warn "[信息] =================感谢您的耐心等待, 安装已完成=================="
	echo
	get_access_info "http" "8707"
	echo
	project_default_show
	echo
	log warn "[信息] ==============================================================="

	server_recommend
	qrcode_pay
	shopt -u dotglob
}

trap "onexit" INT
onexit() {
    echo
    abort "用户手动结束安装"
}

main

# bash -c "$(curl -fsSLk https://zy.catni.cn/release/latest/hipy.sh)"

# if  ! crontab -l 2>/dev/null | grep -Fq "https://zy.catni.cn/release/latest/hipy.sh"; then
# 	cron_command="23 5 * * * bash -c \"\$(curl -fsSLk https://zy.catni.cn/release/latest/hipy.sh)\""
#     (crontab -l 2>/dev/null ; echo "$cron_command") | crontab -
# fi
```

:::

**Install**

![install](/other/hipy-build/hipy-build.png)

**Update**

![update](/other/hipy-build/hipy-upgrade.png)

## 3. Proxy

For mapping domain name proxies check this section.

:::info Proxy info

The following are the default ports

- web: http://127.0.0.1:8707
- server: http://127.0.0.1:5707
- sniffer: http://127.0.0.1:5708

:::

### 3.1. 1Panel

> Website -> Website -> Create Website -> Reverse Proxy -> Primary Domain [Proxy Domain]|Proxy Address -> Confirm

::: details Click to see nginx config

```nginx
location ^~ / {
    proxy_pass http://127.0.0.1:8707;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header REMOTE-HOST $remote_addr;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_http_version 1.1;
    add_header X-Cache $upstream_cache_status;
    add_header Cache-Control no-cache;
}
```

:::

![1panel-proxy](/other/hipy-build/hipy-proxy-1panel.png)

### 3.2. aaPanel

> Site -> PHP Project -> Add Site -> Domain | php version [static] -> OK -> Created Site -> Reverse Proxy -> Add Reverse Proxy -> Start Proxy | Proxy Name [arbitrary] | Destination URL | Send Domain [$host] -> OK

::: details Click to see nginx config

```nginx

#PROXY-START/

location ^~ /
{
    proxy_pass http://127.0.0.1:8707;
    proxy_set_header Host 127.0.0.1;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header REMOTE-HOST $remote_addr;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection $connection_upgrade;
    proxy_http_version 1.1;
    # proxy_hide_header Upgrade;

    add_header X-Cache $upstream_cache_status;
    #Set Nginx Cache

    set $static_fileHPQ3IV8j 0;
    if ( $uri ~* "\.(gif|png|jpg|css|js|woff|woff2)$" )
    {
        set $static_fileHPQ3IV8j 1;
        expires 1m;
    }
    if ( $static_fileHPQ3IV8j = 0 )
    {
        add_header Cache-Control no-cache;
    }
}
#PROXY-END/
```

:::

![aapanel-proxy-1](/other/hipy-build/hipy-proxy-bt-1.png)
![aapanel-proxy-2](/other/hipy-build/hipy-proxy-bt-2.png)

## 4. Issue

Some problems may occur due to different performance and architecture per machine and script compatibility.

### 4.1. Install error

In order to better experience the script to do the limitations, generally do not support mainstream commands are generally small foreign garbage cpu or for niche server operating system.

```bash
# Annotate the corresponding test code with # at the top

# 1. Download the script
# 2. Modify the script
# 3. Run the modified script

check_depends() {
#	check_bash  # check bash
#   check_stdin # check stdin
#   check_root  # check root
#	check_arch  # check arch
}

# Timed task writing is not supported
# CRON_COMMAND="*/30 * * * * docker restart hipy-sniffer"
# (crontab -l ; echo "$CRON_COMMAND") | crontab -
```

### 4.2. First time login prompts account password error

```bash
docker exec hipy-fastapi python3 initial_data.py
```

### 4.3. The first login prompt request timeout [timeout of 5000ms exceeded]

> Most of them don't know the ip of their own machines, which leads to the setting of the front and back end communication address setting error and thus can't get through.

- Method1

  ```bash
  [1] cd {install directory}
  [2] cat .env # Get current API_DOMAIN domain name.
  [3] old_domain={previous get domain}
  [4] new_domain={new domain} # Must start with 'http://' or 'https://' with '/'
  [5] sed -i "s#$old_domain#$new_domain#g" $(grep -rl "$old_domain" "./resources/vue") # Modify all communication fields
  [6] sed -i "s#^API_DOMAIN=.*\$#API_DOMAIN=$new_domain#" ".env" # Modify .env file API_DOMAIN field
  [7] docker-compose restart # Restart the container Some machines may be docker compose restart
  ```

- Method2

  ```bash
  [1] cd {install directory}
  [2] vi .env API_DOMAIN字段 # Must start with 'http://' or 'https://' with '/'
  [3] Execute script
  ```

### 4.4. Sniffer activation failed

```bash
curl http://127.0.0.1:5708/active
```

### 4.5. Infinite restart of hipy-fastapi containers

- Database password error(Generated password compatibility issues)
  - Stop the docker orchestration file, manually change the password in the POSTGRES_PASSWORD field of .env, delete the resources/postgres/ folder, restart the docker orchestration file.
- File not found(main.py not found)
  - Manually pull the files into the project path `./resources/fastapi`

### 4.6. Executing the upgrade script prompts for a .env that cannot be found

- If the docker container is not started, run `docker-compose up -d` or `docker compose up -d` in the installation directory to determine the `docker-compose` version for yourself
- If you are not using the one-click script, uninstall the existing one and use the one-click script to install it.

### 4.7. Online preview doesn't work

The latest version has been solved, update yourself.

Also the data source key must start with `hipy_t4` or `drpy_t4`.

### 4.8. Replace the sniffing container chrome

The scripts installed are all Chromium.

The x86_64 architecture supports Chrome, the arm architecture does not support Chrome only Chromium.

```bash
docker exec -it hipy-sniffer bash # Enter container
apt update # Update source
wget -O google-chrome-104.deb -c https://www.slimjet.com/chrome/download-chrome.php?file=files%2F104.0.5112.102%2Fgoogle-chrome-stable_current_amd64.deb # Download deb package
dpkg -i google-chrome-104.deb # Install deb package
google-chrome --version # View Version e.g. Google Chrome 104.0.5112.101
vi quart_config.json # Modify USE_CHROME parameter to true
exit # Exit container
docker restart hipy-sniffer # Restart container
```

### 4.9. Sniifer container enabled to display does not support limited content [Your kernel does not support swap limit capabilities or the cgroup is not mounted. Memory limited without swap.]

![error-swap](/other/hipy-build/ubuntu-error-swap-1.png)

The Ubuntu kernel does not have the swap limit enabled, the way to enable it is as follows (Centos self Baidu related commands)

```bash
echo 'GRUB_CMDLINE_LINUX="cgroup_enable=memory swapaccount=1"' >> /etc/default/grub # Add Configuration
update-grub # Regenerate grub
reboot # Restart takes effect
```

![resolve-swap](/other/hipy-build/ubuntu-resove-swap-1.png)

### 4.10. WSL2 network problem [wsl2 curl content is normal, meanwhile wsl2 and host get ip same, not accessible on host]

win10: [click to see document](https://github.com/HobaiRiku/wsl2-auto-portproxy)

win11: [click to see document](https://blog.csdn.net/qq_43283565/article/details/137374497)

### 4.11. Docker compose issue [`docker-compose` or  `docker compose`]

[Document](https://docs.docker.com/compose/install/linux/)

|            | V1             | V2             |
| ---------- | -------------- | -------------- |
| standalone | docker-compose | docker-compose |
| plugin     |                | docker compose |

`docker compose` newer project, used to migrate `compose` with the rest of the `docker` project to a branch of the Go, [`docker/composev2`] repository.

The `docker-compose` original python project, [v1 of the `docker-composeocker/compose repo`] has now been deprecated and development has moved to v2.

### 4.12. Manually install docker

```bash
bash <(curl -sSL https://linuxmirrors.cn/docker.sh)
```

### 4.13. Manual construction docker hub

Policy reasons for not being able to pull mirrors directly.

1. [Cloudflare Workers](https://www.jcebing.com/archives/ji-yu-cloudflare-workers-da-jian-docker-hub-jing-xiang-jia-su)
2. [public-image-mirror(crproxy)](https://github.com/DaoCloud/crproxy/tree/master/examples/default)
3. [image-mirror(github actions)](https://github.com/imdingtalk/image-mirror)
4. [aityp](https://docker.aityp.com/)
5. [1ms](https://docker.1ms.run/)
6. docker proxy
   - Method1

   ```bash
   # You need to replace the contents of the following proxy information in the brackets <> with your own proxy server information

   [1] mkdir -p  /etc/systemd/system/docker.service.d/
   [2] cat <<EOF >  /etc/systemd/system/docker.service.d/http-proxy.conf
       [Service]
       Environment="HTTP_PROXY=http://<user>:<password>@<domain>:<port>"
       Environment="HTTPS_PROXY=http://<user>:<password>@<domain>:<port>"
       Environment="NO_PROXY=localhost,127.0.0.1,.coding.net,.tencentyun.com,.myqcloud.com,harbor.bsgchina.com"
       EOF
   [3] systemctl daemon-reload && systemctl restart docker
   ```

   - Method2

   ```bash
   # You need to replace the contents of the following proxy information in the brackets <> with your own proxy server information

   [1] vi /etc/docker/daemon.json
   {
       "registry-mirrors": ["..."],
       "proxies": {
           "http-proxy": "http://<user>:<password>@<domain>:<port>",
           "https-proxy": "http://<user>:<password>@<domain>:<port>",
           "no-proxy": "<registry.domain>"
       }
   }
   [2] systemctl daemon-reload && systemctl restart docker
   ```

7. Docker mirror

   ```bash
   [1] vi /etc/docker/daemon.json
   {
       "registry-mirrors": [
           "https://dockerproxy.net",
           "https://docker.1panel.live",
           "https://registry.cn-hangzhou.aliyuncs.com",
           "https://backbone.littlediary.cn:49443",
           "https://docker.m.daocloud.io",
           "https://docker.1ms.run"
       ]
   }
   [2] systemctl daemon-reload && systemctl restart docker
   ```

### 4.14. hipy-fastapi container missing git environment solution

```bash
docker exec hipy-fastapi apt install git -y > /dev/null 2>&1
```

### 4.15. Github data pull failed

The default use of the mirror site pull, such as failure, please replace their own script in the mirror site or source github address

- mirror
  - https://gitclone.com
  - https://github.ur1.fun
- hosts
  - [Licoy GitHub Hosts](https://hosts.gitcdn.top)
  - [ineo6 GitHub Hosts](https://gitlab.com/ineo6/hosts/-/raw/master/hosts)

### 4.16. How to upgrade the old data smuggled warehouse

Only some Premium users have invite access.

```bash
[1] cd `install directory`
[2] vi .env
    GIT_PERMIT=1   # 1:enabled 0:disabled
    GIT_USER=xxxx  # GitHub Username
    GIT_TOKEN=xxxx # GitHub Token[repo permission]
[3] Execute upgrade
```

## 5. Other

- [ ] Linux Basics: [click to see document](https://linux.vbird.org/)
- [ ] Docker Basics: [click to see document](https://www.cnblogs.com/jojoword/p/11078525.html)
