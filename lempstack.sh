#Installing PHP and Additional Dependencies
sudo apt update
sudo apt install nginx php-fpm php-mysql php-cli unzip mysql-server
#sudo ufw allow 'Nginx HTTP'

# Downloads composer
cd ~
curl -sS https://getcomposer.org/installer -o /tmp/composer-setup.php

HASH=`curl -sS https://composer.github.io/installer.sig`
#echo $HASH

php -r "if (hash_file('SHA384', '/tmp/composer-setup.php') === '$HASH') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"

sudo php /tmp/composer-setup.php --install-dir=/usr/local/bin --filename=composer

