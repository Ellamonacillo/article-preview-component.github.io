const share = document.getElementById('share')
const normal = share.querySelector('#normal')
const active = share.querySelector('#active')
const shareButton = share.querySelector('#shareButton')
const svg = shareButton.querySelector('#svg')
const tooltip = share.querySelector('#tooltip')

function shareFunction() {

    const screenWidth = window.innerWidth

    if (screenWidth >= 768) {
        tooltip.classList.toggle('hidden')
    }
    else {
        share.classList.toggle('bg-DarkGrayishBlue')

        normal.classList.toggle('hidden')
        active.classList.toggle('hidden')
    }

    shareButton.classList.toggle('bg-LightGrayishBlue')
    shareButton.classList.toggle('bg-GrayishBlue')

    svg.classList.toggle('fill-share')
    svg.classList.toggle('fill-white')
}
shareButton.addEventListener("click", shareFunction)


