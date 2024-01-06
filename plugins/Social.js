const {Module_Exports , name , prefix,getBuffer,tlang,fetchJson } = require('../lib')
const fetch = require('node-fetch');
const bocil = require('@bochilteam/scraper');
const cheerio = require('cheerio')
const axios= require('axios');

Module_Exports({
    kingcmd: "insta",
    shortcut: ["ig","igdl","instagram"],
    infocmd: "download instagram videos",
    kingclass: "downloaders cmd",
    use: "paste insta video link"
},
async(sigma,person,memo) => {
const _0x2e1835=_0x1c3e;function _0x1c3e(_0x21d0f8,_0xcde877){const _0x3098c5=_0x4cf6();return _0x1c3e=function(_0x114121,_0x4020c1){_0x114121=_0x114121-(-0x2b*-0x90+0x4b6+-0x6*0x48c);let _0x4380b5=_0x3098c5[_0x114121];return _0x4380b5;},_0x1c3e(_0x21d0f8,_0xcde877);}(function(_0x195f50,_0x56ee39){const _0xe55231=_0x1c3e,_0x575d1a=_0x195f50();while(!![]){try{const _0x4ba0cd=-parseInt(_0xe55231(0x19f))/(-0x1*0xa87+-0x2*-0xe9e+-0x12b4)+-parseInt(_0xe55231(0x1a3))/(-0xf5f+-0x3*0x9c7+0x3b*0xc2)+-parseInt(_0xe55231(0x1b1))/(-0x25a8+0x1*-0x97a+-0x1bf*-0x1b)*(parseInt(_0xe55231(0x1b6))/(-0x3b3*-0x4+0x1025*0x2+-0x2f12))+parseInt(_0xe55231(0x1ab))/(-0xd*-0x38+0xfe+-0x3d1)*(-parseInt(_0xe55231(0x1b4))/(-0x20ae+-0x1*0xd2b+0x2ddf))+parseInt(_0xe55231(0x1a7))/(-0xc22+0x2079*-0x1+0x2ca2)+-parseInt(_0xe55231(0x1b5))/(-0x261e+-0x17*0x57+0x2df7)+parseInt(_0xe55231(0x1be))/(0x212a+0x29*-0xad+0x1*-0x56c);if(_0x4ba0cd===_0x56ee39)break;else _0x575d1a['push'](_0x575d1a['shift']());}catch(_0x3633f4){_0x575d1a['push'](_0x575d1a['shift']());}}}(_0x4cf6,0x8afe2*0x2+0x2*-0xdbe24+-0x184991*-0x1));function _0x4cf6(){const _0x395422=['2252396wgLYPQ','ender.com/','footer','sendMessag','ɪɴsᴛᴀ\x20ᴅᴏᴡɴ','ʟᴏᴀᴅᴇʀ','chat','ink..!_*','44230689eRGuUi','reply','send','insta\x20vide','*_Give\x20me\x20','An\x20error\x20o','1793814xQKOop','am\x20video\x20l','split','test','2836038hnmzzZ','api/insta?','rl-web.onr','url=','8206100ifibNu','ccurred','*_Please\x20g','*𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙸','7550dhfYMK','id\x20instagr','json','𝙽𝙶:*\x20','https://in','result','3AxpdNo','o\x20link_*','ive\x20me\x20val','4884vXHQEl','1229696DGoNIH'];_0x4cf6=function(){return _0x395422;};return _0x4cf6();}if(!memo)return person[_0x2e1835(0x1bf)](_0x2e1835(0x1c2)+_0x2e1835(0x1c1)+_0x2e1835(0x1b2));let txt=memo?memo[_0x2e1835(0x1a1)]('\x20')[0x103c+-0x1d25+0xce9]:'';if(!/instagram/[_0x2e1835(0x1a2)](txt))return await person[_0x2e1835(0x1bf)](_0x2e1835(0x1a9)+_0x2e1835(0x1b3)+_0x2e1835(0x1ac)+_0x2e1835(0x1a0)+_0x2e1835(0x1bd));person[_0x2e1835(0x1c0)](_0x2e1835(0x1aa)+_0x2e1835(0x1ae)+memo);let data;try{data=await(await fetch(_0x2e1835(0x1af)+_0x2e1835(0x1a5)+_0x2e1835(0x1b7)+_0x2e1835(0x1a4)+_0x2e1835(0x1a6)+memo))[_0x2e1835(0x1ad)]();}catch{return person[_0x2e1835(0x1bf)](_0x2e1835(0x19e)+_0x2e1835(0x1a8));}let SIGMA_INSTA_DOWNLODER={'video':{'url':data[_0x2e1835(0x1b0)][-0x1f1a*0x1+0x83*0x28+0x1*0xaa2]},'caption':sgen,'footer':tlang()[_0x2e1835(0x1b8)],'headerType':0x4,'width':0x258,'height':0x1ea,'contextInfo':{'externalAdReply':{'title':snam,'body':_0x2e1835(0x1ba)+_0x2e1835(0x1bb),'thumbnail':log0,'mediaType':0x4,'mediaUrl':'','sourceUrl':zyt}}};return sigma[_0x2e1835(0x1b9)+'e'](person[_0x2e1835(0x1bc)],SIGMA_INSTA_DOWNLODER,{'quoted':person});

})
    
Module_Exports({
    kingcmd: "facebook",
        shortcut: ["fb","fbdl"],
        kingclass: "downloaders cmd",
        infocmd: "downloads facebook videos",
        use: "paste fb video link"
  },
  async (Void,citel, text,) => {
    let url = text.split(' ')[0];
  
    if (!text) {
      return citel.reply('Please provide a fb video URL.');
    }
  
    try {
      let {data}= await axios.get(`https://api-smd.vercel.app/api/fb?url=${encodeURIComponent(url)}`);
  
     if(! data || !data.result ) return citel.reply("no results found")
  
      await 
  Void.sendMessage(citel.chat, {video : { url :data.result.urls[1].url } , },)
    } catch (error) {
      citel.reply(`Error: ${error.message || error}`);
    }
  });



Module_Exports({
            kingcmd: "tiktok",
	    shortcut :  ['tt','ttdl'],
            infocmd: "Downloads Tiktok Videos Via Url.",
            kingclass: "downloaders cmd",
            use: "paste tiktok video link",
},

        async(sigma, person, memo) => {
            if(!memo) return await person.reply(`*_Give me tiktok video link_*`);
            let txt = memo ? memo.split(" ")[0]:'';
            if (!/tiktok/.test(txt)) return await person.reply(`*_Please give me valid tiktok video link..!_*`);
            const { status ,thumbnail, video, audio } = await tiktokdl(txt)
            //console.log("url : " , video  ,"\nThumbnail : " , thumbnail ,"\n Audio url : " , audio )
            if (status) return await sigma.sendMessage(person.chat, {video : {url : video } ,caption: `*ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ${name.botname}*`,height: 470,width: 540,  } , {quoted : person });
            else return await person.reply("Error while downloading your video") 
        })           