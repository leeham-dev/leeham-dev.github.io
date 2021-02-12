var ocbm=document.getElementById("cbm");
var ol=document.getElementById("l");
var ow=document.getElementById("w");
var oh=document.getElementById("h");
var ounit=document.getElementById("unit");

function cvt2m(v){
var unit=ounit.value;
var re = new RegExp(/[1-9][0-9]*\/[1-9][0-9]*/);
if(re.test(v)){v=Fraction2Decimal(v);}
var r=0;
  if (unit=='in'){r=v*0.0254;} 
  else if (unit=='ft'){r=v*0.3048;}
  else if (unit=='yd'){r=v*0.9144;}
  else if (unit=='mm'){r=v*0.001;}
  else if (unit=='cm'){r=v*0.01;}
  else if (unit=='m'){r=v;}
  return Math.round(r*1000)/1000;
}

function show_formula(){
var unit=ounit.value;
var divFormula=document.getElementById("divFormula"); 
divFormula.style.padding='0px';
divFormula.innerHTML='';
if (unit=='m'){return;} 
var sTmp='';s2='';
var aft=[];
if (ol.value!=''){
  fl=cvt2m(ol.value);
  sTmp=ol.value.replace("/","&frasl;")+' '+ unit+' = '+fl+' m';
  aft.push(fl);
}
if (ow.value!=''){
  fw=cvt2m(ow.value);
  if(sTmp!=''){sTmp+=', ';};
  sTmp+=ow.value.replace("/","&frasl;")+' '+ unit+' = '+fw+' m';
  aft.push(fw);
}
if (oh.value!=''){
  fh=cvt2m(oh.value);
  if(sTmp!=''){sTmp+=', ';};
  sTmp+=oh.value.replace("/","&frasl;")+' '+ unit+' = '+fh+' m';
  aft.push(fh);
}
if (aft.length==2){
s2=aft[0]+" * "+aft[1]+' = '+ (Math.round(aft[0]*aft[1]*10000000)/10000000) +' m&sup2;';
} else if (aft.length==3){
s2=aft[0]+" * "+aft[1]+" * " +aft[2]+' = '+ (Math.round(aft[0]*aft[1]*aft[2]*10000000)/10000000)+' m&sup3;';
}

divFormula.innerHTML=sTmp+'<br>'+s2;
divFormula.style.padding='5px 0px 5px 10px';

}

function cal_cbm(){
var l=ol.value.trim();
var w=ow.value.trim();
var h=oh.value.trim();
var unit=ounit.value;
var re = new RegExp(/[1-9][0-9]*\/[1-9][0-9]*/);
if(re.test(l)){l=Fraction2Decimal(l);}
if(re.test(w)){w=Fraction2Decimal(w);}
if(re.test(h)){h=Fraction2Decimal(h);}

if ((l=='')||(w=='')||(h=='')||isNaN(l)||isNaN(w)||isNaN(h)){
  ocbm.value='';
  show_formula();
  document.getElementById("divMsg").innerHTML='';
} else {
  if (unit=='in'){l=l*2.54;w=w*2.54;h=h*2.54;precision=100;} 
  else if (unit=='ft'){l=l*30.48;w=w*30.48;h=h*30.48;precision=10;}
  else if (unit=='yd'){l=l*91.44;w=w*91.44;h=h*91.44;precision=10;}
  else if (unit=='mm'){l=l*0.1;w=w*0.1;h=h*0.1;precision=1000;}
  else if (unit=='cm'){precision=100;}
  else if (unit=='m'){l=l*100;w=w*100;h=h*100;precision=10;}
  cbm=Math.round(l*w*h/1000000*precision)/precision;
  ocbm.value=cbm;
  cft=Math.round(cbm*35.3146667*precision)/precision;
  show_formula();
  olv=ol.value.replace("/","&frasl;");
  owv=ow.value.replace("/","&frasl;");
  ohv=oh.value.replace("/","&frasl;");
  
  document.getElementById("divMsg").innerHTML= owv+' * '+owv+' * '+ohv+' '+unit+' = '+ cbm +' m&sup3; = '+cft+' ft&sup3;';
}  
drawcube();
} 