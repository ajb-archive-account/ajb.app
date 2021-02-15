class Nav extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
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
                    </div>
                </div>
            </div>
        </header>
    `;
  }
}

customElements.define('navcomp', Nav);
