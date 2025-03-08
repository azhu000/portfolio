class navBarCons extends HTMLElement {
    constructor(){
        super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

        <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
            <a class="navbar-brand" href="https://www.linkedin.com/in/anthony-zhu-cs/" target="_blank"style="display: inline-block; width: 40px; height: 50px; border: 0;"> 
            <img src="assets/LinkedInIcon.png" alt="LinkedIn Icon" style="width: 100%; height: 100%;"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="aboutme.html">About Me</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contact Me</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Skills/Technologies</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Professional
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                </ul>
            </div>
        </nav>
    `;
    }
}

window.customElements.define('custom-nav-bar', navBarCons)