const vibes = [
  "...and you are great!",
  "...and you are awesome",
  "...and Have a wonderful day",
  "... And you ve got this!",
  "...And so is this puppy",
];

var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];


const vibeNode = document.querySelector(".vibe");
vibeNode.append(vibe);

// 81e38d93cb6e49e1b3f6f555f81ba154
