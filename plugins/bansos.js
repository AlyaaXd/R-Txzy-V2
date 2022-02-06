let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')

let handler = async (m, { conn, args, usedPrefix, DevMode }) => {
  try {
    global.db.data.users[m.sender].lastbansos = global.db.data.users[m.sender].lastbansos || 0
    let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
    let randomkamu = `${Math.floor(Math.random() * 81)}`.trim() //hehe Biar Susah Menang :v
    let Aku = (randomaku * 1)
    let Kamu = (randomkamu * 1)
    let kbansos = 'https://telegra.ph/file/e11ef7400eb6d3264d4bc.jpg'
    let mbansos = 'https://telegra.ph/file/b8fb6e6100eddbbe4691e.jpg'
    //let name = conn.getName[m.sender]
    let __timers = (new Date - global.db.data.users[m.sender].lastbansos)
    let _timers = (86400000 - __timers) 
    let timers = clockString(_timers)
    let user = global.db.data.users[m.sender]
    if (new Date - global.db.data.users[m.sender].lastbansos > 86400000) {
      if (Aku > Kamu) {
        conn.send2ButtonLoc(m.chat, await (await fetch(kbansos)).buffer(), 'Kamu Tertangkap Setelah Kamu korupsi dana bansos🕴️💰.  Dan kamu harus membayar denda 30 ribu rupiah💵', watermark, 'Again', '.bansos', 'Dompet', '.wallet', m)
        user.money -= 30000
        global.db.data.users[m.sender].lastbansos = new Date * 1
      } else if (Aku < Kamu) {
        user.money += 30000
        conn.send2ButtonLoc(m.chat, await (await fetch(mbansos)).buffer(), 'Kamu berhasil  korupsi dana bansos🕴️💰.  Dan kamu mendapatkan 30 ribu rupiah💵', watermark, 'Again', '.bansos', 'Dompet', '.wallet', m)
        global.db.data.users[m.sender].lastbansos = new Date * 1
      } else {
        conn.sendButton( m.chat, `Sorry Gan Lu g Berhasil Korupsi bansos Dan Tidak masuk penjara karna kamu *melarikan diri🏃*`, watermark, `Kembali`, `${usedPrefix}menu`, m)
        global.db.data.users[m.sender].lastbansos = new Date * 1
      }
    } else conn.sendButton(m.chat, `Kamu sudah Melakukan Korupsi Bansos, dan kamu harus menunggu selama ${timers} agar bisa korupsi bansos kembali`, watermark, `Menu`, `${usedPrefix}menu`, m)
  } catch (e) {
    throw `${e}`
  }
}

handler.help = ['bansos']
handler.tags = ['game', 'premium']
handler.command = /^(bansos)$/i
handler.premium = true
handler.fail = null

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
