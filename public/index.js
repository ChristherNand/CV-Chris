let about = document.getElementById("about");
let getAbout = document.getElementById("getAbout");
let resume = document.getElementById("resume");
let getResume = document.getElementById("getResume");
let interests = document.getElementById("interests");
let getInterests = document.getElementById("getInterests");
let contact = document.getElementById("contact");
let getContact = document.getElementById("getContact");
let contactInfo = document.getElementById("contact-info");

function remove() {
    about.classList.remove('view');
    getAbout.classList.remove('selected');
    resume.classList.remove('view');
    getResume.classList.remove('selected');
    interests.classList.remove('view');
    getInterests.classList.remove('selected');
    contact.classList.remove('view');
    getContact.classList.remove('selected');
}

getAbout.addEventListener('click', function (e) {
    e.preventDefault();
    if (window.innerWidth > 1040) {
        remove('about');
        about.classList.add('view');
        getAbout.classList.add('selected');
    } else {
      scrollToElement('about');
    }

});
getResume.addEventListener('click', function (e) {
    e.preventDefault();
    if (window.innerWidth > 1040) {
        remove();
        resume.classList.add('view');
        getResume.classList.add('selected');
    } else {
      scrollToElement('resume');
    }
})
getInterests.addEventListener('click', function (e) {
    e.preventDefault();
    if (window.innerWidth > 1040) {
        remove();
        interests.classList.add('view');
        getInterests.classList.add('selected');
    } else {
      scrollToElement('interests');
    }
})

getContact.addEventListener('click', function (e) {
    e.preventDefault();
    if (window.innerWidth > 1040) {
        remove();
        contact.classList.add('view');
        getContact.classList.add('selected');
    } else {
      scrollToElement('contact');
    }
})

contactInfo.addEventListener('click', function (e) {
    e.preventDefault();
    if (window.innerWidth > 1040) {
      remove();
      contact.classList.add('view');
      getContact.classList.add('selected');
    } else {
      scrollToElement('contact');
    }
})

var email = document.getElementById("email");
var form = document.getElementById("form");

email.addEventListener("input", function (event) {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("It should be an email address");
    } else {
        email.setCustomValidity("");
    }
});

form.addEventListener("submit", function (event) {
    event.preventDefault();
});

function scrollToElement(elemento) {
    const element = document.getElementById(elemento);
    const offset = 20;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
}