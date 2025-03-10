document.addEventListener("DOMContentLoaded", function () {
    const movieContainer = document.getElementById("movie-container");
    const movieForm = document.getElementById("movie-form");
    const movieList = document.getElementById("movie-list");

    // Load movies from localStorage
    let movies = JSON.parse(localStorage.getItem("movies1")) || [];

    function displayMovies() {
        if (movieContainer) {
            movieContainer.innerHTML = "";
            movies.forEach((movie) => {
                const movieDiv = document.createElement("div");
                movieDiv.classList.add("movie");
                movieDiv.innerHTML = `
                    <img src="${movie.cover}" alt="${movie.title}" onclick="window.open('${movie.link}', '_blank')">
                    <p>${movie.title}</p>
                `;
                movieContainer.appendChild(movieDiv);
            });
        }

        if (movieList) {
            movieList.innerHTML = "";
            movies.forEach((movie, index) => {
                const li = document.createElement("li");
                li.innerHTML = `
                    ${movie.title}
                    <button onclick="removeMovie(${index})">Remove</button>
                `;
                movieList.appendChild(li);
            });
        }
    }

    // Handle movie submission
    if (movieForm) {
        movieForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const title = document.getElementById("title").value;
            const coverUrl = document.getElementById("cover").value;
            const coverFile = document.getElementById("coverFile").files[0];
            const link = document.getElementById("link").value;

            let cover = coverUrl;
            if (coverFile) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    cover = e.target.result;
                    movies.push({ title, cover, link });
                    localStorage.setItem("movies1", JSON.stringify(movies));
                    displayMovies();
                };
                reader.readAsDataURL(coverFile);
            } else {
                movies.push({ title, cover, link });
                localStorage.setItem("movies1", JSON.stringify(movies));
                displayMovies();
            }

            document.getElementById("title").value = "";
            document.getElementById("cover").value = "";
            document.getElementById("coverFile").value = "";
            document.getElementById("link").value = "";
        });
    }

    // Remove movie function
    window.removeMovie = function (index) {
        movies.splice(index, 1);
        localStorage.setItem("movies1", JSON.stringify(movies));
        displayMovies();
    };

    displayMovies();
});
