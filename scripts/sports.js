apiKey = `42d166c6121c4770914a02777f34b8db`;
const url1 = `https://newsapi.org/v2/top-headlines?category=sports&apiKey=${apiKey}`
fetch(url1).then((res) => {
    return res.json()
})
    .then((data) => {
        data.articles.forEach(article => {
            if (article.title == null || article.author == null || article.description == null || article.urlToImage == null) {
                return
            }
            document.querySelector(".news1").innerHTML +=
                `
        <div class="news-box">
            <div class="title"><a target="_blank" href=${article.url}>${article.title}</a></div><br>
            <div class="author">${article.author}</div><br>
            <div class="desc">${article.description}</div>
            <img class="news-image" src=${article.urlToImage}>
        </div>
        `
        })
    })