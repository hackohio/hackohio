var URLlist = [
"hack.osu.edu/hack/x",
"hack.osu.edu/hack/2022"
];
var reDelay = 0000; // <-- time in seconds. 0000 = immediate redirect (0 seconds), 1000 = 1 sec delay, 2000 = 2 sec delay, etc
setTimeout(function(){window.location = URLlist[Math.floor(Math.random() * URLlist.length)];}, reDelay);
