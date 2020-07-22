//ad ogni click parte una
// richiesta AJAX che prende un
// numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro
// del quadrato



function addEventClickSquare() {

    var target = $('td');
    target.click(ajaxCall);
}


function ajaxCall() {

    var target = $(this);
    target.html('');

    $.ajax({

        url: 'https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=9&items=1',
        method: 'GET',
        success: function (data, state) {

            var success = data['success'];
            var value = data['response'];



                if (value <= 5) {
                    target.addClass('yellow').removeClass('green');
                    target.append(value);
                } else {
                    target.removeClass('yellow').addClass('green').removeClass('yellow');
                    target.append(value);
                }
        },

        error: function (error) {
            console.log ("Ops c'è un problema")
          }
    });
}


function init() {

    addEventClickSquare();
}

$(document).ready(init);
