function tollfree() 
	{
	var myDate = new Date();
		var gmt = -myDate.getTimezoneOffset()/60;
		if(gmt == 5.5)
		{
			document.getElementById('tollfree').innerHTML = 'Call Us:&nbsp<b> 09654382841</b>';
		}else
		{
		document.getElementById('tollfree').innerHTML = 'Call Us:&nbsp;<b>+(91)-9654382841</b>';
		}	
	};
/*pns number closed*/
/*for search box start*/
function searchCheck(){
var str='';
if(document.frm.ss.value=='' || document.frm.ss.value=='Search Products/Services'){
alert("Please enter some keyword to search.");
document.frm.ss.focus();
document.frm.ss.value='';
return false;}
if(document.frm.ss.value.length<3){
alert("Please Enter atleast 3 character");
document.frm.ss.focus();
return false;}
if(document.frm.ss.value){
var str1;
str1=document.frm.ss.value.replace(/^\s+/g,'').replace(/\s+$/g,'');
str1=str1.replace(/[^a-zA-Z0-9+]/g,' ');
str1=str1.replace(/\+/g,' ');
str1=str1.replace(/\s+/g,'+');
str+='ss='+str1;
window.location = "http://www.indiamart.com/sbrodmetalworks/search.html?"+str;
return false;}};
function searchClear(){
if(document.frm.ss.value=='Search Products/Services'){
document.frm.ss.value='';}};
function settext(){
if(document.frm.ss.value==''){
document.frm.ss.value='Search Products/Services';}};
function settextvalue(){
document.frm.ss.value='Search Products/Services';};
function getDwsCookie(Name){
var search=Name+"=";
if(document.cookie.length>0){
offset=document.cookie.indexOf(search);
if(offset !=-1){
offset+=search.length;
end=document.cookie.indexOf(";",offset);
if(end==-1)end=document.cookie.length;
return unescape(document.cookie.substring(offset,end));}}
return "";};
function setDwsCookie(name,value)
{
    if(value.length>0)
        document.cookie=name+"="+escape(value)+";";
};
/*end of search box functions*/
/*for DWS cookies start*/
function getDwsCookie(Name)
{
	var search = Name + "=";
	if (document.cookie.length > 0)
	{ /* if there are any cookies*/
		offset = document.cookie.indexOf(search);
		if (offset != -1)
		{ /* if cookie exists*/
			offset += search.length;
			/* set index of beginning of value*/
			end = document.cookie.indexOf(";", offset);
			/* set index of end of cookie value*/
			if (end == -1) end = document.cookie.length;
			return unescape(document.cookie.substring(offset, end));
		}
	}
	return "";
};
function setDwsCookie(name,value)
{
    if(value.length>0)
        document.cookie=name+"="+escape(value)+";";
};
/*end of DWS cookies*/
/*cookies for category page starts*/
function getCartCookie(Name)
{
    var search = Name + "=";
    if (document.cookie.length > 0)
    { /* if there are any cookies*/
        offset = document.cookie.indexOf(search);
        if (offset != -1)
        { /* if cookie exists*/
            offset += search.length;
            /* set index of beginning of value*/
            end = document.cookie.indexOf(";", offset);
            /* set index of end of cookie value*/
            if (end == -1) end = document.cookie.length;
            return unescape(document.cookie.substring(offset, end));
        }
    }
    return "";
};
/*cookies for category page starts*/
/*drop.js start*/
var ver='3.0.1D';
var m1=new Object;
m1.name='m1';
m1.fnm='so-';
if(!window.lastm||window.lastm<1)lastm=1;
m1.v17=null;
m1.v17Timeout='';
var maxZ=1000;
m1.v18;
m1.targetFrame;
var docLoaded=false;
m1.bIncBorder=true;
m1.v29=null;
m1.v29Str='';
m1.v55=50;
m1.scrollStep=10;
m1.fadingSteps=2;
m1.itemOverDelay=0;
m1.transTLO=0;
m1.fixSB=0;
m1.v21=".";
m1.maxlev=2;
m1.v22=0;
m1.sepH=10;
m1.bHlNL=1;
m1.showA=1;
m1.bVarWidth=0;
m1.bShowDel=50;
m1.scrDel=0;
m1.v23=160;          /*width dropdown*/
m1.levelOffset=-1;
m1.levelOffsety=2;
m1.bord=1;
m1.vertSpace=5;
m1.sep=1;
m1.v19=false;
m1.bkv=0;
m1.rev=0;
m1.shs=0;
m1.xOff=0;
m1.yOff=0;
m1.v20=false;
m1.cntFrame="";
m1.menuFrame="";
m1.v24="";
m1.mout=true;
m1.iconSize=8;
m1.closeDelay=1000;
m1.tlmOrigBg="#000000"; /*first frame mouseout color*/
m1.tlmOrigCol="Black";
m1.v25=false;
m1.v52=false;
m1.v60=0;
m1.v11=false;
m1.v10=0;
m1.ppLeftPad=5;
m1.v54=0;
m1.v01=2;
m1.tlmHlBg="#F4F4F4"; /*first frame mouseover color*/
m1.tlmHlCol="White";
m1.menuHorizontal=true;
m1.scrollHeight=6;
m1mn1=new Array
(
"CP Product","cp-product.html",0,"","",
"Rack Bolt","rack-bolt.html",0,"","",
"CP and Brass Taper Cock","cp-brass-taper-cock.html",0,"","",
"Brass Metal Product","brass-metal-product.html",0,"","",
"Brass Product","brass-product.html",0,"","",
"Jet Spray Set","jet-spray-set.html",0,"","",
"Connection Pipe","connection-pipe.html",0,"",""
);
m1mn61=new Array
(
"CP Extension Nipple Extra Heavy","cp-product.html#cp-extension-nipple-extra-heavy",0,"","",
"CP Waste Coupling","cp-product.html#cp-waste-coupling",0,"","",
"CP Extension Nipple","cp-product.html#cp-extension-nipple",0,"","",
"CP Female End Push Cock","cp-product.html#cp-female-end-push-cock",0,"","",
"CP Hex Nipple","cp-product.html#cp-hex-nipple",0,"","",
"CP Elbow","cp-product.html#cp-elbow",0,"","",
"CP Tee","cp-product.html#cp-tee",0,"","",
"CP Socket","cp-product.html#cp-socket",0,"","",
"CP Tee Cross Four Way","cp-product.html#cp-tee-cross-four-way",0,"","",
"CP Thread Nipple","cp-product.html#cp-thread-nipple",0,"","",
"CP Urinal Waste Coupling","cp-product.html#cp-urinal-waste-coupling",0,"","",
"CP Male End Push Cock","cp-product.html#cp-male-end-push-cock",0,"","",
"CP Urinal Push Cock","cp-product.html#cp-urinal-push-cock",0,"","",
"CP Urinal Spreader","cp-product.html#cp-urinal-spreader",0,"","",
"CP Fitting","cp-product.html#cp-fitting",0,"",""
);
m1mn62=new Array
(
"Rack Bolt for EWC and Wall Hung","rack-bolt.html#rack-bolt-for-ewc-and-wall-hung",0,"","",
"Wash Basin Rack Bolt Screw","rack-bolt.html#wash-basin-rack-bolt-screw",0,"","",
"Rack Bolt Screw with ABS Cap","rack-bolt.html#rack-bolt-screw-with-abs-cap",0,"","",
"Wall Hung Bidet Bolt","rack-bolt.html#wall-hung-bidet-bolt",0,"","",
"CP Rack Bolt Screw Pair","rack-bolt.html#cp-rack-bolt-screw-pair",0,"","",
"T Type Rack Bolt","rack-bolt.html#t-type-rack-bolt",0,"","",
"Urinal Bracket","rack-bolt.html#urinal-bracket",0,"","",
"Pin Type Anchor Bolt","rack-bolt.html#pin-type-anchor-bolt",0,"",""
);
m1mn63=new Array
(
"Brass Taper Cock","cp-brass-taper-cock.html#brass-taper-cock",0,"","",
"CP Taper Cock","cp-brass-taper-cock.html#cp-taper-cock",0,"","",
"ter","cp-brass-taper-cock.html#ter",0,"","",
"CP Nozzle Cock","cp-brass-taper-cock.html#cp-nozzle-cock",0,"","",
"CP Bib Cock","cp-brass-taper-cock.html#cp-bib-cock",0,"","",
"CP Angle Valve","cp-brass-taper-cock.html#cp-angle-valve",0,"","",
"CP Bib Cock Push Type","cp-brass-taper-cock.html#cp-bib-cock-push-type",0,"","",
"CP Lift Cock","cp-brass-taper-cock.html#cp-lift-cock",0,"",""
);
m1mn64=new Array
(
"Brass Ball Valve","brass-metal-product.html#brass-ball-valve",0,"","",
"Brass Float Valve with Flexible Rod","brass-metal-product.html#brass-float-valve-with-flexible-rod",0,"","",
"Brass Cock","brass-metal-product.html#brass-cock",0,"",""
);
m1mn65=new Array
(
"Brass Tee","brass-product.html#brass-tee",0,"","",
"Cross Four Way Tee","brass-product.html#cross-four-way-tee",0,"","",
"Brass Elbow","brass-product.html#brass-elbow",0,"","",
"Brass Clamp Male Hose","brass-product.html#brass-clamp-male-hose",0,"","",
"Brass Clamp Female Hose","brass-product.html#brass-clamp-female-hose",0,"","",
"Brass Tank Nipple","brass-product.html#brass-tank-nipple",0,"","",
"Ceramic Disc","brass-product.html#ceramic-disc",0,"",""
);
m1mn66=new Array
(
"Jet Spray Set Crystal","jet-spray-set.html#jet-spray-set-crystal",0,"","",
"Jet Pipe Butterfly Patti","jet-spray-set.html#jet-pipe-butterfly-patti",0,"","",
"Jet Spray Multi Purpose","jet-spray-set.html#jet-spray-multi-purpose",0,"",""
);
m1mn67=new Array
(
"MS & SS Wired Inlet Pipe","connection-pipe.html#ms-ss-wired-inlet-pipe",0,"","",
"Intel Connection Stainless","connection-pipe.html#intel-connection-stainless",0,"","",
"Outlet Pipe with Plastic Tail","connection-pipe.html#outlet-pipe-with-plastic-tail",0,"","",
"Connection Wired Threaded Pair","connection-pipe.html#connection-wired-threaded-pair",0,"","",
"Flexible Shower Tube","connection-pipe.html#flexible-shower-tube",0,"","",
"Silver Shower Tube","connection-pipe.html#silver-shower-tube",0,"",""
);
m1mn2=new Array (
"CP Product","javascript:display_prd_no('1');",0,"","",
"Rack Bolt","javascript:display_prd_no('17');",0,"","",
"CP and Brass Taper Cock","javascript:display_prd_no('25');",0,"","",
"Brass Metal Product","javascript:display_prd_no('33');",0,"","",
"Brass Product","javascript:display_prd_no('36');",0,"","",
"Jet Spray Set","javascript:display_prd_no('43');",0,"","",
"Connection Pipe","javascript:display_prd_no('46');",0,"",""
);
m1mn3=new Array
(
"Profile","profile.html",0,"","",
"Distributor Enquiry Form","distributor-enquiry-form.html",0,"","",
"Download Brochure","javascript:openNewWindow()",0,"",""
);
m1mn5=new Array
(
"Our Team","profile.html#our-team",0,"","",
		"Why Us?","profile.html#why-us",0,"","",
		"Our Quality Assurance","profile.html#our-quality-assurance",0,"","",
		"Our Infrastructure","profile.html#our-infrastructure",0,"","",
		"Distributor Enquiry Form","distributor-enquiry-form.html",0,"","",
"Download Brochure","javascript:openNewWindow()",0,"",""
);
function openNewWindow()
{
window.open('http://www.indiamart.com/sbrodmetalworks/sbrod-metal-works.pdf','_new');
};
absPath="";
if(m1.v19&&!m1.v20){
if(window.location.href.lastIndexOf("\\")>window.location.href.lastIndexOf("/")) {sepCh = "\\" ;} else {sepCh = "/" ;}
absPath=window.location.href.substring(0,window.location.href.lastIndexOf(sepCh)+1);}
m1.v61=0;
m1.v02=m1.v23;
document.write("<style type='text/css'>\n.m1CL0,.m1CL0:link{text-decoration:none;width:100%;color:white; }\n.m1CL0:visited{color:Black}\n.m1CL0:hover{text-decoration:underline}\n.m1mit{color:Black; font-family:verdana,Arial,Helvetica; font-size:10px; }\n"+"</"+"style>");
m1.attr=new Array("11px",false,false,"#fff","#424242","#fff","verdana,Arial,Helvetica","#F7631B","#fff","#fff");m1.borderCol="#5F5F5F";;
NS60=(navigator.userAgent.indexOf("Netscape6/6.0")!=-1);
Opera=(navigator.userAgent.indexOf('Opera')!=-1)||(navigator.appName.indexOf('Opera')!=-1)||(window.opera);
Opera7=(Opera&&document.createElement!=null&&document.addEventListener!=null);
IE4=(document.all&&!Opera);
mac=((IE4)&&(navigator.appVersion.indexOf("Mac")!=-1));
DOM=document.documentElement&&!IE4&&!Opera;
if(IE4){
av=navigator.appVersion;
avi=av.indexOf("MSIE");
if(avi==-1){version=parseInt(av);}else{version=parseInt(av.substr(avi+4));}}
function zz(e,i){
return e?e.document.getElementById(i):document.getElementById(i);};
function f33(p){
if(p&&p.indexOf(':/')==-1&&p.indexOf(':\\')==-1&&p.indexOf('/')!=0) return unescape(absPath)+p;
else return p;};
function addLoadHandler(lh){
if(lh){
if(!document.loadHandlers){
document.loadHandlers=new Array();
document.loadHandlers[0]=lh;
document.lastLoadHandler=0;}
else{
document.lastLoadHandler++;
document.loadHandlers[document.lastLoadHandler]=lh;}}};
addLoadHandler('f29');
addLoadHandler(window.onload);
/*window.onload=preloadImages();*/
function f32(){return true;};
window.onerror=f32;
function f01(op,opObj,vis,ns,ie,frc){
if(op||frc){
if(ns)opObj.style.MozOpacity=(vis&&op!=100)?(op/100):'0.999';
if(ie)opObj.style.filter=vis?"alpha(opacity="+op+")":"";}};
function f02(q,objId,step){
var obj=zz(q.v18,objId);
if(!obj ||(q.transTLO&&obj.level>0))return;
var objBg=zz(q.v18,objId+'bgWnd');
var max=q.v60?q.v60:100;
f01((q.fadingSteps-step)*max/q.fadingSteps,obj,1,1,1,1);
if(objBg)f01(100,objBg,0,0,q.v11,1);
if(step<=0)return;
setTimeout("f02("+q.name+",'"+objId+"',"+(step-1)+")",q.bShowDel/q.fadingSteps);};
function f04(wnd,width,borderWidth){
wnd.style.width=(width-borderWidth)+"px";
if(wnd.offsetWidth>width-borderWidth)wnd.style.width=(width-parseInt(wnd.style.paddingLeft)-parseInt(wnd.style.paddingRight))+"px";};
function f56(txt,op){
if(!txt)return "";
var i=op?txt.indexOf(op+':'):-2;
if(i !=-1){
var i2=txt.indexOf(";",i+2);
if(i2==-1)i2=txt.length;
return txt.substring(i+2,i2);}
return "";};
function f05(q,v12,level,v04,nsi)
{
var ppName=v12+"pp";
var pp=zz(q.v18,ppName);
if(pp)return pp;
if(q.v17&&q.v17.id==ppName)q.v17=null;
var v09=q.attr;
if(level>0)q.v02=q.v23;
var oldv02=q.v02;
pp=q.v18.document.createElement("DIV");
q.v18.document.body.appendChild(pp);
pp.id=ppName;
pp.v04=v04;
pp.level=level;
pp.v05=v09[5];
if(v12=='m1mn2')pp.v05='#f0f0f0';		/*to change mouseovercolour for showcase dropdown text*/
pp.v06=v09[3];
if(v12=='m1mn2')pp.v06='#000000';			/*to change bgcolour for showcase dropdown*/
var c1=v09[4];
if(v12=='m1mn2')c1='#BFD2EA';			/*to change bgcolour for showcase dropdown*/
var prop=eval("document."+v12+"prop");
if(prop){
var pw=f56(prop,"w");
if(pw)q.v02=parseInt(pw);
var bc=f56(prop,"p");
if(bc)c1=bc;}
pp.v07=v09[7];
if(v12=='m1mn2')pp.v07='#6070B1';		/*to change mouseover colour for showcase dropdown*/
pp.v08=c1;
pp.scrVis=false;
with(pp.style){
zIndex=maxZ;
position="absolute";
width=q.v02+"px";
if(!q.v11){
borderColor=q.borderCol;
if(v12=='m1mn2'){borderColor='#ffffff';		/*to change border colour for showcase dropdown*/
q.borderCol='#ffffff';
}
backgroundColor=c1;
borderWidth=q.bord+"px";
borderStyle="solid";}
else backgroundColor="";}
pp.q=q;
f30(pp,"mouseout",f15,false);
f30(pp,"mouseover",f14,false);
var v31=0;
var bgWnd=q.v18.document.createElement("DIV");
pp.appendChild(bgWnd);
bgWnd.id=pp.id+"bgWnd";
bgWnd.style.position="absolute";
bgWnd.style.top=q.v10+"px";
bgWnd.style.width=(q.v02-2*q.bord)+"px";
bgWnd.innerHTML="<font size='1'>&nbsp;</font>";
if(0){}
else{
bgWnd.style.backgroundColor=c1;}
if(q.v55)f03(q,pp,pp.id+"scrollUp","javascript:scrollUp("+q.name+",'"+pp.id+"');","(^1)",null,v09,true,v31,bgWnd);
var array=eval(v12);
var v13;
for(v13=0;v13<array.length/5;v13++){
var fold=array[v13*5+2];
var v30=fold?(v12+"_"+parseInt(v13+1)):null;
var options=array[v13*5+4];
v31+=f03(q,pp,null,array[v13*5+1],array[v13*5],v30,v09,(v13==array.length/5-1),v31,bgWnd,array[v13*5+3],options);}
if(q.v55)f03(q,pp,pp.id+"scrollDown","javascript:scrollDown("+q.name+",'"+pp.id+"');","(^2)",null,v09,true,v31,bgWnd);
var v28=0;
pp.style.height=(v31+q.bord*2+v28)+"px";
pp.maxHeight=v31+q.bord*2;
bgWnd.style.height=(v31-q.v10-v28)+"px";
if(pp.offsetHeight>v31+q.bord*2+v28){
pp.style.height=v31+"px";
q.bIncBorder=false;
pp.maxHeight=v31;}
q.v02=oldv02;
return pp;
};
function f03(q,pp,id,v27,v26,v30,v09,bLast,v31,parent,target,opt)
{
if(v26=="-")return q.sepH;
var itemType=0;
if(v26&&v26.indexOf("(^1)")!=-1)itemType=1;
if(v26&&v26.indexOf("(^2)")!=-1)itemType=2;
var itemWnd=q.v18.document.createElement("DIV");
pp.appendChild(itemWnd);
if(mac){
var brWnd=q.v18.document.createElement("BR");
pp.appendChild(brWnd);}
f30(itemWnd,"mouseover",f22,false);
f30(itemWnd,"mouseout",f23,false);
f30(itemWnd,"click",f20,false);
f30(itemWnd,"dblclick",f20,false);
itemWnd.owner=pp;
itemWnd.id=id;
with(itemWnd.style){
position="absolute";
if(itemType==2)top=(v31-q.scrollHeight)+"px";
else top=v31+"px";
if(v27){cursor=(!IE4||version>=7)?"pointer":"hand";}
else{cursor="default";}
if(!color)color=v09 [3];
if(!q.v11){
if(!bLast){
borderBottomColor=q.borderCol;
borderBottomWidth=q.sep+"px";
borderBottomStyle="solid";}}
else
left=(q.ppLeftPad+q.vertSpace)+"px";
if(!itemType)padding=q.vertSpace+"px";
paddingLeft=(q.ppLeftPad+q.vertSpace+q.v54)+"px";
paddingRight=((q.v01<q.iconSize?q.iconSize:q.v01)+q.vertSpace)+"px";
fontSize=v09[0];
fontWeight=(v09[1])?"bold":"normal";
fontStyle=(v09[2])?"italic":"normal";
fontFamily=v09[6];
textAlign=(q.v22==1?'center':(q.v22==2?'right':'left'));
f04(itemWnd,q.v11?q.v02-q.ppLeftPad-q.v01-2*q.vertSpace:q.v02,2*q.bord);}
if(v30)itemWnd.v30=v30;
if(itemType>0){
var arrow=q.v18.document.createElement("IMG");
itemWnd.appendChild(arrow);
var arrowSrc=f33(q.v21);
arrow.src="ts/"+q.fnm+"s"+((itemType==1)?"up":"down")+".gif";
arrow.setAttribute("HEIGHT","6","WIDTH","5");
arrow.className=((itemType==1)?"up":"down");
itemWnd.style.textAlign="center";
itemWnd.style.display="block";}
else
itemWnd.innerHTML=v26;
if(q.v56&&v27.indexOf(q.v56)==0)
itemWnd.url=q.v57+v27.substring(q.v56.length);
else
itemWnd.url=f33(v27);
itemWnd.f54=v26;
itemWnd.target=target;
if(v30&&q.showA){
var expandArrow=q.v18.document.createElement("IMG");
itemWnd.appendChild(expandArrow);
var v03=f33(q.v21);
expandArrow.src="ts/"+q.fnm+"ia.gif";
with(expandArrow.style){
width=q.iconSize+"px";
height=q.iconSize+"px";
position="absolute-bottom; padding-top:500px;";
var itemRect=f19(q,itemWnd);
top=((itemRect.bottom-itemRect.top)/2-q.iconSize/2)+"px";
left=(itemWnd.offsetWidth-q.iconSize-1)+"px";}}
if(opt){
itemWnd.customBg=f56(opt,"b");
itemWnd.customCl=f56(opt,"c");
itemWnd.status=f56(opt,"s");
var h=f56(opt,"h");
if(h)itemWnd.style.fontWeight=h;
var i=f56(opt,"i");
if(i)itemWnd.style.fontStyle=i;}
if(!itemWnd.status&&itemWnd.url.indexOf("<root>")!=-1)itemWnd.status=itemWnd.url.replace("<root>","/");
return itemWnd.offsetHeight;
};
function f35(wnd,vis){
var i=1;
while(true){
var eln='HideItem';
if(i>1)eln+=i;
var hideWnd=zz(wnd,eln);
if(!hideWnd)break;
hideWnd.style.visibility=vis ? 'visible' : 'hidden';
i++;}};
function f06(q,ppId,dl){
if(ppId.indexOf('_')==-1){
f35(q.v18,1);
if(q.actm&&dl)chgBg(q,q.actm,0,1);}
if(q.v29){q.v29Str=null;clearTimeout(q.v29);}
var pp=zz(q.v18,ppId);
if(pp){
if(pp.v14)f06(q,pp.v14.id);
if(pp.v04)pp.v04.v14=null;
if(IE4&&version>=6&&q.v11){
pp.style.clip="rect(0,-1,-1,0)";}
else{
pp.style.visibility="hidden";
pp.style.display="none";}}
if(q.v17&&q.v17.id==ppId)q.v17=null;};
function f07(rect,refx,refy){
var retval=new rct(rect.left-refx,rect.top-refy,rect.right-refx,rect.bottom-refy);
return retval;};
function f34(q,pp,actEl){
var items=pp.getElementsByTagName("DIV");
var i=0;
for(;i<items.length;i++)if(actEl!=items[i]&&(!items[i].id||items[i].id.indexOf("scroll")==-1)){
items[i].style.backgroundColor=pp.q.v11?"transparent":(items[i].customBg?items[i].customBg:pp.v08);
items[i].style.color=items[i].customCl?items[i].customCl:pp.v06;}};
function f08(q,pp,x,y,bDontMove,refWnd){
if(pp.id.indexOf('_')==-1){
f35(q.v18,0);}
if(q.v17&&q.v17.id==pp.id)return;
pp.style.left=x+"px";
 var myWidth = 0, myHeight = 0;
  if( typeof( window.innerWidth ) == 'number' ) {
    myWidth = window.innerWidth;
    myHeight = window.innerHeight;
  } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
    myWidth = document.documentElement.clientWidth;
    myHeight = document.documentElement.clientHeight;
  } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
   myWidth = document.body.clientWidth;
   myHeight = document.body.clientHeight;
  }
