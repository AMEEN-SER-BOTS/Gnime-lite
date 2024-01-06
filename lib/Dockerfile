FROM quay.io/maherzubair/sigma-md:beta
RUN git clone https://github.com/Astropeda/Gnime-lite /root/Maher-Zubair/GNIME-LITE
WORKDIR /root/Maher-Zubair/GNIME-LITE/
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
 
 