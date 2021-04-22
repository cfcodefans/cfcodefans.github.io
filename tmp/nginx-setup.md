export const meta = {"authors": ["cfcodefans"], 
"tags":["nginx", "backend", "web"], 
"title":"setting up nginx",
"og":{"image":"https://cfcodefans.github.io/res/backend/nginx.png"}
}

<div className="text-center">

![NGINX](https://cfcodefans.github.io/res/backend/nginx.png){height="100"}
</div>

A note from my study about how to setup and use nginx to work as proxy,  so that we could 
bypass [cors](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) limitation to fetch data (disclaimer!).

<!--more-->

# Installation

Here I use centos system, so according to [nginx offical document](https://www.nginx.com/resources/wiki/start/topics/tutorials/install/)
Firstly it needs to add nginx yum repo by creation of file at **/etc/yum.repos.d/nginx.repo**

```bash
# cat /etc/yum.repos.d/nginx.repo
[nginx]
name=nginx repo
baseurl=https://nginx.org/packages/centos/8/x86_64/
gpgcheck=0
enabled=1
```

I was not sure about the version of the server, then found a command that could show some system info

```bash
# hostnamectl
.....
  Operating System: CentOS Linux 8
       CPE OS Name: cpe:/o:centos:centos:8
            Kernel: Linux 4.18.0-240.1.1.el8_3.x86_64
      Architecture: x86-64
```
Therefore, the repo path should be "nginx.org/packages/centos/**8/x86_64**/"

continue with "yum install nginx"

After installation finished, we could check if [systemd](https://wiki.archlinux.org/index.php/systemd#Basic_systemctl_usage) is setup

```bash
# systemctl status nginx
● nginx.service - The nginx HTTP and reverse proxy server
   Loaded: loaded (/usr/lib/systemd/system/nginx.service; disabled; vendor preset: disabled)
   Active: inactive (dead)

.... nginx.service: Unit cannot be reloaded because it is inactive.
```

# Configuration
somewhere in /etc/nginx/nginx.conf, is a directive that includes "sites-enabled"
```
include /etc/nginx/sites-enabled/*;
```
Therefore I could just place my nginx configs in site-enabled folder

### gzip
```
gzip off;
gzip_http_version 1.1;
gzip_comp_level 2;
gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript;
```

# Install [ngx_http_proxy_connect_module](https://github.com/chobits/ngx_http_proxy_connect_module#install) for forward http proxy

Firstly, I have to install some dependencies used by nginx compilation

```bash
#install regular expression lib
apt-get install libpcre3 libpcre3-dev  
#install zlib to support compression
apt-get install zlib1g-dev
#install open-ssl
apt-get install openssl libssl-dev
```

# Check NGINX installed modules

```bash
# List the modules loaded in nginx
nginx -V 2>&1 | tr ' ' '\n' | grep with

--with-cc-opt='-g
--with-ld-opt='-Wl,-Bsymbolic-functions
--with-compat
--with-debug
--with-pcre-jit
--with-http_ssl_module
--with-http_stub_status_module
--with-http_realip_module
--with-http_auth_request_module
--with-http_v2_module
--with-http_dav_module
--with-http_slice_module
--with-threads
--with-http_addition_module
--with-http_gunzip_module
--with-http_gzip_static_module
--with-http_sub_module

```

https://www.cnblogs.com/woshimrf/p/nginx-proxy-rewrite-url.html