var abc = pp.style.height;
abcnew = abc.replace('1px','');
var h = window.pageYOffset ||
	document.body.scrollTop ||
    document.documentElement.scrollTop;
var bh = myHeight + h;
var ah = parseInt(y) + parseInt(abcnew);
var yp = y-abcnew;
var nheight =bh-y;
if (ah >= bh && y > nheight)
{
pp.style.top=yp+"px";
}
else
{
pp.style.top=y+"px";
}
if(IE4&&version>=6&&q.v11){
pp.style.clip="rect(auto,auto,auto,auto)";}
else{
pp.style.display="";
pp.style.visibility="visible";}
var v15=f19(q,pp);
var v16=f17(q.v18);
var bResize=(pp.offsetHeight<pp.maxHeight);
if(v15.right>v16.right){
if(refWnd&&refWnd.id&&refWnd.id.indexOf('tlm')==-1)pp.style.left=(Math.max(0,refWnd.offsetLeft-pp.offsetWidth+q.levelOffset))+"px";
else pp.style.left=(v16.right-pp.offsetWidth-5)+"px";}
var wnd1=zz(q.v18,pp.id+"scrollDown");
var wnd2=zz(q.v18,pp.id+"scrollUp");
var cv=mac?15:(q.bIncBorder?3:20);
if(((v15.bottom>v16.bottom)||bResize)&&!NS60){
var newtop=v16.bottom-pp.offsetHeight-cv;
if(!q.menuHorizontal)bDontMove=false;
if(q.v55&&(newtop<0||bDontMove||bResize)){
var minNum=Math.min(pp.maxHeight,v16.bottom-pp.offsetTop-cv-(q.bIncBorder?0:q.bord*2));
if(minNum>50){
pp.scrVis=(minNum!=pp.maxHeight);
f09(q,pp,v16.top,minNum);}
else{	
pp.style.top=y+"px";}}
else
pp.style.top=newtop+"px";}
if(q.v55){
wnd1.style.display=pp.scrVis?"":"none";
wnd2.style.display=pp.scrVis?"":"none";}
if(q.bShowDel&&!mac)f02(q,pp.id,q.fadingSteps);
f34(q,pp,null);};
function f09(q,pp,documentOffset,height){
var wnd2=zz(q.v18,pp.id+"scrollDown");
var wnd4=zz(q.v18,pp.id+"scrollUp");
var wnd3=zz(q.v18,pp.id+"bgWnd");
var wnd1Height=0;
if(q.v55){
wnd2.style.zIndex=maxZ+1;
wnd4.style.zIndex=maxZ+1;}
pp.style.height=height+"px";
wnd3.style.height=(height-q.v10-q.bord*2-wnd1Height)+"px";
if(q.v55){
wnd2.style.top=(height-wnd1Height-q.scrollHeight-(q.bIncBorder?q.bord*2:0))+"px";
f10(q,pp.id,0);}}
function f10(q,ppId,dir){
var pp=zz(q.v18,ppId);
var v15=f19(q,pp);
var items=pp.getElementsByTagName("DIV");
var i=(dir>0?0:items.length-1);
var off=(dir>0?1:-1);
var bFirst=true;
var offset=dir*q.scrollStep;
if(pp.scrVis){
try{
v15.top+=q.scrollHeight;
v15.bottom-=q.scrollHeight;
}
catch(e){
}
}
try{
v15.bottom-=2*q.bord;
}
catch(e){
}
var wnd1Height=0;
for(;i<items.length&&i>=0;i+=off){
var item=items[i];
if(!item.id||(item.id.indexOf("scroll")==-1&&item.id.indexOf("bgWnd")==-1)){
var itemRect=f19(q,item);
if(bFirst&&dir==0){
offset=pp.maxHeight-(item.offsetTop+item.offsetHeight)+(pp.scrVis?q.scrollHeight:0)-(q.bIncBorder?q.bord*2:0)-wnd1Height;
}
var relRect=f07(v15,itemRect.left,itemRect.top+offset);
if(dir>0&&relRect.top<-q.scrollHeight&&bFirst)return;
if(dir<0&&itemRect.bottom<v15.bottom-wnd1Height&&bFirst)return;
if(offset!=0)item.style.top=(item.offsetTop+offset)+"px";
if(!mac)item.style.clip="rect("+relRect.top+","+relRect.right+","+relRect.bottom+","+relRect.left+")";
if(relRect.bottom<0||relRect.top>item.offsetHeight)
item.style.visibility="hidden";
else
item.style.visibility="visible";
bFirst=false;}}
if(pp.scrPos)pp.scrPos+=offset;
else pp.scrPos=offset;
};
function scrollUp(q,ppId){
f10(q,ppId,1);}
function scrollDown(q,ppId){
f10(q,ppId,-1);}
function f13(q,pp){
var wnd=q.v17;
while(wnd){
if(wnd.id==pp.id)
return true;
wnd=wnd.v14;}
return false;};
function f14(){
var q=this.q;
if(q.v17&&q.v58&&f13(q,this))clearTimeout(q.v58);};
function f15(){
var q=this.q;
f15Impl(q,this);};
function f15Impl(q,pp,pid){
	if(!pp&&!pid)pp=q.v17;
	if(!pp)pp=zz(q.v18,pid+"pp");
	if(pp&&q.mout&&q.v17&&f13(q,pp)){
	if(q.v58)clearTimeout(q.v58);
	/*q.v58=setTimeout("f06("+q.name+",'"+q.v17.id+"',1);",q.closeDelay)  q.closeDelay used to control delay*/
	q.v58=setTimeout("f06("+q.name+",'"+q.v17.id+"',1);",500);
	}
};
function rct(left,top,right,bottom){
this.left=left;
this.top=top;
this.right=right;
this.bottom=bottom;};
function f17(doc){
var left=0;
var top=0;
var right;
var bottom;
if(doc.pageXOffset)left=doc.pageXOffset;
else if(doc.document.documentElement.scrollLeft)left=doc.document.documentElement.scrollLeft;
else if(doc.document.body.scrollLeft)left=doc.document.body.scrollLeft;
if(doc.pageYOffset)top=doc.pageYOffset;
else if(doc.document.documentElement.scrollTop)top=doc.document.documentElement.scrollTop;
else if(doc.document.body.scrollTop)top=doc.document.body.scrollTop;
if(doc.innerWidth)right=left+doc.innerWidth;
else if(doc.document.documentElement.clientWidth)right=left+doc.document.documentElement.clientWidth;
else if(doc.document.body.clientWidth)right=left+doc.document.body.clientWidth;
if(doc.innerHeight)bottom=top+doc.innerHeight;
else if(doc.document.documentElement.clientHeight)bottom=top+doc.document.documentElement.clientHeight;
else if(doc.document.body.clientHeight)bottom=top+doc.document.body.clientHeight;
if(bottom > 300 && doc.name)
bottom = 300 ;  /*it is used to maintain the height of dropdown only for showcase.*/
var retval=new rct(left,top,right,bottom);
return retval;};
function f18(q,wnd){
var doc=q ? q.v18.document : document;
var left=mac?parseInt(doc.body.leftMargin):0;
var top=mac?parseInt(doc.body.topMargin):0;
var right=0;
var bottom=0;
var par=wnd;
var topObj=doc.documentElement;
if(!topObj)topObj=doc.body;
while(par){
left=left+parseInt(par.offsetLeft);
top=top+parseInt(par.offsetTop);
if(par.offsetParent==par || par.offsetParent==topObj)break;
par=par.offsetParent;}
right=left+parseInt(wnd.offsetWidth);
bottom=top+parseInt(wnd.offsetHeight);
var retval=new rct(left,top,right,bottom);
return retval;};
function f19(q,wnd){
if((mac||DOM||Opera7)&&wnd.getBoundingClientRect)return wnd.getBoundingClientRect();
return f18(q,wnd);};
function f53(wn,fr){
if(wn.frames){
if(wn.frames[fr])return wn.frames[fr];
for(var i=0;i<wn.frames.length;i++){
try{
if(wn.frames[i].name==fr)return wn.frames[i];
var ret=f53(wn.frames[i],fr);
if(ret)return ret;
}catch(e){}}}
return null;};
function f20(){
var startPos=this.f54.indexOf('<!--');
if(startPos!=-1){
	var endPos=this.f54.indexOf('-->',startPos);
	/*alert("Full version of the product would now open item's URL in frame "+this.f54.substring(startPos+4,endPos))*/
	}
else{
	var msg="Full version of the product would now open item's URL ";
	if(this.owner.q.cntFrame)msg+=" in frame "+this.owner.q.cntFrame;
	else msg+="in current window/frame.";
	/*alert(msg)*/
}
window.location=this.url;
};
function f21(q){
if(q.v29Str){
eval(q.v29Str);
if(q.v29)clearTimeout(q.v29);
q.v29=setTimeout("f21("+q.name+")",q.v55);}}
function f22(){
var item=this;
var q=this.owner.q;
if(item.id&&item.id.indexOf("scroll")!=-1){
q.v29Str=item.url;
var jsind=q.v29Str.indexOf('javascript:');
if(jsind!=-1)q.v29Str=q.v29Str.substring(jsind);
f21(q);
return;}
f34(q,item.owner,item);
if(q.bHlNL || item.url || item.v30){
item.style.color=item.owner.v05;
item.style.backgroundColor=(!item.owner.v07&&q.v11)?"transparent":item.owner.v07;}
if(!q.itemOverDelay){
f222(q,item);}
else{
if(q.v59)clearTimeout(q.v59);
q.itemOverObj=item;
q.v59=setTimeout("f222 ("+q.name+",null)",q.itemOverDelay);}};
function f222(q,itemObj){
var item=(itemObj ? itemObj : q.itemOverObj);
if(!item)return;
var bOp=0;
if(item.owner.v14){
if(item.v30&&item.v30+'pp'==item.owner.v14.id)bOp=1;
if(!bOp)f06(q,item.owner.v14.id);}
if(item.status)
window.status=item.status;
else if(item.url&&item.url.indexOf("javascript:")==-1)
window.status=item.url;
else
window.status="";
if(item.v30&&!bOp){
var rect=f19(q,item);
var x=rect.right-q.levelOffset;
var y=rect.top-q.levelOffsety;
var pp=f05(q,item.v30,item.owner.level+1,item.owner);
item.owner.v14=pp;
f08(q,pp,x,y+2,false,item.owner);}};
function f23(){
var item=this;
var q=this.owner.q;
if(q.v29){q.v29Str=null;clearTimeout(q.v29);}
if(item.id&&item.id.indexOf("scroll")!=-1)return;
window.status="";};
function exM(q,ppId,refWnd,dum,ml,mt,mr,mb){
if(!docLoaded)return;
if(ppId=='none'){
if(!q.itemOverDelay&&q.v17)
f06(q,q.v17.id);
else
f15Impl(q);
if(q.v58)clearTimeout(q.v58);
return;}
var bFr=q.v19&&!q.v20;
var rect;
if(refWnd=='coords'){
rect=f18(q,zz(0,q.name+'tl'));
rect.left=rect.left+ml;
rect.top=rect.top+mt;
rect.right=rect.left+mr;
rect.bottom=rect.top+mb;}
else{
rect=f18(q,zz(0,refWnd));}
if(q.bVarWidth&&!q.v11)q.v02=rect.right-rect.left+(IE4?q.bord*2:0);
var x;
var y;
x=rect.left-q.bord;
y=rect.bottom+q.v61;
if(!q.itemOverDelay){
exM2(q,ppId,refWnd,x,y);}
else{
if(q.v59)clearTimeout(q.v59);
q.v59=setTimeout("exM2 ("+q.name+",'"+ppId+"','"+refWnd+"',"+x+","+y+")",q.itemOverDelay);}
};
function exM1(q,ppId,refWnd,dum,ml,mt,mr,mb){
if(!docLoaded)return;
if(ppId=='none'){
if(!q.itemOverDelay&&q.v17)
f06(q,q.v17.id);
else
f15Impl(q);
if(q.v58)clearTimeout(q.v58);
return;}
var bFr=q.v19&&!q.v20;
var rect;
if(refWnd=='coords'){
rect=f18(q,zz(0,q.name+'tl'));
rect.left=rect.left+ml;
rect.top=rect.top+mt;
rect.right=rect.left+mr;
rect.bottom=rect.top+mb;}
else{
rect=f18(q,zz(0,refWnd));}
if(q.bVarWidth&&!q.v11)q.v02=rect.right-rect.left+(IE4?q.bord*2:0);
var x;
var y;
x=rect.right-q.bord;
y=rect.top+q.v61;
if(!q.itemOverDelay){
exM2(q,ppId,refWnd,x,y);}
else{
if(q.v59)clearTimeout(q.v59);
q.v59=setTimeout("exM2 ("+q.name+",'"+ppId+"','"+refWnd+"',"+x+","+y+")",q.itemOverDelay);}
};
function exM2(q,ppId,refWnd,x,y)
{
	if(q.v58)clearTimeout(q.v58);
	if(q.v17&&q.v17.id!=ppId+"pp")
	f06(q,q.v17.id);
	var pp=f05(q,ppId,0,null,refWnd);
	f08(q,pp,x+q.xOff,y+q.yOff,true,null);
	q.v17=pp;
};
function coM(q,ppId){
if(!docLoaded)return;
clearTimeout(q.v59);
f15Impl(q);};
function f28(){
var nmn;
for(nmn=1;nmn<=lastm;nmn++){
var q=eval("window.m"+nmn);
if(q&&q.v17)f06(q,q.v17.id,1);}};
function f29(){
if(docLoaded)return;
var nmn;
for(nmn=1;nmn<=lastm;nmn++){
var q=eval("window.m"+nmn);
if(q){
q.v18=(q.v19&&!q.v20)?f53(window.top,q.v24):window;
q.targetFrame=(q.v19)?f53(window.top,q.cntFrame):window;
if(!q.mout)f30(q.v18.document,"mousedown",f28,false);}}
docLoaded=true;};
function f30(obj,event,fun,bubble){
if(obj.addEventListener)
obj.addEventListener(event,fun,bubble);
else
eval("obj.on"+event+"="+fun);};
function chgBg(q,item,color,cl){
if(!IE4&&!DOM&&!Opera7)return;
if(!q.v52){
var el=zz(0,item);
var ela=zz(0,item+'a');
var ncl=el.bgc ? el.bgc : q.tlmOrigBg;
var hcl=q.tlmHlBg;
var tcl=el.tc ? el.tc : q.tlmOrigCol;
if(color==0){
if(cl){
if(!q.v25){
el.style.background=ncl;
el.style.color=tcl;}
if(ela)ela.style.color=tcl;}}
else{
var bSetC=(!el.tc || !el.bgc);
if(q.actm&&q.actm!=item)chgBg(q,q.actm,0,1);
if(!q.v25){
if(color&1){if(bSetC)el.bgc=el.bgColor;el.style.background=hcl;}
if(bSetC)el.tc=el.style.color;
el.style.color=q.tlmHlCol;}
if(ela&&color&2){if(bSetC)el.tc=ela.style.color;ela.style.color=q.tlmHlCol;}
q.actm=item;
if(bSetC){if(!el.tc)el.tc=tcl;if(!el.bgc)el.bgc=ncl;}}}};
function f31(){
var i;
var l=document.lastLoadHandler;
document.lastLoadHandler=-1;
for(i=0;i<=l;i++){
var h=document.loadHandlers[i];
if(typeof(h)!='function'){
var bPar=(h.indexOf('(')==-1);
eval(h+(bPar ? '();' : ';'));}
else{
h();}}};
/*drop.js ends*/
/* following js is used to convert language*/
;
/*scroller function start*/
var Imgs=[];
function ImgLoad(cls) 
{ 
	var as=zxcByClassName(cls); 
	for (var z0=0;z0<as.length;z0++) 
	{ 
		if (as[z0].getElementsByTagName('IMG')[0].getAttribute('rel')&&as[z0].getElementsByTagName('IMG')[0]) 
		{ 
			oop=new Fade(as[z0].getElementsByTagName('IMG')[0],as[z0].getElementsByTagName('IMG')[0].getAttribute('rel')); Imgs.push(oop); 
		}
		else if(as[z0].getAttribute('rel')&&as[z0].getElementsByTagName('IMG')[0])
		{
			oop=new Fade(as[z0].getElementsByTagName('IMG')[0],as[z0].getAttribute('rel')); Imgs.push(oop); 
		}
	} 
CkTop(); 
};
function Fade(img,src)
{ 
	this.img=img; this.src=src; this.opc=0; 
};
Fade.prototype.fade=function()
{ 
	if (this.opc==0) this.img.src=this.src; 
	var oop=this; 
};
function CkTop()
{ 
	for (var z0=0;z0<Imgs.length;z0++)
	{ 
		if (zxcPos(Imgs[z0].img)[1]<zxcWWHS()[1]+zxcWWHS()[3]&&Imgs[z0].opc==0)
		{ 
			Imgs[z0].fade(); Imgs.splice(z0,1); z0--; 
		} 
	} 
};
function zxcWWHS(){ if (window.innerHeight) return [window.innerWidth-10,window.innerHeight-10,window.pageXOffset,window.pageYOffset]; else if (document.documentElement.clientHeight) return [document.documentElement.clientWidth-10,document.documentElement.clientHeight-10,document.documentElement.scrollLeft,document.documentElement.scrollTop]; return [document.body.clientWidth,document.body.clientHeight,document.body.scrollLeft,document.body.scrollTop]; };
function zxcPos(obj){ var rtn=[0,0]; while(obj){ rtn[0]+=obj.offsetLeft; rtn[1]+=obj.offsetTop; obj=obj.offsetParent; } return rtn; };
function zxcByClassName(nme,el,tag) 
{ 
	if (typeof(el)=='string') 
	el=document.getElementById(el);
	el=el||document;
	ary=[];
	if(nme != 'undefined') 
	{ 
		for (var tag=tag||'*',reg=new RegExp('\\b'+nme+'\\b'),els=el.getElementsByTagName(tag),z0=0; z0<els.length;z0++) 
		{ 
			if(reg.test(els[z0].className)) 
			ary.push(els[z0]); 
		} 
	} 

	return ary;
};
window.onscroll=CkTop;
/*thankyou and thankyou1 page functions start*/
function printit()
{
parent.contact.focus();
parent.contact.print();
};
function savebookmark()
{
if (window.sidebar) { /* Mozilla Firefox Bookmark*/
window.sidebar.addPanel("Sbrod Metal Works", "http://www.indiamart.com/sbrodmetalworks/","");
} else if( window.external ) { /* IE Favorite*/
window.external.AddFavorite( "http://www.indiamart.com/sbrodmetalworks/", "Sbrod Metal Works"); }
else if(window.opera && window.print) { /* Opera Hotlist*/
return true; }
};
function getCookie(Name)
{
var search = Name + "=";
if (document.cookie.length > 0)
{ /* if there are any cookies*/
offset = document.cookie.indexOf(search);
if (offset != -1)
{ /* if cookie exists*/
offset += search.length;
/* set index of beginning of value*/
end = document.cookie.indexOf(";", offset);
/* set index of end of cookie value*/
if (end == -1) end = document.cookie.length;
return unescape(document.cookie.substring(offset, end));
}
}
return "";
};
function get()
{
if( (cookie = getCookie("newImeshID")) > ""){
Values = cookie.split("|");
return (Values[1]);
}
else
{
return ("");
}
};
function goback() 
{
history.go(-1);
};
/*thankyou and thankyou1 page functions closed*/
/*scroller function closed*/
/*new zoomup starts*/
/*new zoomup ends*///plus-ninus start
var plnew = "pl2";
function show(obj, plus, obj1,plus1)
{
if(document.getElementById)
{
var el = document.getElementById(obj);
var ar = document.getElementById("ms1").getElementsByTagName("div");
for (var i=0; i<ar.length; i++)
{
if(ar[i].className == "on")
{
ar[i].className = "off";
}
}
document.getElementById(obj).className = "on";
}
if(document.getElementById(plnew))
{
document.getElementById(plnew).className = "prd lh2 a b bo7 p9 cu";
}
if(document.getElementById(plus).className == "prd lh2 a b bo7 p9 cu")
{
document.getElementById(plus).className = "pr1 lh2 a b";
}
plnew = plus;
document.getElementById(obj1).className = "off";
document.getElementById(plus1).className = "b f2 u txr p10";
}
function show1(obj, plus)
{
document.getElementById(obj).className = "on";
document.getElementById(plus).className = "off";
}
function show2(obj, plus)
{
document.getElementById(obj).className = "b f2 u txr p10";
document.getElementById(plus).className = "off";
}
//plus-ninus start
//index page view all
function tst(d) { if(d=="t1") { document.getElementById('t1').style.display = "block";document.getElementById('t2').style.display = "none"; } else { document.getElementById('t2').style.display = "block";document.getElementById('t1').style.display = "none"; }}
//  on this page drop/drop1.js,language converter.js,callfree.js, plus/minus for pages, scroller function ,search condition,pns function//
//trustseal
 /* code to add Hot image to hot products*/
 if (typeof jQuery !== 'undefined') {
 	$(document).ready(function(){
	  
	    $("div[data]:first").children("a").append('<div class="productDesc">'+$("div[data]:first").attr("data")+'</div>');
      });
      /* code to add Hot image to hot products*/
      /* Function to manage Hot div and detail on every transition start*/
	 function manageImageTransition(){
	    max = 0;
	    itemdata = "";
	    $(".slideItem").each(function(){
		if($(this).css("z-index") > max){
		max = $(this).css("z-index");
		itemdata = this;  
		}
	    });
	    $(".productDesc").remove();	
	    $(itemdata).children("a").append('<div class="productDesc">'+$(itemdata).attr("data")+'</div>'); 
	  }
}
/* Function to manage Hot div and detail on every transition end*/
function openchildts1(thisurl) 
{
browserName = navigator.appName;
browserVer = parseInt(navigator.appVersion);
condition = !(( (browserName.indexOf("Explorer") >=0 ) && (browserVer < 4) ) ||  ((browserName.indexOf("Netscape") >=0 ) && (browserVer < 2) ) ) ;
if (condition == true  )
CanAnimate = true;
else
CanAnimate = false;
if ( CanAnimate ) {
var windowHeight; var windowWidth; var windowTop; var windowLeft;
if (browserName == 'Microsoft Internet Explorer')
{
        windowWidth="550px";
}
else
{
        windowWidth="553px";
/*      windowWidth=(screen.width*(57/100)-200);*/
}
windowHeight=(screen.height*(80/100))*0.85;
windowTop=(screen.height*(20/100))*0.8; windowLeft=screen.width*(40.2/100);
msgWindow=window.open( '' ,'subwindow','toolbar=no,location=no,directories=no,status=yes,scrollbars=yes,menubar=no,resizable=yes,top='+windowTop+',left='+windowLeft+',width='+windowWidth+',height='+windowHeight);
msgWindow.focus(); msgWindow.location.href = thisurl; }
else {
msgWindow=window.open( thisurl,'subwindow','toolbar=no,location=no,directories=no,status=yes,scrollbars=yes,menubar=no,resizable=yes,width=510,height=420'); } 
};var sms_sender_mobile1='';
function sms_limitText(sms_limitField, sms_limitNum)
{
    	if (sms_limitField.value.length > sms_limitNum)
	{
		sms_limitField.value = sms_limitField.value.substring(0, sms_limitNum);
	}
	else
	{
		var sms_remchar=160-parseInt(sms_limitField.value.length);
		document.getElementById('Descstatus').innerHTML='Remaining Characters : '+sms_remchar;
	}
};

