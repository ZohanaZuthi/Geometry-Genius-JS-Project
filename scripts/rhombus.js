function rhombus_calc() {
    const d1Input = document.getElementById("rhombus-d1");
    const d1 = parseFloat(d1Input.value);
  
    const d2Input = document.getElementById("rhombus-d2");
    const d2 = parseFloat(d2Input.value);
  
    const area = 0.5 * d1 * d2;
    const result = document.getElementById("rhombus-result");
    result.innerText = area;
  }
  