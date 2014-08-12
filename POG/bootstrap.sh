#!/usr/bin/env bash

#################################################################################### 
# ADD NEW REPOSITORIES 
#################################################################################### 
apt-get update
apt-get install -y software-properties-common python-software-properties

#################################################################################### 
# INSTALL BASE PACKAGES
#################################################################################### 
apt-get install -y build-essential openssl libreadline6 libreadline6-dev
apt-get install -y libcurl4-gnutls-dev libexpat1-dev gettext libz-dev libssl-dev
apt-get install -y g++ make 
apt-get install -y curl unzip
apt-get install -y git

#################################################################################### 
# INSTALL PHP PACKAGES
####################################################################################
apt-get install -y apache2
export DEBIAN_FRONTEND=noninteractive
apt-get install -y php5 libapache2-mod-php5
apt-get install -y php5-mysql php5-curl php5-gd php5-intl php-pear php5-imagick php5-imap php5-mcrypt php5-memcache 
apt-get install -y php5-ming php5-ps php5-pspell php5-recode php5-snmp php5-sqlite php5-tidy php5-xmlrpc php5-xsl
apt-get install -y libjpeg-turbo-progs optipng pngquant
service apache2 restart

#################################################################################### 
# UPDATE SYSTEM
#################################################################################### 
apt-get update -y
apt-get upgrade -y

#################################################################################### 
# CONFIGURE PROJECT DIRETORIES
#################################################################################### 
rm -rf /var/www

ln -fs /vagrant/apresentacao /var/www


