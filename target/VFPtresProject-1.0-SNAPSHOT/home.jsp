
<%@page import="tres.domain.Users"%>
<%@page import="tres.dao.impl.UserImpl"%>
<!DOCTYPE html>
<html>
<title>Tress</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="templete/css/w3.css">
<link rel="stylesheet" href="templete/css/fontMin.css">
<link rel='stylesheet' href='templete/css/google.css'>
<link rel="stylesheet" href="templete/css/cssTheme.css">
    <link rel="shortcut icon" HREF="images/favicon.icon" />
        <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-glyphicons.css" rel="stylesheet">
        <script src="dataTables/js/jQuery.js"></script>   
        <link rel="stylesheet" href="Bootstrap-v1/datepicker/css/bootstrap.min_1.css" type="text/css"/>
        <script src="Bootstrap-v1/js/bootstrap.min.js"></script>
<style>
html,body,h1,h2,h3,h4,h5 {font-family: "Open Sans", sans-serif}
</style>
<body class="w3-theme-l5">

<!-- Navbar -->
<div class="w3-top">
 <div class="w3-bar w3-theme-d3 w3-left-align w3-large">
  <a class="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2" href="javascript:void(0);" onclick="openNav()"><i class=""></i></a>
  <a href="#" class="w3-bar-item w3-button w3-padding-large w3-theme-d4"><i class="glyphicon glyphicon-home fa fa-home w3-margin-right"></i></a>

  
  <a href="patientRegistrationForm" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Hese some title"><i class="glyphicon glyphicon-pencil"></i></a>
 
  <a href="javascript:void(0)"  data-toggle="modal" data-target=".bs-example-modal-lg" class="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white" title="Login if you have account">
   Login
  </a>
 </div>
</div>

<!-- Navbar on small screens -->
<div id="navDemo" class="w3-bar-block w3-theme-d2 w3-hide w3-hide-large w3-hide-medium w3-large">
  <a href="#" class="w3-bar-item w3-button w3-padding-large">Link 1</a>
  <a href="#" class="w3-bar-item w3-button w3-padding-large">Link 2</a>
  <a href="#" class="w3-bar-item w3-button w3-padding-large">Link 3</a>
  <a href="#" class="w3-bar-item w3-button w3-padding-large">My Profile</a>
</div>

<!-- Page Container -->
<div class="w3-container w3-content" style="max-width:1400px;margin-top:80px"> 
    
        <!-- Middle Column -->
    <div class="w3-col m6">
    
      <div class="w3-row-padding">
        <div class="w3-col m12">
          <div class="w3-card w3-round w3-white">
            <div class="w3-container w3-padding">
             <img style="border-radius:5px;" class="img-responsive" width="400" src="UploadImage/herat.jpg">
            </div>
          </div>
        </div>
      </div>
      
     
    <!-- End Middle Column -->
    </div>
    <div class="w3-col m6">
           <%
             
             UserImpl userImpl = new UserImpl();
           Users us = new Users();
           userImpl.createTable();
                String message = "";
                message = request.getParameter("msg");
                if (message == null) {

                    message = "";
                }
                String message2 = "";
                
                message2 = request.getParameter("msg2");
                if (message2 == null) {

                    message2 = "";
                }
            %>
            <span class="text-danger" id="uname error"><%=message%></span>
            <span class="text-success" id="sucussesmsg"><%=message2%></span>
      <div class="w3-row-padding">
        <div class="w3-col m12">
          <div class="w3-card w3-round w3-white">
              <div class="w3-container w3-padding" style="height: 412px">
            <div class="col-md-5">
                                   <h3>How we are </h3>
                                   <img  height="250" src="UserImage/like.png">
                               </div>
                  <br>
                               <div class="col-md-5">
                                          <p>changes done changes donechanges donechanges donechanges donechanges donechanges done
                                          Some TextSome TextSome TextSome TextSome TextSome TextSome TextSome TextSome TextSome Text
                                          Some TextSome TextSome TextSome TextSome TextSome TextSome TextSome TextSome TextSome Text</p>
                                          <a href="welcome" class="btn btn-primary btn-xlg btn-block glyphicon glyphicon-pencil ">Apply to our Service now <b><span style="background-color: red;color: white" class="badge"></span></b></a>
                               </div>
            </div>
          </div>
        </div>
      </div>
      
     
    <!-- End Middle Column -->
    </div>
    
    
<div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="panel panel-info" >
                            <!-- Default panel contents -->
                            <div class="panel-heading"><center><span class="glyphicon glyphicon-lock"></span>Provide your Account Credentials to Login</center></div>
                            <div class="panel-body">

 <form method="post" action="LoginController">
                                    <div style="display:none"> <input id="lat" name="lat" type="text" />
                                        <input id="long" name="long"  type="text" /></div>
                                    <div class="form-group row">
                                        <label for="todate" class="col-md-2 col-sm-2 col-xs-6 control-label" style="color: black">User Name</label>
                                        <div class="col-md-4 col-sm-4 col-xs-4">
                                            <input value=""   id="userName" name="userName" autocomplete="off" type="text"  class="form-control"  style="color: black" required/>
                                        </div>
                                        <span class="text-danger" id="err"></span>
                                    </div>    


                                    <div class="form-group row">
                                        <label for="todate" class="col-md-2 col-sm-2 col-xs-6 control-label" style="color: black">Password</label>
                                        <div class="col-md-4 col-sm-4 col-xs-4">
                                            <input  id="password" name="password" type="password"  class="form-control"  style="color: black" required/>
                                        </div>
                                        <span class="text-danger" id="err"></span>
                                    </div> 

                                    <div class="form-group row">
                                        <label for="todate" class="col-md-2 col-sm-2 col-xs-6  control-label"></label>
                                        <div class="col-sm-4">
                                            <input type="submit"  value="Log In" class="btn btn-info btn-xlg btn-block"/>
                                        </div>
                                        <span class="text-danger" id="customeordererror"></span>
                                    </div>
                                </form>
                               

                            </div>

                        </div>
                    </div>
                </div>
            </div>
       
            <div class="row">

               
          
                 

                </div>
<!-- End Page Container -->
</div>
<br>

<!-- Footer -->


<footer class="w3-container w3-theme-d5">
    <center><p style="font-size: 20pt">Tress Templet<a href="#">@Tres 2018</a></p></center>
</footer>
 
<script>
// Accordion
function myFunction(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
        x.previousElementSibling.className += " w3-theme-d1";
    } else { 
        x.className = x.className.replace("w3-show", "");
        x.previousElementSibling.className = 
        x.previousElementSibling.className.replace(" w3-theme-d1", "");
    }
}

// Used to toggle the menu on smaller screens when clicking on the menu button
function openNav() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
}
</script>

</body>
</html> 