var sms_myWidth = 0, sms_myHeight = 0;
function sms_bhw1()
{
/* alert("====");*/
if( typeof( window.innerWidth ) == 'number' ) {
sms_myWidth = window.innerWidth;
sms_myHeight = window.innerHeight;
} else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) )
{
sms_myWidth = document.documentElement.clientWidth;
sms_myHeight = document.documentElement.clientHeight;
}
else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
sms_myWidth = document.body.clientWidth;
sms_myHeight = document.body.clientHeight;
}
var h_sms = window.pageYOffset ||
document.body.scrollTop ||
document.documentElement.scrollTop;
var sms_browserName=navigator.appName;

var sms_imagedivheight=sms_myHeight-93;
var test = sms_myWidth*24/100;
var sms_divwidth = sms_myWidth-test;
var sms_widthformizilla = sms_myWidth-538;
var sms_mozillawidth = sms_widthformizilla-sms_divwidth;
var sms_iewidth = sms_myWidth-390;

var sms_mozillawidth1 = sms_mozillawidth/2;
var sms_iewidth1 = sms_iewidth/2;

var sms_mtop = h_sms+7;
var sms_aboveheight = sms_myHeight-500;
var sms_aboveheight1 = sms_aboveheight/2+h_sms;


/* alert(sms_aboveheight1);*/
document.getElementById('divscroll_sms').style.height="476px";
document.getElementById('divscroll_sms').style.width="390px";
document.getElementById('message_sms1').style.top=sms_aboveheight1+"px";
document.getElementById('message_sms1').style.left=sms_iewidth1+"px";
document.getElementById('message_sms3').style.top=sms_aboveheight1+"px";
document.getElementById('message_sms3').style.left=sms_iewidth1+"px";
document.getElementById('divscroll_sms').name="miniwin";
};

