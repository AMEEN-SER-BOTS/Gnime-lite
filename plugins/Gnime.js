
  const os = require('os')
  let menus = false
  const moment = require("moment-timezone")
  const fs = require("fs")

  let { fancytext, tlang, tiny, runtime, formatp, botpic, getBuffer ,prefix, sck1,name, Module_Exports } = require("../lib");
  const long = String.fromCharCode(8206)
  const sɪɢᴍᴀ_readmore = long.repeat(4001)
  const sɪɢᴍᴀ_speed = require('performance-now')
  const sɪɢᴍᴀ_ᴍᴅ = require('../lib/plugins')
  

  //------------------------------------------------------------------------------------


  sɪɢᴍᴀ_ᴍᴅ.Module_Exports({
          kingcmd: "owner",
          infocmd: "to check owner number",
          kingclass: "user cmd",

      },
      async(bot, person) => {
          const name = require('../Setting')
          const thmb = await getBuffer(global.THUMB_IMAGE)
          const vcard = 'BEGIN:VCARD\n' +
              'VERSION:3.0\n' +
              'FN:' + name.ownername + '\n' +
              'ORG:;\n' +
              'TEL;type=CELL;type=VOICE;waid=' + global.owner + ':+' + global.owner + '\n' +
              'END:VCARD'
          let buttonMessaged = {
              contacts: { displayName: name.ownername, contacts: [{ vcard }] },
              contextInfo: {
                  externalAdReply: {
                      title: name.ownername,
                      body: 'ᴛᴀᴘ ʜᴇʀᴇ ᴛᴏ ᴍᴇssᴀɢᴇ ᴍᴇ',
                      renderLargerThumbnail: true,
                      thumbnailUrl: ``,
                      thumbnail: thmb,
                      mediaType: 1,
                      mediaUrl: '',
                      sourceUrl: `https://wa.me/+` + owner + '?text=Hii+bro,I+am+' + person.pushName,
                  },
              },
          };
          return await bot.sendMessage(person.chat, buttonMessaged, {   quoted: person, });
  
      }
  )

  const readDirectory = (text) => {
    return new Promise((resolve, reject) => {
      fs.readdir(text, (err, files) => {
        if (err) {reject('Error reading directory'); }
        else {
          //person.reply("Files Here \n "+files.toString())
          resolve(files);
        }
      });
    });
  };

  sɪɢᴍᴀ_ᴍᴅ.Module_Exports({
    kingcmd: "menu",
    shortcut: ["list"],
    infocmd: "All Commands lists",
    kingclass: "user cmd"
  }, async (a, b, c) => {
    const {
      commands: d
    } = require("../lib");
    let e = [];
    const f = c ? d.find(a => a.kingcmd === c) : false;
    if (f) {
      e.push("╭────⟪ " + mztit + " 〕━┈⊷\n││✵ ᴄᴏᴍᴍᴀɴᴅ " + f.kingcmd);
      if (f.kingclass) {
        e.push("││✵ ᴄᴀᴛᴇɢᴏʀʏ " + f.kingclass);
      }
      if (f.shortcut) {
        e.push("││✵ sʜᴏʀᴛᴄᴜᴛ " + f.shortcut);
      }
      if (f.use) {
        e.push("││✵ ᴜsᴀɢᴇ\n " + prefix + f.kingcmd + " " + f.use);
      }
      if (f.infocmd) {
        e.push("││✵ ɪɴꜰᴏ " + f.infocmd + "\n╰━────────━━━━┈⊷");
      }
      return await b.reply(e.join("\n"));
    }
    const g = {};
    try {
      d.map(async (a, b) => {
        if (a.dontAddCommandList === false && a.kingcmd !== undefined) {
          if (!g[a.kingclass]) {
            g[a.kingclass] = [];
          }
          g[a.kingclass].push(a.kingcmd);
        }
      });
      timestampe = sɪɢᴍᴀ_speed();
      latensie = sɪɢᴍᴀ_speed() - timestampe;
      let [e, f] = new Date().toLocaleString("en-pk", {
        timeZone: global.timezone
      }).split(",");
      let h = await sck1.countDocuments();
      let i = "╭────〔 " + mztit + " 〕━━┈⊷      \n││✵ *ᴡᴇʟᴄᴏᴍᴇ* " + b.pushName + "\n││✵ *ᴏᴡɴᴇʀ* " + name.ownername + "\n││✵ *ᴘʀᴇғɪx* ❑ *" + prefix + "* ❑\n││✵ *ᴍᴏᴅᴇ* " + name.WORKTYPE + "\n││✵ *ᴛɪᴍᴇ* " + f + "\n││✵ *ᴅᴀᴛᴇ* " + e + "\n││✵ *ʀᴀᴍ* " + formatp(os.totalmem() - os.freemem()) + "/" + formatp(os.totalmem()) + "\n││✵ *ᴜᴘ-ᴛɪᴍᴇ* " + runtime(process.uptime()) + "\n││✵ *ᴘʟᴜɢɪɴs* " + d.length + "\n││✵ *sᴘᴇᴇᴅ* " + latensie.toFixed(4) + " ᴍs\n││✵ *ᴘʟᴀᴛꜰᴏʀᴍ* ʟɪɴᴜx\n││✵ *ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴀsᴛʀᴏ*\n╰━━────────────┈⊷       \n\n" + sɪɢᴍᴀ_readmore + "\n";
      let j = false;
      for (const a in g) {
        i += "╭────❑ " + tiny(a) + " ❑\n";
        if (c.toLowerCase() == a.toLowerCase().trim()) {
          j = "╭────❑ " + tiny(a) + " ❑\n";
          for (const b of g[a]) {
            j += "││ " + fancytext(b, 1) + "\n";
          }
          j += "╰━────────────◦➛\n*ɢɴɪᴍᴇ-ʟɪᴛᴇ 2024*";
          break;
        } else {
          for (const b of g[a]) {
            i += "││ " + fancytext(b, 1) + "\n";
          }
          i += "╰━─────────────◦➛\n";
        }
      }
      i += " *ʟᴀꜱᴛ ᴜᴘᴅᴀᴛᴇᴅ 06/01/2023* ";
      return await a.sendMessage(b.chat, {
        image: {
          url: await botpic()
        }, 
        caption: j ? j : i
      });
    } catch {
      b.reply("*_Unknown Error Occured,Or May Be Your TimeZone Is In Correct_*");
    }
  });
  
