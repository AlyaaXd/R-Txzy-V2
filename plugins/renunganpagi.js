let axios = require("axios");
let handler = async(m, { conn, text }) => {

	axios.get(`http://docs-jojo.herokuapp.com/api/renungan`).then ((res) => {
	 	let hasil = `*${res.data.judul}*\n\nIsi :\n${res.data.Isi}\n\nPesan :\n${res.data.pesan}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['renungan']
handler.tags = ['cristian']
handler.command = /^(renungan)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
