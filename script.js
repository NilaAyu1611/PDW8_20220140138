document.addEventListener('DOMContentLoaded', function() {
    var submitBtn = document.getElementById('submit-btn');
    var modal = document.getElementById("resultModal");
    var span = document.getElementsByClassName("close")[0];

    submitBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get input values
        var fullName = document.querySelector('input[name="full-name"]').value;
        var phoneNumber = document.querySelector('input[name="phone-number"]').value;
        var birthDate = document.querySelector('input[name="birth-date"]').value;
        var gender = document.querySelector('input[name="gender"]:checked').value;
        var hobbies = [];
        document.querySelectorAll('[name="hobby"]:checked').forEach(function(hobby) {
            hobbies.push(hobby.value);
        });
        var address = document.querySelector('input[name="address"]').value;
        var country = document.querySelector('select[name="country"]').value;
        var city = document.querySelector('input[name="city"]').value;

        // Create result message
        var resultMessage = "<h3>Biodata Details:</h3>" +
            "<p><strong>Full Name:</strong> " + fullName + "</p>" +
            "<p><strong>Phone Number:</strong> " + phoneNumber + "</p>" +
            "<p><strong>Birth Date:</strong> " + birthDate + "</p>" +
            "<p><strong>Gender:</strong> " + gender + "</p>" +
            "<p><strong>Hobbies:</strong> " + hobbies.join(", ") + "</p>" +
            "<p><strong>Address:</strong> " + address + ", " + city + ", " + country + "</p>";

        // Display result message in modal
        var resultContainer = document.getElementById('result-container');
        resultContainer.innerHTML = resultMessage;

        // Show the modal
        modal.style.display = "block";
    });

    // Close the modal when the user clicks on <span> (x)
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Close the modal when the user clicks anywhere outside of the modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});