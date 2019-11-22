// target button & add event listener to it
var trackBtn = document.querySelector(".search-btn-auspost");

// add eventlistener to the track package btn
trackBtn.addEventListener("click", () => {
  // get tracking number the user entered
  var trackNum = document.querySelector(".aus-post-tracking-number").value;
  // condition to check & alert if no tracking is entered
  if (trackNum === "") {
    alert("Please Enter a tracking number first");
  } else {
    window.open(
      `https://auspost.com.au/mypost/track/#/details/${trackNum}`,
      "_blank"
    );
  }
});
