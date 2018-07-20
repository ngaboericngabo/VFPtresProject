<%@page import="cardio.domain.Users"%>
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
        
             <link href="mycss/bootStrapV3Css.css" rel="stylesheet" >
        <script src="myjs/bootStrapV3.js"></script>
        <script src="myjs/JquerryV3.js"></script>
        <script src="myjs/wigest.js"></script>
          <script src="myjs/myanimation.js"></script> 
<style>
html,body,h1,h2,h3,h4,h5 {font-family: "Open Sans", sans-serif}
</style>
<body class="w3-theme-l5">
 <%
            try {
                Users person = new Users();
                person = (Users) session.getAttribute("userSession");
                person.getUserName();
                if (null == person.getUserName()) {
                    response.sendRedirect("home");

                }
                
               
                      
            %>    
<!-- Navbar -->
<div class="w3-top">
 <div class="w3-bar w3-theme-d3 w3-left-align w3-large">
  <a class="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2" href="javascript:void(0);" onclick="openNav()"><i class=""></i></a>
  <a href="javascript:void(0)" class="w3-bar-item w3-button w3-padding-large w3-theme-d4"><i class="glyphicon glyphicon-home fa fa-home w3-margin-right"></i></a>
 
  
  <a href="LogOut" class="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white" title="log Out">
    <span>Log out</span>
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
 <div class="w3-row">
    <!-- Left Column -->
    <div class="w3-col m2">
      <!-- Profile -->
      <div class="w3-card w3-round w3-white">
        <div class="w3-container">
         <h4 class="w3-center">My Profile</h4>
         <p class="w3-center"><img src="UserImage/<%=person.getImage()%>" class="w3-circle" style="width:126px" alt="userImage"></p>
         <hr>
         <p><i class="glyphicon glyphicon-asterisk fa-fw w3-margin-right w3-text-theme"></i><%=person.getFname()%> <%=person.getLname()%></p>
         <p><i class="glyphicon glyphicon-globe fa-fw w3-margin-right w3-text-theme"></i> <%=person.getAddress()%>,<%= person.getSector().getDistric().getProvince().getProvenceName()%></p>
         <p><i class="glyphicon glyphicon-tasks fa-fw w3-margin-right w3-text-theme"></i><%=person.getSpeciality().getSpecialityName()%></p>
        </div>
      </div>
      <br>
      
      <!-- Accordion -->
      <div class="w3-card w3-round">
        <div class="w3-white">
          <button onclick="myFunction('Demo1')" class="w3-button w3-block w3-theme-l1 w3-left-align"><i class="glyphicon glyphicon-tasks fa-fw w3-margin-right"></i> My Tasks</button>
          <div id="Demo1" class="w3-hide w3-container" >
              
              <div style="margin: 4px;background-color: #edf8ff;color:withe;border-radius: 6px;color: white"> <a  style="text-decoration: none;color:withe"class="glyphicon glyphicon-asterisk" href="#">Appointment</a></div>
              <div style="margin: 4px;background-color: #edf8ff;color:white;border-radius: 6px"> <a style="text-decoration: none;color:withe" class="glyphicon glyphicon-asterisk" href="#">task</a></div>
              <div style="margin: 4px;background-color: #edf8ff;color:white;border-radius: 6px"> <a style="text-decoration: none;color:withe" class="glyphicon glyphicon-asterisk" href="#">task</a></div>
              
          </div>
          <button onclick="myFunction('Demo2')" class="w3-button w3-block w3-theme-l1 w3-left-align"><i class="glyphicon glyphicon-file fa-fw w3-margin-right"></i> My Report</button>
          <div id="Demo2" class="w3-hide w3-container">
              <div style="margin: 4px;background-color: #edf8ff;color:white;border-radius: 6px"> <a style="text-decoration: none;color:withe" class="glyphicon glyphicon-asterisk" href="reportPage">Reports</a></div>
              
          </div>
         
        </div>      
      </div>
      <br>
      
      <!-- Interests --> 
   
      
     
    
    <!-- End Left Column -->
    </div>
    
    <!-- Middle Column -->
    <div class="w3-col m10 ">
    
           <div class="w3-row-padding">
        <div class="w3-col m12">
          <div class="w3-card w3-round w3-white">
            <div class="w3-container w3-padding">
              
              <h4 class="w3-opacit glyphicon glyphicon-dashboard"> Admin 's Dashboard</h4>
               
              
              
                <div class="container-2">
     <div id="page-wrappe">   
      
                                                 
        <div class="row" >
                  
                    <div class="col-md-4 col-sm-6">
                        <div class="circle-tile">
                            <a href="#">
                                <div class="circle-tile-heading green">
                                    <i class="glyphicon glyphicon-asterisk fa-fw fa-3x"></i>
                                </div>
                            </a>
                            <div class="circle-tile-content green">
                                <div class="circle-tile-description text-faded">
                                   Appointments
                                </div>
                                <div class="circle-tile-number text-faded">
                                   1
                                </div>
                                <a href="#" class="circle-tile-footer">View  <i class="glyphicon glyphicon-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6">
                        <div class="circle-tile">
                            <a href="#">
                                <div class="circle-tile-heading orange">
                                    <i class="glyphicon glyphicon-list fa-fw fa-3x"></i>
                                </div>
                            </a>
                            <div class="circle-tile-content orange">
                                <div class="circle-tile-description text-faded">
                                    Task
                                </div>
                                <div class="circle-tile-number text-faded">
                                    2 
                                </div>
                                <a href="#" class="circle-tile-footer">More Info <i class="glyphicon glyphicon-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6">
                        <div class="circle-tile">
                            <a href="#">
                                <div class="circle-tile-heading blue">
                                    <i class="glyphicon glyphicon-file fa-fw fa-3x"></i>
                                </div>
                            </a>
                            <div class="circle-tile-content blue">
                                <div class="circle-tile-description text-faded">
                                   Report
                                </div>
                                <div class="circle-tile-number text-faded">
                                    3
                                    <span id="sparklineB"></span>
                                </div>
                                <a href="#" class="circle-tile-footer">More Info <i class="glyphicon glyphicon-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>
                                              
      
        
    </div><!-- page-wrapper END-->
   </div><!-- container-1 END-->
 
      <div class="row">
          
         
         
         
          <div class="col-md-4 col-sm-6">
                        <div class="circle-tile">
                            <a href="#">
                                <div class="circle-tile-heading red">
                                    <i class="glyphicon glyphicon-check fa-fw fa-3x"></i>
                                </div>
                            </a>
                            <div class="circle-tile-content red">
                                <div class="circle-tile-description text-faded">
                                  Task
                                </div>
                                <div class="circle-tile-number text-faded">
                                    4
                                    <span id="sparklineC"></span>
                                </div>
                                <a href="#" class="circle-tile-footer">More Info <i class="glyphicon glyphicon-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6">
                        <div class="circle-tile">
                            <a href="#">
                                <div class="circle-tile-heading purple">
                                    <i class="glyphicon glyphicon-user fa-fw fa-3x"></i>
                                </div>
                            </a>
                            <div class="circle-tile-content purple">
                                <div class="circle-tile-description text-faded">
                                   My profile
                                </div>
                                <div class="circle-tile-number text-faded">
                                    5
                                    <span id="sparklineD"></span>
                                </div>
                                <a href="#" class="circle-tile-footer">More Info <i class="glyphicon glyphicon-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                          
            
        </div>
            
            </div>
          </div>
        </div>
      </div>
   

    
     
    <script src="js/jquery-3.1.1.js"></script>    
    <script src="js/bootstrap.js"></script>
    


<script type="text/javascript">
    $(document).ready(function(){
        $(".sidebar-toggle").click(function(){
            $(this).hide();
            
           $("#user-profil").show();
            
           $("#hide-btn").show();
            
           $(".container-2").css("width", "85%");
            
             
        });
        
        $("#hide-btn").click(function(){
            $(this).hide();
            
           $("#user-profil").hide();
            
           $(".sidebar-toggle").show();
            
           $(".container-2").css("width", "100%");
            
             
        });
    });
</script>
</div>
    </div>
    
    <!-- Right Column -->
   
    
  <!-- End Grid -->
  </div>
<!-- End Page Container -->
</div>
<br>

<!-- Footer -->


<footer class="w3-container w3-theme-d5">
    <center><p style="font-size: 20pt">Tress Templet<a href="#">@Tress 2018</a></p></center>
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
<%}catch(Exception ex){
  response.sendRedirect("home");

        out.println(ex.getMessage());
}%>
</body>
</html> 
