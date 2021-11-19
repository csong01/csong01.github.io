let content = document.getElementsByClassName("content")[0];
content.onscroll = function scrollFunction() {
    if (content.scrollTop > 20) {
        document.getElementById("top-btn").style.display = "block";
    } else {
        document.getElementById("top-btn").style.display = "none";
    }
}
function topFunction() {
    content.scrollTop = 0;
}





