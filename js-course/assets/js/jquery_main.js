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
    
});

function validate(event) {

    const errorContainer = document.getElementById('errorsForm');
    errorContainer.innerHTML ='';
    const nameField = document.getElementById('name'),
    emailField = document.getElementById('email'),
    messageField = document.getElementById('message'),
    re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    
    const contactFormData = {
        name : '',
        email : '',
    };

    let validForm = true;

    if (! nameField.value || nameField.value.length < 3) {
        errorContainer.innerHTML = '<p style="color:red"><strong>Name error!</strong></p>';
        validForm = false;
    }else{
        contactFormData.name = nameField.value;
        //localStorage.setItem('name', nameField.value);
    }

    if (! emailField.value || ! re.test(String(emailField.value).toLowerCase()) ) {
        errorContainer.innerHTML += '<p style="color:red"><strong>Email error!</strong></p>';
        validForm = false;
    }else{
        contactFormData.email = emailField.value;
        //localStorage.setItem('email', emailField.value);
    }

    if (! messageField.value || messageField.value.length < 10) {
        errorContainer.innerHTML += '<p style="color:red"><strong>Message error!</strong></p>';
        validForm = false;
    }

    localStorage.setItem('contactFormData', JSON.stringify(contactFormData));

    if (validForm === false) {
        event.preventDefault();
    }
    
    return validForm;
}