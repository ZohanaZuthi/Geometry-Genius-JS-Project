function parallelogram_calc() {
    const baseInput = document.getElementById("parallelogram-base");
    const base = parseFloat(baseInput.value);
  
    const heightInput = document.getElementById("parallelogram-height");
    const height = parseFloat(heightInput.value);
  
    const area = base * height;
    const result = document.getElementById("parallelogram-result");
    result.innerText = area;
  }
  