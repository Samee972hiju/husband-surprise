let step = 0;

document.getElementById("btn").onclick = function() {
  step++;
  
  if(step == 1) {
    document.getElementById("surprise").innerHTML = 
    `<video width="100%" controls autoplay>
      <source src="step1.mp4" type="video/mp4">
    </video>`;
    document.getElementById("btn").innerText = "Dekh liya? 🥰";
  }
}
