function refreshData()
{

  x = 1;  // x = seconds
  var d = new Date();
  var h =d.getHours();
  var m =d.getMinutes();
  var s =d.getSeconds();
  
  var ampm = h >= 12 ? 'PM' : 'AM';
  var hh = h % 12;
  hh = hh ? hh : 12; 
  
  
  if (h<=9) {h = '0'+h};
  if (m<=9) {m = '0'+m};
  if (s<=9) {s = '0'+s};

  
  // text is black PM and white AM
  var nd = h >= 12 ? 'rgba(0,0,0,1)' : 'rgba(255,255,255,1)'; 
  
  //gradient rotation speed 6* is full loop
  var r =6*s;
  
  var color ='rgb('+(10*h)+','+((2*s)+50)+','+(4*m)+')';
  var color2 ='rgb('+(3*h)+','+(190+m)+','+((2*s)+135)+')';
  
  $("div.background").css("background",'-webkit-linear-gradient('+r+'deg,'+color+' 10%,'+color2+' 90%'); 
  
  $("#date,#hex").css("color",nd);   
 
  $("p#date").text(hh+':'+m+':'+s+' '+ampm);

  $("p#hex").text(color+' – '+color2); 
  
  setTimeout(refreshData, x*1000);
}

refreshData(); // execute function