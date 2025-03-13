let navbarHtml = `<nav class="navbar navbar-expand-lg">
        <div class="container">
            <a class="navbar-brand text-white" href="index.html">
             <i class="fas fa-pen-nib fa-3x mb-3 fs-1 text-warning"></i>QuickCalligraphy</a>
            <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link" href="#" id="menuDropdown" data-bs-toggle="dropdown">Menu</a>
                        <ul class="dropdown-menu" aria-labelledby="menuDropdown">
                            <li><a class="dropdown-item" href="arabic.html">Arabic Calligraphy</a></li>
                            <li><a class="dropdown-item" href="indic.html">Indic Calligraphy</a></li>
                            <li><a class="dropdown-item" href="greek.html">Greek Calligraphy</a></li>
                        </ul>
                    </li>
                    <li class="nav-item"><a class="nav-link" href="about.html">About Us</a></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link" href="#" id="categoriesDropdown" data-bs-toggle="dropdown">Categories</a>
                        <ul class="dropdown-menu" aria-labelledby="categoriesDropdown">
                            <li><a class="dropdown-item" href="kids.html">For Kids</a></li>
                            <li><a class="dropdown-item" href="elders.html">For Elders</a></li>
                        </ul>
                    </li>
                    <li class="nav-item"><a class="nav-link" href="gallery.html">Gallery</a></li>
                    <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
                    <li class="nav-item"><a class="nav-link" href="feedback.html">Feedback</a></li>
                </ul>
            </div>
        </div>
    </nav>`
	let navbar = document.getElementById("navbar")
	navbar.innerHTML = navbarHtml