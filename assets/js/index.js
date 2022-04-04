document.getElementById('home').addEventListener('click', (event) => {
    document.getElementById('home-content').style.display='block';
});

document.getElementById('about').addEventListener('click', (event) => {
    document.getElementById('home-content').style.display='none';
    document.getElementById('about-us-content').style.display='block';
    document.getElementById('contact-us-content').style.display='none';
    document.getElementById('service-content').style.display='none';


});

document.getElementById('contact').addEventListener('click', (event) => {
    document.getElementById('contact-us-content').style.display='block';
    document.getElementById('home-content').style.display='none';
    document.getElementById('about-us-content').style.display='none';
    document.getElementById('service-content').style.display='none';

});

document.getElementById('service').addEventListener('click', (event) => {
    document.getElementById('service-content').style.display='block';
    document.getElementById('contact-us-content').style.display='none';
    document.getElementById('home-content').style.display='none';
    document.getElementById('about-us-content').style.display='none';
});