/* function blowup_call()
 {
 sms_bhw();
  document.getElementById('message_call').className="don";
 document.getElementById('message_sms1').className="doff";
  document.getElementById('mx_call').className="doff";
  document.getElementById('mx1_call').className="doff";
 };
*/

function blowup_sms()
{
send_sms_captcha();
document.sms_dataform.sms_query_message.value = "";
sms_bhw1();
document.getElementById('message_sms1').className="don";
};


function blowup_sms_off()
{
document.getElementById('message_sms1').className="doff";
};

function blowup_sms_off1()
{
document.getElementById('message_sms1').className="doff";
document.getElementById('message_sms3').className="doff";
};




function check_count_change_sms()
{
	var val = document.sms_dataform.sms_country.options[document.sms_dataform.sms_country.selectedIndex].value;

	if(val != document.sms_dataform.country_iso_sms.value)
	{
		if(phonecode_sms[document.sms_dataform.sms_country.selectedIndex] != '')
		{
			var reg_sms=new RegExp("-");
			if(reg_sms.test(phonecode_sms[document.sms_dataform.sms_country.selectedIndex]))
			{
				var ph_arr_new=phonecode_sms[document.sms_dataform.sms_country.selectedIndex].split('-');
				document.sms_dataform.s_cmobile_sms.value ='+'+ph_arr_new[0];
			}
			else
			{
				document.sms_dataform.s_cmobile_sms.value = '+'+phonecode_sms[document.sms_dataform.sms_country.selectedIndex];
			}
		}
		else
		{
			document.sms_dataform.s_cmobile_sms.value = '';
		}
	}
	document.sms_dataform.country_iso_sms.value = val;
	document.sms_dataform.sender_country.value = document.sms_dataform.sms_country.options[document.sms_dataform.sms_country.selectedIndex].text;

};

