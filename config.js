//#ENJOY BRO😍
// Credit: JINHUYK|KangJinhuyk 
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "pierrejacquesfeddly@gmail.com";
global.location = "HINCHE, Haïti";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://paulrick312:rBfEkBv2P9b6LDWH@cluster0.pmmq0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/ChanJinhuyk/JINHUYK-MD-V1";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vajrhmz96H4IsEjh4a41";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vajrhmz96H4IsEjh4a41";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.postimg.cc/sx2KY0mS/JINHUYK-MD-V1.jpg";
global.devs = "https://wa.me/242067274660 , https://wa.me/242065155487";
global.sudo = process.env.SUDO || "50944897043";
global.owner = process.env.OWNER_NUMBER || "50944897043";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://i.postimg.cc/nrsBc8Td/JINHUYK-MD-V0.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "false";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://unknown-md-sessions-generator-1.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUg4WENBMFl3QXE4SkptbmliTDhSTGttMDNqUnFQQVd6aTViSUZPRVhXOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN2xIMmp5UnMreDIzM21zWkxELzAxbzVQWXhDVW1JK0NjWjg1ckFyU1BRTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZTUNES2pGY2FzNGNtK0RrcE9XWGZISk9HNTlNdjlrUmZzQm5BTGx0bEdZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwWENKVjNDeXNZcFBSNmc3b0lMbkFsOC9hSW1pcWNFWDRWaXd5NFZuRURNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlQMVhUbUlkUXlZS2ZxZ21ZcWUxYmpoRnMxbm8reXY2V0NyZ01wWUhXRTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFjQjViQTQ5dzRwTERueXI3NVdJSVZ4STEzaUxERE13VTZJdVFOWnYxQmM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0UyTGhMcDFWVTRycVBmS3VCRXZUQkhhR0g3TG9pRVB0RXh2VUhzcE5Xaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUkvcFhoanZMcldiNG4zUHRzb0VhbGRMV0JaU2ZVK2hOZ2pjMWtKMmV3ST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdyeWduTEhsQ0dvYlNDb2RQcFUrSUE1Nkpzck5iT0lMVk8vY0s5Nk5tT3JuMC9oQjQ4cm10Qmp1MmY2SVplS29Uekw0bFpFOU9hZWJaeFZIcDdOWkF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM1LCJhZHZTZWNyZXRLZXkiOiI4SSs0WU9xQkRuVFI2eWFIcEk1MUF3SWFyTjV4cHBmeWt6aFFONFdKVDZzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJlN2p3U0U1Y1FKYUFyV2FrcW5FT3BRIiwicGhvbmVJZCI6IjE0YTI4NDY0LTYxYjYtNDAxNC1hYmU2LTBhYzQ1YWU1MGJmZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyVHVTcVIwTURHZTJtWVZpOVNXTDhnamsrUDQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZVRURGRCYlRVcGxwMy9iNG1mQlR2alQrTlZZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlRaRExIUDU4IiwibWUiOnsiaWQiOiI1MDk0NDg5NzA0MzoxMkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwkoie6qeCQGzSiHDSiGjSiGHSiPCSiJ7qp4Ig8J2VtvCdlo7wnZaR8J2WkfCdlorwnZaXIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMSG0rejRRNWUzRHZRWVlBaUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI4eEVVbmV6RDMwVCtmUmdMaERyN1ZXQUNSLzlkRjBSaXVla1ZYeHVjK1NZPSIsImFjY291bnRTaWduYXR1cmUiOiIxZWlKcE51ZTYyaDlNTWNpeVlxblFqeFE2WXZZb2x4Ky9JN2ZHbjVlNmh3VXphQ2FneFZmcnlKQWJRTG9mSittRVR5YmczcXJEVUMyUVorQjJZMXFEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiN1pGdW85aW1GekdQVTRhNWFPNitTRFM4M1hiR09kSmxiNlRGMEY3MWF5OWdmeUp6dXc1VzAxVGhUemRqRk1RcHdTVkFjSndFdUgxckhsTVlMWXU1Q3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI1MDk0NDg5NzA0MzoxMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmTVJGSjNzdzk5RS9uMFlDNFE2KzFWZ0FrZi9YUmRFWXJucEZWOGJuUGttIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM5NjUwODAxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJMYSJ9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "F",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF 𝐉𝚰𝚴𝚮𝐘𝐔𝐊`",
  author: process.env.PACK_AUTHER || "🍂𝑭𝑬𝑫𝑫𝑳𝒀🍂",
  packname: process.env.PACK_NAME || "🍂𝑭𝑬𝑫𝑫𝑳𝒀-𝐌𝐃🍂",
  botname: process.env.BOT_NAME || "𝑭𝑬𝑫𝑫𝑳𝒀-𝚳𝐃",
  ownername: process.env.OWNER_NAME || "🍁𝑭𝑬𝑫𝑫𝑳𝒀🍁",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "JINHUYK").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
