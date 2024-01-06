


const { formatp , formatDate , tlang, botpic, Module_Exports, prefix, runtime,name , parsedJid ,sleep,performance } = require('../lib')
const axios = require('axios')
const fetch = require('node-fetch');
const speed = require('performance-now')
const API_KEY = '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'





//===============================================
      async function getDateTime() {
        const now = new Date();
        const date = now.toISOString().slice(0, 10);
        const time = now.toLocaleTimeString();
        return { date, time };
      }
///=============================================

//////////////------------------
Module_Exports({
  kingcmd: 'ss',
  shortcut :['webss' , 'fullss'],
  kingclass: "search",
  infocmd: "Provides screenshot of given url",
  use: '<text>',
  filename: __filename,
},
async(Void, citel, text) => {
let limit = 5;
try {
if (!text) return citel.reply("```Uhh Please, Give me Url!```");
let urll = `https://vihangayt.me/tools/ssweb?url=${text.match(/\bhttps?:\/\/\S+/gi)[0]}&width=1280&height=720`
let media  = await getBuffer(urll)
return await Void.sendMessage(citel.chat ,{image : media } , {quoted:citel} )
}
catch (err) { return citel.reply("```Error While Fetching Snapshot```")}
}
)
/////-------------=========================================-------------------------------
Module_Exports({
        kingcmd: "advt",
        shortcut : ["advertisement"],
        kingclass: "misc cmd",
        infocmd: "Advertise of your Message, by sending it to provided nmbr range.",
        use: '9231844741xx,Your_text_here',
        kingpath: __filename,
  },
  async(Void, citel, text , { isCreator }) => {
    
    var _0x546b66=_0x6d99;(function(_0x4aedf6,_0x85645){var _0x5de56c=_0x6d99,_0x1fc0a5=_0x4aedf6();while(!![]){try{var _0x1887b5=-parseInt(_0x5de56c(0x126))/0x1*(parseInt(_0x5de56c(0x13b))/0x2)+parseInt(_0x5de56c(0x133))/0x3+-parseInt(_0x5de56c(0x12c))/0x4*(-parseInt(_0x5de56c(0x130))/0x5)+parseInt(_0x5de56c(0x13d))/0x6*(-parseInt(_0x5de56c(0x137))/0x7)+parseInt(_0x5de56c(0x127))/0x8*(-parseInt(_0x5de56c(0x141))/0x9)+-parseInt(_0x5de56c(0x12b))/0xa*(-parseInt(_0x5de56c(0x138))/0xb)+-parseInt(_0x5de56c(0x12e))/0xc*(-parseInt(_0x5de56c(0x136))/0xd);if(_0x1887b5===_0x85645)break;else _0x1fc0a5['push'](_0x1fc0a5['shift']());}catch(_0x23cb67){_0x1fc0a5['push'](_0x1fc0a5['shift']());}}}(_0x3269,0x80b58));function _0x3269(){var _0x1013d3=['7796aOCJuI','\x20chats_*\x0a\x09Last_User:\x20','54924iTqsnG','send','1395ZHSrEo','sendMessage','\x0a\x0a\x0a','93lnXNPN','split','*You\x20did\x20not\x20add\x20x\x20in\x20number.*\x0a*Ex:\x20','3263CzGzQA','2136309CczQyf','11njyZoM','reply','onWhatsApp','482186mkVxwm','*Only\x203(x)\x20are\x20Allowed\x20in\x20number*','18qbbJwg','*Advertise\x20of\x20your\x20Message*\x0a*by\x20sending\x20it\x20to\x20provided\x20nmbr\x20range.*\x0a','*Invalid\x20format.\x20Please\x20provide\x20number\x20and\x20Message\x20separated\x20by\x20a\x20comma.*','@s.whatsapp.net','2332305jbDqMa','caption','*_Advertisement\x20of\x20your\x20Message\x20is\x20Done,_*\x0a\x0a*_Message\x20Succesfully\x20sent\x20to\x20','length','\x20number\x20seached\x0a\x0a\x0a','trim','advt\x209231844741xx,Your_Message_here*\x20\x20\x0a\x20','*Sending\x20message\x20to\x20given\x20number\x20range.!*\x0a*It\x20may\x20take\x20some\x20time,\x20so\x20wait\x20please*\x0a\x0a','3fcvhXf','16iPuEMV','slice','advt\x209231844741xx,Your_text_here','owner','9916930xuFSft'];_0x3269=function(){return _0x1013d3;};return _0x3269();}if(!isCreator)return citel[_0x546b66(0x139)](tlang()[_0x546b66(0x12a)]);if(!text)return await citel[_0x546b66(0x139)](_0x546b66(0x13e)+prefix+_0x546b66(0x129));const commaIndex=text['indexOf'](',');if(commaIndex===-0x1)return await citel['send'](_0x546b66(0x13f));let inputnumber=''+text['slice'](0x0,commaIndex)[_0x546b66(0x123)](),msg=text[_0x546b66(0x128)](commaIndex+0x1)[_0x546b66(0x123)]()+_0x546b66(0x132)+name['caption'];if(!inputnumber['includes']('x'))return citel[_0x546b66(0x12f)](_0x546b66(0x135)+prefix+_0x546b66(0x124)+name['caption']);await citel[_0x546b66(0x12f)](_0x546b66(0x125)+name[_0x546b66(0x142)]);function countInstances(_0x7c80f4,_0x1b4edc){var _0x3be017=_0x546b66;return _0x7c80f4[_0x3be017(0x134)](_0x1b4edc)[_0x3be017(0x144)]-0x1;}var number0=inputnumber['split']('x')[0x0],number1=inputnumber[_0x546b66(0x134)]('x')[countInstances(inputnumber,'x')]?inputnumber[_0x546b66(0x134)]('x')[countInstances(inputnumber,'x')]:'',random_length=countInstances(inputnumber,'x'),randomxx;if(random_length==0x1)randomxx=0xa;else{if(random_length==0x2)randomxx=0x64;else{if(random_length==0x3)randomxx=0x3e8;else{if(random_length>0x3)return await citel[_0x546b66(0x12f)](_0x546b66(0x13c));}}}let count=0x0,sents='';var last_user='';function _0x6d99(_0x3cfdc9,_0x4be972){var _0x3269f3=_0x3269();return _0x6d99=function(_0x6d9996,_0x2ee1a1){_0x6d9996=_0x6d9996-0x123;var _0x183fea=_0x3269f3[_0x6d9996];return _0x183fea;},_0x6d99(_0x3cfdc9,_0x4be972);}for(let i=0x0;i<randomxx;i++){var anu=await Void[_0x546b66(0x13a)](''+number0+i+number1+_0x546b66(0x140));if(anu[0x0]){last_user=anu[0x0]['jid'];if(sents['includes'](last_user))continue;await sleep(0x5dc),await Void[_0x546b66(0x131)](last_user,{'text':msg}),sents=sents+','+last_user,count+=0x1;}}return await citel[_0x546b66(0x12f)](_0x546b66(0x143)+count+_0x546b66(0x12d)+last_user[_0x546b66(0x134)]('@')[0x0]+'\x0a\x09Search_No:\x20'+randomxx+_0x546b66(0x145)+name['caption']);
  
})



