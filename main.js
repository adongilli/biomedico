const menuBtn = document.getElementById('menuBtn')
const drawer = document.getElementById('drawer')

function setMenu(open){
	drawer.classList.toggle('open', open)
}

menuBtn.addEventListener('click', () => {
	setMenu(!drawer.classList.contains('open'))
});