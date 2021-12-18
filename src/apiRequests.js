import translate from "translate";

function getQuoteByTheme(theme, translated = false) {
  if (!theme) {
    return;
  }

  console.log("working");
  if (!translated) {
    return translate(theme, { from: "ru", to: "en" })
      .then((translatedTheme) =>
        fetch(
          `https://api.quotable.io/search/quotes?query=${translatedTheme
            .trim()
            .toLowerCase()}&fields=content,author&limit=150`,
          {
            method: "GET",
          }
        )
          .then((response) => {
            return response.json();
          })
          .then((response) => {
            let quoteObj =
              response.results[Math.round(Math.random() * response.totalCount)];
            return Promise.all([
              translate(quoteObj.content, {
                to: "ru",
              }),
              translate(quoteObj.author, {
                to: "ru",
              }),
            ]);
          })
      )
      .catch(() => {
        alert(
          "Если ты это видишь, то, наверное слишком много пользовалась моим сайтиком и теперь нужно подождать) (или же я накосячил и это просто ошибка)"
        );
        return;
      });
  } else {
    return fetch(
      `https://api.quotable.io/search/quotes?query=${theme
        .trim()
        .toLowerCase()}&fields=content,author&limit=150`,
      {
        method: "GET",
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        let quoteObj =
          response.results[Math.round(Math.random() * response.totalCount)];
        return Promise.all([
          translate(quoteObj.content, {
            to: "ru",
          }),
          translate(quoteObj.author, {
            to: "ru",
          }),
        ]);
      })
      .catch(() => {
        alert(
          "Если ты это видишь, то, наверное слишком много пользовалась моим сайтиком и теперь нужно подождать) (или же я накосячил и это просто ошибка)"
        );
        return;
      });
  }
}

export { getQuoteByTheme };
