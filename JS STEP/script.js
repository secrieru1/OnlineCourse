// document.getElementbyId()

const elem = document.getElementById('list');

console.log(elem);

// 1. accesarea proprietatilor
console.log(elem.id);

// 2. afisarea claselor
console.log(elem.className);

// 3. schimbarea stilurilor
/* elem.style.background='silver';
elem.style.color='white'; */

// 4. schimbarea continutului 
elem.textContent 
elem.innerText
elem.innerHTML

// 5. document.querySelector()
console.log(document.querySelector('#list'))

