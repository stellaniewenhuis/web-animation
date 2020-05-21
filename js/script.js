console.log("load javascript");
document.body.style.backgroundColor = "white";
var base = document.getElementById("art");

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

document.getElementById("c1").addEventListener('click', function() {
    random_dots(1);
});
document.getElementById("c2").addEventListener('click', function() {
    random_dots(2);
});
document.getElementById("c3").addEventListener('click', function() {
    random_dots(3);
});
document.getElementById("c4").addEventListener('click', function() {
    random_dots(4);
});
document.getElementById("rotate_button").addEventListener('click', rotate);
document.getElementById("float_button").addEventListener('click', float);
document.getElementById("shake_button").addEventListener('click', shake);
document.getElementById("flip_button").addEventListener('click', flip);

document.getElementById("1_button").addEventListener('click', highlight_1);
document.getElementById("2_button").addEventListener('click', highlight_2);


document.addEventListener('keypress', function(e) {
    console.log("key clicked: " + e.keyCode)
    switch (e.keyCode) {
        case 49: random_dots(1); break;
        case 50: random_dots(2); break;
        case 51: random_dots(3); break;
        case 52: random_dots(4); break;
        case 53: clear_dots(); break;
        case 54: background_change(); break;
        case 55: highlight_1(); break;
        case 56: highlight_2(); break;
    }
});

function clear_dots() {
    var clicked = document.getElementsByClassName("clicked");
    while(clicked.length > 0) {
        clicked[0].classList.remove("clicked");
    }
}

function background_change() {
    if (document.body.style.backgroundColor == "white") {
        document.body.style.backgroundColor = "red";
    }
    else {
        document.body.style.backgroundColor = "white";
    }
}

function getRandomInt() {
  var min = 0;
  var max = points.length;
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function random_dots(num) {
    // set all points to unclicked
    clear_dots();

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

    for (i = 0; i < num; i++) {
        points[idx[i]].classList.add("clicked");
    }
}


function flip () {
    if (base.classList.contains("flip")) {
        base.classList.remove("flip");
    }
    else {
        base.classList.remove("float");
        base.classList.add("flip");
    }
}

function shake () {
    if (base.classList.contains("shake")) {
        base.classList.remove("shake");
    }
    else {
        base.classList.remove("float");
        base.classList.add("shake");
    }
}

function rotate() {
    if (base.classList.contains("rotate")) {
        base.classList.remove("rotate");
    }
    else {
        base.classList.remove("float");
        base.classList.add("rotate");
    }
}

function float() {
    if (base.classList.contains("float")) {
        base.classList.remove("float");
    }
    else {
        base.classList.remove("rotate");
        base.classList.add("float");
    }
}


function highlight(id, type) {

    var object = document.getElementById(id);
    object.getElementsByClassName(type)[0].classList.add(type+"-highlight");
}

function clear_highlights() {
    var highlights = document.getElementsByClassName("st1-highlight");
    while (highlights.length > 0) {
        highlights[0].classList.remove("st1-highlight");
    }

    highlights = document.getElementsByClassName("st2-highlight");
    while (highlights.length > 0) {
        highlights[0].classList.remove("st2-highlight");
    }

    highlights = document.getElementsByClassName("st0-highlight");
    while (highlights.length > 0) {
        highlights[0].classList.remove("st0-highlight");
    }
}

function highlight_1() {
    var object = document.getElementById("bolletje_26_1_")
    if (object.getElementsByClassName("st2")[0].classList.contains("st2-highlight")) {
        clear_highlights();
        return
    }


    clear_highlights();
    clear_dots();

    highlight("bolletje_26_1_", "st2");
    highlight("bolletje_25_1_", "st2");
    highlight("bolletje_24_1_", "st2");
    highlight("bolletje_23", "st2");
    highlight("bolletje_26", "st2");

    highlight("streepje_21", "st1");
    highlight("streepje_22", "st1");
    highlight("streepje_23", "st1");
    highlight("streepje_23_1_", "st1");
    highlight("streepje_25", "st1");
}

function highlight_2() {
    var object = document.getElementById("bolletje_16")
    if (object.getElementsByClassName("st2")[0].classList.contains("st2-highlight")) {
        clear_highlights();
        return
    }

    clear_highlights();
    clear_dots();

    // highlight dots
    highlight("bolletje_16", "st2");
    highlight("bolletje_17", "st2");
    highlight("bolletje_18", "st2");
    highlight("bolletje_19", "st2");
    highlight("bolletje_20", "st2");
    highlight("bolletje_21", "st2");

    // highlight streepjes
    highlight("streepje_16", "st1");
    highlight("streepje_18", "st1");
    highlight("streepje_20", "st1");

    // highligh kromme
    highlight("streepje_1_", "st0");
    highlight("streepje_17_1_", "st0");
}

function highlight_3() {
    var object = document.getElementById("bolletje_26_1_")
    if (object.getElementsByClassName("st2")[0].classList.contains("st2-highlight")) {
        clear_highlights();
        return
    }

    clear_highlights();
    clear_dots();

    highlight("bolletje_26_1_", "st2");
    highlight("bolletje_25_1_", "st2");
    highlight("bolletje_24_1_", "st2");
    highlight("bolletje_23", "st2");
    highlight("bolletje_26", "st2");

    highlight("streepje_21", "st1");
    highlight("streepje_22", "st1");
    highlight("streepje_23", "st1");
    highlight("streepje_23_1_", "st1");
    highlight("streepje_25", "st1");
}

function highlight_4() {
    var object = document.getElementById("bolletje_26_1_")
    if (object.getElementsByClassName("st2")[0].classList.contains("st2-highlight")) {
        clear_highlights();
        return
    }

    clear_highlights();
    clear_dots();

    highlight("bolletje_26_1_", "st2");
    highlight("bolletje_25_1_", "st2");
    highlight("bolletje_24_1_", "st2");
    highlight("bolletje_23", "st2");
    highlight("bolletje_26", "st2");

    highlight("streepje_21", "st1");
    highlight("streepje_22", "st1");
    highlight("streepje_23", "st1");
    highlight("streepje_23_1_", "st1");
    highlight("streepje_25", "st1");
}

















