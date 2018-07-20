$(document).ready(function() {
    $("#myQestionId").keypress(function(e) {
        if (e.keyCode == 13) {
            var categoryId = $('#questionCategoryListId').val();
            var questionName = $("#myQestionId").val();
            Asquestion(questionName, categoryId);
        }
    });

   //alert();

         $("#table1").DataTable();  
         $("#table2").DataTable();  
         $("#table3").DataTable();  
         $("#table4").DataTable();  
         $("#table5").DataTable();  
  
         $('#timepicker1').timepicker();
         $('#timepicker2').timepicker();
         $('#timepicker3').timepicker();
});

     
             
function dissplayUpload(quesyionId){
    
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
            $("#postPanelId").scrollTop(0);
            
            document.getElementById('UploadPanelId').style.display='block'; 
        }
    }
    xmlhttp.open("GET", "createSessionForQQuestionController?quesyionId=" + quesyionId , true);
    xmlhttp.send();  
    
     document.getElementById('UploadPanelId').style.display='block'; 
}
function UpdateResponseStatus(responseStatus,responseId){
    //alert(responseId);
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
            (window.location = "welcome");
        }
    }
    xmlhttp.open("GET", "UpdateResponseStatusController?responseId=" + responseId + "&reponseSatus=" + responseStatus, true);
    xmlhttp.send();   
    
}
function updateQuestionStatus(questionStatus,questionId){

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
            (window.location = "welcome");
        }
    }
    xmlhttp.open("GET", "UpdateQuestionStatus?question=" + questionId + "&questionStatus=" + questionStatus, true);
    xmlhttp.send();   
    
}
function checkIfDataSelected(qcategory) {
    if (qcategory == 'default') {
        document.getElementById('myQestionPanelId').style.display = 'none';
        document.getElementById('UploadPanelId').style.display = 'none';
    } else {
        document.getElementById('myQestionPanelId').style.display = 'block';
        $("#myQestionId").val("").focus();
    }
}

function Asquestion(question, categoryId) {
    
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
            (window.location = "welcome");
        }
    }
    xmlhttp.open("GET", "AskQuestionController?question=" + question + "&categoryId=" + categoryId, true);
    xmlhttp.send();
}

function questionResponse(pid) {
var aa = document.getElementById('mycomment' + pid + '').value;
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

            (window.location = "welcome");

        }
    }
    xmlhttp.open("GET", "RespondQuestionController?qresponse=" + aa + "&qid=" + pid, true);
    xmlhttp.send();

}


function showProfile(userId){
    
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
            (window.location = "welcome");
        }
    }
    xmlhttp.open("GET", "AskQuestionController?question=" + question + "&categoryId=" + categoryId, true);
    xmlhttp.send();
}

function questionResponse(pid) {
var aa = document.getElementById('mycomment' + pid + '').value;
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

            (window.location = "welcome");

        }
    }
    xmlhttp.open("GET", "RespondQuestionController?qresponse=" + aa + "&qid=" + pid, true);
    xmlhttp.send()
    
    
}


  