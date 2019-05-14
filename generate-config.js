
const urls = [
  "https://dafitistatic-a.akamaihd.net/p/FiveBlu-Casaco-FiveBlu-Botão-Vermelho-3054-7055753-5-zoom.jpg",
  "https://dafitistatic-a.akamaihd.net/p/Yachtsman-Camisa-Polo-Yachtsman-Reta-Listrada-Cinza/Off-White-6188-4829753-1-zoom.jpg",
  "https://dafitistatic-a.akamaihd.net/p/Casio-Relógio-Casio-MTPV001GL1BUDF-Dourado-2482-7467171-1-zoom.jpg",
  "https://dafitistatic-a.akamaihd.net/p/Tutti-Baby-Andador-Toy-Vermelho-Tutti-Baby-7075-5193612-1-zoom.jpg",
  "https://dafitistatic-a.akamaihd.net/p/Porto-Brasil-Aparelho-de-Jantar-e-Chá-Porto-Brasil-Roma-30pçs-Branco-8452-3705782-1-zoom.jpg",
  "https://dafitistatic-a.akamaihd.net/p/Lupo-Sport-Legging-Lupo-Sport-Af-Open-Air-Ll-Preta-4143-3839064-5-zoom.jpg",
  "https://dafitistatic-a.akamaihd.net/p/DAFITI-SHOES-Sapatilha-DAFITI-SHOES-Laço-Preta-6274-8178673-1-zoom.jpg",
  "https://dafitistatic-a.akamaihd.net/dynamic_yield/cms/static/images/2dc04113787dc__Header_pag_estilo_1970x1099.jpg",
  "https://dafitistatic-a.akamaihd.net/dynamic_yield/cms/static/images/5af81595920e__desk_destaque-topmarcas40off.jpg",
  "https://dafitistatic-a.akamaihd.net/dynamic_yield/cms/static/images/831a7cb950e2__desk_destaque-melissak.jpg"
]



const configs = [
  // [rtt, perc]
  [10, 35],
  [100, 25],
  [400, 15]
]

const block = (url, idx, rtt, perc) => `
url="${url}"
output="images/img${idx}-${perc}.jpg"
cookie="aic-rtt=${rtt}"`

urls.forEach((url, i) => {
  const idx = (i + 1).toString().padStart(2, '0')
  configs.forEach(config => {
    console.log(block(url, idx, config[0], config[1]))
  })
})
