<template>
  <div></div>
</template>

<script>
export function reveal() {
  var revealsImage = document.querySelectorAll(".image-scroll-ani");
  for (var i = 0; i < revealsImage.length; i++) {
    var windowHeight = window.innerHeight;
    var imageTop = revealsImage[i].getBoundingClientRect().top;
    var elementVisible = 50;
    if (imageTop < windowHeight - elementVisible) {
      revealsImage[i].classList.add("slideInImage");
      revealsImage[i].classList.remove("hide");
    } else {
      revealsImage[i].classList.remove("slideInImage");
      revealsImage[i].classList.remove("hide");
    }
  }
  var revealsText = document.querySelectorAll(".text-scroll-ani");
  for (var i = 0; i < revealsText.length; i++) {
    var windowHeight = window.innerHeight;
    var textTop = revealsText[i].getBoundingClientRect().top;
    var elementVisible = 50;
    if (textTop < windowHeight - elementVisible) {
      revealsText[i].classList.add("slideInText");
      revealsText[i].classList.remove("hide");
    } else {
      revealsText[i].classList.remove("slideInText");
      revealsText[i].classList.add("hide");
    }
  }
}
</script>

<style lang="scss" scoped></style>
