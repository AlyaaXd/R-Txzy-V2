let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
  conn.sendButtonImg(m.chat, await ( await fetch(`https://api.lolhuman.xyz/api/random/nsfw/hentai?apikey=rey2k21`)).buffer(), `wangy wangy wangy`, watermark, 'NEXT', `${usedPrefix + command}`, m, false)
}

handler.help= ['hentaipic']
handler.tags = ['hentai']

handler.command = /^hentai(pic)?$/i
module.exports = handler
