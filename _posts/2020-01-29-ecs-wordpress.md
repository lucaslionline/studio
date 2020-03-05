---
layout: post
title: "中國國際太陽能十項全能競賽官方網站"
subtitle: "Official Website of Solar Decathlon China"
categories: development
tags: Web
link: http://sdchina.org.cn
---


#### 阿里云ECS

##### 1. 服务器购买[^ecs]

登录阿里云[官网](https://www.aliyun.com)，在“弹性计算”下选择云服务器ECS。阿里云对于不同的账号类型（个人或企业）会有不同的优惠活动，按需选择即可，初级用户可参考以下配置：

~~~
CPU		2核
内存		4G
操作系统		CentOS 8.0 64位
高效云盘		50 GB
固定带宽		3 Mbps
~~~
<!-- more -->
##### 2. 域名注册及备案

阿里云官网“域名与网站”下选择域名注册，或者直接登录[万网](https://wanwang.aliyun.com)进行域名购买，购买完域名之后建议去实名认证和备案。

> 如果想通过域名访问阿里云的服务器，那域名是必须备案的，无论是个人网站还是企业网站，可通过阿里云的备案系统进行备案操作，一般备案审核需要二十天左右。


##### 3. Web环境配置[^web]

首先安装好可远程访问服务器的终端模拟软件，Windows系统可使用[Xshell](https://www.netsarang.com/en/xshell/)和[Xftp](https://www.netsarang.com/en/xftp/)，可在其[官网](https://www.netsarang.com/en/free-for-home-school/)下载免费版，Mac系统可使用[Termius](https://www.termius.com)。设置好阿里云服务器的用户名和密码，远程连接服务器。

接下来采用LNMP一键安装包来配置网站所需要的Nginx, MySQL, PHP环境，可去[官网](https://lnmp.org)下载最新版，或在Xshell/Termius中通过`wget`下载，下面以LNMP1.6版为例:

~~~
[root@***]# wget http://soft.vpser.net/lnmp/lnmp1.6.tar.gz
~~~

解压：

~~~
[root@*** ~]# tar -zxvf lnmp1.6.tar.gz
~~~

进入lnmp目录：

~~~
[root@*** ~]# cd lnmp1.6
~~~

安装：

~~~
[root@*** ~]# ./install.sh
~~~

接下来出现安装界面，按照提示选择所需的MySQL版本，设置密码（默认密码为root），选择所需的PHP版本等，基本上可以一路回车，按默认选项安装即可，安装过程大概需要半小时。

> 此安装过程安装完成便也启动了Ngnix, MySQL, PHP-FPM，并加入了开机启动项，即使重启服务器，也不需要再单独手动开启相关的服务了。

此时在浏览器中输入ip地址`http://ip`（例如`http://60.205.225.135`）便可以访问了。

---

#### WordPress安装

##### 1. 下载WordPress

可以去WordPress官网（[英文](https://wordpress.org)、[中文](https://cn.wordpress.org)）下载，也可通过`wget`直接下载。

进入根目录上一级目录：

~~~
[root@*** ~]# cd /home/wwwroot
~~~

将default文件夹重命名为old：

~~~
[root@*** wwwroot]# mv default old
~~~

下载最新版WordPress安装包：

~~~
[root@*** wwwroot]# wget https://wordpress.org/latest.tar.gz
~~~

解压WordPress安装包：

~~~
[root@*** wwwroot]# tar -zxvf latest.tar.gz
~~~

将wordpress文件夹重命名为default：

~~~
[root@*** wwwroot]# mv wordpress default
~~~

##### 2. 目录授权

目录以及目录下的文件授权：

~~~
[root@*** wwwroot]# chown -R 755 /home/wwwroot
~~~

将目录的所有者分给www组下的www用户：

~~~
[root@*** wwwroot]# chown -R www:www /home/wwwroot
~~~

##### 3. 创建数据库

返回根目录：

~~~
[root@*** wwwroot]# cd
~~~

登录数据库：

~~~
[root@*** ~]# mysql -u root -p
~~~

输入密码，默认的话就是root，否则就是自己之前设置的那个。然后创建数据库，命名为wordpress：

~~~
mysql> create database wordpress;
~~~

查看一下数据库是否创建成功：

~~~
mysql> show databases;
~~~

退出：

~~~
mysql> \q;
~~~

##### 4. 配置WordPress

这时候可以通过浏览器输入ip地址来访问网站：`http://ip`（例如`http://60.205.225.135`），浏览器将自动跳转到`http://60.205.225.135/wp-admin/setup-config.php`，这就是WordPress的配置页面了。

> 如果遇到Nginx 502 Bad Gateway错误，这是php服务进程出了问题，可尝试重启php服务来解决，重启代码如下：

~~~
/etc/init.d/php-fpm restart
~~~

---

#### 双语网站

##### 1. 主站点[^bil]

接上一步完成主站点的配置（假设主站点为英文）：

~~~
Database Name	wordpress (上一步中创建的数据库名)
Username	root (数据库用户名，默认值root)
Password	**** (数据库密码，默认值root)
Database Host	localhost (数据库主机，默认值localhost)
Table Prefix	wp_ (表前缀必须与二级站点区分开)
~~~

填写完成后点击`Submit`，然后`Run the Install`，进行管理员设置：

~~~
Site Title 	站点名称
Username	管理员用户名，默认值admin
Password	管理员登录密码，自己设置
Your Email	管理员邮箱
Serch Engine Visibility	是否禁止搜索引擎检索此网站，默认不勾选
~~~

点击`Install WordPress`开始安装，安装完成后即可使用管理员用户名和密码登录管理后台。

> 通过浏览器访问`http://ip/wp-admin`进入管理员登录页面。

##### 2. 二级站点

以子目录的方式建立二级站点（假设二级站点为中文），首先用Xftp工具进入WordPress的安装目录`/home/wwwroot/default`，WordPress文件一般包括wp-admin, wp-content, wp-includes等。在此`default`文件夹下创建子目录文件夹并命名为`cn`（网站域名将显示为`http://www.xxx.com/cn`，也可根据实际情况命名为en, jp, fr等其它语言的简写或其它任意名称）。

接下来将WordPress安装文件（wp-admin, wp-content, wp-includes等）复制到新建的子目录`cn`下。建议去中文官网下载中文安装文件，省去以后安装语言包，如果是直接复制主站点的WordPress文件，注意不要复制wp-config.php这个文件。

完成以上步骤，即可在浏览器中打开网站`http://ip/cn`开始配置WordPress。

~~~
数据库名		wordpress (与主站点一致)
用户名		root (与主站点一致)
密码		**** (与主站点一致)
数据库主机	localhost (与主站点一致)
表前缀		wpcn_ (务必与主站点区分开)
~~~

数据库名、用户名、密码等和主站点填写内容一致，但表前缀一定要和其他站点区分开，如果主站点默认是wp_，那么子站点可以填wp1_ 、wpcn_等等。接下来就可按照之前的安装步骤完成二级站点的设置了。

> 通过浏览器访问`http://ip/cn/wp-admin`进入管理员登录页面。


[^ecs]: ["阿里云+wordpress搭建个人博客网站"](https://www.cnblogs.com/qianguyihao/p/4965163.html), 千古壹号.

[^web]: ["阿里云ECS服务器+WordPress快速搭建个人博客"](https://blog.csdn.net/li_Dijkstra/article/details/79408595), li_Dijkstra.

[^bil]: ["用wordpress建中英文双语及多语言切换的网站"](https://www.jianshu.com/p/bbd5ff1c8f9e), 翌子涵.
