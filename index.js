function myFunction() {
    var dots = document.getElementByid("dots");
    var moreText = document.getElementByid("more");
    var btnText = document.getElementByid("myBtn");
  
    if (dots.style.display == "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
  