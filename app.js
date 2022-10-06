const btn = document.getElementById("btn");
const password = document.getElementById("pass");
let elemWidth = btn.offsetTop;
let eleTop = elemWidth;

password.addEventListener("keyup", () => {
  const passwordValue = document.getElementById("pass").value;
  if (passwordValue.length < 8) {
    password.style.outline = "2px solid red";
    btn.style.backgroundColor = "red";
    btn.classList.add("trans");
  } else {
    btn.style.backgroundColor = "rgba(0, 0, 255, 0.714)";
    btn.classList.remove("trans");
    password.style.outline = "none";
    btn.style.position = "absolute";
    btn.style.bottom = "-50px";
    btn.style.left = "0px";
  }

  btn.addEventListener("mouseover", () => {
    const passwordValue = document.getElementById("pass").value;
    if (passwordValue.length < 8) {
      btn.style.position = "absolute";
      btn.style.bottom = "-50px";
      console.log("width", elemWidth);
      console.log("Top", eleTop);
      if (elemWidth == eleTop) {
        btn.style.right = "0px";
        elemWidth = elemWidth + parseInt("38px");
        btn.style.removeProperty("left");
      } else {
        btn.style.left = "0px";
        elemWidth = elemWidth - parseInt("38px");
      }
    }
  });
});

btn.addEventListener("click",()=>{
  swal({
    title: "Good job!",
    text: "Account Created!",
    icon: "success",
    button: "Ok!",
  });
})
