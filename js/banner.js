
var banner_c=document.getElementsByClassName('banner_c')[0];
var img = banner_c.getElementsByTagName('img');
var span = banner_c.getElementsByTagName('span');


//自动轮播
var c=0

var timer;
		clearInterval(timer);

/*自动轮播定时器函数*/
function auto(){
	c++;
	if(c ==8){
		c = 0;
	}
	for(var i=0;i<img.length;i++){
		img[i].style.display='none';
		span[i].className='';
	}
	img[c].style.display='block';
	span[c].className='active';
}
var timer = setInterval(auto,2000);


//事件轮播
for(var i=0;i<span.length;i++){
	span[i].index=i;
	span[i].onclick=function(){
		clearInterval(timer);
		for(var i=0;i<img.length;i++){
			img[i].style.display='none';
			span[i].className='';
		}
		c = this.index;
		img[c].style.display='block';
		span[c].className='active';
	}	
	
	banner_c.onmouseenter=function (){
		clearInterval(timer);
	}
	banner_c.onmouseleave=function (){
		timer = setInterval(auto,2000);
	}
}