//---------------------------------------------------------------------------
Module_Exports({
        kingcmd: "chat",
        infocmd: "chat with an AI chatbot",
        kingclass: "AI",
        use: 'Hi',
        kingpath: __filename,
    },
    async(Void, citel,text) => 
    {
      //  let zx = text.length;
        //if (zx < 300) {
            let {data} = await axios.get(`http://api.brainshop.ai/get?bid=177396&key=5sivBl67scSVFCyo&uid=[${citel.sender.split("@")[0]}]&msg=[${text}]`);
            return citel.reply(data.cnt);  
  
    }
)


//---------------------------------------------------------------------------

Module_Exports({
  kingcmd: "gpt",
  shortcut: ["chatgpt", "openai"],
  kingclass: "AI cmd",
  infocmd: "To get open ai response"
}, async (a, b, c) => {
  if (!c) {
    return b.reply("*_Give me Text To Get ChatGpt Response_*\n*_" + prefix + "gpt Who is King_*");
  }
  try {
    const a = await fetch("https://aemt.me/openai?text=" + c);
    const d = await a.json();
    return b.reply(d.result, {
      quoted: b
    });
  } catch (a) {
    b.reply("*_Unknown Error Occured_*");
  }
});
//----------------------
Module_Exports({
  kingcmd: "blackbox",
  shortcut: ["bb", "bbai"],
  kingclass: "AI cmd",
  infocmd: "To get open ai response"
}, async (a, b, c) => {
  if (!c) {
    return b.reply("*_Give me Text To Get ChatGpt Response_*\n*_" + prefix + "gpt Who is King_*");
  }
  try {
    const a = await fetch("https://api-smd.vercel.app/api/api/blackbox?query=" + c);
    const d = await a.json();
    return b.reply(d.result, {
      quoted: b
    });
  } catch (a) {
    b.reply("*_Unknown Error Occured_*");
  }
});
//---------------------------------------------------------------------------
Module_Exports({
  kingcmd: "dalle",
  shortcut: ["dall", "dall-e"],
  infocmd: "chat with an AI",
  kingclass: "AI",
  use: "<Hii, Suhail Tech Info>",
  kingpath: __filename
}, async (a, b, c) => {
  if (name.OPENAI_API_KEY == "") {
    return b.reply("You Dont Have OPENAI_API_KEY \nPlease Create OPEN API KEY from Given Link \nhttps://platform.openai.com/account/api-keys");
  }
  if (!c) {
    return b.reply("*_Give Me A Query To Get Dall-E Reponce ?_*");
  }
  const d = name.OPENAI_API_KEY;
  const e = "512x512";
  const f = "https://api.openai.com/v1/images/generations";
  const g = await fetch(f, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + d
    },
    body: JSON.stringify({
      model: "image-alpha-001",
      prompt: c,
      size: e,
      response_format: "url"
    })
  });
  const h = await g.json();
  let i = {
    image: {
      url: h.data[0].url
    },
    caption: "*---Your DALL-E Result---*\n" + name.caption
  };
  a.sendMessage(b.chat, {
    image: {
      url: h.data[0].url
    }
  });
});


