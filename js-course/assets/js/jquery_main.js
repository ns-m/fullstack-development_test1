jQuery( function($){
    //console.log('Test jQ');

    // document.querySelector('.inner').addEventListener('click', (event) =>{
    //     document.body.classList.add('is-menu-visible');
    // });

    $('.inner').click(function(event){
        $('body').addClass('is-menu-visible');
    });
    
    // document.querySelector('.close').addEventListener('click', (event) =>{
    //     document.body.classList.remove('is-menu-visible');
    // });

    $('.close').click(function(event){
        $('body').removeClass('is-menu-visible');
    });

    $('#contactform').submit(validate);

    const contactFormData = JSON.parse(localStorage.getItem('contactFormData')),
        nameField = $('#name'),
        mailField = $('#email');
    nameField.val(contactFormData.name);
    mailField.val(contactFormData.email);
    
});

function validate(event) {

    const errorContainer = jQuery('#errorsForm');
    errorContainer.html('');
    const nameField = jQuery('#name'),
    emailField = jQuery('#email'),
    messageField = jQuery('#message'),
    re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    
    const contactFormData = {
        name : '',
        email : '',
    };

    let validForm = true;

    if (! nameField.val() || nameField.val().length < 3) {
        errorContainer.append('<p style="color:red"><strong>Name error!</strong></p>');
        validForm = false;
    }else{
        contactFormData.name = nameField.val();
        //localStorage.setItem('name', nameField.value);
    }

    if (! emailField.val() || ! re.test(String(emailField.val()).toLowerCase()) ) {
        errorContainer.append('<p style="color:red"><strong>Email error!</strong></p>');
        validForm = false;
    }else{
        contactFormData.email = emailField.val();
        //localStorage.setItem('email', emailField.value);
    }

    if (! messageField.val() || messageField.val().length < 10) {
        errorContainer.append('<p style="color:red"><strong>Message error!</strong></p>');
        validForm = false;
    }

    localStorage.setItem('contactFormData', JSON.stringify(contactFormData));

    if (validForm === false) {
        event.preventDefault();
    }
    
    return validForm;
}