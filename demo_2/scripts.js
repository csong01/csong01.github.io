(function () {
    let width_web = document.body.clientWidth;
    let center = document.getElementById('center');
    let left = document.getElementById('left');
    let menu_btn_left = document.getElementById("menu-btn-left");

    // 页面初始左菜单状态
    if (width_web < 785 && center.className == 'center-active-left') {
        center.className = "";
    }

    // 菜单按钮
    if (typeof menu_btn_left !== 'undefined') {
        menu_btn_left.addEventListener('click', function () {
            center.className = (center.className == 'center-active-left') ? '' : 'center-active-left';
        });
    }
}).call(this);





