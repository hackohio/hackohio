
var accordion = document.getElementsByClassName("faq-accordion");
var i;

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var question = this.nextElementSibling;
    if (question.style.maxHeight) {
        question.style.maxHeight = null;
    } else {
        question.style.maxHeight = question.scrollHeight + "px";
    }
  });
}
