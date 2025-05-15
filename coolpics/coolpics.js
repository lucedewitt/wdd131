const button = document.querySelector('button');
const menu = document.querySelector('nav');
button.addEventListener('click', openMenu);
function openMenu() {
    menu.classList.toggle('hide');
};

function handleResize() {
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }
}
handleResize();
window.addEventListener("resize", handleResize);

const gallery = document.querySelector('.gallery');
const modal = document.createElement('dialog');
const smallimg = document.querySelector('img');

function createModal(e) {
    modal.innerHTML = '<img class="modalimg"><button class = "close-viewer">X</button>';
    document.body.appendChild(modal);

    function srcandalt() {
        const modalimg = document.querySelector('.modalimg');
        const imgsrc = e.target.getAttribute('src');
        let imgname = imgsrc.split('-')[0];
        let newsrc = imgname + '-full.jpeg';
        modalimg.setAttribute("src", newsrc);
        modalimg.setAttribute("alt", "large-img");
    }
    srcandalt()
    
    const closeButton = document.querySelector('.close-viewer');
    modal.showModal();
    closeButton.addEventListener('click', () => {
        modal.close();
    })
};

gallery.addEventListener('click', createModal);

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
})