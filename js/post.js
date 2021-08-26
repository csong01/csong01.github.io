(function () {
    // 文章图片居中
    let article_content_img = document.getElementsByClassName("article-content")[0].getElementsByTagName("img");
    var article_content_img_p = new Array(article_content_img.length)
    // let article_content_img_p;
    for (let i = 0; i < article_content_img.length; i++) {
        article_content_img_p[i] = article_content_img[i].parentNode;
        article_content_img_p[i].classList.add("article-content-img-p");
    }
    // article_content_img_p.classList.add("article-content-img-p");
}).call(this);





