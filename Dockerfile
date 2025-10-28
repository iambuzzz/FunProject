# Use an official PHP 8.2 image with the Apache web server
FROM php:8.2-apache

# Copy all your project files
COPY . /var/www/html/

# --- IMPORTANT ---
# Install Postgres development libraries *before* installing the PHP extension
RUN apt-get update && apt-get install -y \
    libpq-dev \
    postgresql-client \
    && rm -rf /var/lib/apt/lists/*

# Now, install the Postgres driver
RUN docker-php-ext-install pdo pdo_pgsql

# We don't need the MySQL one
# RUN docker-php-ext-install pdo pdo_mysql