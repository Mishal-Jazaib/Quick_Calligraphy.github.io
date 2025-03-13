function Validata() {
    var vemail = /^[a-zA-Z0-9_.+-]+@[A-Za-z0-9-]+\.[a-zA-Z]{2,}$/;

    var email = document.getElementById("email").value;

    if (!email.match(vemail)) {
        Swal.fire({
            title: 'Error!',
            text: 'Enter Valid Email',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
}

document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var email = document.querySelector('input[name="email"]').value;

    if (email === "") {
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