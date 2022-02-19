#Laravel-PHP
sudo apt install php-mbstring php-xml php-bcmath

git clone https://github.com/asepready/shamo.git

sudo mv ~/shamo /var/www/shamo
cd /var/www/shamo

sudo chown -R www-data.www-data /var/www/shamo/storage
sudo chown -R www-data.www-data /var/www/shamo/bootstrap/cache

sudo cat << 'EOF' > /etc/nginx/sites-available/shamo
#/etc/nginx/sites-available/shamo

server {
    listen 80;
    server_name 127.0.0.1;
    root /var/www/shamo/public;

    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Content-Type-Options "nosniff";

    index index.html index.htm index.php;

    charset utf-8;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    error_page 404 /index.php;

    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php7.4-fpm.sock;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\.(?!well-known).* {
        deny all;
    }
}
EOF

sudo ln -s /etc/nginx/sites-available/shamo /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx