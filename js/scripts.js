(function () {
    let width_web = document.body.clientWidth;
    // let center = document.getElementById('center');
    // let center_active_left = document.getElementsByClassName("center-active-left")[0];
    // let left = document.getElementById('left');
    let menu_btn_top = document.getElementsByClassName("top-nav-button")[0];
    let top_nav_container = document.getElementById("top-nav-container");
    let menu_btn_top_flag = 1;
    let article_list_item_container = document.getElementById("article-list-item-container");


    // // 页面初始左菜单状态
    // if (width_web < 785 && center.className == 'center-active-left') {
    //     center.className = "";
    // }

    // // center居中
    // if (width_web > 780 && center_active_left) {
    //     center.style.width = `${width_web - 250}px`;
    // }
    // window.onresize = function () {
    //     width_web = document.body.clientWidth;
    //     if (width_web > 780 && center_active_left) {
    //         center.style.width = `${width_web - 250}px`;
    //     }
    // }

    // 返回顶部
    window.onscroll = function () { scrollFunction() };
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("top-btn").style.display = "block";
        } else {
            document.getElementById("top-btn").style.display = "none";
        }
    }
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    // 菜单按钮
    if (typeof menu_btn_top !== 'undefined') {
        // top_nav_container.classList.add("top_nav_container");
        menu_btn_top.addEventListener('click', function () {
            if (menu_btn_top_flag % 2 == 1) {
                top_nav_container.classList.remove("top-nav-container");
                menu_btn_top_flag += 1;
            } else {
                top_nav_container.classList.add("top-nav-container");
                menu_btn_top_flag += 1;
            }
        });
    }
}).call(this);





