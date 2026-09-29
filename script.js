const cover = document.getElementById("cover");

const pages = [
    document.querySelector(".page-1"),
    document.querySelector(".page-2"),
    document.querySelector(".page-3")
];

let currentPage = 0;

function openBook() {
    cover.classList.add("flipped");
    currentPage = 0;

    const music = document.getElementById("bgMusic");

    if (music) {
        music.volume = 0.5;

        music.play().catch(() => {
            console.log("Musik belum bisa diputar.");
        });
    }
}

function closeBook() {
    pages.forEach(page => {
        page.classList.remove("flipped");
    });

    cover.classList.remove("flipped");
    currentPage = 0;
}

pages.forEach(page => {
    page.addEventListener("click", function (e) {
        if (e.target.tagName === "BUTTON") {
            return;
        }

        if (!page.classList.contains("flipped")) {
            page.classList.add("flipped");
            currentPage++;
        }
    });
});

document.addEventListener("keydown", function (e) {

    if (e.key === "ArrowRight" && currentPage < pages.length) {
        pages[currentPage].classList.add("flipped");
        currentPage++;
    }

    if (e.key === "ArrowLeft" && currentPage > 0) {
        currentPage--;
        pages[currentPage].classList.remove("flipped");
    }

});