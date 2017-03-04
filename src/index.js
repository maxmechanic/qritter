const QRCode = require('qrcode')
const QRCodeDraw = new QRCode.QRCodeDraw()

function qriticalHit() {
  const tweetTextEls = Array.from(document.querySelectorAll('.js-tweet-text-container'))

  tweetTextEls.forEach(el => {
    const text = el.innerText
    const inputCanvas = document.createElement('canvas')

    QRCodeDraw.draw(inputCanvas, text, function (error, canvas) {
      if (error) console.error(error)
      el.innerHTML = ''
      el.className = ''
      el.style.textAlign = 'center'
      el.appendChild(canvas)
    })
  })
}

const observer = new MutationObserver(
  qriticalHit
)
const config = { childList: true, subtree: true }
observer.observe(document.body, config)
