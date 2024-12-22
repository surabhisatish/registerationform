$(document).ready(function () {
    $('#registrationForm').on('submit', function (e) {
        e.preventDefault(); // Prevent default form submission

        const formData = $(this).serialize();
        
        $.ajax({
            type: 'POST',
            url: 'process.php',
            data: formData,
            success: function (response) {
                $('#result').html(response).css('color', 'green');
                $('#registrationForm')[0].reset(); // Reset the form
            },
            error: function () {
                $('#result').html('An error occurred. Please try again.').css('color', 'red');
            }
        });
    });
});
