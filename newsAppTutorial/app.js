const apiKey = '04c09c860eac4acf89db9e7290b312b4';
const mail = document.querySelector('main');

window.addEventListener('load', e => {
    updateNews();
});

async function updateNews() {
    const res = await fetch('https://newsapi.org/v2/everything?q=apple&from=2018-12-04&to=2018-12-04&sortBy=popularity&apiKey=${apiKey}')
    const json = await res.json();

    main.innerHTML = json.articles.map(createArticle).join('\n');
}

function createArticle(articles) {
    return `
        <div class="article">
            <a href="${article.url}">
                <h2>${article.title}</h2>
                <img src="${article.urlToImage}">
                <p>${article.description}</p>
            </a>
        </div>
    `;
}