let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
	if (!db.data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
  conn.sendButtonImg(m.chat, await ( await fetch(`https://api.lolhuman.xyz/api/random/nsfw/neko?apikey=rey2k21`)).buffer(), `wangy wangy wangy`, watermark, 'NEXT', `${usedPrefix + command}`, m, false)
}
handler.help = ['nsfwneko']
handler.tags = ['hentai']

handler.command = /^(nsfwneko)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler
