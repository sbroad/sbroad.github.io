var flag=1;
var ClassForScroll1="stp1 fr sprt cpo";
var ClassForScroll2="ply fr sprt cpo";
var ClassForScroll3="stp fr sprt cpo";
var ClassForScroll4="ply1 fr sprt cpo";
//Specify the slider's width (in pixels)
var sliderwidth="805px";
//Specify the slider's height
var sliderheight="155px";
//Specify the slider's slide speed (larger is faster 1-10)
var slidespeed=1;
//configure background color:
//slidebgcolor=""

//Specify the slider's images
var leftrightslide=new Array();
var finalslide='';
leftrightslide[0]='<TABLE width="100%" align="center"><TR><TD WIDTH="125" HEIGHT="125" align="center"><A HREF="cp-product.html#cp-extension-nipple-extra-heavy" rel="http://s1.sbrodmetalworks.com/img/c-p-extension-nipple-125x125.jpg" CLASS="scr arw_no_s " TARGET="_top"><IMG SRC="" ALT="CP Extension .." class="cpo_s"></A></TD><TD WIDTH="125" HEIGHT="125" align="center"><A HREF="rack-bolt.html#rack-bolt-for-ewc-and-wall-hung" rel="http://s1.sbrodmetalworks.com/img/rack-bolt-for-ewc-500x500-125x125.jpg" CLASS="scr arw_no_s " TARGET="_top"><IMG SRC="" ALT="Rack Bolt for.." class="cpo_s"></A></TD><TD WIDTH="125" HEIGHT="125" align="center"><A HREF="cp-brass-taper-cock.html#brass-taper-cock" rel="http://s1.sbrodmetalworks.com/img/taper-cock-500x500-125x125.jpg" CLASS="scr arw_no_s " TARGET="_top"><IMG SRC="" ALT="Brass Taper C.." class="cpo_s"></A></TD><TD WIDTH="125" HEIGHT="125" align="center"><A HREF="brass-metal-product.html#brass-ball-valve" rel="http://s1.sbrodmetalworks.com/img/brass-ball-valve-125x125.jpg" CLASS="scr arw_no_s " TARGET="_top"><IMG SRC="" ALT="Brass Ball Va.." class="cpo_s"></A></TD><TD WIDTH="125" HEIGHT="125" align="center"><A HREF="brass-product.html#brass-tee" rel="http://s1.sbrodmetalworks.com/img/brass-tee-250x250-125x125.jpg" CLASS="scr arw_no_s " TARGET="_top"><IMG SRC="" ALT="Brass Tee" class="cpo_s"></A></TD><TD WIDTH="125" HEIGHT="125" align="center"><A HREF="jet-spray-set.html#jet-spray-set-crystal" rel="http://s1.sbrodmetalworks.com/img/jet-spray-set-crystal-suitable-for-imported-seats-250x250-125x125.jpg" CLASS="scr arw_no_s " TARGET="_top"><IMG SRC="" ALT="Jet Spray Set.." class="cpo_s"></A></TD><TD WIDTH="125" HEIGHT="125" align="center"><A HREF="connection-pipe.html#ms-ss-wired-inlet-pipe" rel="http://s1.sbrodmetalworks.com/img/ms-ss-wired-inlet-pipe-125x125.jpg" CLASS="scr arw_no_s " TARGET="_top"><IMG SRC="" ALT="MS & SS Wired.." class="cpo_s"></A></TD></tr><tr><TD align="CENTER"><A HREF="cp-product.html#cp-extension-nipple-extra-heavy" TARGET="_top" CLASS="hpr">CP Extension ..</A></TD><TD align="CENTER"><A HREF="rack-bolt.html#rack-bolt-for-ewc-and-wall-hung" TARGET="_top" CLASS="hpr">Rack Bolt for..</A></TD><TD align="CENTER"><A HREF="cp-brass-taper-cock.html#brass-taper-cock" TARGET="_top" CLASS="hpr">Brass Taper C..</A></TD><TD align="CENTER"><A HREF="brass-metal-product.html#brass-ball-valve" TARGET="_top" CLASS="hpr">Brass Ball Va..</A></TD><TD align="CENTER"><A HREF="brass-product.html#brass-tee" TARGET="_top" CLASS="hpr">Brass Tee</A></TD><TD align="CENTER"><A HREF="jet-spray-set.html#jet-spray-set-crystal" TARGET="_top" CLASS="hpr">Jet Spray Set..</A></TD><TD align="CENTER"><A HREF="connection-pipe.html#ms-ss-wired-inlet-pipe" TARGET="_top" CLASS="hpr">MS & SS Wired..</A></TD></TR></TABLE>';

