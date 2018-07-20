 var msa=setInterval(function(){noti()},3000);

            function noti()
            {
                if (window.XMLHttpRequest)
                {
                    xmlhpa=new XMLHttpRequest();
                }
                else
                {
                    xmlhpa=new ActiveXObject("Microsoft.XMLHTTP");
                }
                xmlhpa.onreadystatechange=function()
                {
                    if (xmlhpa.readyState==4 && xmlhpa.status==200)
                    {
                      //  alert(xmlhp.responseText);
                       document.getElementById('notification').innerHTML=xmlhpa.responseText;
                      
                     
                     //  counting();
                    }
                }
                xmlhpa.open("GET","process/notification.jsp",true);
                xmlhpa.send();
        }
    