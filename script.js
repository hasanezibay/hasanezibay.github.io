const year=document.getElementById("year"); if(year) year.textContent=new Date().getFullYear();
const menu=document.querySelector(".menu-btn"), nav=document.querySelector(".nav");
if(menu) menu.addEventListener("click",()=>nav.classList.toggle("open"));
const current=location.pathname.split("/").pop()||"index.html";
document.querySelectorAll(".nav a").forEach(a=>{if(a.getAttribute("href")===current)a.classList.add("active")});
