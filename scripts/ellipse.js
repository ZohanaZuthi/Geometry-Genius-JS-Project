function ellipse_calc() {
    const aInput = document.getElementById("ellipse-a");
    const a = parseFloat(aInput.value);
  
    const bInput = document.getElementById("ellipse-b");
    const b = parseFloat(bInput.value);
  
    const area = Math.PI * a * b;
    const result = document.getElementById("ellipse-result");
    result.innerText = area.toFixed(2);
  }
  