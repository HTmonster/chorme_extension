function btn_move(el,mouseLeft,mouseTop){
    var leftRnd = (Math.random()-0.5)*20; //水平偏移值
    var topRnd = (Math.random()-0.5)*20;  //垂直偏移值
    var btnLeft = mouseLeft+(leftRnd>0?100:-100)+leftRnd; //最终随机水平位置
    var btnTop = mouseTop+(topRnd>0?30:-30)+topRnd;  //最终随机竖直位置

    btnLeft = btnLeft<100?(btnLeft+window.innerWidth-200):(btnLeft>window.innerWidth-100?btnLeft-window.innerWidth+200:btnLeft)
    btnTop = btnTop<100?(btnTop+window.innerHeigth-200):(btnTop>window.innerHeigth-100?btnTop-window.innerHeigth+200:btnTop)

    el.style.position = 'fiexd';
    el.style.left = btnLeft+"px";
    el.style.top = btnTop+"px";
}

function over_btn(e){
    console.log("hello")
    if(!e){
        e=window.event;
    }
    btn_move(this,e.clientX,e.clientY);
}

document.getElementsByName('btnK').onmouseover = over_btn;