!(function () {
    var t = {
        createList: function () {
            for (
                var t = document.getElementsByClassName("article-main"),
                    e = t[0].getElementsByTagName("h2"),
                    n = document.createElement("div"),
                    i = document.createElement("ul"),
                    o = [],
                    l = [],
                    s = [],
                    r = 0;
                r < e.length;
                r++
            )
                e[r].setAttribute("name", e[r].innerHTML), e[r].setAttribute("id", e[r].innerHTML);
            n.setAttribute("class", "article-main-list"),
                n.setAttribute("id", "article-main-list"),
                n.appendChild(i);
            for (var r = 0; r < e.length; r++)
                (o[r] = document.createElement("li")),
                    (l[r] = document.createElement("a")),
                    l[r].setAttribute("href", "#" + e[r].innerHTML),
                    (s[r] = document.createTextNode(e[r].innerHTML)),
                    l[r].appendChild(s[r]),
                    o[r].appendChild(l[r]),
                    i.appendChild(o[r]);
            t[0].appendChild(n);
        },
        setPosition: function () {
            var t = document.getElementById("article-main-list"),
                e = document.getElementsByClassName("article-main"),
                n = this.getScrolltop();
            n > e[0].offsetTop
                ? ((t.style.position = "fixed"),
                  (t.style.left = e[0].offsetLeft - t.offsetWidth - 5 + "px"),
                  (t.style.top = "0px"))
                : ((t.style.position = "absolute"),
                  (t.style.left = -(t.offsetWidth + 5) + "px"),
                  (t.top = "0px"));
        },
        getScrolltop: function () {
            var t = new Number();
            return (t = document.body.scrollTop
                ? document.body.scrollTop
                : document.documentElement.scrollTop);
        },
        init: function () {
            this.createList(), this.setPosition();
        },
    };
    window.karticle = t;
})(),
    karticle.init(),
    (window.onscroll = function () {
        karticle.setPosition();
    });
