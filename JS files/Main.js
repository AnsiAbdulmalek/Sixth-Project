//1 stopping the sounds
// document.addEventListener('DOMContentLoaded',function(){
//   var audio =
//   document.getElementById('background-audio');

//   function stopAudio(){
//     audio.onpause();
//   }

//   var links = document.querySelectorAll('a');
//   links.forEach(function(link) {
//     links.addEventListener('click',stopAudio);
//   });
// });


//2 the mouse crusor
// the crusor
    // const crusor = document.querySelector(".crusor");
    // var timeout;

    // // follow
    // document.addEventListener("mousemove", (e) => {
    //   let x = e.pageX;
    //   let y = e.pageY;

    //   crusor.style.top = y + "px";
    //   crusor.style.left = x + "px";
    //   crusor.style.display = "block";

    //   // mousestop
    //   function mousestop() {
    //     crusor.style.display = "none";
    //   }
    //   clearTimeout(timeout);
    //   timeout = setTimeout(mousestop, 1000);
    // });

    // mousout
    // document.addEventListener("mouseout", () => {
    //   crusor.style.display = "none";
    // });
  

    //3 the messages beginning
    var name = prompt("What's your name");
    if (name !== null && name !== "") {
      alert("Welcome, Mr." + name + "!");
    }
    else {
      window.stop();
    }

    // lasting
    // window.addEventListener("beforeunload", function (event) {
    //   var confirm = "Are youi sure you want to leave this page?";
    //   (event || window.event).returnValue = confirm;
    //   return confirm;
    // });