/*if form field exists*/
var phonecode_sms = new Array();
phonecode_sms[0] = "";
phonecode_sms[1] = "61";
phonecode_sms[2] = "43";
phonecode_sms[3] = "32";
phonecode_sms[4] = "1";
phonecode_sms[5] = "45";
phonecode_sms[6] = "420";
phonecode_sms[7] = "49";
phonecode_sms[8] = "33";
phonecode_sms[9] = "52";
phonecode_sms[10] = "64";
phonecode_sms[11] = "47";
phonecode_sms[12] = "34";
phonecode_sms[13] = "41";
phonecode_sms[14] = "44";
phonecode_sms[15] = "1";
phonecode_sms[16] = "";
phonecode_sms[17] = "93";
phonecode_sms[18] = "355";
phonecode_sms[19] = "213";
phonecode_sms[20] = "1-684";
phonecode_sms[21] = "376";
phonecode_sms[22] = "244";
phonecode_sms[23] = "1-264";
phonecode_sms[24] = "672";
phonecode_sms[25] = "1-268";
phonecode_sms[26] = "54";
phonecode_sms[27] = "7";
phonecode_sms[28] = "297";
phonecode_sms[29] = "61";
phonecode_sms[30] = "43";
phonecode_sms[31] = "994";
phonecode_sms[32] = "1-242";
phonecode_sms[33] = "973";
phonecode_sms[34] = "880";
phonecode_sms[35] = "1-246";
phonecode_sms[36] = "375";
phonecode_sms[37] = "32";
phonecode_sms[38] = "501";
phonecode_sms[39] = "229";
phonecode_sms[40] = "1-441";
phonecode_sms[41] = "975";
phonecode_sms[42] = "591";
phonecode_sms[43] = "387";
phonecode_sms[44] = "267";
phonecode_sms[45] = "";
phonecode_sms[46] = "55";
phonecode_sms[47] = "246";
phonecode_sms[48] = "673";
phonecode_sms[49] = "359";
phonecode_sms[50] = "226";
phonecode_sms[51] = "257";
phonecode_sms[52] = "855";
phonecode_sms[53] = "237";
phonecode_sms[54] = "1";
phonecode_sms[55] = "238";
phonecode_sms[56] = "1-345";
phonecode_sms[57] = "236";
phonecode_sms[58] = "235";
phonecode_sms[59] = "56";
phonecode_sms[60] = "86";
phonecode_sms[61] = "852";
phonecode_sms[62] = "853";
phonecode_sms[63] = "61";
phonecode_sms[64] = "672";
phonecode_sms[65] = "57";
phonecode_sms[66] = "269";
phonecode_sms[67] = "242";
phonecode_sms[68] = "243";
phonecode_sms[69] = "682";
phonecode_sms[70] = "506";
phonecode_sms[71] = "225";
phonecode_sms[72] = "385";
phonecode_sms[73] = "53";
phonecode_sms[74] = "357";
phonecode_sms[75] = "420";
phonecode_sms[76] = "45";
phonecode_sms[77] = "253";
phonecode_sms[78] = "1-767";
phonecode_sms[79] = "1-809";
phonecode_sms[80] = "";
phonecode_sms[81] = "593";
phonecode_sms[82] = "20";
phonecode_sms[83] = "503";
phonecode_sms[84] = "240";
phonecode_sms[85] = "291";
phonecode_sms[86] = "372";
phonecode_sms[87] = "251";
phonecode_sms[88] = "500";
phonecode_sms[89] = "298";
phonecode_sms[90] = "679";
phonecode_sms[91] = "358";
phonecode_sms[92] = "33";
phonecode_sms[93] = "594";
phonecode_sms[94] = "689";
phonecode_sms[95] = "262";
phonecode_sms[96] = "241";
phonecode_sms[97] = "220";
phonecode_sms[98] = "995";
phonecode_sms[99] = "49";
phonecode_sms[100] = "233";
phonecode_sms[101] = "350";
phonecode_sms[102] = "30";
phonecode_sms[103] = "299";
phonecode_sms[104] = "1-473";
phonecode_sms[105] = "590";
phonecode_sms[106] = "1-671";
phonecode_sms[107] = "502";
phonecode_sms[108] = "224";
phonecode_sms[109] = "245";
phonecode_sms[110] = "592";
phonecode_sms[111] = "509";
phonecode_sms[112] = "672";
phonecode_sms[113] = "504";
phonecode_sms[114] = "36";
phonecode_sms[115] = "354";
phonecode_sms[116] = "91";
phonecode_sms[117] = "62";
phonecode_sms[118] = "98";
phonecode_sms[119] = "964";
phonecode_sms[120] = "353";
phonecode_sms[121] = "972";
phonecode_sms[122] = "39";
phonecode_sms[123] = "1-876";
phonecode_sms[124] = "81";
phonecode_sms[125] = "962";
phonecode_sms[126] = "7";
phonecode_sms[127] = "254";
phonecode_sms[128] = "686";
phonecode_sms[129] = "82";
phonecode_sms[130] = "850";
phonecode_sms[131] = "965";
phonecode_sms[132] = "996";
phonecode_sms[133] = "856";
phonecode_sms[134] = "371";
phonecode_sms[135] = "961";
phonecode_sms[136] = "266";
phonecode_sms[137] = "231";
phonecode_sms[138] = "218";
phonecode_sms[139] = "423";
phonecode_sms[140] = "370";
phonecode_sms[141] = "352";
phonecode_sms[142] = "389";
phonecode_sms[143] = "261";
phonecode_sms[144] = "265";
phonecode_sms[145] = "60";
phonecode_sms[146] = "960";
phonecode_sms[147] = "223";
phonecode_sms[148] = "356";
phonecode_sms[149] = "692";
phonecode_sms[150] = "596";
phonecode_sms[151] = "222";
phonecode_sms[152] = "230";
phonecode_sms[153] = "269";
phonecode_sms[154] = "52";
phonecode_sms[155] = "691";
phonecode_sms[156] = "373";
phonecode_sms[157] = "377";
phonecode_sms[158] = "976";
phonecode_sms[159] = "382";
phonecode_sms[160] = "1-664";
phonecode_sms[161] = "212";
phonecode_sms[162] = "258";
phonecode_sms[163] = "95";
phonecode_sms[164] = "264";
phonecode_sms[165] = "674";
phonecode_sms[166] = "977";
phonecode_sms[167] = "599";
phonecode_sms[168] = "687";
phonecode_sms[169] = "64";
phonecode_sms[170] = "505";
phonecode_sms[171] = "227";
phonecode_sms[172] = "234";
phonecode_sms[173] = "683";
phonecode_sms[174] = "672";
phonecode_sms[175] = "1-670";
phonecode_sms[176] = "47";
phonecode_sms[177] = "968";
phonecode_sms[178] = "92";
phonecode_sms[179] = "680";
phonecode_sms[180] = "507";
phonecode_sms[181] = "675";
phonecode_sms[182] = "595";
phonecode_sms[183] = "51";
phonecode_sms[184] = "63";
phonecode_sms[185] = "872";
phonecode_sms[186] = "48";
phonecode_sms[187] = "351";
phonecode_sms[188] = "1";
phonecode_sms[189] = "974";
phonecode_sms[190] = "262";
phonecode_sms[191] = "40";
phonecode_sms[192] = "7";
phonecode_sms[193] = "250";
phonecode_sms[194] = "290";
phonecode_sms[195] = "1-869";
phonecode_sms[196] = "1-758";
phonecode_sms[197] = "508";
phonecode_sms[198] = "1-784";
phonecode_sms[199] = "685";
phonecode_sms[200] = "378";
phonecode_sms[201] = "239";
phonecode_sms[202] = "966";
phonecode_sms[203] = "221";
phonecode_sms[204] = "381";
phonecode_sms[205] = "248";
phonecode_sms[206] = "232";
phonecode_sms[207] = "65";
phonecode_sms[208] = "421";
phonecode_sms[209] = "386";
phonecode_sms[210] = "677";
phonecode_sms[211] = "252";
phonecode_sms[212] = "27";
phonecode_sms[213] = "995";
phonecode_sms[214] = "34";
phonecode_sms[215] = "94";
phonecode_sms[216] = "249";
phonecode_sms[217] = "597";
phonecode_sms[218] = "47";
phonecode_sms[219] = "268";
phonecode_sms[220] = "46";
phonecode_sms[221] = "41";
phonecode_sms[222] = "963";
phonecode_sms[223] = "886";
phonecode_sms[224] = "992";
phonecode_sms[225] = "255";
phonecode_sms[226] = "66";
phonecode_sms[227] = "31";
phonecode_sms[228] = "228";
phonecode_sms[229] = "690";
phonecode_sms[230] = "676";
phonecode_sms[231] = "1-868";
phonecode_sms[232] = "216";
phonecode_sms[233] = "90";
phonecode_sms[234] = "993";
phonecode_sms[235] = "1-649";
phonecode_sms[236] = "688";
phonecode_sms[237] = "256";
phonecode_sms[238] = "380";
phonecode_sms[239] = "971";
phonecode_sms[240] = "44";
phonecode_sms[241] = "1";
phonecode_sms[242] = "1";
phonecode_sms[243] = "598";
phonecode_sms[244] = "998";
phonecode_sms[245] = "678";
phonecode_sms[246] = "379";
phonecode_sms[247] = "58";
phonecode_sms[248] = "84";
phonecode_sms[249] = "1-284";
phonecode_sms[250] = "1-340";
phonecode_sms[251] = "681";
phonecode_sms[252] = "212";
phonecode_sms[253] = "967";
phonecode_sms[254] = "38";
phonecode_sms[255] = "260";
phonecode_sms[256] = "263";

