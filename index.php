<!DOCTYPE html>
<html lang="en">
<head>
  <title>Fun Games</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="shortcut icon" href="images/work.png" type="image/x-icon">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
<link rel="stylesheet" href="st.css">
</head>
<body>


<div id="up">
    <nav id= "navbar" class="navbar navbar-expand-sm bg-dark navbar-dark " style="background:rgba(0, 0, 0, 0.352) !important">
    <div class="container-fluid">
        <a class="navbar-brand" href="index.php"><img src="images/homee.png" height="22px" width="22px" alt=""> Home</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="about.php"><img src="images/about.png" height="22px" width="22px" alt=""> About Us</a>
            <a class="nav-link active" href="#contact"><img src="images/cont.png" height="22px" width="22px" alt=""> Contact Us</a>
        </div>
        </div>
        <span class="navbar-text">
            <h6 style="color:white!important">@mbujWebDev</h6>
        </span>
    </div>
    </nav>
    <div id="carouselExampleCaptions" class="carousel slide" id="slide">
    <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>

    </div>
    <div class="carousel-inner">
        <div class="carousel-item active">
        <a href="movingeye/index4.php" target="_blank"><img src="images/emoji.jpg" class="d-block w-100 " alt="..." style="height:100vh" id="imgg" ></a>
        <div class="carousel-caption d-none d-md-block">
            <h5>Moving Eye Emoji</h5>
            <p>Track Your Mouse Pointer By An Eye.</p>
        </div>
        </div>
        
        <div class="carousel-item">
        <a href="simonsays/index2.php" target="_blank"><img src="images/s.jpg" class="d-block w-100 " alt="..." style="height:100vh" id="imgg" ></a>
        <div class="carousel-caption d-none d-md-block">
            <h5>Simon Says</h5>
            <p>Enhance Your Memorizing Power.</p>
        </div>
        </div>
        <div class="carousel-item">
        <a href="colorpicker/index3.php" target="_blank"><img src="images/rgb.jpg" class="d-block w-100 " alt="..." style="height:100vh" id="imgg" ></a>
        <div class="carousel-caption d-none d-md-block">
            <h5>Random Color Picker</h5>
            <p>Find Random RGB colors.</p>
        </div>
        </div>
        <div class="carousel-item">
        <a href="tictactoe/index1.php" target="_blank"><img src="images/ttt.jpeg" class="d-block w-100 " alt="..." style="height:100vh" id="imgg" style="position:relative; z-index:10"></a>
        <div class="carousel-caption d-none d-md-block">
            <h5>Tic Tac Toe</h5>
            <p>Play Tic Tac Toe and Enjoy Your Time.</p>
        </div>
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
    </div>
</div>
<section id="bot">
    <section id="aboutus" class="my-5" >
        <div class="my-5">
            <h3 class="text-center">About Us</h3>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-12">
                    <img src="images/myy.jpg" alt="" class="img-fluid myimg">
                </div>
                <div id="iam" class="col-lg-6 col-md-6 col-12">
                    <h2 class="display-4 " >
                        I am Ambuj Jaiswal
                    </h2>
                    <h3 class="">
                        A full-stack Web Developer
                    </h3>
                    <p class="py-3 ">
                    We're a team of skilled full-stack web developers dedicated to crafting exceptional digital solutions. From front-end design to back-end development, we blend creativity with technical expertise to bring your ideas to life. Let's collaborate and build something amazing together.
                    </p>
                    <a href="about.php" class="btn btn-success ">Check More</a>
                </div>
            </div>
            
        </div>
    </section>
    <section id="contact" class="my-5">
        <div class="form-container">
            <h1 id="c">
                Contact Us
            </h1>
            <form action="userinfo.php" method="post">
                <div class="control">
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name" autocomplete="off">
                </div>
                <div class="control">
                    <label for="email">Email</label>
                    <input type="text" name="email" id="email" autocomplete="off">
                </div>
                <div class="control">
                    <label for="mobile">Mobile</label>
                    <input type="text" name="mobile" id="mobile" autocomplete="off">
                </div>
                <div class="control">
                    <label for="comment">Comment</label>
                    <input type="textarea" name="comment" id="comment" autocomplete="off">
                </div>
                <div class="control" id="button">
                    <input type="submit" value="Submit" autocomplete="off">
                </div>
            </form>
        </div>
    </section>

</section>
</body>

</html>
