let adj = ["Stupid", "Fat", "Ugly", "Disgusting", "Horrendous"];
let anim = ["Apin", "Billy", "Juno", "Onel", "Sentod"];
let radj = Math.floor(Math.random() * adj.length);
let ranim = Math.floor(Math.random() * anim.length);
let pack = adj[radj] + "-" + anim[ranim];
console.log(pack);
document.querySelector("h2").innerHTML = pack;