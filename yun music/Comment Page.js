var div = new Array();
var date = new Date();
var i = n = 0;
var comment, p, body;

function new_card() {
    for (i = 0; i < 7; i++) div[i] = document.createElement("div");
    body = document.getElementById("b");
    div[0].setAttribute("class", "card");
    div[1].setAttribute("class", "header");
    div[2].setAttribute("class", "avater");
    div[3].setAttribute("class", "info");
    div[4].setAttribute("class", "floor");
    div[5].setAttribute("class", "date");
    div[6].setAttribute("class", "content");
    body.appendChild(div[0]);
    div[0].appendChild(div[1]);
    div[1].appendChild(div[2]);
    div[1].appendChild(div[3]);
    div[3].appendChild(div[4]);
    div[3].appendChild(div[5]);
    div[0].appendChild(div[6]); //建立一个新的card
}
var year = new Array();
var month = new Array();
var day = new Array();
var user = new Array();
var words = new Array();

function store_value() {
    comment = document.getElementById("new_com");
    words = comment.value;
    user[n] = words;
    year[n] = date.getFullYear();
    month[n] = date.getMonth() + 1;
    day[n] = date.getDay();
}

function show() {
    div[4].innerHTML = '第' + (n + 1) + '楼';
    div[5].innerHTML = year[n] + '年' + month[n] + '月' + day[n] + '日';
    div[6].innerHTML = user[n];
    n++;
}

function clear() {
    comment = document.getElementById("new_com"); //发表后清除文本框里的值
    comment.value = "";
}
var standard = /^\s*$/;

function new_com() {
    store_value();
    if (standard.test(comment.value)) alert('评论不能为空');
    else {
        new_card();
        show();
        clear();
    }
}