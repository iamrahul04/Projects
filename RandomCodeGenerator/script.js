const quote = document.getElementById("quote");
const author = document.getElementById("author");

//used random quote generator githubLink form @well300
const getquote = "https://quotes-api-self.vercel.app/quote";
async function api_url(url) {
  const store = await fetch(url);
  const data = await store.json();
  quote.innerHTML = data.quote;
  author.innerHTML = data.author;
}
api_url(getquote);

function tweet() {
  window.open(
    (href =
      "https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      " -/ " +
      author.innerHTML)
  );
}