sɪɢᴍᴀ_ᴍᴅ.Module_Exports({
    kingcmd: "file",
    infocmd: "to get extact name where that command is in repo.\nSo user can edit that.",
    kingclass: "user cmd",

},
 async(bot, person, text ,{isCreator }) => {
   if(!isCreator) return person.reply("ᴏɴʟʏ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ")
   if(!text) return person.reply("ᴘʟᴇᴀsᴇ, ᴘʀᴏᴠɪᴅᴇ ᴍᴇ ᴀ ᴄᴏᴍᴍᴀɴᴅ/ᴅɪʀᴇᴄᴛᴏʀʏ")
   if(text.startsWith("."))
   {
      let res="------------- FILE MANAGER -------------\n"
      try {
            const sɪɢᴍᴀ_files = await readDirectory(text);
            files.forEach(sɪɢᴍᴀ_file => { res += file + '\n'; });
            await person.reply(res.toString());
      } catch (error) {  person.reply(error); }
        return;
   }
   
   
   const { commands } = require('../lib');
   
   let Maher = [];
          const cmd = commands.find((cmd) => cmd.kingcmd === (text.split(" ")[0].toLowerCase()))
          if (!cmd) return await person.reply("ɴᴏ sᴜᴄʜ ᴄᴏᴍᴍᴀɴᴅs");
          else Maher.push(`╭────〔 ${mztit} 〕━┈⊷\n││✵ ᴄᴏᴍᴍᴀɴᴅ ${cmd.kingcmd}`);
          if (cmd.kingclass) Maher.push(`││✵ ᴄʟᴀss ${cmd.kingclass}`);
          if(cmd.kingpath) Maher.push(`││✵ ꜰɪʟᴇ-ᴘᴀᴛʜ ${cmd.kingpath}\n╰━────────────━┈⊷\n${name.caption}`)
          return await person.reply(Maher.join('\n'));
  


  })


