---
layout: post
title: "Installing MySQL on MacOS"
tags: MySQL
---

Oracle's MySQL is a popular open source relational database management system that is based on Structured Query Language (SQL). Installing MySQL on an Mac is easier than you might expect, particularly if you use the native installation package instead of the TAR package, which requires access and changes to the command line in Terminal mode[^ins].

1. Download the latest version of MySQL for MacOS from the [MySQL website](https://dev.mysql.com/downloads/mysql/). Select the native package DMG archive version, instead of the TAR version.

<!-- more -->

2. Double-click the .dmg icon to mount the archive, which contains the installer.

3. Double-click the .pkg icon for the MySQL package installer.

4. Click `Continue`, `Agree`, `Install` to execute the installation using all defaults.

5. __Record the temporary password__ that displays during the installation process (`v7xtQSB?kgSj`). This password cannot be recovered. You must save it. After you log in to MySQL, you'll be prompted to create a new password.

6. Press `Close` to complete the installation.

Now the MySQL server is installed on the Mac, but it does not load by default. Start MySQL by clicking `Start MySQL Server` using the MySQL Preference Pane, which was installed during the default installation, from System Preferences. You can configure MySQL to automatically start when you turn on your computer using the MySQL Preference Pane.


[^ins]: ["Installing MySQL on a Mac is Easier Than You Think"](https://www.thoughtco.com/installing-mysql-on-mac-2693866), ThoughtCo.