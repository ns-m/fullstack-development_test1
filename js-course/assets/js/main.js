console.log( 'F society!' );

document.querySelector('.inner').addEventListener('click', (event) =>{
    document.body.classList.add('is-menu-visible');
});

document.querySelector('.close').addEventListener('click', (event) =>{
    document.body.classList.remove('is-menu-visible');
});