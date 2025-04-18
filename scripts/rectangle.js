function rectangle_calc()
{
    const rec_base=document.getElementById("rectangle-width");
    const base=parseFloat(rec_base.value);
    const rec_height=document.getElementById("rectangle-height");
    const height=parseFloat(rec_height.value );

    const area=base*height;
    const rectangle=document.getElementById('rectangle-result')
    rectangle.innerText=area;
}