/* for text value start*/
function RegValue_sms(FieldName_sms)
{
	if(FieldName_sms.value == 'First Name' || FieldName_sms.value == 'Your Name')
	{
		FieldName_sms.value = '';
		FieldName_sms.className='txtf';
	}
	else
	{
		FieldName_sms.className='txtf';
	}
};

function RegValue_sms1(FieldName_sms1)
{
	if(FieldName_sms1.value == 'Last Name')
	{
		FieldName_sms1.value = '';
		FieldName_sms1.className='txtf';
	}
	else
	{
		FieldName_sms1.className='txtf';
	}
};
function RegValue_sms11(FieldName_sms1)
{
	if(FieldName_sms1.value == '')
	{
		FieldName_sms1.value = 'Last Name';
		FieldName_sms1.className='txtfa';
	}
	else
	{
		FieldName_sms1.className='txtf';
	}
};

function RegValue1_sms(FieldName_sms1)
{
	if(FieldName_sms1.value == '')
	{
		FieldName_sms1.value = 'First Name';
		FieldName_sms1.className='txtfa';
	}
	else
	{
		FieldName_sms1.className='txtf';
	}
};

function send_sms_captcha()
{
var d1_sms = new Date(); 
var epoch_time_sms =(d1_sms.getTime()-d1_sms.getMilliseconds())/1000; 
var randomnumber1_sms=Math.floor(Math.random()*9999); 
var randomnumber11_sms=Math.floor(Math.random()*9999);
var ran_num1=randomnumber1_sms+"."+epoch_time_sms+"."+randomnumber11_sms;
var url1_sms="/cgi/get_captcha.cgi?cref="+ran_num1+"&style=2";
var new_ran_num_sms = ran_num1;
try {
document.getElementById("captcha_rannum1").value = new_ran_num_sms;
document.getElementById("sms_captcha").src = url1_sms;
} catch ( err ) {
	}
}


var cap_sms;
var ran_num12_sms=0;
var url12_sms='';
var sender_mobile_no=0;
var receiver_mobile_no=0;
var contact_person = 'Mr.  Vipul Verma';
var receiver_mobile_no = '+919888521887';
var reciever_email = '';
var company_name = 'Sbrod Metal Works';
var subject = '';
var rec_glid = '3132640';

function sms_validation()
{
	var iChars = "!@#$%&^*()+=-[]\';/{}|\":<>?";
	var iChars1 = "!@#$%^*()+=[]1234567890\';,./{}|\":<>?";
	var iChars2 = "!#$%^&*()+=-[]\';,/{}|\":<>?";
	var iChars3 = "!#$%^&*()+=-[]\';,{}|\"<>?";
	var iChars4 = "!@#$%^*+=[]\';,/{}|\":<>?";
	var iChars5 = "!@#$%^*+=-[]\';,{}|\"<>?";
/* 	var iChars = "!@#$%^&*()+=-[]\';,./{}|\":<>?";*/

	var reWhiteSpace = new RegExp(/^\s+$/);

	if(document.sms_dataform.sms_query_message.value == '')
	{
		alert("Please Enter Your Buying Requirements By SMS");
		document.sms_dataform.sms_query_message.focus();
		return false;
	}
	
	if(reWhiteSpace.test(document.sms_dataform.sms_query_message.value))
	{	
		alert("Space not allowed in description field");
		document.sms_dataform.sms_query_message.value = '';
		document.sms_dataform.sms_query_message.focus();
		return false;
	}

	for (var i = 0; i < document.sms_dataform.sms_query_message.value.length; i++)
	{
		if (iChars.indexOf(document.sms_dataform.sms_query_message.value.charAt(i)) != -1) 
		{
			alert("Special symbol not allowed in description field.");
			document.sms_dataform.sms_query_message.focus();
			return false;
		}
	 }

	if(document.sms_dataform.sms_fname.value == '' || document.sms_dataform.sms_fname.value == 'First Name')
	{
		alert("Please Enter Your First Name");
		document.sms_dataform.sms_fname.focus();
		return false;
	}

	if(reWhiteSpace.test(document.sms_dataform.sms_fname.value))
	{	
		alert("Space not allowed in First Name");
		document.sms_dataform.sms_fname.value = '';
		document.sms_dataform.sms_fname.focus();
		return false;
	}

	for (var i = 0; i < document.sms_dataform.sms_fname.value.length; i++)
	{
		if (iChars1.indexOf(document.sms_dataform.sms_fname.value.charAt(i)) != -1) 
		{
			alert("Special symbols and numeric values not allowed in First Name.");
			document.sms_dataform.sms_fname.focus();
			return false;
		}
	}
	
	for (var i = 0; i < document.sms_dataform.sms_lname.value.length; i++)
	{
		if (iChars1.indexOf(document.sms_dataform.sms_lname.value.charAt(i)) != -1) 
		{
			alert("Special symbol and numeric values not allowed in Last Name.");
			document.sms_dataform.sms_lname.focus();
			return false;
		}
	}
	
	for (var i = 0; i < document.sms_dataform.smsemail.value.length; i++)
	{
		if (iChars2.indexOf(document.sms_dataform.smsemail.value.charAt(i)) != -1) 
		{
			alert("Special symbol not allowed in Email.");
			document.sms_dataform.smsemail.focus();
			return false;
		}
	}
	if(document.sms_dataform.smsemail.value == '')
	{
		alert("Please Enter Your Email Id");
		document.sms_dataform.smsemail.focus();
		return false;
	}
        if (!(/^[a-z][_.a-z0-9-]+@[a-zA-Z]+\.[a-zA-Z]{2,6}\.?[a-zA-Z]{0,4}$/.test(document.sms_dataform.smsemail.value))) {
			alert("Invalid Email ID. Kindly enter the correct ID.");
			document.sms_dataform.smsemail.focus();
			return (false);
	         }
          if(document.sms_dataform.smsemail.value.length >60)
	  {
		alert("Kindly enter your Email ID within the limit of 60 characters.");
		document.sms_dataform.smsemail.focus();
		return false;
	  }

	if(document.sms_dataform.sms_country.value == '')
	{
		alert("Please Select Your Country");
		document.sms_dataform.sms_country.focus();
		return false;
	}
	if(document.sms_dataform.sms_sender_mobile.value == '')
	{
		alert("Please Enter Your Mobile Number");
		document.sms_dataform.sms_sender_mobile.focus();
		return false;
	}
	if((document.sms_dataform.s_cmobile_sms.value == "+91") && (document.sms_dataform.sms_sender_mobile.value.length != 10))
	{
		alert("Please Check Your Mobile Number Length");
		document.sms_dataform.sms_sender_mobile.focus();
		return false;
         }
        for (var i = 0; i < document.sms_dataform.sms_sender_mobile.value.length; i++)
	{
		if (((document.sms_dataform.sms_sender_mobile.value).indexOf(' '))>-1)
                 {
			alert("Space not allowed in mobile number.");
			document.sms_dataform.sms_sender_mobile.focus();
			return false;
		}
	}
	if(isNaN(document.sms_dataform.sms_sender_mobile.value))
	{
		alert("Please Enter Valid Mobile Number");
		document.sms_dataform.sms_sender_mobile.focus();
		return false;
	}
	
	if(reWhiteSpace.test(document.sms_dataform.sms_sender_mobile.value))
	{	
		alert("Space not allowed in Mobile Number");
		document.sms_dataform.sms_sender_mobile.value = '';
		document.sms_dataform.sms_sender_mobile.focus();
		return false;
	}

	for (var i = 0; i < document.sms_dataform.sms_website.value.length; i++)
	{
		if (iChars3.indexOf(document.sms_dataform.sms_website.value.charAt(i)) != -1) 
		{
			alert("Special symbol not allowed in Company URL.");
			document.sms_dataform.sms_website.focus();
			return false;
		}
	}
          if(document.sms_dataform.sms_city.value.length >50)
	{
		alert("Kindly enter your City within the limit of 50 characters.");
		document.sms_dataform.sms_city.focus();
		return false;
	}
	if(document.sms_dataform.sms_captcha_text.value == '')
	{
		alert("Please Enter Image Code");
		document.sms_dataform.sms_captcha_text.focus();
		return false;
	}
	if (document.sms_dataform.sms_lname.value == "Last Name")
	{
		document.sms_dataform.sms_lname.value="";
	}

	var sms_query_message = document.sms_dataform.sms_query_message.value;
	var sms_fname=document.sms_dataform.sms_fname.value;
	var sms_lname=document.sms_dataform.sms_lname.value;
	var sms_captcha_text = document.sms_dataform.sms_captcha_text.value;
	var sms_captcha_ref = document.sms_dataform.sms_captcha_ref.value;
	var sms_email = document.sms_dataform.smsemail.value;
	var sms_country = document.sms_dataform.sms_country.value;
	var sms_sender_mobile = document.sms_dataform.sms_sender_mobile.value;
	var sms_website = document.sms_dataform.sms_website.value;
	var sms_company = document.sms_dataform.sms_company.value;
	var sms_city = document.sms_dataform.sms_city.value;
	var sms_modid = document.sms_dataform.sms_modid.value;
	var s_cmobile_sms = document.sms_dataform.s_cmobile_sms.value;
	var sender_country = document.sms_dataform.sender_country.value;
	var country_iso_sms = document.sms_dataform.country_iso_sms.value;

	sender_mobile_no = s_cmobile_sms+sms_sender_mobile;

	function getXMLHTTP()
	{
		var xhr = false;
		if (window.XMLHttpRequest) {
			xhr = new XMLHttpRequest();
		}
		else if (window.ActiveXObject) {
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
		}
		return xhr;
	}
var sms_strURL='';
var ref_url=document.referrer;
sms_strURL="/cgi/new_sms_script_centralized.mp?query_message="+sms_query_message+"&sms_fname="+sms_fname+"&sms_lname="+sms_lname+"&smsemail="+sms_email+"&sms_country="+sms_country+"&sms_website="+sms_website+"&sms_company="+encodeURIComponent(sms_company)+"&sms_city="+encodeURIComponent(sms_city)+"&sms_captcha_text="+sms_captcha_text+"&sms_captcha_ref="+sms_captcha_ref+"&sms_modid="+sms_modid+"&recievergl_id="+rec_glid+"&reciever_email="+reciever_email+"&reciever_mobile="+receiver_mobile_no+"&sender_mobile="+sms_sender_mobile+"&subject="+subject+"&s_cmobile_sms="+s_cmobile_sms+"&reciever_name="+contact_person+"&country_iso_sms="+country_iso_sms+"&sender_country="+sender_country+"&ref_url="+ref_url;
if(sender_mobile_no == receiver_mobile_no)
	{
		alert("Kindly enter your number");
	}
	else
	{
	var req = getXMLHTTP();
	if (req)
	{
		req.onreadystatechange = function()
		{
			if (req.readyState == 4) /* only if "OK"*/
			{
				if (req.status == 200)
				{
					var res = (req.responseText);
					var str = res.search("Captch_Result=N");

					if(str > 0)
					{
						document.getElementById('message_sms3').className="doff";
						document.getElementById('first_img').style.display='none';
						document.getElementById('wrong_captcha11').style.display='inline';
						document.getElementById('resultid').style.display='inline';
						document.getElementById('resultid').innerHTML="You input wrong captcha!";
						var d = new Date();
						var epoch_time =(d.getTime()-d.getMilliseconds())/1000;
						var randomnumber=Math.floor(Math.random()*9999);
						var randomnumber1_sms=Math.floor(Math.random()*9999);
						ran_num12_sms=randomnumber+"."+epoch_time+"."+randomnumber1_sms;
						url12_sms="/cgi/get_captcha.cgi?cref="+ran_num12_sms+"&style=2";

						cap_sms = '<img src="'+url12_sms+'"   WIDTH="120" HEIGHT="30";>';
						document.getElementById('wrong_captcha11').innerHTML=cap_sms;
						new_ran_num_sms = ran_num12_sms;
						document.sms_dataform.sms_captcha_ref.value=ran_num12_sms;
					}
					else
					{ 
						var receiver_mobile_no1 = "Contact No. "+receiver_mobile_no;
						document.getElementById('sender_mobile_no_id').innerHTML=sender_mobile_no;
						document.getElementById('receiver_mobile_no_id').innerHTML=company_name;
						
						document.getElementById('resultid').style.display='none';
						document.getElementById('message_sms1').className="doff";
						document.getElementById('message_sms3').className="don";
					}
				}
				else 
				{
					alert("There was a problem while using XMLHTTP:" + req.statusText);
				}
			}
		};
		req.open("GET", sms_strURL, true);
		req.send(null);
	}
	}
};

