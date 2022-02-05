const axios = require('axios')




let handler = async (m, { conn, args  , usedPrefix, command })=>{


if(!args[0]) throw " please provide place or location name"

    try{

        const response = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args[0]}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`)
        const res = await response

        const name = res.data.name
        const Country = res.data.sys.country
        const Weather= res.data.weather[0].description
        const Temperature = res.data.main.temp + '°C'
        const Minimum_Temperature= res.data.main.temp_min + '°C'
        const Maximum_Temperature= res.data.main.temp_max + '°C'
        const Humidity= res.data.main.humidity + '%'
        const Wind= res.data.wind.speed + 'km/h'


        let str = `
        ───────────[ *Weather* ]──────────\n🏙️ *Place:* ${name}\n🌍 *Country:* ${Country}\n⛅ *Weather:* ${Weather}\n🌡️ *Temperature:* ${Temperature}\n❄️ *Minimum Temperature:* ${Minimum_Temperature}\n📛 *Maximum Temperature:* ${Maximum_Temperature}\n💧 *Humidity:* ${Humidity}\n🌬️ *Wind:* ${Wind}
        `.trim()
        conn.sendButton(m.chat, str, wm, '⋮☰ MENU', '.menu', m)
    }catch(e){
throw 'location not found' 
console.log(e)

    }




}

handler.help = ['weather']
handler.tags = ['internet']
handler.command = /^(weather|wthr|cuaca)$/i

module.exports = handler

let wm = global.botwm
