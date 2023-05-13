const projects = [
    {projectName: 1},
    {projectName: 2},
    {projectName: 3},
    {projectName: 4}
]

projects.forEach(x => {
    const projectContainer = document.getElementById('projectContainer')
    const app = document.createElement('div')
    app.className = "card mt-2"
    app.style = "width: 16rem"
    app.innerHTML = `
        <img class="card-img-top" src="img/1200px-Square_gray.svg.png">
        <div class="card-body">
            <h5 class="card-title">Project ${x.projectName}</h5>
            <p class="card-text overflow-auto d-none d-md-flex" style="height: 6rem;">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga ab excepturi blanditiis numquam voluptates dolores, ex fugiat qui. Corrupti, aliquid.
            </p>
            <div class="container">
                <div class="row">
                    <a href="#" class="btn btn-secondary col mx-1">
                        <i class="fa-brands fa-github fa-lg"></i>
                    </a>
                    <a href="#" class="btn btn-secondary col mx-1">
                        <i class="fa-solid fa-link fa-lg"></i>
                    </a>
                </div>
            </div>
        </div>
    `
    projectContainer.append(app)
})

const navbar = document.querySelector('nav')

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 0) {
    navbar.classList.add("navbar-dark")
    navbar.classList.add("bg-dark")
    navbar.classList.remove("navbar-light")
    navbar.classList.remove("bg-light")
  } else {
    navbar.classList.add("navbar-light")
    navbar.classList.add("bg-light")
    navbar.classList.remove("navbar-dark")
    navbar.classList.remove("bg-dark")
  }
})