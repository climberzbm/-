const body = document.getElementsByTagName('body')[0]
const head = document.getElementsByTagName('head')[0]
const link = document.createElement('link')
link.type = 'text/css'

link.rel = 'stylesheet'
link.href = './click-show-love.css'
head.appendChild(link)

function init() {
  document.addEventListener('click', function (event) {
    createLoveElement(event.x, event.y)
  })
}

function createLoveNode(x, y, color) {
  let loveNode = document.createElement('div')
  loveNode.classList.add('love')
  let circle1 = document.createElement('div')
  let circle2 = document.createElement('div')
  let loveNodeStyle = {
    position: 'fixed',
    top: y + 'px',
    left: x + 'px',
    width: '10px',
    height: '10px',
    transform: 'rotate(-45deg)',
    backgroundColor: color
  }

  let circle1Style = {
    position: 'absolute',
    top: '-6px',
    width: '10px',
    height: '10px',
    backgroundColor: color,
    borderRadius: '50%'
  }
  let circle2Style = {
    position: 'absolute',
    left: '6px',
    width: '10px',
    height: '10px',
    backgroundColor: color,
    borderRadius: '50%'
  }

  // 把样式合并到节点
  Object.assign(loveNode.style, loveNodeStyle)
  Object.assign(circle1.style, circle1Style)
  Object.assign(circle2.style, circle2Style)

  // 把两个圆形节点添加进去
  loveNode.appendChild(circle1)
  loveNode.appendChild(circle2)
  return loveNode
}

function createLoveElement(x, y) {
  const color = getRandomColor()
  const loveNode = createLoveNode(x, y, color)
  body.appendChild(loveNode)
  setTimeout(() => {
    body.removeChild(loveNode)
  }, 1500)
}

function getRandomColor() {
  let r = Math.floor(Math.random() * 256)
  let g = Math.floor(Math.random() * 256)
  let b = Math.floor(Math.random() * 256)

  return '#' + r.toString(16) + g.toString(16) + b.toString(16)
}

init()