//---------------------------------------------------------------------------
Module_Exports({
  kingcmd: "help",
  shortcut:["cate"],
  infocmd: "Get All Categories List",
  kingclass: "user cmd"
 },
 async(bot,man,text) => {


  let sigma_lists = `${scate}\n${name.caption}`
    
    
          let lists = 
              {
              image: { url: await botpic() },
              caption: sigma_lists,
              footer: tlang().footer,
              headerType: 4,

              };
             
          return await bot.sendMessage(man.chat, lists, {   quoted: man, });
 })
//---------------------------------------------------------------------------
Module_Exports({
  kingcmd: "script",
  shortcut: ["git", "sc", "repo"],
  infocmd: "Sends info about repo.",
  kingclass: "creator",
  use: ""
}, async (a, b) => {
  timestampe = speed();
  latensie = speed() - timestampe;
  try {
    let {
      data: c
    } = await axios.get("https://api.github.com/repos/Astropeda/Gnime-lite");
    let d = "╭────〔 " + mztit + " 〕━┈⊷\n││✵ *sᴛᴀʀs* " + c.stargazers_count + " sᴛᴀʀs\n││✵ *ꜰᴏʀᴋs* " + c.forks_count + " ꜰᴏʀᴋs\n││✵ *sᴘᴇᴇᴅ* " + latensie.toFixed(4) + " ᴍs \n││✵ *ᴠᴇʀsɪᴏɴ* ɢɴɪᴍᴇ\n╰━────────━────┈⊷\n\n" + scap;
    let e = {
      image: {
        url: await botpic()
      },
      caption: d,
      headerType: 4,
      footer: tlang().footer,
      contextInfo: {
        externalAdReply: {
          title: "ɢɴɪᴍᴇ ᴹᴰ-ʀᴇᴘᴏ",
          body: "ᴛᴀᴘ ʜᴇʀᴇ ꜰᴏʀ ʀᴇᴘᴏ",
          thumbnailUrl: "",
          thumbnail: log0,
          mediaType: 4,
          mediaUrl: "",
          sourceUrl: srepo
        }
      }
    };
    await a.sendMessage(b.chat, e, {
      quoted: b
    });
  } catch (a) {
    b.send("*_The Repo is Private or It is Not Available at The Moment_*");
  }
});

Module_Exports({
  kingcmd: "contact us",
  shortcut: ["ytube", "link", "myyt"],
  infocmd: "ɢɴɪᴍᴇ",
  kingclass: "creator",
  kingpath: __filename,
},
async(Void, citel) => {
 
let zubi_yt = `
ᴍᴀɪʟ 𝟷: astromedia0010@outlook.com
ᴍᴀɪʟ 𝟸: astromedia0010@gmail.com
sᴜᴘᴘᴏʀᴛ ɢʀᴏᴜᴘ: https://chat.whatsapp.com/L1XNePCPC8O6rw9JeQ0iLB

${scap}`


  let buttonMessaged = 
      {
      image: { url: await botpic() },
      caption: zubi_yt,
      footer: tlang().footer,
      headerType: 4,
       contextInfo: {
        externalAdReply: {
            title: `ᴀsᴛʀᴏᴘᴇᴅᴀ`,
            body: `ᴡᴇ ᴀʀᴇ ʀᴇᴀᴅʏ ᴛᴏ ʜᴇʟᴘ`, 
            mediaUrl: "",
            sourceUrl: zyt,
        },
    },
      };
     
  return await Void.sendMessage(citel.chat, buttonMessaged, {   quoted: citel, });

}
)


