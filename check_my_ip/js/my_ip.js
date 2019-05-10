function httpRequest(url,callback){
    console.log("hello");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function (){
        if (xhr.readyState == 4) {
            callback(xhr.responseText);
        }
    }
    xhr.send();
}

httpRequest("https://api.ip.sb/ip",function(ip){
    document.getElementById("ip_div").innerText=ip;
})