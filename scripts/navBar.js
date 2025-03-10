class navBarCons extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">

        <style>
            /* Custom styles for the dropdown */
            .dropdown-menu {
                position: absolute;
                top: 100%;
                left: 0;
                margin-top: 0; /* Ensure it's flush with the navbar */
                border-radius: 0; /* Optional for a clean, sharp look */
                box-shadow: none; /* Optional, remove the shadow */
                display: none; /* Initially hidden */
                background-color: white; /* Ensure the dropdown has a white background */
                width: 100%; /* Ensure it spans the width of the navbar */
            }

            .dropdown-menu .dropdown-item {
                padding: 10px 15px; /* Padding for dropdown items */
                white-space: nowrap; /* Prevent text from wrapping */
                overflow: hidden; /* Prevent text overflow */
                text-overflow: ellipsis; /* Add ellipsis for overflow text */
            }

            /* Navbar custom height adjustments */
            .navbar {
                height: 50px; /* Adjust navbar height */
                padding: 0;   /* Optional padding adjustment */
                position: relative; /* Ensure positioning context */
            }

            .navbar-nav {
                display: flex;
                margin-left: 70px; /* Default margin for larger screens */
                background-color: white;
                margin-top: 278px;
                transition: margin-left 0.3s ease; /* Smooth transition for margin change */
            }

            .nav-item {
                padding: 0 10px;  /* Optional padding between items */
            }

            .nav-link {
                padding: 10px 15px; /* Adjust padding for navbar links */
            }

            /* Navbar items don't collapse into rows */
            .navbar-collapse {
                display: flex;
                flex-direction: row; /* Force items to stay in a row */
                width: auto; /* Allow the navbar to stay as wide as necessary */
                position: fixed;
            }

            .navbar-toggler {
                top: 50%; /* Center it vertically */
                z-index: 1; /* Ensure it's above the navbar content */
            }

            /* Adding margin-left to navbar brand to ensure space between the brand and the hamburger button */
            .navbar-brand {
                margin-left: 10px; /* Optional: add left margin */
            }

            /* Collapse menu items background */
            .navbar-collapse.collapse.show {
                background-color: white; /* Background color for the collapsed menu */
                position: absolute; /* Position relative to navbar */
                top: 50px; /* Align the dropdown menu right below the navbar */
                width: 100%; /* Full width to align with navbar */
                z-index: 1000; /* Ensure the collapsed menu is above other content */
            }
        </style>

        <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="https://www.linkedin.com/in/anthony-zhu-cs/" target="_blank" style="display: inline-block; width: 40px; border: 0; margin-left: 15px;"> 
                <img src="assets/LinkedInIcon.png" alt="LinkedIn Icon" style="width: 100%; height: 100%; justify-content: center;">
            </a>
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
                        <a class="nav-link" href="skills.html">Skills/Technologies</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="projects.html">Projects</a>
                    </li>
                </ul>
            </div>
        </nav>

        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js"></script>
        `;
    }

    connectedCallback() {
        // Manually initialize Bootstrap collapse functionality for the navbar-toggler
        const navbarToggler = this.shadowRoot.querySelector('.navbar-toggler');
        const navbarCollapse = this.shadowRoot.querySelector('.navbar-collapse');

        navbarToggler.addEventListener('click', () => {
            navbarCollapse.classList.toggle('collapse');  // Toggling 'collapse' class
        });

        // Adding click event listener to manage dropdown toggle
        const dropdownToggle = this.shadowRoot.querySelector('.dropdown-toggle');
        const dropdownMenu = this.shadowRoot.querySelector('.dropdown-menu');

        // Function to adjust navbar margins based on screen width
        const adjustNavbarMargins = () => {
            const navbarNav = this.shadowRoot.querySelector('.navbar-nav');
            const navbarCollapse = this.shadowRoot.querySelector('.navbar-collapse');
            if (window.innerWidth < 992) {
                // For small screens, reduce margin
                navbarNav.style.marginLeft = '70px';
                navbarNav.style.marginTop = '278px';
                navbarNav.style.backgroundColor = '#e3f2fd';
                // navbarCollapse.style.position = 'fixed';
                navbarNav.style.position = 'fixed';
                

            } else {
                // For larger screens, set default margin
                navbarNav.style.marginLeft = '70px';
                navbarNav.style.marginTop = '0px';
                navbarNav.style.backgroundColor = '#e3f2fd';
                navbarCollapse.style.position = 'sticky';
            }
        };

        // Adjust margins on initial load
        adjustNavbarMargins();

        // Adjust margins whenever the window is resized
        window.addEventListener('resize', adjustNavbarMargins);
    }
}

window.customElements.define('custom-nav-bar', navBarCons);
