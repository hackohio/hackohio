
var announcements = document.getElementsByClassName("announcement-expand");
var i;

var minimizedHeight = "3em";

for (i = 0; i < announcements.length; i++) {
    announcements[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.previousElementSibling;
    if (content.style.maxHeight == "" || content.style.maxHeight == minimizedHeight) {
        content.style.maxHeight = "unset";
        content.style.setProperty('--announcement-fade', "transparent");
        this.innerHTML = "Show less";
    } else {
        content.style.maxHeight = "";
        content.style.setProperty('--announcement-fade', "linear-gradient(transparent, #1d1d1d)");
        this.innerHTML = "Read more...";
    }
  });
}
