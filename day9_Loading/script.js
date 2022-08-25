const loading = document.querySelector('.loading-text')
const background = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 100)

function blurring() {
  load += 1

  if (load == 100) {
    clearInterval(int)
  }

  loading.innerText = `${load}%`

  loading.style.opacity = scale(load, 0, 100, 10, 0)

  background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