document.write('<form name="sms_dataform" action="cgi/new_sms_script_centralized.mp"   method="post">');
var img_path='';
img_path='http://hm.imimg.com/template-mdc/';
var new_ran_num_sms=0;
document.write('<DIV ID="message_sms1" STYLE="position: absolute; top: 100px; left: 0px; z-index: 2000"; class="doff"><input type="hidden" name="native_captcha" value="1"><input type="hidden" name="display" value="1"><input type="hidden" name="sms_modid" value="MDC"><table ID="tableheight" BORDER="0" CELLPADDING="0" CELLSPACING="0" class="main_s"><tr><TD ID="divscroll_sms" class="fnt_1_s"><div class="clw2_s"><table width="100%" cellpadding="0" cellspacing="0" ><tr><td valign="middle" width="100%" class="cbc_1_s fnt4_s">Send SMS Enquiry</td><td valign="top" class="cbc_1_s"><p class="clsp_s cu_s" ONCLICK="blowup_sms_off()"></p></td><td><p class="cmr_1_s"></p></td></tr></table>      <div class="cbc_3_s">    <p class="cbp1_s"></p> <div class="clbg_s"><p class="cltp1_s fnt_1_s fnt5_s"><font class="qstar_s">*</font>Enter your Message</p></div><div class="clbg1_s"><div align="right" class="cc_s"><textarea name="sms_query_message"    style="width:100%;height:60px;" class="txtfn_s" onkeydown="sms_limitText(this,160);" onkeyup="sms_limitText(this,160);"></textarea><div id="Descstatus">Remaining Characters : 160</div></div></div><div class="clbg2_s"></div><p class="cbp1_s"></p><div class="clbg_s"><p class="cri_2_s fr_s"></p><p class="cli_2_s fl_s"></p><p class="cltp1_s fnt_1_s fnt5_s">Provide Your Contact Details</p></div><div class="clbg1_s"><table WIDTH="100%" ALIGN="CENTER" CELLPADDING="0" CELLSPACING="0" class="fnt_1_s"><tr><td align="right" class="mr_s" width="100"><font class="qstar_s">*</font>Name:</td><TD VALIGN="TOP" ALIGN="LEFT"><table BORDER="0" CELLPADDING="0" CELLSPACING="0"><tr><TD><select name="S_salute"   class="mr3_s"><option value="Mr." selected ="SELECTED">Mr. </option><option value="Ms.">Ms. </option><option value="Mrs.">Mrs. </option><option value="Dr.">Dr. </option></select></TD><TD><img src="'+img_path+'zero.gif"   WIDTH="5" HEIGHT="1"></TD><TD><input name="sms_fname"   ONFOCUS="javascript:RegValue_sms(this);" value="First Name"   ONBLUR="javascript:RegValue1_sms(this);" STYLE="width:90px;" CLASS="txtfa_s"></TD><TD><img src="'+img_path+'zero.gif"   WIDTH="5" HEIGHT="1"></TD><TD><input name="sms_lname" value="Last Name"   ONFOCUS="javascript:RegValue_sms1(this);" ONBLUR="javascript:RegValue_sms11(this);" type="text"   STYLE="width:90px;" CLASS="txtfa_s"></TD></tr></table></TD></tr><tr><td align="right" class="mr_s mr1_s"><font class="qstar_s">*</font>Email:</td><TD VALIGN="TOP" class="mr2_s"><input name="smsemail"   STYLE="width:242px; " value=""   CLASS="txtfn_s"></TD></tr><tr><td align="right" class="mr_s mr1_s"><font class="qstar_s">*</font>Country:</TD><TD VALIGN="TOP" class="mr3" style="padding-top:8px;"><DIV><select name="sms_country"   ONCHANGE="javascript:check_count_change_sms();" STYLE="width:244px;border:1px solid #aed2f3;height:24px;font-family:arial;font-size:12px;"><option value=""   DISABLED="DISABLED" selected>---Choose One---</option><option value="AU">Australia</option> <option value="AT">Austria</option> <option value="BE">Belgium</option> <option value="CA">Canada</option> <option value="DK">Denmark</option> <option value="CZ">Czech Republic</option> <option value="DE">Germany</option> <option value="FR">France</option> <option value="MX">Mexico</option> <option value="NZ">New Zealand</option> <option value="NO">Norway</option> <option value="ES">Spain</option> <option value="CH">Switzerland</option> <option value="UK">United Kingdom</option> <option value="US">United States of America</option> <option value="">-----------------------------------------------</option> <option value="AF">Afghanistan</option> <option value="AL">Albania</option> <option value="DZ">Algeria</option> <option value="AS">American Samoa</option> <option value="AD">Andorra</option> <option value="AO">Angola</option> <option value="AI">Anguilla</option> <option value="AQ">Antarctica</option> <option value="AG">Antigua And Barbuda</option> <option value="AR">Argentina</option> <option value="AM">Armenia</option> <option value="AW">Aruba</option> <option value="AU">Australia</option> <option value="AT">Austria</option> <option value="AZ">Azerbaijan</option> <option value="BS">Bahamas, The</option> <option value="BH">Bahrain</option> <option value="BD">Bangladesh</option> <option value="BB">Barbados</option> <option value="BY">Belarus</option> <option value="BE">Belgium</option> <option value="BZ">Belize</option> <option value="BJ">Benin</option> <option value="BM">Bermuda</option> <option value="BT">Bhutan</option> <option value="BO">Bolivia</option> <option value="BA">Bosnia and Herzegovina</option> <option value="BW">Botswana</option> <option value="BV">Bouvet Island</option> <option value="BR">Brazil</option> <option value="IO">British Indian Ocean Territory</option> <option value="BN">Brunei</option> <option value="BG">Bulgaria</option> <option value="BF">Burkina Faso</option> <option value="BI">Burundi</option> <option value="KH">Cambodia</option> <option value="CM">Cameroon</option> <option value="CA">Canada</option> <option value="CV">Cape Verde</option> <option value="KY">Cayman Islands</option> <option value="CF">Central African Republic</option> <option value="TD">Chad</option> <option value="CL">Chile</option> <option value="CN">China</option> <option value="HK">China (Hong Kong S.A.R.)</option> <option value="MO">China (Macau S.A.R.)</option> <option value="CX">Christmas</option> <option value="CC">Cocos (Keeling) Islands</option> <option value="CO">Colombia</option> <option value="KM">Comoros</option> <option value="CG">Congo</option> <option value="CD">Congo, Democractic Republic of</option> <option value="CK">Cook Islands</option> <option value="CR">Costa Rica</option> <option value="CI">Cote D Ivoire (Ivory Coast)</option> <option value="HR">Croatia (Hrvatska)</option> <option value="CU">Cuba</option> <option value="CY">Cyprus</option> <option value="CZ">Czech Republic</option> <option value="DK">Denmark</option> <option value="DJ">Djibouti</option> <option value="DM">Dominica</option> <option value="DO">Dominican Republic</option> <option value="TP">East Timor</option> <option value="EC">Ecuador</option> <option value="EG">Egypt</option> <option value="SV">El Salvador</option> <option value="GQ">Equatorial Guinea</option> <option value="ER">Eritrea</option> <option value="EE">Estonia</option> <option value="ET">Ethiopia</option> <option value="FK">Falkland Islands (Islas Malvin)</option> <option value="FO">Faroe Islands</option> <option value="FJ">Fiji Islands</option> <option value="FI">Finland</option> <option value="FR">France</option> <option value="GF">French Guiana</option> <option value="PF">French Polynesia</option> <option value="TF">French Southern Territories</option> <option value="GA">Gabon</option> <option value="GM">Gambia, The</option> <option value="GE">Georgia</option> <option value="DE">Germany</option> <option value="GH">Ghana</option> <option value="GI">Gibraltar</option> <option value="GR">Greece</option> <option value="GL">Greenland</option> <option value="GD">Grenada</option> <option value="GP">Guadeloupe</option> <option value="GU">Guam</option> <option value="GT">Guatemala</option> <option value="GN">Guinea</option> <option value="GW">Guinea-Bissau</option> <option value="GY">Guyana</option> <option value="HT">Haiti</option> <option value="HM">Heard and McDonald Islands</option> <option value="HN">Honduras</option> <option value="HU">Hungary</option> <option value="IS">Iceland</option> <option value="IN" selected>India</option> <option value="ID">Indonesia</option> <option value="IR">Iran</option> <option value="IQ">Iraq</option> <option value="IE">Ireland</option> <option value="IL">Israel</option> <option value="IT">Italy</option> <option value="JM">Jamaica</option> <option value="JP">Japan</option> <option value="JO">Jordan</option> <option value="KZ">Kazakhstan</option> <option value="KE">Kenya</option> <option value="KI">Kiribati</option> <option value="KR">Korea</option> <option value="KP">Korea, North</option> <option value="KW">Kuwait</option> <option value="KG">Kyrgyzstan</option> <option value="LA">Laos PDR</option> <option value="LV">Latvia</option> <option value="LB">Lebanon</option> <option value="LS">Lesotho</option> <option value="LR">Liberia</option> <option value="LY">Libya</option> <option value="LI">Liechtenstein</option> <option value="LT">Lithuania</option> <option value="LU">Luxembourg</option> <option value="MK">Macedonia</option> <option value="MG">Madagascar</option> <option value="MW">Malawi</option> <option value="MY">Malaysia</option> <option value="MV">Maldives</option> <option value="ML">Mali</option> <option value="MT">Malta</option> <option value="MH">Marshall Islands</option> <option value="MQ">Martinique</option> <option value="MR">Mauritania</option> <option value="MU">Mauritius</option> <option value="YT">Mayotte</option> <option value="MX">Mexico</option> <option value="FM">Micronesia</option> <option value="MD">Moldova</option> <option value="MC">Monaco</option> <option value="MN">Mongolia</option> <option value="ME">Montenegro</option> <option value="MS">Montserrat</option> <option value="MA">Morocco</option> <option value="MZ">Mozambique</option> <option value="MM">Myanmar</option> <option value="NA">Namibia</option> <option value="NR">Nauru</option> <option value="NP">Nepal</option> <option value="AN">Netherlands Antilles</option> <option value="NC">New Caledonia</option> <option value="NZ">New Zealand</option> <option value="NI">Nicaragua</option> <option value="NE">Niger</option> <option value="NG">Nigeria</option> <option value="NU">Niue</option> <option value="NF">Norfolk Island</option> <option value="MP">Northern Mariana Islands</option> <option value="NO">Norway</option> <option value="OM">Oman</option> <option value="PK">Pakistan</option> <option value="PW">Palau</option> <option value="PA">Panama</option> <option value="PG">Papua new Guinea</option> <option value="PY">Paraguay</option> <option value="PE">Peru</option> <option value="PH">Philippines</option> <option value="PN">Pitcairn Island</option> <option value="PL">Poland</option> <option value="PT">Portugal</option> <option value="PR">Puerto Rico</option> <option value="QA">Qatar</option> <option value="RE">Reunion</option> <option value="RO">Romania</option> <option value="RU">Russia</option> <option value="RW">Rwanda</option> <option value="SH">Saint Helena</option> <option value="KN">Saint Kitts And Nevis</option> <option value="LC">Saint Lucia</option> <option value="PM">Saint Pierre and Miquelon</option> <option value="VC">Saint Vincent And The Grenadin</option> <option value="WS">Samoa</option> <option value="SM">San Marino</option> <option value="ST">Sao Tome and Principe</option> <option value="SA">Saudi Arabia</option> <option value="SN">Senegal</option> <option value="RS">Serbia</option> <option value="SC">Seychelles</option> <option value="SL">Sierra Leone</option> <option value="SG">Singapore</option> <option value="SK">Slovakia</option> <option value="SI">Slovenia</option> <option value="SB">Solomon Islands</option> <option value="SO">Somalia</option> <option value="ZA">South Africa</option> <option value="GS">South Georgia</option> <option value="ES">Spain</option> <option value="LK">Sri Lanka</option> <option value="SD">Sudan</option> <option value="SR">Suriname</option> <option value="SJ">Svalbard And Jan Mayen Islands</option> <option value="SZ">Swaziland</option> <option value="SE">Sweden</option> <option value="CH">Switzerland</option> <option value="SY">Syria</option> <option value="TW">Taiwan</option> <option value="TJ">Tajikistan</option> <option value="TZ">Tanzania</option> <option value="TH">Thailand</option> <option value="NL">The Netherlands</option> <option value="TG">Togo</option> <option value="TK">Tokelau</option> <option value="TO">Tonga</option> <option value="TT">Trinidad And Tobago</option> <option value="TN">Tunisia</option> <option value="TR">Turkey</option> <option value="TM">Turkmenistan</option> <option value="TC">Turks And Caicos Islands</option> <option value="TV">Tuvalu</option> <option value="UG">Uganda</option> <option value="UA">Ukraine</option> <option value="AE">United Arab Emirates</option> <option value="UK">United Kingdom</option> <option value="UM">United States Minor Outlying I</option> <option value="US">United States of America</option> <option value="UY">Uruguay</option> <option value="UZ">Uzbekistan</option> <option value="VU">Vanuatu</option> <option value="VA">Vatican City State (Holy See)</option> <option value="VE">Venezuela</option> <option value="VN">Vietnam</option> <option value="VG">Virgin Islands (British)</option> <option value="VI">Virgin Islands (US)</option> <option value="WF">Wallis And Futuna Islands</option> <option value="EH">Western Sahara</option> <option value="YE">Yemen</option> <option value="YU">Yugoslavia</option> <option value="ZM">Zambia</option> <option value="ZW">Zimbabwe</option></select><input type="Hidden" name="country_iso_sms" value="IN"   ID="txtCountry"><input type="Hidden" name="sender_country" value="India"></DIV></TD></tr><tr><td align="right" class="mr_s mr1_s"><font class="qstar_s">*</font><span> Mobile: </span></td><td valign="TOP" align="LEFT" class="mr3" style="heightL:18px;padding-top:8px;"><table cellspacing="0" cellpadding="0" border="0"><tbody><tr><td><input type="TEXT" name="s_cmobile_sms"   class="txtfn_s" size="5" readonly="READONLY" style="width:30px;height:18px;" value="+91"></td><td><img src="'+img_path+'zero.gif"   width="6" height="1"></td><td><input type="TEXT" name="sms_sender_mobile"   MAXLENGTH(10) id="S_mobile"  size="20" class="txtfn_s" style="width: 202px;" value=""></td></tr></tbody></table></td></tr><tr><td align="right" class="mr_s mr1_s">Website:</td><td valign="TOP" class="mr2_s"><input name="sms_website"   style="width:242px; " value=""   class="txtfn_s"></td></tr><tr><td align="right" class="mr_s mr1_s">Company:</td><td valign="TOP" class="mr2_s"><input name="sms_company"   style="width:242px; " value=""   class="txtfn_s"></td></tr><tr><td align="right" class="mr_s mr1_s">City:</td><td valign="TOP" class="mr2_s"><input name="sms_city" value=""   style="width:242px;" class="txtfn_s"></td></tr><tr><td align="left" class="mr_s mr1_s"><font class="qstar_s">*</font>Enter the code:</td><td valign="TOP" align="LEFT" class="mr2_s"><table cellspacing="0" cellpadding="0" border="0"><tbody><tr><td><input type="TEXT" name="sms_captcha_text"   size="5" style="width:115px;height:18px;" class="txtfn_s" value=""><input type="HIDDEN" name="sms_captcha_ref" value=""  id="captcha_rannum1"></td><td><img src="'+img_path+'zero.gif"   width="6" height="1"></td><div class="black_overlay"></div>');

