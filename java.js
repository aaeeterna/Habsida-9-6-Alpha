document.addEventListener("DOMContentLoaded", function () {

    const btn = document.querySelector(".readMore");
    const moreText = document.querySelector(".moreText");

    btn.addEventListener("click", function () {

        const isOpen = moreText.classList.toggle("active");

        if (isOpen) {
            btn.textContent = "Скрыть";
        } else {
            btn.textContent = "Читать далее";
        }

    });

});