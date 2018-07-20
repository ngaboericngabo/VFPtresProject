
function editProduct(pid) {
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


            var aa = xmlh.responseText;
            // alert(aa);
            document.getElementById('updateForm').style.display = 'block';
            var jj = aa.toString();
            var ss;
            ss = jj.split("/")
            // alert(ss[1]);
            document.getElementById('product1').value = ss[1];
            document.getElementById('productid').value = ss[0];

        }
        // displayProduct(orderNo,pid);

    }
    xmlh.open("GET", "ProcessEditProduct.jsp?id=" + pid, true);
    xmlh.send();

}


function editUser(userid) {
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


            var aa = xmlh.responseText;
            // alert(aa);
            document.getElementById('updateForm').style.display = 'block';
            var jj = aa.toString();
            var ss;
            ss = jj.split("/")
            // alert(ss[0]);
            document.getElementById("email").value = ss[0];
            document.getElementById("tel").value = ss[1];
            document.getElementById("company").value = ss[2];
            document.getElementById("dob").value = ss[3];
            document.getElementById("position").value = ss[4];
            document.getElementById("passw").value = ss[5];
            document.getElementById("gender").value = ss[6];
            

        }
        // displayProduct(orderNo,pid);

    }
    xmlh.open("GET", "process/selectUserinfo.jsp?id=" + userid, true);
    xmlh.send();

}



$(document).ready(function() {

    $("#updateUser")

            .click(function() {

                updateUserInfon();
            });


})

function updateUserInfon() {
    var email = document.getElementById("email").value ;
    var tel = document.getElementById("tel").value;
    var cmp = document.getElementById("company").value;
    var dob = document.getElementById("dob").value;
    var pos = document.getElementById("position").value;
    var pas = document.getElementById("passw").value;
    var ge = document.getElementById("gender").value;
   // alert();
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


            var aa = xmlh.responseText;
            alert(aa);
            window.location = "editProfile.jsp";

        }
        // displayProduct(orderNo,pid);

    }
    xmlh.open("GET", "process/updateUserInfo.jsp?email=" + email + "&dob=" + dob+"&company="+cmp+"&position="+pos+"&tel="+tel+"&pas="+pas+"&gender="+ge, true);
    xmlh.send();




}
function updatePurchase() {

    var puid = document.getElementById("purchaseid1").value;
    var bno = document.getElementById("bachno1").value;
    var exp = document.getElementById("expdate12").value;
    var qty = document.getElementById("qty1").value;
    var selling = document.getElementById("selling1").value;
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


            var aa = xmlh.responseText;
            alert(aa);
            window.location = "PurchaseReportAdmin.jsp";

        }
        // displayProduct(orderNo,pid);

    }
    xmlh.open("GET", "ProcessUpdatePurchase.jsp?pid=" + puid + "&bno=" + bno + "&exp=" + exp + "&qty=" + qty + "&selling=" + selling, true);
    xmlh.send();




}
