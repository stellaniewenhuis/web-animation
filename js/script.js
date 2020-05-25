/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/


//standaard achtergrondkleur instelling
document.body.style.backgroundColor = "white";

//variabelen
var base = document.getElementById("art");
var points = document.getElementsByClassName('st2');

//for loop : voegt event listener toe aan alle bolletjes
for (var i = 0; i < points.length; i++) {
    points[i].addEventListener('click', clickEvent);
}

//toggle functie
function clickEvent() {
    if (this.classList.contains("clicked")) {
        this.classList.remove("clicked");
    }
    else {
        this.classList.add("clicked")
    }
}

//Event listeners op de cijfers in het kunstwerk met daarachter de functie die uitgevoerd wordt als er geklikt wordt
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

//Event listeners op de buttons onder het kunstwerk met daarachter de functie die uitgevoerd wordt als er geklikt wordt
document.getElementById("rotate_button").addEventListener('click', rotate);
document.getElementById("float_button").addEventListener('click', float);
document.getElementById("shake_button").addEventListener('click', shake);
document.getElementById("flip_button").addEventListener('click', flip);
document.getElementById("background_button").addEventListener('click', background_change);

document.getElementById("een_button").addEventListener('click', highlight_1);
document.getElementById("twee_button").addEventListener('click', highlight_2);
document.getElementById("drie_button").addEventListener('click', highlight_3);
document.getElementById("vier_button").addEventListener('click', highlight_4);

//zorgt dat dingen gebeuren wanneer een toets wordt ingedrukt
document.addEventListener('keypress', function(e) {
    switch (e.keyCode) {
        case 53: random_dots(1); break;
        case 54: random_dots(2); break;
        case 55: random_dots(3); break;
        case 56: random_dots(4); break;
        case 49: highlight_1(); break;
        case 50: highlight_2(); break;
        case 51: highlight_3(); break;
        case 52: highlight_4(); break;
    }
});

//de class clicked weghalen van alle bolletjes
function clear_dots() {
    var clicked = document.getElementsByClassName("clicked");
    while(clicked.length > 0) {
        clicked[0].classList.remove("clicked");
    }
}

//functie achtergrond veranderen
function background_change() {
    if (document.body.style.backgroundColor == "white") {
        document.body.style.backgroundColor = "black";
    }
    else {
        document.body.style.backgroundColor = "white";
    }
}

//random bolletjes pakken uit het totaal aantal bolletjes
function getRandomInt() {
  var min = 0;
  var max = points.length;
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


function random_dots(num) {
    // alle bolletjes unclicked maken
    clear_dots();

    // een lege lijst van num maken
    var idx = new Array(num);

    // de lijst vullen met random integers
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


//toggle functie
function flip () {
    if (base.classList.contains("flip")) {
        base.classList.remove("flip");
    }
    else {
        base.classList.remove("float");
        base.classList.add("flip");
    }
}

//toggle functie
function shake () {
    if (base.classList.contains("shake")) {
        base.classList.remove("shake");
    }
    else {
        base.classList.remove("float");
        base.classList.add("shake");
    }
}

//toggle functie
function rotate() {
    if (base.classList.contains("rotate")) {
        base.classList.remove("rotate");
    }
    else {
        base.classList.remove("float");
        base.classList.add("rotate");
    }
}

//toggle functie
function float() {
    if (base.classList.contains("float")) {
        base.classList.remove("float");
    }
    else {
        base.classList.remove("rotate");
        base.classList.add("float");
    }
}

//functie van het highlighten van de bolletjes en streepjes en kromme streepjes
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

    // highlight bolletjes
    highlight("bolletje_26_1_", "st2");
    highlight("bolletje_25_1_", "st2");
    highlight("bolletje_24_1_", "st2");
    highlight("bolletje_23", "st2");
    highlight("bolletje_26", "st2");

    // highlight streepjes
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

    // highlight bolletjes
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

    // highligh kromme streepjes
    highlight("streepje_1_", "st0");
    highlight("streepje_17_1_", "st0");
}

function highlight_3() {
    var object = document.getElementById("bolletje_15")
    if (object.getElementsByClassName("st2")[0].classList.contains("st2-highlight")) {
        clear_highlights();
        return
    }

    clear_highlights();
    clear_dots();

    // highlight bolletjes
    highlight("bolletje_15", "st2");
    highlight("bolletje_14", "st2");
    highlight("bolletje_13", "st2");
    highlight("bolletje_12", "st2");
    highlight("bolletje_11", "st2");
    highlight("bolletje_10", "st2");
    highlight("bolletje_9", "st2");
    highlight("bolletje_8", "st2");

    // highlight streepjes
    highlight("streepje_15", "st1");
    highlight("streepje_14", "st1");
    highlight("streepje_13", "st1");
    highlight("streepje_12", "st1");
    highlight("streepje_11", "st1");
    highlight("streepje_8",  "st1");

    // highligh kromme streepjes
    highlight("streepje_10", "st0");
    highlight("streepje_9", "st0");

}

function highlight_4() {
    var object = document.getElementById("bolletje_1")
    if (object.getElementsByClassName("st2")[0].classList.contains("st2-highlight")) {
        clear_highlights();
        return
    }

    clear_highlights();
    clear_dots();

    // highlight bolletjes
    highlight("bolletje_1", "st2");
    highlight("bolletje_2", "st2");
    highlight("bolletje_3", "st2");
    highlight("bolletje_4", "st2");
    highlight("bolletje_5", "st2");
    highlight("bolletje_6", "st2");
    highlight("bolletje_7", "st2");

    // highlight streepjes
    highlight("streepje_1", "st1");
    highlight("streepje_2", "st1");
    highlight("streepje_3", "st1");
    highlight("streepje_4", "st1");
    highlight("streepje_5", "st1");
    highlight("streepje_6", "st1");
    highlight("streepje_7", "st1");
}



//https://stackoverflow.com/questions/256754/how-to-pass-arguments-to-addeventlistener-listener-function
//https://stackoverflow.com/questions/4825295/javascript-onclick-to-get-the-id-of-the-clicked-button
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//https://stackoverflow.com/questions/10139588/check-for-false
//https://stackoverflow.com/questions/3390396/how-to-check-for-undefined-in-javascript
//shttps://www.w3schools.com/js/js_switch.asp
//https://stackoverflow.com/questions/17015019/keylistener-in-javascript
//http://gcctech.org/csc/javascript/javascript_keycodes.htm
//https://www.w3schools.com/jsref/event_onclick.asp
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onclick_addeventlistener
//https://stackoverflow.com/questions/9882284/looping-through-array-and-removing-items-without-breaking-for-loop
//https://stackoverflow.com/questions/5597060/detecting-arrow-key-presses-in-javascript
//https://stackoverflow.com/questions/197748/how-do-i-change-the-background-color-with-javascript






