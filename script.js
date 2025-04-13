"use strict";

window.onload = initBannerLink;
var heroIndex = 0;
var heroURL = new Array(
    "dc.com/characters/batman",
    "dc.com/characters/superman",
    "dc.com/characters/wonder-woman",
    "dc.com/characters/the-flash",
    "dc.com/characters/green-lantern",
    "dc.com/characters/supergirl"
);
var heroImages = new Array(
    "images/superhero1.png",
    "images/superhero2.png",
    "images/superhero3.png",
    "images/superhero4.png",
    "images/superhero5.png",
    "images/superhero6.png"
);

function initBannerLink() {
    if (document.getElementById("heroBanner").parentNode.tagName == "A") {
        document.getElementById("heroBanner").parentNode.onclick = newLocation;
    }
    rotate();
}
function newLocation() {
    document.location.href = "http://www." + adURL[theAd];
    return false;
}

function rotate() {
    heroIndex++;
    if (heroIndex == heroImages.length) {
        heroIndex = 0;
    }
    document.getElementById("heroBanner").src = heroImages[heroIndex];
    setTimeout(rotate, 2 * 1000);
}