document.write('<td><DIV id="first_img" style="display:inline;">');
document.write('<img WIDTH="120" HEIGHT="30" id="sms_captcha" src="">');
document.write('<SCRIPT LANGUAGE="JavaScript" TYPE="text/javascript"> document.sms_dataform.sms_captcha_ref.value = new_ran_num_sms;</SCRIPT>');
document.write('</DIV></td>');

document.write('<td><DIV ID="wrong_captcha11" style="display:none;"><SCRIPT TYPE="text/javascript">document.write(cap_sms);</SCRIPT>');
document.write('</DIV></td>');

document.write('</tr></tbody></table></td></tr><tr><td></td><td valign="middle">');
document.write('<FONT COLOR="RED"><DIV ID="resultid" STYLE="display:none;"></DIV></FONT>');
document.write('<div class="w6_s"><a href="javascript:void(0);"   onclick="sms_validation();"><div class="fsms6_s"></div></A></div></td></tr></table></div><div class="clbg2_s"></div> <p class="cbp1_s"></p> <div class="pad_1_s_s"></div></div>  <p class="fl_s cbc1_5_s"></p></div></TD></tr></table></DIV>');


document.write('<DIV ID="message_sms3" STYLE="position: absolute; top: 100px; left: 0px; z-index: 2000"; class="doff"><input type="hidden" name="native_captcha" value="1"><input type="hidden" name="display" value="1"><table ID="tableheight" BORDER="0" CELLPADDING="0" CELLSPACING="0" class="main_s"><tr><TD ID="divscroll_sms" class="fnt_1_s"><div class="clw2_s"><table width="100%" cellpadding="0" cellspacing="0" ><tr><td><td valign="middle" width="100%" class="cbc_1_s fnt4_s">Send SMS Enquiry</td><td valign="top" class="cbc_1_s"><p class="clsp_s cu_s" ONCLICK="blowup_sms_off1()"></p></td><td><p class="cmr_1_s"></p></td></tr></table><div class="cbc_3_s"><br><br>  <p class="thk_1_s">Thank you for using SMS Service</p><br><table width="390"><tr><td align="center"><div class="byr_s"></div></td></tr></table><p class="thkt_1_s" align="center">');
document.write('<div id="sender_mobile_no_id" align="center"></div>');
document.write('</p> <br><p align="center" class="txt11_p"><img src="'+img_path+'conn4.gif"   height="93" width="20"></p><br><table width="390"><tr><td align="center"><div class="byr_s"></div></td></tr></table><p class="thkt_1_s" align="center">');
document.write('<div id="receiver_mobile_no_id" align="center"></div>');
document.write('</p> <br><br><p class="thk_1_s">SMS has been sent successfully ! </p><br><br>  </div><div class="pad_1_s_s"></div></div>   <p class="fl_s cbc1_5_s"></p> <div class="black_overlay"></div></div></TD></tr>  </table></form></DIV></form>');//sms_popup start
/*viewport_deffer start*/ 
function offsettop(options) {
	core_strundefined = typeof undefined;
	

	var docElem, win,
		box = { top: 0, left: 0 },
		elem = options,
		doc = elem && elem.ownerDocument;

	if ( !doc ) {
		return;
	}

	docElem = doc.documentElement;

	

	if ( typeof elem.getBoundingClientRect !== core_strundefined ) {
		box = elem.getBoundingClientRect();
	}
	win = getWindow( doc );
	return {
		top: box.top  + ( win.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 ),
		left: box.left + ( win.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 )
	};
};

function getWindow( elem ) {
	return (elem != null && elem == elem.window)?
		elem :
		elem.nodeType === 9 ?
			elem.defaultView || elem.parentWindow :
			false;
}
function Windowheight() {
  var myWidth = 0, myHeight = 0;
  if( typeof( window.innerWidth ) == 'number' ) {
  
    myWidth = window.innerWidth;
    myHeight = window.innerHeight;
  } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
   
    myWidth = document.documentElement.clientWidth;
    myHeight = document.documentElement.clientHeight;
  } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
  
    myWidth = document.body.clientWidth;
    myHeight = document.body.clientHeight;
  }
  
  return myHeight;
}
function LoadImageinViewPort() {
var windowTopvar = (window.pageYOffset!=undefined)?window.pageYOffset:window.document.documentElement.scrollTop;

if (typeof jQuery == 'undefined') {
	var LazyImages = document.getElementsByTagName('img');
	var imageLink = "";
	
	for(i=0;i<LazyImages.length;i++){
		imageLink="";	
			
			if (parseInt(offsettop(LazyImages[i]).top) <= (parseInt(windowTopvar) + parseInt(Windowheight())) && (parseInt(offsettop(LazyImages[i]).top) + parseInt(Windowheight())) > (parseInt(windowTopvar))) {
				if(LazyImages[i].getAttribute('rel')!=null && LazyImages[i].getAttribute('rel')!=""){
					imageLink = LazyImages[i].getAttribute("rel");
				}else if(LazyImages[i].parentNode.getAttribute('rel')!=null && LazyImages[i].parentNode.getAttribute('rel')!=""){
					imageLink = LazyImages[i].parentNode.getAttribute("rel");
				}
				if(imageLink!=""){
					oop = new Fade(LazyImages[i], imageLink);
					Imgs.push(oop);
				}
			}
		
	}
} else {
    	jQuery("img[rel]").each(function () {
		if (parseInt(jQuery(this).offset().top) < (parseInt(windowTopvar) + parseInt(jQuery(window).height())) && (parseInt(jQuery(this).offset().top) + parseInt(jQuery(this).height())) > (parseInt(windowTopvar))) {
			oop = new Fade(this, this.getAttribute("rel"));
			Imgs.push(oop);
		}
	});
	jQuery("a[rel] img").each(function () {
		if (parseInt(jQuery(this).offset().top) < (parseInt(windowTopvar) + parseInt(jQuery(window).height())) && (parseInt(jQuery(this).offset().top) + parseInt(jQuery(this).height())) > (parseInt(windowTopvar))) {
			oop = new Fade(this, jQuery(this).parent("a[rel]").attr("rel"));
			Imgs.push(oop)
		}
	});
}
if (window.addEventListener)
window.addEventListener("scroll", bindFunctionOnScroll, false);
else if (window.attachEvent)
window.attachEvent("onscroll", bindFunctionOnScroll);
else window.onscroll = bindFunctionOnScroll;
CkTop();

};
var timer; 
function bindFunctionOnScroll(){ 	
	clearTimeout(timer); 
	timer = setTimeout( LoadImageinViewPort , 150 );
	};
/******** Load View Port End******************/
