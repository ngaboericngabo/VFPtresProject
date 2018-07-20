
  $(document).ready(function(){
   var m=setInterval(function(){aa()},2000);     
  // var s=$(window).scrollTop();    
    
      // alert();

        var s=0;   
    function aa() {
                           		 
       
         //alert(s);
      
         $("#actularitywrap").animate({scrollTop:s},1000);
          s=s+20;
          if(s>100){
              
           s=0;   
          }
   // alert(s);
       }
      
       
      
}); 



function changeDistrict(provenceId){
    
        var xmlhttp;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function()
    {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
        {
        var aa = xmlhttp.responseText;
    document.getElementById('districtContent').innerHTML=aa; 
        }
    }
    xmlhttp.open("GET", "GetListOfDistrict?prov=" + provenceId , true);
    xmlhttp.send();  
    
}
function changeSector(districtId){
    
        var xmlhttp;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function()
    {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
        {
        var aa = xmlhttp.responseText;
    document.getElementById('sectorContent').innerHTML=aa; 
        }
    }
    xmlhttp.open("GET", "GetListOfSector?district=" + districtId , true);
    xmlhttp.send();  
    
}