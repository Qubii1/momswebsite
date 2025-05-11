function moveToH4(h3Selector, h4Selector) {
    const h3 = document.querySelector(h3Selector);
    const h4 = document.querySelector(h4Selector);
  
    if (!h3 || !h4) return;
  
    const h3Rect = h3.getBoundingClientRect();
    const h4Rect = h4.getBoundingClientRect();
  
    const clone = h3.cloneNode(true);
    document.body.appendChild(clone);
    clone.classList.add('moving');
  
    // Style the clone to appear exactly like the original
    clone.style.left = `${h3Rect.left}px`;
    clone.style.top = `${h3Rect.top}px`;
    clone.style.width = `${h3Rect.width}px`;
    clone.style.height = `${h3Rect.height}px`;
  
    // Needed to position correctly
    clone.style.position = 'fixed';
  
    // Calculate movement distance
    const dx = h4Rect.left + h4Rect.width / 2 - (h3Rect.left + h3Rect.width / 2);
    const dy = h4Rect.top + h4Rect.height / 2 - (h3Rect.top + h3Rect.height / 2);
  
    // Force a reflow to allow transition
    void clone.offsetWidth;
  
    // Animate
    clone.style.transform = `translate(${dx}px, ${dy}px)`;
    //clone.style.opacity = '0';
  
    // Clean up after animation
    setTimeout(() => {
      clone.remove();
    }, 500);
  }
  
  const buttonLabels = ['dalton', 'kyra', 'quinn'];
  
  document.querySelectorAll('.question-box').forEach(section => {
    const buttons = section.querySelectorAll('.button-box h3');
  
    buttons.forEach(button => {
      const name = button.classList[0].split('-')[0]; // e.g., "dalton" from "dalton-button"
      const answer = section.querySelector(`.${name}.answer`);
      const h4 = answer?.querySelector('h4');
  
      if (!answer || !h4) return;
  
      button.addEventListener('click', () => {
        moveToH4(`.${name}-button`, `.${name}.answer h4`);
        answer.classList.add('active');
  
        const question = section.querySelector('h2.question');
        const buttonBox = section.querySelector('.button-box');
  
        question?.classList.add('hidden');
        buttonBox?.classList.add('hidden');
      });
  
      h4.addEventListener('click', () => {
        const question = section.querySelector('h2.question');
        const buttonBox = section.querySelector('.button-box');
  
        answer.classList.remove('active');
  
        setTimeout(() => {
          question?.classList.remove('hidden');
          buttonBox?.classList.remove('hidden');
        }, 500);
      });
    });
  });
             
  
  let petals1 = document.querySelectorAll('.p1');
  let petals2 = document.querySelectorAll('.p2');
  let petals3 = document.querySelectorAll('.p3');
  let petals4 = document.querySelectorAll('.p4');
  let petals5 = document.querySelectorAll('.p5');
  window.addEventListener("load", (event) => {
  setTimeout(() => {
  petals1.forEach(petal => {petal.style.rotate = '-70deg';})
  petals2.forEach(petal => {petal.style.rotate = '70deg';})
  petals4.forEach(petal => {petal.style.rotate = '-35deg';})
  petals5.forEach(petal => {petal.style.rotate = '35deg';})
  }, 500);
   
  });