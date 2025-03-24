let trilho = document.getElementById('trilho')
let body = document.querySelector('body')
let targetTitle = document.getElementById('targetTitle')

trilho.addEventListener('click', () => {
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
    targetTitle.classList.toggle('targetTitle')
})