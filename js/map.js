//高德地图
var map = new AMap.Map('container',{
    zoom:14 //初始大小
});
AMap.plugin('AMap.Geolocation',function(){//异步加载插件
    var Location = new AMap.Geolocation({
    enableHighAccuracy: true,//是否使用高精度定位，默认:true
    timeout: 10000,          //超过10秒后停止定位，默认：无穷大
    convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
    showButton: true,        //显示定位按钮，默认：true
    buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
    buttonOffset: new AMap.Pixel(5, 400),//定位按钮位置与设置的停靠位置的偏移量，默认：Pixel(10, 20)
    showMarker: false,        //定位成功后在定位到的位置显示点标记，默认：true
    panToLocation: true     //定位成功后将定位到的位置作为地图中心点，默认：true
    });
    map.addControl(Location);
});

// // 定义一个函数用以显示当前时间
//    function displayTime() {
//     var elt = document.getElementById("clock"); // 通过id= "clock"找到元素
//     var now = new Date(); // 得到当前时间
//     elt.innerHTML = now.toLocaleTimeString(); //让elt来显示它
//     setTimeout(displayTime,1000); //在1秒后再次执行
//    }
//    window.onload = displayTime; //当onload事件发生时开始显示时间
// 定义一个函数用以显示当前时间
   function displayTime() {
    var elt = document.getElementById("clock"); // 通过id= "clock"找到元素
    var myDate = new Date();
    var nowH =  myDate.getHours(); // 得到当前小时
    var f = '上午';
    if (nowH >= 12){
        f = '下午';
    } else{
        f = '上午';
    }
    var nowM =  myDate.getMinutes();  // 得到当前分
    if (nowM < 10){
        nowM = '0' + nowM;
    }
    nowH = (nowH % 12) + 1;
    elt.innerHTML = f + " " + nowH + ":" + nowM; //让elt来显示它
    setTimeout(displayTime,1000); //在1秒后再次执行
   }
   window.onload = displayTime; //当onload事件发生时开始显示时间

   $("#ciid").click(function(){
    // alert($(this).attr("class"));
if($(this).hasClass("circle")){
    $(this).removeClass("circle");
    $(this).addClass("circle1");    
}else {
    $(this).removeClass("circle1");
    $(this).addClass("circle");
}
});