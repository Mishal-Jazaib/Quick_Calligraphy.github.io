function validate() {
    var name = document.getElementById("name").value;
    var last_name = document.getElementById("last_Name").value;
    var email = document.getElementById("Email").value;
    var message = document.getElementById("Feedback").value;

    var checkname = /^[a-zA-Z\s]{3,20}$/;  // Allows spaces in name
    var checklastname =/^[a-zA-Z\s]{3,20}$/
    var checkemail = /^[a-zA-Z0-9_.+-]+@[A-Za-z0-9-]+\.[a-zA-Z]{2,}$/; // Improved email regex
    var checkmessage = /^.{25,}$/;  // Message must be at least 25 characters

    if (!name.match(checkname)) {
        Swal.fire({
            title: 'Error!',
            text: 'Invalid name (3-20 letters)',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
    if (!last_name.match(checklastname)) {
        Swal.fire({
            title: 'Error!',
            text: 'Invalid name (3-20 letters)',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
    
    if (!email.match(checkemail)) {
        Swal.fire({
            title: 'Error!',
            text: 'Enter Valid Email',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
    if (!message.match(checkmessage)) {
        Swal.fire({
            title: 'Error!',
            text: 'Message must be at least 25 characters',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }

}

document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var name1 = document.querySelector('input[name="name"]').value;
    var name2 = document.querySelector('input[name="l_name"]').value;
    var email1 = document.querySelector('input[name="email"]').value;
    var message1 = document.querySelector('textarea[name="textarea"]').value;

    if (name1 === "" || name2 === "" || email1 === "" || message1 === "") {
        Swal.fire({
            title: 'Error!',
            text: 'Please fill out all fields!',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    } else {
        Swal.fire({
            title: 'Success!',
            text: 'Form submitted successfully!',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {
            document.getElementById("myForm").reset();
        });
    }
});