//Specify gap between each image (use HTML):
var imagegap="";

//Specify pixels gap between each slideshow rotation (use integer):
var slideshowgap=0;


////NO NEED TO EDIT BELOW THIS LINE////////////

var copyspeed=slidespeed;
leftrightslide='<nobr>'+leftrightslide.join(imagegap)+'</nobr>';
var iedom=document.all||document.getElementById;
if (iedom)
document.write('<span id="temp" style="visibility:hidden;position:absolute;top:-100px;left:-50000px">'+leftrightslide+'</span>');
var actualwidth='';
var cross_slide, ns_slide;

function fillup(){
if (iedom){
cross_slide=document.getElementById? document.getElementById("test2") : document.all.test2;
cross_slide2=document.getElementById? document.getElementById("test3") : document.all.test3;
cross_slide.innerHTML=cross_slide2.innerHTML=leftrightslide;
actualwidth=document.all? cross_slide.offsetWidth : document.getElementById("temp").offsetWidth;
cross_slide2.style.left=actualwidth+slideshowgap+"px";
}
else if (document.layers){
ns_slide=document.ns_slidemenu.document.ns_slidemenu2;
ns_slide2=document.ns_slidemenu.document.ns_slidemenu3;
ns_slide.document.write(leftrightslide);
ns_slide.document.close();
actualwidth=ns_slide.document.width;
ns_slide2.left=actualwidth+slideshowgap;
ns_slide2.document.write(leftrightslide);
ns_slide2.document.close();
}
lefttime=setInterval("slideleft()",30);
}

function slideleft(){
if (iedom){
if (parseInt(cross_slide.style.left)>(actualwidth*(-1)+8))
cross_slide.style.left=parseInt(cross_slide.style.left)-copyspeed+"px";
else
cross_slide.style.left=parseInt(cross_slide2.style.left)+actualwidth+slideshowgap+"px";

if (parseInt(cross_slide2.style.left)>(actualwidth*(-1)+8))
cross_slide2.style.left=parseInt(cross_slide2.style.left)-copyspeed+"px";
else
cross_slide2.style.left=parseInt(cross_slide.style.left)+actualwidth+slideshowgap+"px";

}
else if (document.layers){
if (ns_slide.left>(actualwidth*(-1)+8))
ns_slide.left-=copyspeed;
else
ns_slide.left=ns_slide2.left+actualwidth+slideshowgap;

if (ns_slide2.left>(actualwidth*(-1)+8))
ns_slide2.left-=copyspeed;
else
ns_slide2.left=ns_slide.left+actualwidth+slideshowgap;
}
}

if (iedom||document.layers){
with (document){
document.write('<table class="w9_s w9_s_a"><td>');
if (iedom){
write('<div style="position:relative;width:'+sliderwidth+';height:'+sliderheight+';overflow:hidden">');
write('<div style="position:absolute;width:'+sliderwidth+';height:'+sliderheight+';" onMouseover="copyspeed=0" onMouseout="stop1()" onclick="stop()">');
write('<div id="test2" style="position:absolute;left:0px;top:0px"></div>');
write('<div id="test3" style="position:absolute;left:-1000px;top:0px"></div>');
write('</div></div>');
}
else if (document.layers){
write('<ilayer width='+sliderwidth+' height='+sliderheight+' name="ns_slidemenu">');
write('<layer name="ns_slidemenu2" left=0 top=0 onMouseover="copyspeed=0" onMouseout="stop1()"></layer>');
write('<layer name="ns_slidemenu3" left=0 top=0 onMouseover="copyspeed=0" onMouseout="stop1()"></layer>');
write('</ilayer>');
}
document.write('</td></table>');
}
}

function stop1()
{
if(flag==1)
{
copyspeed=slidespeed;
}
else
{
copyspeed=0;
}
}

function stop()
{
	if(flag==1)
	{
		copyspeed=0;
		flag=0;
      document.getElementById('img').className = ClassForScroll1;
       document.getElementById('img1').className = ClassForScroll2;
	}
}
function play_scroll()
{
   if(flag==0)
   {
      copyspeed=slidespeed;
      flag=1;
      document.getElementById('img').className = ClassForScroll3;
       document.getElementById('img1').className = ClassForScroll4;
   }
}
