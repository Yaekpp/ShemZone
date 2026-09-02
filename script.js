const searchInput = document.querySelector(".search-box input");
const cards = document.querySelectorAll(".card");

if (searchInput) {
    searchInput.addEventListener("input", function () {
        const searchText = searchInput.value.toLowerCase();

        cards.forEach(function (card) {
            const cardTitle = card.querySelector("h3");

            if (!cardTitle) return;

            const cardName = cardTitle.textContent.toLowerCase();

            if (cardName.includes(searchText)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
}