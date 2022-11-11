// Thanks For Allah
// AlyaaXzy
// BOTCAHX


let fs = require('fs')
global.owner = ['6285730903853', '6282221792667','6285730903853', '6282221792667', '6287798004857'] // Letakan nomor kamu disini
global.APIs = { // API Prefix
  // nama: 'https://website'
  hardianto: 'https://hardianto-chan.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zekais: 'http://zekais-api.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  vhtear: 'https://api.vhtear.com',
  lolhum: 'https://api.lolhuman.xyz',
  fxc7: 'https://fxc7-api.herokuapp.com',
  bx: 'https://bx-hunter.herokuapp.com',

}
global.APIKeys = { // APIKey nya disini
  // 'https://website': 'apikey'
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://pencarikode.xyz': 'APIKEY',
  'https://api.xteam.xyz': 'HIRO',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'nyyxz-bot',
  'https://api.lolhuman.xyz': 'ed6c4f2c72b6f92f7d201464',
  'https://api.vhtear.com': 'sayahafiz',
  'https://fxc7-api.herokuapp.com': 'uN8rsK4g',
  'https://api.justaqul.xyz': '5kbUqdG00OXelFYx',
  'http://zekais-api.herokuapp.com': 'grqgD6pU',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
}

// Sticker WM
global.packname = 'Exc'
global.author = 'NyyXz'

global.wait = '「 ⏱️ 」Harap tunggu...'
global.eror = '「❗」Server ERROR!'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='
global.watermark = '© R-Txzy' //change the watermark 
global.image = 'https://telegra.ph/file/0bdd84bd5a8099a789828.jpg' //change the image
global.thumbfoto = 'https://telegra.ph/file/0bdd84bd5a8099a789828.jpg'

// image
global.bank = 'https://telegra.ph/file/d5ddf4cc627bb0e6bc420.jpg'
global.kandang = 'https://telegra.ph/file/67a6ee607d03a4e52757d.jpg'
global.kolam = 'https://telegra.ph/file/5aa5dfa3394477e11fb18.jpg'
global.thanks = 'https://telegra.ph/file/01917f7782b70de8f418d.jpg'

global.multiplier = 9999999 // Semakin tinggi, semakin sulit naik level

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
