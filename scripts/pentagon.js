function pentagon_calc() {
    const sideInput = document.getElementById("pentagon-side");
    const side = parseFloat(sideInput.value);
  
    const area = (5 * side * side) / (4 * Math.tan(Math.PI / 5));
    const result = document.getElementById("pentagon-result");
    result.innerText = area.toFixed(2);
  }
  