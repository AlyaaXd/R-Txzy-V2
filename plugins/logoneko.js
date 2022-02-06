let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('Proses...')
  let res = `https://bx-hunter.herokuapp.com/api/canvas/gfx4?apikey=FuckBitch&text1=${response[0]}&text2=${response[1]}`
  conn.sendFile(m.chat, res, 'neko.jpg', `Sudah Jadi`, m, false)
}
handler.help = ['logoneko'].map(v => v + ' <text|text>')
handler.tags = ['nulis']
handler.command = /^(logoneko)$/i

module.exports = handler
