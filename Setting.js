const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })

global.owner = process.env.OWNER_NUMBER || '2348039607375' ;
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://danielpeter:beka10beka10@cluster0.ef032ix.mongodb.net/?retryWrites=true&w=majority" ;
global.port=8000  ;
global.audio = '' ; 
global.video = '' ;
global.blockJids = process.env.BLOCK_JID ||'120363169665426586@g.us' ;
global.allowJids = process.env.ALLOW_JID ||'120363169665426586@g.us' ;
global.email = 'astromedia0010@outlook.com' ; 
global.github = 'https://github.com/Astropeda/Gnime-lite' ;
global.location = 'Lagos Nigeria' ;
global.timezone  = process.env.TIME_ZONE || 'Africa/Lagos'
global.gurl = 'https://www.youtube.com/@InnoxentTech?sub_confirmation=1' ; 
global.sudo =  process.env.SUDO || "923466319114" ;
global.devs = "923466319114";
global.mztit = process.env.MZTIT ||"🅼♥︎❚❚♥︎🆉",
global.Gname = process.env.GNAME ||"ɢɴɪᴍᴇ-ʟɪᴛᴇ-sᴜᴘᴘᴏʀᴛ",
global.zyt = process.env.ZYT || 'https://www.youtube.com/@InnoxentTech?sub_confirmation=1',
global.waUrl = process.env.WAURL ||"https://chat.whatsapp.com/CmY0THcJCUYEGxLJulhcRV",
global.website = 'http://lnkiy.in/GNIME-LITE-WEB' ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://leadier-umbrellas.000webhostapp.com/1.jpg' ;
module.exports = {
  sessionName: process.env.SESSION_ID || 'GNIME-LITE;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUlBTG1mNjRVMnFjN3c1VVV1aXdtanlZRFVjeHh4d1R2RzViYis5UnYyND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ2ljVnNqYVJ1S290QUlsWHVqVlV4Y08xYzlrSjNBZmdTQTQxcFlSSEFDTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPTlFmUklhVVNyb3drZlZQejFrd2NYOXhTMjcrQTI0VHRydnV5dmV4RFU4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5dTRmUVJ6WjVpN283ZG1TdDM5VjdBNFJ5MGJNWG1MT2hUTTFGcjNCTlZvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1GaThrSVgrN2kxL1lKMUdGYmM3b0xGQ3ozdE41TFllcVVIRFhNcXdhM0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9QRUNUNE9KZ2dZRGMxeWp0SDdjZStaOEE3MS9Bc0xCNDF0YjEwa1l1VFE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0NWeG1PUGxqVUR3L0lKVHkvMjczUzBhT0lxUmJDK3kzR1VGS3JpZTBsaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMVlYWnB6MDQrN0FRQ0R1TVU2cW9BMEJkKzdYZWc1MkxxSE9UYTJDc2tTZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9lZlJqVGJCRkNPMGZXcnZITzFMd1Z2d0hFNGR5THlldFZiNzd1cmJXZFlxYm1mTEkzeG1wMml6SFV6OFBiRTJUdWI3WVkwdkc2UnpMY21RUm1HWEFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM4LCJhZHZTZWNyZXRLZXkiOiJmSzN1SktrbFFTbElKb3JTQUU3a3RTWlA0SWpERVV3RXRwb3d0eEJlWVk0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgwMzk2MDczNzVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTlFRTRBQkFDRDkyMEE2ODQ5NjVBREQ3MTdCMURFN0QifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcwNDU0OTM2MX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODAzOTYwNzM3NUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIxREEyQjk4QkYwQzQ2RTk5MTAwNDYxNTQ3RUM0MEJEMCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzA0NTQ5MzYyfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ4MDM5NjA3Mzc1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkVFRTREMkEwMzcxRjU1MUZEQjU3RDhCM0M4Q0I4OUMwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MDQ1NDkzOTZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgwMzk2MDczNzVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQ0U0Mjg2MDM0RTNFMEJGNzE5MzZCMUY2RTQzOTU4NDkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcwNDU0OTQyMH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODAzOTYwNzM3NUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI3NkE4REY3MDIzNjY0NjdGRkUyRjkyQjQ2QTkzQ0I3NyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzA0NTQ5NDQ3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ4MDM5NjA3Mzc1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijg5RUUyMkI3MDYwMEU5MzBDMjZBNTFGRTA3RDJEQ0RFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MDQ1NDk0NzF9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgwMzk2MDczNzVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOEJERUY3MzY5OEVCMjg0NzQxMzlDMDJBQzFDOEUxQzAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcwNDU0OTQ4MH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODAzOTYwNzM3NUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJDMkVFQzZBRjA1NjA3OUZDM0FBMkVERjA4OEE3RTE2QSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzA0NTQ5NDgwfV0sIm5leHRQcmVLZXlJZCI6MTA3LCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MTA3LCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImUwRFhkbVloVHNPS1hQXzc0RDlDa2ciLCJwaG9uZUlkIjoiNjE2YWRkMzQtM2FlNS00YmI4LWFiZTUtMTRlZDRjOTA3YTMwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik02azdLaVAyRnVNV0FPOW52bzNnZDNobWQ1Zz0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaHJXV25mbElncVFTaGxYRU8xV3ZsS3ltQnRrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTXFRcG00UTZMZmxyQVlZQ1NBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMlNiM3ZRNm5zaDY3T3VabzJJNlBzUHJ3TWg3dlZqVFRJaXlvMi9DUHQxOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoidXhkNTFaeng2bmRQTkZ3QS8rQlN4eGlSamFoL0ZoMzFERVdDckpDMTlFcVRUV1dZVWpjd3lVQ3Z1cFJucjRyT2MvSXlZQ1JhQnFoQzdlcWVoWnJJQUE9PSIsImRldmljZVNpZ25hdHVyZSI6IjlBS3VQL1libW8rRWpaUW5lTWltNXlZMlBVYkRhMVZudmFoaHFqZk5mTWtzUnlWa1hwWHVEUWJmVXpZK3N0a1hGMUtlRHlqK1lZWnptaEFabDBBekNRPT0ifSwibWUiOnsiaWQiOiIyMzQ4MDM5NjA3Mzc1OjUyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuG0gOqcseG0m8qA4bSPIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgwMzk2MDczNzU6NTJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZGttOTcwT3A3SWV1enJtYU5pT2o3RDY4REllNzFZMDB5SXNxTnZ3ajdkZiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwNDU0OTU5OCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDdTUifQ==',
  botname: process.env.BOT_NAME || 'ɢɴɪᴍᴇ-ʟɪᴛᴇ',
  ownername:  process.env.OWNER_NAME || `ᴍᴀʜᴇʀ ᴢᴜʙᴀɪʀ`,
  author:  process.env.PACK_AUTHER || 'ᴍᴀʜᴇʀ ᴢᴜʙᴀɪʀ', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'false',
  packname:  process.env.PACK_NAME || "ɢɴɪᴍᴇ-ʟɪᴛᴇ" , 
  autoreaction: process.env.AUTO_REACTION || 'true',
  antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokey',
  alwaysonline: process.env.ALWAYS_ONLINE || 'true',
  antifake :   process.env.FAKE_COUNTRY_CODE ||'212',
  readmessage: process.env.READ_MESSAGE || 'true',
  HANDLERS: process.env.PREFIX || '.',
  warncount : process.env.WARN_COUNT || 2,
  disablepm: process.env.DISABLE_PM || "false",
  MsgsInLog:process.env.MSGS_IN_LOG ||'false',
  pmMsgsInLog:process.env.PM_MSGS_IN_LOGS ||'false',
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'true', 
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.BRANCH || 'remove',
  BRANCH: process.env.BRANCH || 'Main',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
  HEROKU_API_KEY: process.env.HEROKU_API_KEY,
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "34wcCGPoe3yaGtpiBZgx4SN7",
  caption :process.env.CAPTION || "\t*ɢɴɪᴍᴇ-ʟɪᴛᴇ 2024* ",
  promote_demote_messages : process.env.PROMOTE_DEMOTE_MESSAGES || 'true' ,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY ||'' ,
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
