
  $(document).ready(function(){

 
     
 var fname=$("#fname");
 var lname=$("#lname");
 var email=$("#email");
 var ac=$("#acd");
 var major=$("#major");
 
   
   
      $( "#AddUser" )
			
			.click(function() {
          
			validuser();
                
                
                
			});
                        
     
    
     
                    

            function validuser(){
                          
                var bValid = true;            
            ///^((250)7(8|2|3))([0-9]{7})$/          
       
             
                                
                        if (   bValid && checkRegexp(fname,/^[a-zA-Z0-9]([0-9a-zA-Z ,._/\-]*)+$/i)===true ) {
                          
                          
                              
                                 $("#fnamee").text("");    
                                  
                              }
						
					
					else{
                                          
                                            $("#fnamee").text("Invalid  , First name!");	
                                  
                                    }
                        if (   bValid && checkRegexp(major,/^[a-zA-Z0-9]([0-9a-zA-Z ,._/\-]*)+$/i)===true ) {
                          
                          
                              
                                 $("#majore").text("");    
                                  
                              }
						
					
					else{
                                          
                                            $("#majore").text("Invalid  , Major !");	
                                  
                                    }
                                
                        if (   bValid && checkRegexp(ac,/^[a-zA-Z0-9]([0-9a-zA-Z ,._/\-]*)+$/i)===true ) {
                          
                          
                              
                                 $("#acde").text("");    
                                  
                              }
						
					
					else{
                                          
                                            $("#acde").text("Invalid  , accademic year!");	
                                  
                                    }
                        if (   bValid && checkRegexp(lname,/^[a-zA-Z0-9]([0-9a-zA-Z ,._/\-]*)+$/i)===true ) {
                          
                          
                              
                                 $("#lnamee").text("");    
                                  
                              }
						
					
					else{
                                          
                                            $("#lnamee").text("Invalid  , last name!");	
                                  
                                    }
                                    
                                             
                        if (   bValid && checkRegexp(email,/^[a-z0-9]([0-9a-z_ ,\._/\-])*@(gmail|yahoo)\.(com|fr)$/i )===true ) {
                          
                          
                              
                                 $("#emaile").text("");    
                                  
                              }
						
					
					else{
                                          
                                            $("#emaile").text("Invalid  , email !");	
                                  
                                    }    
                                    
                                 bValid = bValid && checkRegexp(email,/^[a-z0-9]([0-9a-z ,\._/\-])*@(gmail|yahoo)\.(com|fr)$/i )  ;  
                                 bValid = bValid && checkRegexp(lname,/^[a-zA-Z0-9]([0-9a-zA-Z ,._/\-]*)+$/i)  ;  
                                 bValid = bValid && checkRegexp(major,/^[a-zA-Z0-9]([0-9a-zA-Z ,._/\-]*)+$/i)  ;  
                                 bValid = bValid && checkRegexp(fname,/^[a-zA-Z0-9]([0-9a-zA-Z ,._/\-]*)+$/i)  ;  
                                 bValid = bValid && checkRegexp(ac,/^[a-zA-Z0-9]([0-9a-zA-Z ,._/\-]*)+$/i)  ;  
                              
                                
                           
			
                         
                                 if ( bValid ) {
                                   
                                     
                  
                          createuSER(email.val(),lname.val(),fname.val(),ac.val(),major.val()) ;  
                                //addpro(pro.val(),category)      
                                 
                                   
//				distr= $("#district option:selected").val();
//                                 sex= $("#gender option:selected").val();		
                       
                                                
					}
                                 
                        }
       
       
    
        

       
       
	   function checkRegexp( o, regexp) {
			if (!( regexp.test( o.val() ) ) ) {
				
				return false;
			} else {
				return true;
			}
		} 		
                        
                        
 }); 
 
  function  createuSER(email,lname,fname,accdemic,major){

//alert(puid);
    
                var xmlh;   
                
                if (window.XMLHttpRequest)
                {// code for IE7+, Firefox, Chrome, Opera, Safari
                    xmlh=new XMLHttpRequest();
                }
                else
                {// code for IE6, IE5
                    xmlh=new ActiveXObject("Microsoft.XMLHTTP");
                }
                xmlh.onreadystatechange=function()
                {
                     if(xmlh.readyState===0 ){
       document.getElementById("svmsg").innerHTML="please wait loading.";    
          
      }else if(xmlh.readyState===1){
          
          document.getElementById("svmsg").innerHTML="please wait loading.."; 
  
      }
        else if(xmlh.readyState===2){
          
          document.getElementById("svmsg").innerHTML=" please wait loading...."; 
         
      }
       else if(xmlh.readyState===3){
          
          document.getElementById("svmsg").innerHTML="please wait loading..........."; 
          
          
      }
        
                    if (xmlh.readyState===4 && xmlh.status===200)
                    {
                       
                       
                        var aa=xmlh.responseText;
                     (window.location="adminForm.jsp");
                     alert(aa);
                    }
                }
                
       // (type,cpid,fname,lname,amount,acount,phone)
             xmlh.open("POST","process/adduser.jsp?fname="+fname+"&lname="+lname+"&email="+email+"&acc="+accdemic+"&major="+major,true);
                xmlh.send(); 
               
     
     
  }
     
       