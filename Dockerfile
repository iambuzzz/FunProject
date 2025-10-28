# Use an official PHP 8.2 image with the Apache web server
FROM php:8.2-apache

# Copy all your project files (PHP, CSS, images, etc.)
# into the web server's public directory
COPY . /var/www/html/

# --- IMPORTANT FOR YOUR CONTACT FORM ---
# Your 'userinfo.php' file will likely need a database.

# If you use PostgreSQL, uncomment the line below (remove the #)
RUN docker-php-ext-install pdo pdo_pgsql