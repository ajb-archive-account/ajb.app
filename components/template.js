class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />

        <title>ANDY BYERS</title>
        <meta content="web developer" name="title" />
        <meta content="python developer" name="title" />
        <meta content="HTML, CSS, Python, JavaScript, Django" name="keywords" />
        <meta content="Andy Byers" name="developer" />

        <!-- Favicons -->
        <link href="assets/img/favicon.png" rel="icon" />
        <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />

        <!-- Google Fonts -->
        <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Roboto:30,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
            rel="stylesheet"
        />

        <!-- Vendor CSS Files -->
        <link
            href="assets/vendor/bootstrap/css/bootstrap.min.css"
            rel="stylesheet"
        />
        <link href="assets/vendor/icofont/icofont.min.css" rel="stylesheet" />
        <link
            href="assets/vendor/boxicons/css/boxicons.min.css"
            rel="stylesheet"
        />
        <link
            href="assets/vendor/owl.carousel/assets/owl.carousel.min.css"
            rel="stylesheet"
        />
        <link href="assets/vendor/venobox/venobox.css" rel="stylesheet" />
        <link href="assets/vendor/aos/aos.css" rel="stylesheet" />

        <!-- Main CSS File -->
        <link href="assets/css/style.css" rel="stylesheet" />

        <!-- DevIcons -->
        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/konpa/devicon@master/devicon.min.css"
        />
    </head>

    <body>
        <!-- ======= Header ======= -->
        <header id="header" class="fixed-top">
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-xl-9 d-flex align-items-center">
                        <h1 class="logo mr-auto">
                            <a href="index.html">ajb.app</a>
                        </h1>

                        <nav class="nav-menu d-none d-lg-block">
                            <ul>
                                <li class="active">
                                    <a href="index.html">Home</a>
                                </li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#portfolio">Portfolio</a></li>
                                <li><a href="#contact">Contact</a></li>
                                <li>
                                    <a href="/my-cv.html" target="_blank"
                                        >View my CV</a
                                    >
                                </li>
                            </ul>
                        </nav>
                        <!-- .nav-menu -->
                    </div>
                </div>
            </div>
        </header>
        <!-- End Header -->
    `;
  }
}

customElements.define('header-component', Header);
