var $$=document.querySelectorAll.bind(document);
var $=document.querySelector.bind(document);
var tabPane=$$('.tab-pane');
var tabItem=$$('.tab-item');

var line=$('.line');
line.style.width=$('.tab-item').offsetWidth + "px"  ;
line.style.left=$('.tab-item').offsetLeft + "px ";
     tabItem.forEach((tab,index)=>{
    tab.onclick = ()=>{
       var tabActive=$('.tab-item.active');
       var tabRemove=$('.tab-pane.block');
        tabActive.classList.remove("active");
        line.style.left=tab.offsetLeft + "px ";
        line.style.width=tab.offsetWidth + "px"  ;
        tabRemove.classList.remove('block');
        tabPane[index].classList.add('block')
        tab.classList.add('active');
        
    }

})
