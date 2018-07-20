
var too;
function aa(a) {
    too = a;

}
function closseMessage() {
    document.getElementById('viewmessage').style.display = 'none';
    (window.location = "inbox.jsp");

}
function refresh() {

    (window.location = "inbox.jsp");

}
function readMessage(mid) {

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
        if (xmlh.readyState === 0) {
            document.getElementById("svmsg").innerHTML = "please wait loading.";

        } else if (xmlh.readyState === 1) {

            document.getElementById("svmsg").innerHTML = "please wait loading..";

        }
        else if (xmlh.readyState === 2) {

            document.getElementById("svmsg").innerHTML = " please wait loading....";

        }
        else if (xmlh.readyState === 3) {

            document.getElementById("svmsg").innerHTML = "please wait loading...........";


        }

        if (xmlh.readyState === 4 && xmlh.status === 200)
        {


            var aa = xmlh.responseText;
            document.getElementById('viewmessage').style.display = 'block';
            document.getElementById('messageContent').innerHTML = aa;


        }
    }

    // (type,cpid,fname,lname,amount,acount,phone)
    xmlh.open("POST", "process/readmessage.jsp?id=" + mid, true);
    xmlh.send();




}




$(document).ready(function() {
 $("#sendSms")

            .click(function() {
               
                validSms();



            });

    $("#sendMessage")

            .click(function() {
                // alert();
                validMessage();



            });
    $("#senQuestion")

            .click(function() {
                // alert();
                validquestion();



            });
    $("#sendAnnouncement")

            .click(function() {
                // alert();
                validANNOUNCEMENT();



            });

    var to = $("#to option:selected");
    var sub = $("#subject");
    var mes = $("#message");





   






    function validMessage() {

        var bValid = true;
        ///^((250)7(8|2|3))([0-9]{7})$/          



        if (bValid && checkRegexp(to, /^[a-zA-Z0-9]([0-9a-zA-Z ,._/\-]*)+$/i) === true) {



            $("#toe").text("");

        }


        else {

            $("#toe").text("Invalid  , user name!");

        }


        if (bValid && checkRegexp(sub, /^[a-zA-Z0-9]([0-9a-zA-Z ,._/\-]*)+$/i) === true) {



            $("#sube").text("");

        }


        else {

            $("#sube").text("Invalid  , subject!");

        }
        if (bValid && checkRegexp(mes, /^[a-zA-Z0-9]([0-9a-zA-Z ,._/\-]*)+$/i) === true) {



            $("#messagee").text("");

        }


        else {

            $("#messagee").text("Invalid  , message!");

        }


//                        if (   bValid && checkRegexp(email,/^[a-z]([0-9a-z_])*@(gmail|yahoo)\.(com|fr)$/i )===true ) {
//                          
//                          
//                              
//                                 $("#emaile").text("");    
//                                  
//                              }
//						
//					
//					else{
//                                          
//                                            $("#emaile").text("Invalid  , email !");	
//                                  
//                                    }    

        //    bValid = bValid && checkRegexp(email,/^[a-z]([0-9a-z_])*@(gmail|yahoo)\.(com|fr)$/i )  ;  

        bValid = bValid && checkRegexp(mes, /^[a-zA-Z0-9]([0-9a-zA-Z ,._/\-]*)+$/i);
        bValid = bValid && checkRegexp(sub, /^[a-zA-Z0-9]([0-9a-zA-Z ,._/\-]*)+$/i);




        if (bValid) {



            sendM(too, mes.val(), sub.val());
            //addpro(pro.val(),category)      


//				distr= $("#district option:selected").val();
//                                 sex= $("#gender option:selected").val();		


        }

    }
    function validSms() {
        var mes = $("#message");
        var bValid = true;
        ///^((250)7(8|2|3))([0-9]{7})$/          


        if (bValid && checkRegexp(mes, /^[a-zA-Z0-9]([0-9a-zA-Z ,._/\-]*)+$/i) === true) {



            $("#messagee").text("");

        }


        else {

            $("#messagee").text("Invalid  , message!");

        }


//                        if (   bValid && checkRegexp(email,/^[a-z]([0-9a-z_])*@(gmail|yahoo)\.(com|fr)$/i )===true ) {
//                          
//                          
//                              
//                                 $("#emaile").text("");    
//                                  
//                              }
//						
//					
//					else{
//                                          
//                                            $("#emaile").text("Invalid  , email !");	
//                                  
//                                    }    

        //    bValid = bValid && checkRegexp(email,/^[a-z]([0-9a-z_])*@(gmail|yahoo)\.(com|fr)$/i )  ;  

        bValid = bValid && checkRegexp(mes, /^[a-zA-Z0-9]([0-9a-zA-Z ,._/\-]*)+$/i);





        if (bValid) {



            sendSms( mes.val());
            //addpro(pro.val(),category)      


//				distr= $("#district option:selected").val();
//                                 sex= $("#gender option:selected").val();		


        }

    }
    function validANNOUNCEMENT() {
        var announcement = $("#announcement");
        var bValid = true;
        ///^((250)7(8|2|3))([0-9]{7})$/          


        if (bValid && checkRegexp(announcement, /^[a-zA-Z0-9]([0-9a-zA-Z ,._/\-]*)+$/i) === true) {



            $("#announcemente").text("");

        }


        else {

            $("#announcemente").text("Invalid  , announcement!");

        }


//                        if (   bValid && checkRegexp(email,/^[a-z]([0-9a-z_])*@(gmail|yahoo)\.(com|fr)$/i )===true ) {
//                          
//                          
//                              
//                                 $("#emaile").text("");    
//                                  
//                              }
//						
//					
//					else{
//                                          
//                                            $("#emaile").text("Invalid  , email !");	
//                                  
//                                    }    

        //    bValid = bValid && checkRegexp(email,/^[a-z]([0-9a-z_])*@(gmail|yahoo)\.(com|fr)$/i )  ;  

        bValid = bValid && checkRegexp(announcement, /^[a-zA-Z0-9]([0-9a-zA-Z ,._/\-]*)+$/i);





        if (bValid) {



            sendannouncement( announcement.val());
            //addpro(pro.val(),category)      


//				distr= $("#district option:selected").val();
//                                 sex= $("#gender option:selected").val();		


        }

    }
    function validquestion() {
        var question = $("#question");
        var bValid = true;
        ///^((250)7(8|2|3))([0-9]{7})$/          


        if (bValid && checkRegexp(question, /^[a-zA-Z0-9]([0-9a-zA-Z ,._/\-]*)+$/i) === true) {



            $("#questione").text("");

        }


        else {

            $("#questione").text("Invalid  , question!");

        }


//                        if (   bValid && checkRegexp(email,/^[a-z]([0-9a-z_])*@(gmail|yahoo)\.(com|fr)$/i )===true ) {
//                          
//                          
//                              
//                                 $("#emaile").text("");    
//                                  
//                              }
//						
//					
//					else{
//                                          
//                                            $("#emaile").text("Invalid  , email !");	
//                                  
//                                    }    

        //    bValid = bValid && checkRegexp(email,/^[a-z]([0-9a-z_])*@(gmail|yahoo)\.(com|fr)$/i )  ;  

        bValid = bValid && checkRegexp(question, /^[a-zA-Z0-9]([0-9a-zA-Z ,._/\-]*)+$/i);





        if (bValid) {



            sendquestion( question.val());
            //addpro(pro.val(),category)      


//				distr= $("#district option:selected").val();
//                                 sex= $("#gender option:selected").val();		


        }

    }







    function checkRegexp(o, regexp) {
        if (!(regexp.test(o.val()))) {

            return false;
        } else {
            return true;
        }
    }


});

