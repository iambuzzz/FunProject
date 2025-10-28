# 🎮 FunPlace - A Collection of Web Games & Apps

This is a portfolio project by @mbujWebDev, hosting a collection of small, interactive web games and applications. It is built with PHP, JavaScript, and Bootstrap, and deployed on Render using Docker.

## 🚀 Live Demo

You can play with the live version of this project deployed on Render:

**[https://funplace.onrender.com/](https://funplace.onrender.com/)**

---

## 📸 Project Gallery

| Moving Eye Emoji |Simon Says|
| :---: | :---: |
| ![Moving Eye Emoji](SCREENSHOTS%20OF%20WEBPAGE/Screenshot%202024-05-07%20181831.png) | ![Simon Says](SCREENSHOTS%20OF%20WEBPAGE/Screenshot%202024-05-07%20181842.png) |

| Random Color Picker | Tic Tac Toe |
| :---: | :---: | 
| ![Random Color Picker](SCREENSHOTS%20OF%20WEBPAGE/Screenshot%202024-05-07%20181853.png)| ![Tic Tac Toe](SCREENSHOTS%20OF%20WEBPAGE/Screenshot%202024-05-07%20181908.png) | 

| Moving Eye Emoji |Simon Says|
| :---: | :---: |
| ![Moving Eye Emoji](SCREENSHOTS%20OF%20WEBPAGE/colorpicker.png) | ![Simon Says](SCREENSHOTS%20OF%20WEBPAGE/simon.png) |

| Random Color Picker | Tic Tac Toe |
| :---: | :---: | 
| ![Random Color Picker](SCREENSHOTS%20OF%20WEBPAGE/color.png)| ![Tic Tac Toe](SCREENSHOTS%20OF%20WEBPAGE/sc_tic.png) |  

|About Us Page | Contact Us Page |
| :---: | :---: |
| ![About Us Page](SCREENSHOTS%20OF%20WEBPAGE/Screenshot%202024-05-07%20181921.png) | ![Contact Us Page](SCREENSHOTS%20OF%20WEBPAGE/Screenshot%202024-05-07%20181931.png) |

---

## ✨ Features

This project includes several mini-applications:

* **Moving Eye Emoji:** An interactive emoji whose eyes follow your mouse pointer.
* **Simon Says:** A classic memory game to test and enhance your memorization power.
* **Random Color Picker:** A tool to generate random RGB colors.
* **Tic Tac Toe:** The classic 2-player game.
* **About Us Page:** A static page describing the developer.
* **Contact Form:** A functional contact form that securely submits user data to a database.
* **Fully Responsive:** Built with Bootstrap 5 to look great on all devices.

---

## 🛠️ Tech Stack

* **Front-End:** HTML5, CSS3, JavaScript
* **Framework:** Bootstrap 5
* **Back-End:** PHP
* **Database:** PostgreSQL (for the contact form)
* **Deployment:** Docker & [Render](https://render.com)

---

## 📦 Deployment

This project is deployed on Render as a **Web Service** using a **Docker** environment.

* The `Dockerfile` configures a `php:8.2-apache` image.
* It installs the `pdo_pgsql` PHP extension to allow PHP to communicate with the PostgreSQL database.
* The application is connected to a free-tier PostgreSQL database also hosted on Render.
* Database credentials (host, user, password, name) are stored securely as **Environment Variables** on Render and are accessed by `userinfo.php`.

---
