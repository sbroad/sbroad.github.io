//blowup strt
var myWidth=0,myHeight=0
var divscroll,p_blo,blw,mxp,mxp1,im_div,inext,ipre,iprname
function setposition(){
if(typeof(window.innerWidth)=='number'){myWidth=window.innerWidth;myHeight=window.innerHeight;}else if(document.documentElement&&(document.documentElement.clientWidth || document.documentElement.clientHeight)){myWidth=document.documentElement.clientWidth;myHeight=document.documentElement.clientHeight;}else if(document.body&&(document.body.clientWidth || document.body.clientHeight)){myWidth=document.body.clientWidth;myHeight=document.body.clientHeight;}
var h=window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop
var browserName=navigator.appName;var imagedivheight=myHeight-93;var test=myWidth*24/100;var divwidth=myWidth-test;var widthformizilla=myWidth-538;var mozillawidth=widthformizilla-divwidth;var iewidth=myWidth-516;var mozillawidth1=mozillawidth/2;var iewidth1=iewidth/2;var mtop=h+7;var aboveheight=myHeight-584;var aboveheight1=aboveheight/2+h;divscroll.style.height="500px";divscroll.style.width="504px";blw.style.height="478px"
p_blo.style.top=aboveheight1+'px'
p_blo.style.left=iewidth1+'px';divscroll.name="miniwin";if(myHeight<=586){divscroll.style.height=imagedivheight+'px';divscroll.style.width="522px";blw.style.height=imagedivheight+'px'
p_blo.style.top=mtop+'px'
}}
function maxp(){var imagedivheightnew=myHeight-93;var imagedivwidthnew=myWidth-212;var imagedivheightnew1=myHeight-94;var h=window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;var browserName=navigator.appName;var mtop=h+7;if(divscroll.name=="miniwin"){p_blo.style.left="100px"
p_blo.style.top=mtop+'px'
divscroll.style.width=imagedivwidthnew+'px';divscroll.style.height=imagedivheightnew+'px';blw.style.height=imagedivheightnew1+'px';divscroll.name="maxwin";mxp.className="doff";mxp1.className="don blow b2";}else{mxp.className="don blow bol";mxp1.className="doff";setposition()}}function blowup_show(){bll()
var nAgt=navigator.userAgent
var patt=/Chrome/
if(patt.test(nAgt)){}
else if(navigator.appName=='Microsoft Internet Explorer'){
document.getElementsByTagName("html")[0].style.overflow="hidden"}
else{
document.body.style.overflow="hidden"}
p_blo.className="don bb"
mxp.className="don blow bol"
mxp1.className="doff"
setposition()}
function blowup_hide(){p_blo.className="doff";document.body.style.overflow="";document.getElementsByTagName("html")[0].style.overflow="";}var path='';var imgid="0";var queryrfq=''
function imgset(id,pagename){divscroll=document.getElementById('divscrollp');p_blo=document.getElementById('p_blo');blw=document.getElementById('blw');mxp=document.getElementById('mxp');mxp1=document.getElementById('mxp1');im_div=document.getElementById('im_div');inext=document.getElementById('inext');ipre=document.getElementById('ipre');
iprname=document.getElementById('iprname');
if(pagename != 'prd'){document.getElementById('table_nxt').style.display='none';}
if(id==dataref1.length){inext.style.display='none';ipre.style.display='block';}else if(id==1){ipre.style.display='none';inext.style.display='block';}else{ipre.style.display='block';inext.style.display='block';}set_big_img_path(id);imgid=id;var pic=document.getElementById(imgid);productName=pic.alt;productName=unescape(productName);if(productName.length>37){var c=productName.substring(0,37);c=c+"...";productName=c;}
var nAgt=navigator.userAgent
var patt=/Opera/
if(patt.test(nAgt)){
im_div.className="don"
document.getElementById('loadimgp').className="doff"}
im_div.innerHTML='<img src="'+path+'" alt="'+productName+'" onload="loadimgp()" id="bigimgp">'
iprname.innerHTML=productName;if(dataref1.length==1){document.getElementById('ipre').style.display='none';document.getElementById('inext').style.display='none';}}
function nextimg(){if(imgid<dataref1.length){imgid++;}if(imgid<dataref1.length){var newImg=imgid;inext.style.display='block';ipre.style.display='block';}else{var newImg=imgid;inext.style.display='none';ipre.style.display='block';}set_big_img_path(newImg);if(document.getElementById(newImg)){var pic=document.getElementById(newImg);productName=pic.alt;productName=unescape(productName);if(productName.length>37){var c=productName.substring(0,37);c=c+"...";productName=c;}
var nAgt=navigator.userAgent
var patt=/Opera/
if(patt.test(nAgt)){
im_div.className="don"
document.getElementById('loadimgp').className="doff"}
im_div.innerHTML='<img src="'+path+'" onload="loadimgp()" id="bigimgp" alt="'+productName+'">'
iprname.innerHTML=productName;}else{var newImg=--imgid;}}
function previousimg(){if(imgid>1){imgid--;}if(imgid<=1){var newImg=imgid;ipre.style.display='none';inext.style.display='block';}else{var newImg=imgid;ipre.style.display='block';inext.style.display='block';}set_big_img_path(newImg);var pic=document.getElementById(newImg);productName=pic.alt;productName=unescape(productName);if(productName.length>37){var c=productName.substring(0,37);c=c+"...";productName=c;}
var nAgt=navigator.userAgent
var patt=/Opera/
if(patt.test(nAgt)){
im_div.className="don"
document.getElementById('loadimgp').className="doff"}
im_div.innerHTML='<img src="'+path+'" onload="loadimgp()" id="bigimgp" alt="'+productName+'">'
iprname.innerHTML=productName;}
function set_big_img_path(imgid){document.getElementById('loadimgp').className="don";im_div.className="doff";var k=dataref1.length-1;if(k>=0){var i=imgid-1;path=eval("dataref1["+i+"].img_path");queryrfq=eval("dataref1["+i+"].queryrfq");}}function loadimgp(){document.getElementById('loadimgp').className="doff";im_div.className="don";if(document.getElementById('bigimgp').height
>500 || document.getElementById('bigimgp').width>500){divscroll.name="miniwin";maxp();}else{divscroll.name="maxwin";maxp();}}document.write('<div id="p_blo" style="position:absolute;top:0px;left:0px;z-index:2000"; align="center" class="doff"><table id="tableheightp" align="center"><tr><td align="center"><table class="bgclor"><tr><td align="center" valign="top"><table class="blow 	main" align="center" width="100%" height="35"><tr><td id="titleBar" style="cursor:move"><ilayer width="100%" onselectstart="return false"></ilayer><layer width="100%" onmouseover="isHot=true;if (isN4) ddN4(p_blo)" onmouseout="isHot=false"><div id="iprname" class="pr-txt"></div></layer></td><td align="right" style="padding-right:0px;" width="100"><table><tr><td><img src="ts/zero.gif" id="mxp" width="21" height="21" style="cursor:pointer" onclick="maxp()" hspace="4" class="don blow bol" title="Maximize"></td><td><img src="ts/zero.gif" id="mxp1" width="21" height="21" style="cursor:pointer;" class="doff blow bol" onclick="maxp()" hspace="2" title="Restore"></td><td><img src="ts/zero.gif" class="blow clos" width="21" height="21" onclick="blowup_hide()" style="cursor:pointer" hspace="3" title="Close"></td></tr></table></td></tr></table><div style="height: 500px; width: 504px;" class="image_div" id="divscrollp" align="center"><table id="blw" align="center" bgcolor="#ffffff" ><tr><td align="center"><div id="loadimgp" style="font-family: arial; font-size: 15px;" class="don"><img src="ts/indicator-new.gif" height="36" width="36"><br><br>Loading...</div><div id="im_div" class="doff"></div></td></tr></table></div><table class="button" id="table_nxt" width="100%"><tr><td height="22"><img src="ts/zero.gif" width="70" height="1"><br><img class="blow bac doff" src="ts/zero.gif" style="cursor:pointer" id="ipre" onclick="previousimg()" border="0" width="70" height="10" title="Use <- arrow key to view previous image"></TD><TD WIDTH="100%" align="center"></td><td align="right"><img src="ts/zero.gif" width="40" height="1"><br><img class="blow nx don" src="ts/zero.gif" id="inext" style="cursor:pointer" onclick="nextimg()" width="40" height="10" title="Use -> arrow key to view next image"> </td></tr></table></td></tr></table></td></tr></table></div>')
function ddInitp(e){
topDog=isIE ? "BODY" : "HTML"
whichDog=isIE ? document.all.p_blo : document.getElementById("p_blo")
hotDog=isIE ? event.srcElement : e.target
while(hotDog.id!="titleBar"&&hotDog.tagName!=topDog){
hotDog=isIE ? hotDog.parentElement : hotDog.parentNode}
if(hotDog.id=="titleBar"){
offsetx=isIE ? event.clientX : e.clientX
offsety=isIE ? event.clientY : e.clientY
nowX=parseInt(whichDog.style.left)
nowY=parseInt(whichDog.style.top)
ddEnabled=true
document.onmousemove=dd}}
function bll(){
document.body.onmousedown=ddInitp}
document.onmouseup=Function("ddEnabled=false")
//blowup end
