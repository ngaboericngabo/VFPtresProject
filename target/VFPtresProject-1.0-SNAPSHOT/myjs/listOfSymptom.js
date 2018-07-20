function changeDisease(disesesId){
    
      (window.location = "customerconsultation?dees="+disesesId); 
    
}
function ch2(){
    
   var ch= document.getElementById('symp'+6).value;
    //alert(ch);
}
function saveSymptomVlaue(action,symptomId){
     var ch= document.getElementById('symp'+symptomId).checked;
 // alert(symptomId);
    var xmlh;

    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlh = new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlh = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlh.onreadystatechange = function()
    {
       

        if (xmlh.readyState === 4 && xmlh.status === 200)
        {
 var aa = xmlh.responseText;


        }
    }

    // (type,cpid,fname,lname,amount,acount,phone)
    xmlh.open("GET", "SymptomvAndConsultationController?action=" + ch+"&symptomId="+symptomId, true);
    xmlh.send();

}