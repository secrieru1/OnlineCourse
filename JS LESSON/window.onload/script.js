/* window.addEventListener('load', function () {
    let div = document.querySelector('.some');

    div.addEventListener('click', function () {
        div.innerHTML += " push"
    });

    div.addEventListener('click', function () {
        div.innerHTML += ' 2'
    });
}); */

window.addEventListener('load', function() {
    let some = document.querySelector('.some')
    let greenButton = document.querySelector('.button')
    let colors = ["green","red", "yellow"]

some.addEventListener('click', function(){
    let num = Math.floor(Math.random() * colors.length);

    some.style.color = colors[num]
});
greenButton.addEventListener('click', function(){
    colors.push('blue');
});

});