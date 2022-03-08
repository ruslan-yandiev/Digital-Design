const content = document.querySelector('.content');
const tableOfContentes = document.querySelector('.table-of-contentes');
const headings = Array.from(content.children).filter((el) => el.tagName === 'H1' || el.tagName === 'H2');
const ul = document.createElement('ul');

headings.forEach((el, index) => {
    const li = document.createElement('li');
    const a = document.createElement('a');

    a.innerText = `${el.innerText}`;
    a.href= `#${el.id}`;
    
    li.appendChild(a);
    ul.appendChild(li);
});

tableOfContentes.appendChild(ul);