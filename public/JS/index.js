let confirmButton = $('.btn');

confirmButton.on('click', () => {
    let cardHolderName = $('#cardHolder-name').val();
    let cardNumber = $('#card-number').val();

    if (cardHolderName == '' || cardNumber == '') {
        $('.error-message-empty').css('display', 'block');
        confirmButton.addClass('errorAnimation');
    } else if (cardNumber.length < 19) {
        $('.error-message-short').show();
        confirmButton.addClass('errorAnimation');
    }
});


// Function to take card number in specific format
$('#card-number').on('input', function () {
    let inputValue = $(this).val();
    inputValue = inputValue.replace(/\s/g, ''); // Remove existing spaces
    let formattedValue = formatCreditCardNumber(inputValue);
    $(this).val(formattedValue);
});

function formatCreditCardNumber(inputValue) {
    let formattedValue = inputValue.replace(/\D/g, ''); // Remove non-numeric characters
    formattedValue = formattedValue.replace(/(\d{4})/g, '$1 ').trim(); // Add space after every 4 digits
    return formattedValue;
}