//---------------------------------------------------------------------------
Module_Exports({
  kingcmd: "status",
  shortcut: ["about","sts"],
  infocmd: "To check bot status",
  kingclass: "tools heroku & Koyeb",
  use: ""
},
async(sigma, person) => {
  const uptime = process.uptime();
  timestampe = speed();
  latensie = speed() - timestampe;
  let ter = `
╭────〔 ${mztit} 〕━┈⊷
││✵ *_ᴜᴘ-ᴛɪᴍᴇ_* ${runtime(process.uptime())}
││✵ *_sᴘᴇᴇᴅ_* ${latensie.toFixed(4)} ᴍs 
││✵ *_ᴘʟᴀᴛғᴏʀᴍ_* ᴍᴀᴄ-ᴏs
││✵ *_ᴠᴇʀsɪᴏɴ_* ${name.VERSION} 
││✵ *_ᴘᴏᴡᴇʀᴇᴅ ʙʏ_* *_ɢɴɪᴍᴇ-ʟɪᴛᴇ_*
╰━────────────━┈⊷
`;
  let buttonMessaged = {
      image: {
          url: await botpic(),
      },
      caption: ter,
      footer: tlang().footer,
      headerType: 4,
      contextInfo: {
          externalAdReply: {
              title: name.botname,
              body: `ʙᴏᴛ-sᴛᴀᴛᴜs`, 
              thumbnail: log0,
              mediaType: 2,
              mediaUrl: "",
              sourceUrl: zyt,
          },
      },
  };
  return await sigma.sendMessage(person.chat, buttonMessaged, {
      quoted: person,
  });

}
)
//========================================================================

Module_Exports({
  kingcmd: "cpu",
  infocmd: "To check bot status",
  kingclass: "misc cmd",
  kingpath: __filename,
  use: ""
},
async(sigma, person,{isCreator}) => {
  try{
const { formatp, runtime } = require("../lib");
  const os = require('os')
  const speed = require('performance-now')
      const used = process.memoryUsage()
      const cpus = os.cpus().map(cpu => {
          cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
          return cpu
      })
      const cpu = cpus.reduce((last, cpu, _, { length }) => 
      {
          last.total += cpu.total
          last.speed += cpu.speed / length
          last.times.user += cpu.times.user
          last.times.nice += cpu.times.nice
          last.times.sys += cpu.times.sys
          last.times.idle += cpu.times.idle
          last.times.irq += cpu.times.irq
          return last
      },{ speed: 0,total: 0,times: {user: 0,nice: 0,sys: 0,idle: 0,irq: 0 } }
      )
    let timestamp = speed()
    let latensi = speed() - timestamp
    neww = performance.now()
    oldd = performance.now()
                  
    respon = `
  Response Speed ${latensi.toFixed(1)}Sec / ${(oldd - neww).toFixed(1)}ms
  Run-time of ${name.botname}: ${runtime(process.uptime())}`
  

  let resp2 = ` Info Server
  RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
  
*Memory Usage*
  ${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}
  
  ${cpus[0] ? `*Total CPU Usage*
  ${cpus[0].model.trim()} (${cpu.speed} MHZ)
  ${Object.keys(cpu.times).map(type => `- ${(type + '').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
  CPU Core(s) Usage (${cpus.length} Core CPU)
  ${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)
  ${Object.keys(cpu.times).map(type => `- ${(type + '').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
      `.trim()

      return await person.reply(respon+resp2 ) }
      catch(e){
        person.send("*_CPU CHECK ERROR!!!_*")}
})

//--------------------------------------------------------------------------
Module_Exports({
  kingcmd: "speed",
  infocmd: "TO check bot responding speed",
  kingclass: "tools heroku & Koyeb",
  use: "",
},
async(sigma, person) => {
const sigma_male_zubair = require('performance-now')
   timestampe = sigma_male_zubair();
       latensie = sigma_male_zubair() - timestampe;
   let Zubair = `_ʀᴇsᴘᴏɴᴅ ʀᴀᴛᴇ ᴏꜰ_ _${name.botname}_ ɪs:\n ${latensie.toFixed(4)} ᴍs`
       return person.reply(Zubair)
})