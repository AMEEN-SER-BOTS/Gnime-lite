const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })

global.owner = process.env.OWNER_NUMBER || '2348039607375' ;
global.sudo =  process.env.SUDO || "2348039607375" ;
global.devs = "2348039607375";
module.exports = {
  sessionName: process.env.SESSION_ID || 'DURGA;;;',
  botname: process.env.BOT_NAME || 'ɢɴɪᴍᴇ-ʟɪᴛᴇ',
  ownername:  process.env.OWNER_NAME || `ᴀsᴛʀᴏ`,
  author:  process.env.PACK_AUTHER || 'ᴀsᴛʀᴏ', 
  packname:  process.env.PACK_NAME || "ɢɴɪᴍᴇ-ʟɪᴛᴇ" , 
  alwaysonline: process.env.ALWAYS_ONLINE || 'true',
  antifake :   process.env.FAKE_COUNTRY_CODE ||'212',
  HANDLERS: process.env.PREFIX || '.',
  warncount : process.env.WARN_COUNT || 2,
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'true', 
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.BRANCH || 'remove',
  BRANCH: process.env.BRANCH || 'Main',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
  HEROKU_API_KEY: process.env.HEROKU_API_KEY,
  caption :process.env.CAPTION || "\t*ɢɴɪᴍᴇ-ʟɪᴛᴇ 2024* ",
  VERSION: process.env.VERSION || '𝚅.𝟷.𝟸.𝟽',
  LANG: process.env.THEME|| 'GNIME',
  WORKTYPE: process.env.WORKTYPE || 'public'
};

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
