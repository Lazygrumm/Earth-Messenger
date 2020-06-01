let title = "Hello World", sub_title = "恭喜您发现一个人网站";
var title_obj = document.getElementById("title_text"), sub_title_obj = document.getElementById("sub_title_text");
var i = 0, j = 0, timer;
function typing() {
    if (i <= title.length) {
        title_obj.innerHTML = title.slice(0, i++);
    } else {
        title_obj.innerHTML = title;
    }
    if (j <= sub_title.length) {
        sub_title_obj.innerHTML = sub_title.slice(0, j++);
    } else {
        sub_title_obj.innerHTML = sub_title;
    }
    if (i > title.length && j > sub_title.length) {
        clearTimeout(timer);
    } else {
        timer = setTimeout("typing()", 100);
    }
}
typing();