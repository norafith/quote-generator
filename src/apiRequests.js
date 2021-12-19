import translate from "translate";

function getQuoteByTheme(insertedTheme, translated = false) {
  if (!insertedTheme) {
    return;
  }

  function quoteFetch(translatedTheme) {
    return fetch(
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
      .catch(() => {
        alert(
          "Если ты это видишь, то, наверное слишком много пользовалась моим сайтиком и теперь нужно подождать) (или же я накосячил и это просто ошибка)"
        );
        return;
      });
  }

  if (!translated) {
    return translate(insertedTheme, { from: "ru", to: "en" }).then(
      (translatedTheme) => {
        return quoteFetch(translatedTheme);
      }
    );
  } else {
    return quoteFetch(insertedTheme);
  }
}

export { getQuoteByTheme };
