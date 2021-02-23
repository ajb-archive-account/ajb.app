class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <footer id="footer">
            <div class="container">
                <div class="copyright-wrap d-md-flex py-4">
                    <div class="mr-md-auto text-center text-md-left">
                        <div class="copyright">
                            <strong>Andy Byers</strong>, 2020
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        <a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a>
        <div id="preloader"></div>

        <!-- Vendor JS Files -->
        <script src="assets/vendor/jquery/jquery.min.js"></script>
        <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="assets/vendor/jquery.easing/jquery.easing.min.js"></script>
        <script src="assets/vendor/owl.carousel/owl.carousel.min.js"></script>
        <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
        <script src="assets/vendor/venobox/venobox.min.js"></script>
        <script src="assets/vendor/aos/aos.js"></script>
        <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>

        <!-- Template Main JS File -->
        <script src="assets/js/main.js"></script>
    `;
  }
}

customElements.define('footercomp', Footer);
