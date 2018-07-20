$(document).ready(function() {
    $("#applyLeaveBtn").click(function()
    {
      document.getElementById("successMsgs").innerHTML ="";
      document.getElementById("errorMsgs").innerHTML ="";
      document.getElementById('errorMsgs').style.display='none'; 
      document.getElementById('successMsgs').style.display='none'; 
        applyLeave();
   });
         function checkRegexp(o, regexp) {
        if (!(regexp.test(o.val()))) {

            return false;
        } else {
            return true;
        }
    }
    function  applyLeave() {
        var bValid = true;
        var leaveCategory = $("#leaveCategory option:selected").val();
        var toDate = $("#toDateId");
        var fromDate = $("#fromDateId");
        var reason = $("#reason");
 
        var yy1 = fromDate.val().substring(0, 4);
        var mo1 = fromDate.val().substring(5, 7);
        var d1 = fromDate.val().substring(8, 10);

        var yy = toDate.val().substring(0, 4);
        var mo = toDate.val().substring(5, 7);
        var d = toDate.val().substring(8, 10);


        var fromDateFormat = new Date(yy1, mo1 - 1, d1);
        var toDateFormat = new Date(yy, mo - 1, d);
        var nowdate = new Date();
        
           if (leaveCategory === "a") {
            bValid = false;
            $("#leaveCategoryError").text("Please select Leave Category ");
        } else {
            $("#leaveCategoryError").text(" ");
        }
        
            if (bValid && checkRegexp(reason,/^[a-zA-Z0-9]([0-9a-zA-Z ,._/\-]*)+$/i) === true) {
            $("#reasonError").text("");
        }
        else {
            bValid = false;
            $("#reasonError").text("Please enter valid reason");
        }

        if (nowdate > fromDateFormat) {
            bValid = false;
            $("#fromDateIdError").text("Please check the date should not be in the past");
        } else {
            $("#fromDateIdError").text(" ");
        }

        if (nowdate > toDateFormat) {
            bValid = false;
            $("#toDateError").text("Please check the date should not be in the past");
        } else {
            $("#toDateError").text(" ");
            if (toDateFormat < fromDateFormat) {
                bValid = false;
                $("#toDateError").text("Please check  From date should not be greater than To date");

            } else {
                $("#toDateError").text(" ");
            }
        }

     
        
    
      bValid = bValid && checkRegexp(reason, /^[a-zA-Z0-9]([0-9a-zA-Z ,._/\-]*)+$/i);
        if (bValid) {
            applyLeaveFunction(reason.val(), toDate.val(), fromDate.val(), leaveCategory);
        }
    }


 }); 

function applyLeaveFunction(reason, toDate, fromDate, leaveCategory) {
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
        if (xmlh.readyState == 4 && xmlh.status == 200)
        {
             // alert(this.responseText);  
             document.getElementById("successMsgs").innerHTML ="";
             document.getElementById("errorMsgs").innerHTML ="";
            
           var json =JSON.parse(this.responseText);
                        var newEltError= $("<div>");
                        var newEltFine= $("<div>");
                          var er1 = $("<div>");
                          var er2 = $("<div>");
                          var er3 = $("<div>");
                          var fine = $("<div>");
                         
                        
                      if(json.val===1){
                          
                           fine.html(json.fine);
                          newEltFine.append(fine);
                          document.getElementById('successMsgs').style.display='block';   
                          document.getElementById('errorMsgs').style.display='none';   
                            $("#successMsgs").append(newEltFine) ; 
                            $("#leaveCategory").val("");
                            $("#toDateId").val("");
                            $("#fromDateId").val("");
                            $("#reason").val("");
                             }else{
                           er1.html(json.error); 
                           er2.html(json.error2); 
                           er3.html(json.error3);
                           
                           
                           newEltError.append(er1);
                           newEltError.append(er2);
                           newEltError.append(er3);
                                    document.getElementById('errorMsgs').style.display='block'; 
                                      document.getElementById('successMsgs').style.display='none'; 
                            $("#errorMsgs").append(newEltError)  ;    
                           }
                           
                          
           
        }
    }
    xmlh.open("GET", "ApplyLeaveController?leaveCategory=" + leaveCategory + "&reason=" + reason + "&fromDate=" + fromDate + "&toDate=" + toDate, true);
    xmlh.send();
}





