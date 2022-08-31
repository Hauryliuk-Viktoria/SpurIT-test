

const anim = document
  .querySelector(".collapsible__content")
  .animate(
    
    [{transform: 'scale(0)'},
    {transform: 'scale(1)'}],
    { duration: 500, easing: "linear"}
  );


anim.pause();
document.querySelector(".collapsible__action--visible").style.display = 'none';


document.querySelector("button").addEventListener("click", () => {
//   console.log("button clicked");
//   console.log("actual state is --{}", anim.playState);
  if (anim.playState === "paused") {
    document.querySelector(".collapsible__content").style.visibility = 'visible';
    anim.play();
    document.querySelector(".collapsible__action--visible").style.display = 'block';
    document.querySelector(".collapsible__action--hidden").style.display = 'none';

//     console.log("1state after lgic is --> {}", anim.playState);
//     anim.playState="running";
//     console.log("1state after lgic is --> {}", anim.playState);
  } else {
    document.querySelector(".collapsible__action--hidden").style.display = 'block';
    document.querySelector(".collapsible__action--visible").style.display = 'none';

    document.querySelector(".collapsible__content").style.visibility = 'hidden';
//     console.log("2state after lgic is --> {}", anim.playState);
    anim.pause();
//     console.log("3state after lgic is --> {}", anim.playState);
  }
});

// console.log("4state after lgic is --> {}", anim.playState);

