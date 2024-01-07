const {Module_Exports ,tlang, cmd, name , prefix,getBuffer,tlang,fetchJson } = require('../lib')
const fetch = require('node-fetch');
const bocil = require('@bochilteam/scraper');
const cheerio = require('cheerio')
const axios= require('axios');
const fbInfoVideo = require('fb-info-video');
//-----------------------------------------------------------------
Module_Exports({
            kingcmd: "facebook",
	    shortcut :  ['fb','fbdl'],
            infocmd: "Downloads fb videos  .",
            kingclass: "downloaders cmd",
            filename: __filename,
            use: '<add fb url.>'
        },

        async(Void, citel, text) => {
if(!text) return citel.reply(`*_Please Give me Facebook Video Url_*`);
fbInfoVideo.getInfo(text)
  .then(info =>{
let vurl=info.video.url_video;

      let data  ="*Video Name     :* "+  info.video.title;
          data +="\n*Video Views    :* "+  info.video.view;
          data +="\n*Video Comments :* "+  info.video.comment;
          data +="\n*Video Likes    :* "+info.video.reaction.Like ;
  
                        let buttonMessage = {
                        video: {url:vurl},
                        mimetype: 'video/mp4',
                        fileName: info.video.title+`.mp4`,
                        caption :"     *FACEBOOK DOWNLOADER*  \n"+data
                        
                    }
                 Void.sendMessage(citel.chat, buttonMessage, { quoted: citel });



})
  .catch(err =>{
            citel.reply("Error, Video Not Found\n *Please Give Me A Valid Url*");
            console.error(err);
          })
 })
