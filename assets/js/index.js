document.getElementById('home').addEventListener('click', (event) => {
    document.getElementById('home-content').style.display='block';
    document.getElementById('about-us-content').style.display='none';
});

document.getElementById('about').addEventListener('click', (event) => {
    document.getElementById('home-content').style.display='none';
    document.getElementById('about-us-content').style.display='block';
});

document.getElementById('contact').addEventListener('click', (event) => {
    document.getElementById('contact-us-content').style.display='block';
    document.getElementById('home-content').style.display='none';
    document.getElementById('about-us-content').style.display='none';
});
