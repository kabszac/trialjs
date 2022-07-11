let container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
content.style.color = 'blue'
content.style.fontSize = '32'

const p = document.createElement('p')
p.style.color = 'red'
p.textContent = 'Hey I’m red'

const content2 = document.createElement('div')
content2.style.backgroundColor = 'pink'
content2.style.borderColor = 'black'

const title = document.createElement('h1')
title.textContent = 'I’m in a div'
content2.appendChild(title);
const p2 = document.createElement('p')
p2.textContent = 'ME TOO!'
content2.appendChild(p2);


container.appendChild(p)
container.appendChild(content);
container.appendChild(content2);


// events

const btns = document.querySelectorAll('#btn')

function alertFunction() {
    alert("YAY! YOU DID IT!");
  }

btns.forEach(btn =>{
    btn.addEventListener('click', function(e){
        console.log(e)
    })
})