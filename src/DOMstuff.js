import { getQuoteByTheme } from "./apiRequests";

function renderQuote(quoteText, author) {
  const quoteTextElem = document.querySelector(".quote-text");
  const authorElem = document.querySelector(".author-text");
  quoteTextElem.textContent = quoteText;
  authorElem.textContent = author;
}

function buttonAnimationInit() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.style.boxShadow = "0 3px #4a4e69";
    button.addEventListener("mousedown", (e) => {
      e.target.style.boxShadow = "none";
      e.target.style.transform = "translateY(3px)";
    });
    button.addEventListener("mouseleave", (e) => {
      e.target.style.boxShadow = "0 3px #4a4e69";
      e.target.style.transform = "none";
    });
    button.addEventListener("mouseup", (e) => {
      e.target.style.boxShadow = "0 3px #4a4e69";
      e.target.style.transform = "none";
    });
  });
}

function buttonListenersInit() {
  const randomButtons = document.querySelectorAll(".random-generate-btn");
  randomButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      getQuoteByTheme(button.value, true).then((response) => {
        renderQuote(response[0], response[1]);
      });
    });
  });
  const optionGenerateBtn = document.querySelector(".quote-option-generate");
  optionGenerateBtn.addEventListener("click", (e) => {
    const quoteThemeElem = document.querySelector("#quote-theme");
    if (quoteThemeElem.value < 1 || quoteThemeElem > 12) {
      alert("Длина темы должна быть больше 1 и меньше 12.");
      return;
    }
    getQuoteByTheme(quoteThemeElem.value, false).then((response) => {
      renderQuote(response[0], response[1]);
    });
  });
}

export { renderQuote, buttonAnimationInit, buttonListenersInit };
