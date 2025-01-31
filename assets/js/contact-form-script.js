/*==============================================================*/
// Xton Contact Form JS
/*==============================================================*/
(function ($) {
    "use strict"; // Start of use strict
    $("#contactForm").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) {
            // handle the invalid form...
            formError();
            submitMSG(false, "Did you fill in the form properly?");
        } else {
            // everything looks good!
            event.preventDefault();
            submitForm();
        }
    });


    function submitForm(){
        // Initiate Variables With Form Content
        var name = $("#name").val();
        var email = $("#email").val();
        var phone_number = $("#phone_number").val();
        var message = $("#message").val();


        // $.ajax({
        //     type: "POST",
        //     // url: "assets/php/form-process.php",
        //     url: "https://formsubmit.co/ajax/hanna.ecraftz@gmail.com",
        //     data: "name=" + name + "&email=" + email + "&phone_number=" + phone_number + "&message=" + message,
        //     success : function(statustxt){
        //         if (statustxt == "success"){
        //             formSuccess();
        //         } else {
        //             formError();
        //             submitMSG(false,statustxt);
        //         }
        //     }
        // });

        // $.ajax({
        //     type: "POST",
        //     url: "https://formsubmit.co/ajax/hanna.ecraftz@gmail.com",
        //     data: {
        //         name: name,
        //         email: email,
        //         phone_number: phone_number,
        //         message: message
        //     },
        //     dataType: "json",  // Expect JSON response
        //     success: function(response) {
        //         if (response.success) {
        //             formSuccess();
        //         } else {
        //             formError();
        //             submitMSG(false, response.message);
        //         }
        //     },
        //     error: function(xhr, status, error) {
        //         formError();
        //         submitMSG(false, "There was an error submitting the form.");
        //     }
        // });

        // $.ajax({
        //     type: "POST",
        //     url: "https://formsubmit.co/ajax/hanna.ecraftz@gmail.com",
        //     contentType: "application/json",  // Ensure JSON format
        //     data: JSON.stringify({
        //         name: $("#name").val(),
        //         email: $("#email").val(),
        //         phone_number: $("#phone_number").val(),
        //         message: $("#message").val(),
        //         _template: "table"  // Use FormSubmit's table format
        //     }),
        //     dataType: "json",
        //     success: function(response) {
        //         if (response.success) {
        //             formSuccess();
        //         } else {
        //             formError();
        //             submitMSG(false, response.message);
        //         }
        //     },
        //     error: function(xhr, status, error) {
        //         formError();
        //         submitMSG(false, "There was an error submitting the form.");
        //     }
        // });

        $.ajax({
            type: "POST",
            url: "https://formsubmit.co/ajax/hanna.ecraftz@gmail.com",
            contentType: "application/json",  // Ensure JSON format
            data: JSON.stringify({
                name: $("#name").val(),
                email: $("#email").val(),  // User's email
                phone_number: $("#phone_number").val(),
                message: $("#message").val(),
                _replyto: $("#email").val(),  // Set user email for replies
                _fromname: "Hanna's Website",  // Custom sender name
                _template: "table"  // Formats email properly
            }),
            dataType: "json",
            success: function(response) {
                if (response.success) {
                    formSuccess();
                } else {
                    formError();
                    submitMSG(false, response.message);
                }
            },
            error: function(xhr, status, error) {
                formError();
                submitMSG(false, "There was an error submitting the form.");
            }
        });
        
        
    }

    function formSuccess(){
        $("#contactForm")[0].reset();
        submitMSG(true, "Message Submitted!")
    }

    function formError(){
        $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass();
        });
    }

    function submitMSG(valid, msg){
        if(valid){
            var msgClasses = "h4 text-start tada animated text-success";
        } else {
            var msgClasses = "h4 text-start text-danger";
        }
        $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
    }
}(jQuery)); // End of use strict