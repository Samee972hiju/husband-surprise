let step = 0;

document.getElementById("btn").onclick = function() {
  step++;
  
  if(step == 1) {
    // Step 1: Video chalegi
    document.getElementById("surprise").innerHTML = 
    `<video width="100%" autoplay loop>
      <source src="step1.mp4" type="video/mp4">
      Tumhara browser video support nahi karta
    </video>`;
  }
  
  if(step == 2) {
    document.getElementById("surprise").innerHTML = "Step 2 baad me banayenge 💗";
  }
}
