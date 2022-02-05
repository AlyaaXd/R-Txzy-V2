// BOTCAHX RECODE

let fetch = require('node-fetch')
let handler = async (m, { text, command, usedPrefix }) => {
    if (!text) throw `uhm.. teksnya mana?\n\ncontoh:\n${usedPrefix + command} kapan indonesia merdeka`
    let res = await fetch(`https://api.xteam.xyz/brainly?soal=${text}&APIKEY=cristian9407`)
    if (!res.ok) throw eror
    let json = await res.json()
    if (!json.status) throw json
    m.reply(json.jawaban)
}
handler.help = ['brainly <teks>']
handler.tags = ['edukasi']
handler.command = /^brainly$/i
handler.register = true

module.exports = handler
