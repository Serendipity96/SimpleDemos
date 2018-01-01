var music = document.getElementById("music");
var audio = document.getElementsByTagName("audio")[0];
var page1 = document.getElementById("page1");
var page2 = document.getElementById("page2");
var page3 = document.getElementById("page3");

//鼠标点击
music.onclick = function () {
    if (audio.paused) {
        audio.play();
        // this.style.animationPlayState = "running";//兼容性没有下面这句好，有的手机GG
        this.setAttribute("class","play");

    }
    else {
        audio.pause();
        // this.style.animationPlayState = "paused";
        this.setAttribute("class","");
    }

}

//手机端触摸
music.addEventListener("touchstart", function (event) {
    if (audio.paused) {
        audio.play();
        // this.style.animationPlayState = "running";
        this.setAttribute("class","play");

    }
    else {
        audio.pause();
        // this.style.animationPlayState = "paused";
        this.setAttribute("class","");
    }
}, false);

//音乐放完，停止图片
audio.addEventListener("ended", function (event) {
    music.setAttribute("class", "");
}, false);

//页面切换
page1.addEventListener("touchstart",function (event) {
    page1.style.display = "none";
    page2.style.display = "block";
    // page3.style.display = "block";
    // page3.style.top = "100%";
    setTimeout(function () {
        page2.setAttribute("class","page fadeOut");
        page3.style.display = "block";
        page3.setAttribute("class","page fadeIn");
    },5500);//执行一次转圈圈之后，淡出第二页，显示第三页
},false);