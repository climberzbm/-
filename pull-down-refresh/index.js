const refreshContainer = document.getElementById('refresh_container')
const refreshText = document.getElementById('refresh_text')
let startPos = 0
let transitionHeight = 0

refreshContainer.addEventListener(
  'touchstart',
  (e) => {
    startPos = e.touches[0].pageY
    refreshContainer.style.position = 'relative'
    refreshContainer.style.transition = 'transform 0s'
  },
  false
)

refreshContainer.addEventListener('touchmove', (e) => {
  transitionHeight = e.touches[0].pageY - startPos

  if (transitionHeight > 0 && transitionHeight < 80) {
    refreshText.innerText = '下拉刷新'
    refreshContainer.style.transform = 'translateY(' + transitionHeight + 'px)'
  }

  if (transitionHeight > 70) {
    refreshText.innerText = '释放更新'
  }
})

refreshContainer.addEventListener('touchend', (e) => {
  refreshContainer.style.transition = 'transform 0.5s ease 1s'
  refreshContainer.style.transform = 'translateY(0px)'
  refreshText.innerText = '更新中...'
  setTimeout(() => {
    refreshText.innerText = ''
  }, 1000)
})
