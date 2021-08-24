document.querySelector(".hamberger").addEventListener('click', (e) => {
    document.querySelector(".hamberger__item1").classList.toggle("open");
    document.querySelector(".hamberger__item2").classList.toggle("open");
    document.querySelector(".hamberger__item3").classList.toggle("open");
    document.querySelector(".hamberger__page").classList.toggle("open");
    setTimeout(()=>{
        document.querySelector(".hamberger__page").classList.toggle("opacity");
    }, 100)
})


document.querySelectorAll(".hamberger__page_content > li").forEach((item) => {
    item.addEventListener("click", (e) => {
            document
              .querySelector(".hamberger__item1")
              .classList.toggle("open");
            document
              .querySelector(".hamberger__item2")
              .classList.toggle("open");
            document
              .querySelector(".hamberger__item3")
              .classList.toggle("open");
            document.querySelector(".hamberger__page").classList.toggle("open");
            setTimeout(() => {
              document
                .querySelector(".hamberger__page")
                .classList.toggle("opacity");
            }, 100);
    })
})


function load()  {
document.querySelector(".loader").style.display = "none";

}


window.onload = load;