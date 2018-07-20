 var ms=setInterval(function(){amia()},3000);

            function amia()
            {
                if (window.XMLHttpRequest)
                {
                    xmlhp=new XMLHttpRequest();
                }
                else
                {
                    xmlhp=new ActiveXObject("Microsoft.XMLHTTP");
                }
                xmlhp.onreadystatechange=function()
                {
                    if (xmlhp.readyState==4 && xmlhp.status==200)
                    {
                      //  alert(xmlhp.responseText);
                       document.getElementById('useconectedywrap').innerHTML=xmlhp.responseText;
                       document.getElementById('useconectedywrap2').innerHTML=xmlhp.responseText;
                     
                     //  counting();
                    }
                }
                xmlhp.open("GET","process/availbleuser.jsp",true);
                xmlhp.send();
        }
    