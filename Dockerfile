# Use an official PHP 8.2 image with the Apache web server
FROM php:8.2-apache

# Copy all your project files
COPY . /var/www/html/