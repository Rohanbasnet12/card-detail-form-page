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

    // Update the content of an element with the id 'card-number-detail'
    $('#card-number-detail').text(formattedValue);
});

function formatCreditCardNumber(inputValue) {
    let formattedValue = inputValue.replace(/\D/g, ''); // Remove non-numeric characters
    formattedValue = formattedValue.replace(/(\d{4})/g, '$1 ').trim(); // Add space after every 4 digits
    return formattedValue;
}


// Function to change the card holder name on the card detail
$('#cardHolder-name').on('input', function () {
    let input = $(this).val();
    $('#cardholder-name-detail').text(input);
});

$('#month-detail').on('input', function () {
    let monthInput = $(this).val();
    if (monthInput > 31) {
        $('.error-message-invalid').show();
    }
});

$('#year-detail').on('input', function () {
    let yearInput = $(this).val();
    if (yearInput > 12) {
        $('.error-message-invalid').show();
    } else if (yearInput === 0) {
        $('.error-message-short').show();
    }
});

$('#cvc-number').on('input', function () {
    let cvc = $(this).val();
    $('.show-cvc-detail').text(cvc);
    confirmButton.addClass('errorAnimation');
});

