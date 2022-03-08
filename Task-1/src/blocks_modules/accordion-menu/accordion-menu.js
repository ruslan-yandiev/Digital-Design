let noTarget, noTarget2;
let dropdownlink = document.querySelectorAll('.dropdownlink');

dropdownlink.forEach((elem) => {
    elem.addEventListener('click', (event) => {
        let arrow = event.target.previousSibling;
        let submenuItems = event.target.nextSibling;

        if (noTarget) {
            if (noTarget === arrow) {
                arrow.classList.toggle('_reverse_arrow');
                submenuItems.classList.toggle('visibility');
            } else {
                if (noTarget.classList.contains('_reverse_arrow')) {
                    noTarget.classList.toggle('_reverse_arrow');
                    noTarget2.classList.toggle('visibility');
                }
                arrow.classList.toggle('_reverse_arrow');
                submenuItems.classList.toggle('visibility');
            }
        } else {
            arrow.classList.toggle('_reverse_arrow');
            submenuItems.classList.toggle('visibility');
        }

        noTarget = arrow;
        noTarget2 = submenuItems;
    });
});