function  sendM(too, message, subject) {

//alert();

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
        if (xmlh.readyState === 0) {
            document.getElementById("svmsg").innerHTML = "please wait loading.";

        } else if (xmlh.readyState === 1) {

            document.getElementById("svmsg").innerHTML = "please wait loading..";

        }
        else if (xmlh.readyState === 2) {

            document.getElementById("svmsg").innerHTML = " please wait loading....";

        }
        else if (xmlh.readyState === 3) {

            document.getElementById("svmsg").innerHTML = "please wait loading...........";


        }

        if (xmlh.readyState === 4 && xmlh.status === 200)
        {


            var aa = xmlh.responseText;
            (window.location = "inbox.jsp");
            alert(aa);
        }
    }

    // (type,cpid,fname,lname,amount,acount,phone)
    xmlh.open("POST", "process/sendinoboxMessage.jsp?subject=" + subject + "&message=" + message + "&to=" + too, true);
    xmlh.send();



}
function   sendSms(message) {



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
        if (xmlh.readyState === 0) {
            document.getElementById("svmsg").innerHTML = "please wait loading.";

        } else if (xmlh.readyState === 1) {

            document.getElementById("svmsg").innerHTML = "please wait loading..";

        }
        else if (xmlh.readyState === 2) {

            document.getElementById("svmsg").innerHTML = " please wait loading....";

        }
        else if (xmlh.readyState === 3) {

            document.getElementById("svmsg").innerHTML = "please wait loading...........";


        }

        if (xmlh.readyState === 4 && xmlh.status === 200)
        {


            var aa = xmlh.responseText;
          //  (window.location = "inbox.jsp");
            alert(aa);
        }
    }

    // (type,cpid,fname,lname,amount,acount,phone)
    xmlh.open("POST", "process/sendsms.jsp?message=" + message , true);
    xmlh.send();



}
function   sendquestion(question) {



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
        if (xmlh.readyState === 0) {
            document.getElementById("svmsg").innerHTML = "please wait loading.";

        } else if (xmlh.readyState === 1) {

            document.getElementById("svmsg").innerHTML = "please wait loading..";

        }
        else if (xmlh.readyState === 2) {

            document.getElementById("svmsg").innerHTML = " please wait loading....";

        }
        else if (xmlh.readyState === 3) {

            document.getElementById("svmsg").innerHTML = "please wait loading...........";


        }

        if (xmlh.readyState === 4 && xmlh.status === 200)
        {


            var aa = xmlh.responseText;
          //  (window.location = "inbox.jsp");
            alert(aa);
        }
    }

    // (type,cpid,fname,lname,amount,acount,phone)
    xmlh.open("POST", "process/sendquestion.jsp?question=" + question , true);
    xmlh.send();



}
function   sendannouncement(announcement) {



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
        if (xmlh.readyState === 0) {
            document.getElementById("svmsg").innerHTML = "please wait loading.";

        } else if (xmlh.readyState === 1) {

            document.getElementById("svmsg").innerHTML = "please wait loading..";

        }
        else if (xmlh.readyState === 2) {

            document.getElementById("svmsg").innerHTML = " please wait loading....";

        }
        else if (xmlh.readyState === 3) {

            document.getElementById("svmsg").innerHTML = "please wait loading...........";


        }

        if (xmlh.readyState === 4 && xmlh.status === 200)
        {


            var aa = xmlh.responseText;
          //  (window.location = "inbox.jsp");
            alert(aa);
        }
    }

    // (type,cpid,fname,lname,amount,acount,phone)
    xmlh.open("POST", "process/sendannouncement.jsp?announcement=" + announcement , true);
    xmlh.send();



}

       