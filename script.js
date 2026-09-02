const searchInput = document.querySelector(".search-box input");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("input", function () {
    const searchText = searchInput.value.toLowerCase();

    cards.forEach(function (card) {
        const cardName = card.querySelector("h3").textContent.toLowerCase();

        if (cardName.includes(searchText)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});