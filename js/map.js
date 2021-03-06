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


function chaCir(t){
    //  alert($(t).attr("class"));
    $(t).toggleClass("circle").toggleClass("circle1");
}

// 模块拖拽 距离 
$(function(){  
    var _move=false;//移动标记  
    var _x,_y;//鼠标离控件左上角的相对位置  
        $("#barPoint").click(function(){  
            //alert("click");//点击（松开后触发）  
            }).mousedown(function(e){  
            _move=true;  
            _x=e.pageX-parseInt($("#barPoint").css("left"));  
            _y=e.pageY-parseInt($("#barPoint").css("top"));  
            $("#barPoint").fadeTo(20, 0.5);//点击后开始拖动并透明显示  
        });  
        $(document).mousemove(function(e){  
            if(_move){  
                var x=e.pageX-_x;//移动时根据鼠标位置计算控件左上角的绝对位置  
                var y=e.pageY-_y;
                  
                if(y < 0){
                    y = 0;
                }
                if(y > 490){
                    y = 490;
                }
                $("#bgBar").css({height:10+y});//bg的增加
                $("#barPoint").css({top:y});//控件新位置 
                $("#runSpanr").text(y + "." + e.pageY%100);//改变数值 
                // $("#barPoint").css({top:y,left:x});//控件新位置  
            }  
        }).mouseup(function(){  
        _move=false;  
        $("#barPoint").fadeTo("fast", 1);//松开鼠标后停止移动并恢复成不透明  
      });  
    }); 
// 模块拖拽  时间
$(function(){  
    var _move=false;//移动标记  
    var _x,_y;//鼠标离控件左上角的相对位置  
        $("#TbarPoint").click(function(){  
            //alert("click");//点击（松开后触发）  
            }).mousedown(function(e){  
            _move=true;  
            _x=e.pageX-parseInt($("#TbarPoint").css("left"));  
            _y=e.pageY-parseInt($("#TbarPoint").css("top"));  
            $("#TbarPoint").fadeTo(20, 0.5);//点击后开始拖动并透明显示  
        });  
        $(document).mousemove(function(e){  
            if(_move){  
                var x=e.pageX-_x;//移动时根据鼠标位置计算控件左上角的绝对位置  
                var y=e.pageY-_y;
                  
                if(y < 0){
                    y = 0;
                }
                if(y > 490){
                    y = 490;
                }
                $("#TbgBar").css({height:10+y});//bg的增加
                $("#TbarPoint").css({top:y});//控件新位置 
                $("#runSapnl").text(Math.floor(y/60) + ":" + y%60 + ":" + e.pageY%60);//改变数值 
                // $("#barPoint").css({top:y,left:x});//控件新位置  
            }  
        }).mouseup(function(){  
        _move=false;  
        $("#TbarPoint").fadeTo("fast", 1);//松开鼠标后停止移动并恢复成不透明  
      });  
    }); 