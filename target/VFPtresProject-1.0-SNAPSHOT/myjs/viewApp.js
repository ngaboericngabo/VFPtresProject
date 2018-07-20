function viewApplication(apid) {

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

            document.getElementById('updateForm').style.display = 'block';
            document.getElementById('applContentId').innerHTML = aa;


        }
    }

    // (type,cpid,fname,lname,amount,acount,phone)
    xmlh.open("GET", "ViewApplication?apid=" + apid, true);
    xmlh.send();


}
