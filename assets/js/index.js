document.getElementById('home').addEventListener('click', (event) => {
    document.getElementById('home-content').style.display='block';
    document.getElementById('contact-us-content').style.display='none';
    document.getElementById('service-content').style.display='none';
    document.getElementById('about-us-content').style.display='none';
    document.getElementById('event-content').style.display='none';
});

document.getElementById('about').addEventListener('click', (event) => {
    document.getElementById('home-content').style.display='none';
    document.getElementById('about-us-content').style.display='block';
    document.getElementById('contact-us-content').style.display='none';
    document.getElementById('service-content').style.display='none';
    document.getElementById('event-content').style.display='none';
});

document.getElementById('contact').addEventListener('click', (event) => {
    document.getElementById('contact-us-content').style.display='block';
    document.getElementById('home-content').style.display='none';
    document.getElementById('about-us-content').style.display='none';
    document.getElementById('service-content').style.display='none';
    document.getElementById('event-content').style.display='none';

});

document.getElementById('service').addEventListener('click', (event) => {
    document.getElementById('service-content').style.display='block';
    document.getElementById('contact-us-content').style.display='none';
    document.getElementById('home-content').style.display='none';
    document.getElementById('about-us-content').style.display='none';
    document.getElementById('event-content').style.display='none';
});

document.getElementById('event').addEventListener('click', (event) => {
    
    document.getElementById('event-content').style.display='block';
    document.getElementById('service-content').style.display='none';
    document.getElementById('contact-us-content').style.display='none';
    document.getElementById('home-content').style.display='none';
    document.getElementById('about-us-content').style.display='none';
});

// create active link on click
const menuItems = document.getElementsByClassName('menu-item')
for(let i = 0; i < menuItems.length; i++ ){
    menuItems[i].addEventListener('click', function(){
        let current =  document.getElementsByClassName('active');
        current[0].className = current[0].className.replace('active', "")
        this.className += " active";
    })
}

const logoToggleClass = (element, toggleClass) => {
    element.classList.toggle(toggleClass);
  };
  
  document.querySelectorAll('.mobile-hamberger').forEach((hamburgIcon) => {
    hamburgIcon.addEventListener('click', () => {
      hamburgIcon.classList.toggle('open');
    //   logoToggleClass(document.querySelector('.header'), 'solidheader');
    });
  });