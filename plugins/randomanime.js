// RECODE AlyaaXzy

let fetch = require('node-fetch')
let handler = async (m, { conn, command, usedPrefix }) => {
	
	conn.sendButtonImg(m.chat, await ( await fetch(`https://server-api-rey.herokuapp.com/api/wallpaper/${command}?apikey=apirey`)).buffer(), 'Nih kak', watermark, 'NEXT', `${usedPrefix + command}`, m)

}

handler.help = ['waifu2', 'shota', 'yotsuba', 'shinomiya', 'yumeko', 'tejina', 'chiho', 'boruto', 'kaori', 'shizuka', 'kaga', 'kotori', 'mikasa', 'akiyama', 'gremory', 'isuzu', 'shina', 'kagura', 'shinka', 'eba', 'elaina', 'erza', 'hinata', 'minato', 'naruto', 'sagiri', 'nezuko', 'rize', 'ana', 'deidara', 'yuki', 'asuna', 'ayuzawa', 'chitoge', 'emilia', 'hestia', 'inori', 'itachi', 'madara', 'sakura', 'sasuke', 'tsunade', 'onepiece', 'mobil', 'montor', 'keneki', 'toukachan', 'akira', 'itori', 'kurumi', 'pokemon']
handler.tags = ['anime']
handler.command = /^(waifu2|shota|yotsuba|shinomiya|yumeko|tejina|chiho|boruto|kaori|shizuka|kaga|kotori|mikasa|akiyama|gremory|isuzu|shina|kagura|shinka|eba|elaina|erza|hinata|minato|naruto|sagiri|nezuko|rize|ana|deidara|yuki|asuna|ayuzawa|chitoge|emilia|hestia|inori|itachi|madara|sakura|sasuke|tsunade|onepiece|mobil|montor|keneki|toukachan|akira|itori|kurumi|pokemon)$/i
handler.register = true

handler.limit = true

module.exports = handler
