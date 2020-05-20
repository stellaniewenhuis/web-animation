console.log("load javascript");
var points = document.getElementsByClassName('st2');
console.log("found points:" + points.length);

for (var i = 0; i < points.length; i++) {
    points[i].addEventListener('click', clickEvent);
}

function clickEvent() {
    if (this.classList.contains("clicked")) {
        this.classList.remove("clicked");
    }
    else {
        this.classList.add("clicked")
    }

}

document.getElementById("c1").addEventListener('click', numEvent);
document.getElementById("c2").addEventListener('click', numEvent);
document.getElementById("c3").addEventListener('click', numEvent);
document.getElementById("c4").addEventListener('click', numEvent);

function getRandomInt() {
  min = 0;
  max = points.length;
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function numEvent() {
    // set all points to unclicked
    for (i = 0; i < points.length; i++) {
        points[i].classList.remove("clicked");
    }

    // choose number of points based on id
    var num = 0;
    switch(this.id) {
        case "c1": num = 1; break;
        case "c2": num = 2; break;
        case "c3": num = 3; break;
        case "c4": num = 4; break;
    }

    // make empty list of length num
    var idx = new Array(num);

    // fill list with random indices
    for (i = 0; i < num; i++) {
        while (true) {
            var new_num = getRandomInt();
            if (!idx.includes(new_num)) {
                idx[i] = new_num;
                break;
            }
        }
    }

    console.log("final points: " + idx);

    for (i = 0; i < num; i++) {
        points[idx[i]].classList.add("clicked");
    }
}
