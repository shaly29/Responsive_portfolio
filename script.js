document.addEventListener("DOMContentLoaded", () => {
  const words = document.querySelectorAll(".word");

  words.forEach((word) => {
      let letters = word.textContent.split("");
      word.textContent = "";

      letters.forEach((letter) => {
          let span = document.createElement("span");
          span.textContent = letter; 
          span.className = "letter"; 
          word.append(span); 
      });
  });

  let currentWordIndex = 0;
  const maxWordIndex = words.length - 1;

  // Initial display of first word
  words[currentWordIndex].style.opacity = "1";

  const changeText = () => {
      const currentWord = words[currentWordIndex];
      const nextWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
      const nextWord = words[nextWordIndex];

      // Animate out the letters of the current word
      Array.from(currentWord.children).forEach((letter, i) => {
          setTimeout(() => {
              letter.classList.add("out");
          }, i * 80);
      });

      // Animate in the letters of the next word
      nextWord.style.opacity = "1";
      Array.from(nextWord.children).forEach((letter, i) => {
          setTimeout(() => {
              letter.classList.remove("behind"); // Reset letter class
              letter.classList.add("in"); // Apply new class for animation
          }, 340 + i * 80); // Delay the in animation slightly
      });

      // After all letters have animated out, hide the current word and mark letters as behind
      setTimeout(() => {
          currentWord.style.opacity = "0";
          Array.from(currentWord.children).forEach((letter) => {
              letter.classList.remove("out", "in");
              letter.classList.add("behind");
          });
          currentWordIndex = nextWordIndex; // Update currentWordIndex for next iteration
      }, 4000);
  };

  // Call changeText initially and then every 4000ms (4 seconds)
  changeText();
  setInterval(changeText, 3000);
});



  // circle skills---------------------

  const circles = document.querySelectorAll('.circle');
  circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent")
    var percent = Math.floor(dots * marked/100)
    var points = "";
    var rotate = 360 / dots;

    for(let i = 0 ; i < dots ; i++){
    
      points += `<div class="points " style="--i:${i}; --rot:${rotate }deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for(let i =0; i<percent ; i++){
      pointsMarked[i].classList.add('marked')
    }
  })

  // mix it up portfolio section
  
  var mixer = mixitup('.portfolio-gallery');


  // active menu////

  let menuli = document.querySelectorAll('header ul li a');
  let section = document.querySelectorAll('section');

  function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuli.forEach(sec=> sec.classList.remove("active"));
    menuli[len].classList.add("active");
  }

  activeMenu();
  window.addEventListener("scroll",activeMenu);


  // sticky navbar
  const header = document.querySelector("header");
  window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 50)
  })

  // toggle icon navbar
  let menuIcon = document.querySelector("#menu-icon");
  let navList = document.querySelector(".navlist");

  menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("bx-x");
    navList.classList.toggle("open")
  }

window.onscroll = ()=>{
    menuIcon.classList.remove("bx-x");
    navList.classList.remove("open")
  }

  // parallax///////////////////////
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      if(entry.isIntersecting){
        entry.target.classList.add("show-items")
      }else{
        entry.target.classList.remove("show-items")
      }
    })
  })

  const scrollScale = document.querySelectorAll(".scroll-scale");
  scrollScale.forEach((e1)=>observer.observe(e1));

  const scrollBottom = document.querySelectorAll(".scroll-bottom");
  scrollBottom.forEach((e1)=>observer.observe(e1));

  const scrollTop = document.querySelectorAll(".scroll-top");
  scrollTop.forEach((e1)=>observer.observe(e1));



  // ratings
  