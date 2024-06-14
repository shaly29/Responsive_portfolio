document.addEventListener("DOMContentLoaded", () => {
    const words = document.querySelectorAll(".word");
  
    words.forEach((word) => {
      let letters = word.textContent.split("");
      word.textContent = ""; // Clear the original text content
  
      letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter; // Set span content to the letter
        span.className = "letter"; // Apply initial class to span
        word.append(span); // Append span to the word container
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
        letter.classList.remove("behind"); // Reset letter class
        letter.classList.add("in"); // Apply new class for animation
      });
  
      // Update currentWordIndex for next iteration
      currentWordIndex = nextWordIndex;
    };
  
    // Call changeText initially and then every 3000ms (3 seconds)
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