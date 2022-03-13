const token = process.env['token']
const Aoijs = require("aoi.js")

const bot = new Aoijs.Bot({
  sharding: true,
  ShardAmount: 2,
  token: token,
  prefix: "&"
})
bot.onMessage()

bot.command({
  name: "ping",
  code: ` $ping Pong! `
})


// express Pinglik webserver example code
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(
    "<code>Hello, this project is using <a href='https://pinglik.eu' target='_blank'>Pinglik</a>!</code>"
  );
});

app.listen(port, () => {
  console.log(`📡 Pinglik webserver has started!`);
});

bot.command({
  name: "help",
  code: `$description[&ping \n
  &minfo \n
  &my-avatar \n
&ban UserID \n
&corona-info \n
[Bot Invite](https://discord.com/oauth2/authorize?client_id=891934769661743104&scope=bot&permissions=0)] $footer[if you have any questions feel free to write an email to cayden2138@icloud.com] $color[0x2F3136] $image[https://www.kilinmag.com/wp-content/uploads/2018/10/magia-en-barcelona.jpg]`
})

bot.joinCommand({
        channel: "891775417785139227", //Enter a Channel ID
        code: `<@$authorID> just joined, welcome!` //This can be changed
})
bot.onJoined()

bot.command({
name: "minfo",
code: `$description[[Saphire Media Developement](https://2no.co/2NGAp6.link 'click')] $onlyForIDs[881885639145062470;703976028586115134;:x: You Can't run this command]`
})


bot.variables({
Grab: "false",
Name2: "Value2"
  })


bot.status({
  text: "&help for Help!",
  type: "PLAYING",
  time: 12
})

bot.status({
  text: "a la Magia",
  type: "WATCHING",
  time: 12
})

bot.command({
  name: "my-avatar",
  code: `$image[$authorAvatar]`
})

bot.command({
  name: "ban",
  code: `$ban[$message] $title[success] $footer[if you have any questions, feel free to write an e-mail to cayden2138@icloud.com]`
})

bot.command({
  name: "corona-info",
  code: `$title[Success] $description[[CoronaTracking](https://coronatracking.com)]`
})
