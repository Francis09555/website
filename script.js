/*=========================
TYPING ANIMATION
=========================*/

const words = [
    "Web Developer",
    "Programmer",
    "CODM Player",
    "Creative Designer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing-text");

function typeEffect(){

    if(!typing) return;

    const currentWord = words[wordIndex];

    if(!deleting){
        typing.textContent = currentWord.substring(0,charIndex++);
    }else{
        typing.textContent = currentWord.substring(0,charIndex--);
    }

    let speed = deleting ? 60 : 120;

    if(!deleting && charIndex === currentWord.length + 1){
        deleting = true;
        speed = 1500;
    }

    if(deleting && charIndex === 0){
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect,speed);

}

typeEffect();


/*=========================
SCROLL REVEAL
=========================*/

const revealElements = document.querySelectorAll(
".hero-card,.glass-card,.skill-card,.contact-card"
);

const revealObserver = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";
}

});

},{
threshold:.15
});

revealElements.forEach(el=>{

el.style.opacity="0";
el.style.transform="translateY(60px)";
el.style.transition=".8s ease";

revealObserver.observe(el);

});


/*=========================
ACTIVE NAVIGATION
=========================*/

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;
const height=section.clientHeight;

if(pageYOffset>=top){
current=section.getAttribute("id");
}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){
link.classList.add("active");
}

});

});


/*=========================
NAVBAR EFFECT
=========================*/

const nav=document.querySelector("nav");

window.addEventListener("scroll",()=>{

if(window.scrollY>60){

nav.style.background="rgba(10,20,40,.85)";
nav.style.boxShadow="0 15px 35px rgba(0,0,0,.35)";

}else{

nav.style.background="rgba(255,255,255,.08)";
nav.style.boxShadow="none";

}

});


/*=========================
COUNT UP STATS
=========================*/

const stats=document.querySelectorAll(".stat-card h3");

stats.forEach(stat=>{

const value=stat.innerText;

if(isNaN(value)) return;

let start=0;

const end=parseInt(value);

const timer=setInterval(()=>{

start++;

stat.innerText=start;

if(start>=end){

clearInterval(timer);

}

},70);

});


/*=========================
ANIMATE SKILL BARS
=========================*/

const bars=document.querySelectorAll(".progress-fill");

const skillObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.animation="grow 1.5s ease forwards";

}

});

});

bars.forEach(bar=>{

skillObserver.observe(bar);

});


/*=========================
BACK TO TOP BUTTON
=========================*/

const topButton=document.createElement("button");

topButton.innerHTML="↑";

topButton.className="topBtn";

document.body.appendChild(topButton);

topButton.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topButton.style.opacity="1";
topButton.style.pointerEvents="auto";

}else{

topButton.style.opacity="0";
topButton.style.pointerEvents="none";

}

});


/*=========================
FLOATING PHOTO EFFECT
=========================*/

const photo=document.querySelector(".photo-ring");

window.addEventListener("mousemove",(e)=>{

if(!photo) return;

const x=(window.innerWidth/2-e.clientX)/40;
const y=(window.innerHeight/2-e.clientY)/40;

photo.style.transform=
`rotateY(${x}deg) rotateX(${-y}deg)`;

});

window.addEventListener("mouseleave",()=>{

if(photo){

photo.style.transform="rotateY(0deg) rotateX(0deg)";

}

});function showPage(pageId){

document.querySelectorAll(".page").forEach(page=>{
page.classList.remove("active");
});

document.getElementById(pageId).classList.add("active");

window.scrollTo(0,0);

}