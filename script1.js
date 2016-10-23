
var a;
a=0;

function check() {

    q1elem = document.getElementById('r12');
    if (q1elem.checked) {
        a=a+1
		alert('Вы верно ответили на первый вопрос')
    } else {
        alert('Вы верно не ответили на первый вопрос') 
        }
		q2elem = document.getElementById('r21');
    if (q2elem.checked) {
        a=a+1
		alert('Вы верно ответили на второй вопрос')
    } else {
        alert('Вы не верно ответили на второй вопрос') 
        }
		q3elem = document.getElementById('r33');
    if (q3elem.checked) {
        a=a+1
		alert('Вы верно ответили на третий вопрос')
    } else {
        alert('Вы не верно ответили на третий вопрос') 
        }
		q4elem = document.getElementById('r41');
    if (q4elem.checked) {
        a=a+1
		alert('Вы верно ответили на четвертый вопрос')
    } else {
        alert('Вы не верно ответили на четвертый вопрос') 
        }
		q5elem = document.getElementById('r54');
    if (q5elem.checked) {
        a=a+1
		alert('Вы верно ответили на пятый вопрос')
    } else {
        alert('Вы не верно ответили на пятый вопрос') 
        }
		
		alert('Конечный результат '+a+' из 5');
		a=0;

}


function checkk() {
    //alert('hi');
    var c1_elem = document.getElementById("c1");
    var c2_elem = document.getElementById("c2");
    var c3_elem = document.getElementById("c3");
    var c4_elem = document.getElementById("c4");
    c1_elem.style.display = 'none';
    c2_elem.style.display = 'none';
    c3_elem.style.display = 'none';
    c4_elem.style.display = 'block';

}

function show_pic() {
    //alert('hi');
    var c1_elem = document.getElementById("c1");
    var c2_elem = document.getElementById("c2");
    var c3_elem = document.getElementById("c3");
    var c4_elem = document.getElementById("c4");
    c1_elem.style.display = 'none';
    c2_elem.style.display = 'block';
    c3_elem.style.display = 'none';
    c4_elem.style.display = 'none';
}
function show_text() {
    var c1_elem = document.getElementById("c1");
    var c2_elem = document.getElementById("c2");
    var c3_elem = document.getElementById("c3");
    var c4_elem = document.getElementById("c4");
    c1_elem.style.display = 'block';
    c2_elem.style.display = 'none';
    c3_elem.style.display = 'none';
    c4_elem.style.display = 'none';
}
function show_pic1() {
    //alert('hi');
    var c1_elem = document.getElementById("c1");
    var c2_elem = document.getElementById("c2");
    var c3_elem = document.getElementById("c3");
    var c4_elem = document.getElementById("c4");
    c1_elem.style.display = 'none';
    c2_elem.style.display = 'none';
    c3_elem.style.display = 'block';
    c4_elem.style.display = 'none';
}
var map = new ymaps.Map("�2", {
    center: [55.76, 37.64],
    zoom: 7
});