// 后台常驻运行
// 每隔一段时间查看百度是否在线【没网络：离线】
// 根据在线状态更新图标


function httpRequest(url,callback){
    console.log("hello");
    var xhr = new XMLHttpRequest();
    xhr.open("GET",url,true);

    //在线
    xhr.onreadystatechange=function(){
        if (xhr.readyState == 4){
            callback(true);
        }
    }

    //离线 捕捉请求错误
    xhr.onerror = function(){
        callback(false);
    }
    xhr.send();
}


setInterval(
    function(){
        httpRequest("https://www.baidu.com/",
            function(status){
                chrome.browserAction.setIcon({path: "icon/"+(status?"Online_16.png":"Offline_16.png")});
            },
        );
    },
    5000);
