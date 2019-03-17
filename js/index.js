$(document).ready(function () {

    var email = $("#email"),
    option = $("select#size"),
    radio = document.getElementsByName('indicator'),
    service;

    $(radio).click(function(){
        for (var i = 0, length = radio.length; i < length; i++)
            {
                    if (radio[i].checked)
                    {
                        service = radio[i].value;
                    // only one radio can be logically checked, don't check the rest
                            break;
                }
            }
          
    })

        // check email pattern
    function validateEmail(email) {
        var emailReg = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        return emailReg.test( email );
      }

    $("button").click(function () {
      
             var isEmail = 0, isSize=0, isService=0;

             if( !validateEmail(email.val())) {
                $("#emailrequire").html('Email is invalid!!');
                $("#email").removeClass("success");
                $("#email").addClass("inputerror");
                isEmail = 1;
            } else {$("#emailrequire").toggle(); 
                    $("#email").removeClass('inputerror');
                    $("#email").addClass("success");
                    isEmail = 0; }

            if(option.val() == 'Please Select'){
                $("#sizeerror").html('Please select valid Business size.');
                $("#size").removeClass("success");
                $("#size").addClass("inputerror");
                isSize = 1;
            } else{ $("#sizeerror").hide();
                    $("#size").removeClass("inputerror");
                    $("#size").addClass("success");
                    isSize = 0;}

            if(service == undefined){
                $("#radioerror").html("Please select any one of the above options.");
                isService = 1;
            } else{
                    $("#radioerror").hide();
                    isService = 0;
                }

                // if all 3 fields are valid than navigate to the next page.
            if(isEmail == 1 || isService == 1 || isSize == 1){
                
            }else 
                {
                    if ((option.val() == '1-10') || (service == 'Price') || (service == 'Document Storage') || (service == 'Full Text Search')){
                        window.location.href = "unqualified.html"; //User can go back from this page to previous page.
                       // window.location.replace("unqualified.html"); // User can't go back from this page to previous
                    }
                   else {
                       window.location.href = "qualified.html";  //User can go back from this page to previous page.
                      // window.location.replace("qualified.html"); // User can't go back from this page to previous
                   }
                }
 
    });

});