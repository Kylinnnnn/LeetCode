var audio, play1, pause1, timer2, timer, pic, stylus;
var deg1 = 0,
    deg2 = -30;

function music_play() {
    audio = document.getElementById("music");
    play1 = document.getElementById("play");
    pause1 = document.getElementById("pause");
    audio.volume = 0.5;
    audio.play();
    pic_spin();
    lay_in()
    time_cal();
    play1.style.display = "none";
    pause1.style.display = "block"; //播放音乐时旋转专辑图片，唱针移出，播放图变为暂停图
}

function music_pause() {
    audio.pause();
    lay_out();
    play1.style.display = "block";
    pause1.style.display = "none";
    clearInterval(timer); //音乐暂停或播放完毕时清除定时器，专辑图片停止旋转
    clearInterval(timer3);
    if (audio.ended) {
        line.style.width = '0%';
        min_now = sec_now = 0;
    }
}

function pic_spin() {
    pic = document.getElementById("album");
    timer = setInterval(function() {
        pic.style.transform = 'rotate(' + deg1 + 'deg)';
        deg1 += 0.3;
        if (deg1 > 360) deg1 = 0;
    }, 10)
} //旋转专辑图片

function lay_out() {
    stylus = document.getElementById("stylus");
    timer2 = setInterval(function() {
        if (deg2 < -30) clearInterval(timer2);
        stylus.style.transform = 'rotate(' + deg2 + 'deg)';
        deg2 -= 1;
    }, 10);
} //唱针移出

function lay_in() {

    stylus = document.getElementById("stylus");
    watcher = setInterval(function() {
        if (deg2 > 0) clearInterval(watcher);
        stylus.style.transform = 'rotate(' + deg2 + 'deg)';
        deg2 += 1;
    }, 10)
} //唱针移进
var time_now, time_all, min_now, sec_now, min_all, sec_all, timer3, timer4, length, line;
min_now = sec_now = length = 0;
min_now = reFix(min_now);

function time_cal() {
    time_now = document.getElementById("time_now");
    time_all = document.getElementById("time_all");
    audio = document.getElementById("music");
    line = document.getElementById("line2");
    sec_all = Math.floor(audio.duration) % 60;
    min_all = Math.floor(Math.floor(audio.duration) / 60);
    min_all = reFix(min_all);
    sec_all = reFix(sec_all);
    time_all.innerHTML = min_all + ':' + sec_all;
    timer3 = setInterval(function() {
        sec_now++;
        length += 100 / Math.floor(audio.duration);
        if (sec_now > 59) {
            sec_now = 0;
            min_now++;
            min_now = reFix(min_now);
        }
        sec_now = reFix(sec_now);
        time_now.innerHTML = min_now + ':' + sec_now;
        line.style.width = length + '%';
    }, 998);


}

function reFix(num) {
    if (num < 10) num = '0' + num;
    return num;
}