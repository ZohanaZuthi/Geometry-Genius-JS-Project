function triangle_calc()
{
    const tri_base=document.getElementById("triangle-base");
    const base=parseFloat(tri_base.value);
    const tri_height=document.getElementById("triangle-height");
    const height=parseFloat(tri_height.value );

    const area=0.5*base*height;
    const triangle=document.getElementById('triangle_result')
    triangle.innerText=area;
}