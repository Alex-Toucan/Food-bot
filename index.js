const Discord = require('discord.js');
const request = require('request');
const fetch = require('node-fetch');
require('dotenv-flow').config();

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

var prefix = '!!';

const aboutembed = {
    title: "About",
    description: "This is a Food Bot made by AT Products.",
    color: 0xc49016,
    footer: {
        icon_url: 'https://raw.githubusercontent.com/Alex-Toucan/Food-bot/master/files/7db2bbb28052dd67ab32a395cd5eadbe.webp',
        text: "AT Products LLC (2019-2022)"
    },
    thumbnail: {
        url: 'https://raw.githubusercontent.com/Alex-Toucan/Food-bot/4b95b8e835d71a58e64a88f0a6b77babd4a1f021/files/avatar.jpeg'
    },
    author: {
        name: "By AlexToucanYT#0001",
        icon_url: 'https://raw.githubusercontent.com/Alex-Toucan/Food-bot/4b95b8e835d71a58e64a88f0a6b77babd4a1f021/files/avatar.jpeg'
    },
    fields: [
        {
            name: "Invite me!",
            value: "Invite me using https://discord.com/oauth2/authorize?client_id=968854386363211796&scope=bot&permissions=67488832"
        },
        {
            name: "Comments?",
            value: "DM **AlexToucanYT#0001**... or make a discuss at the link below!"
        },
        {
            name: "The bot is open source!",
            value: "Contribute or make a issue at https://github.com/Alex-Toucan/useless-toast-bot"
        },
        {
            name: "Commands",
            value: "https://raw.githubusercontent.com/Alex-Toucan/Food-bot/master/files/commands.txt"
        }
    ]
};

const config = {
  token: process.env.TOKEN,
}

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 client.user.setActivity('people ask for food.', {type: "WATCHING"})
 });


client.on('message', msg => {
  if(msg.content.toLowerCase() === `${prefix}help`) {
      msg.reply({ embeds: [aboutembed] });
    }
 });

client.on('message', msg => {
  if (msg.content === `${prefix}guildcache`) {
      console.log(client.guilds.cache);
      msg.reply('The guild cache is posted onto Node.js client.');
  }
})

client.on('message', msg => {
    if (msg.content === `${prefix}userscache`) {
        console.log(client.users.cache);
        msg.reply('The users cache is posted onto Node.js client.');
    }
})

client.on('message', msg => {
    if (msg.content === `${prefix}channelscache`) {
        console.log(client.channels.cache);
        msg.reply('The channels cache is posted onto Node.js client.');
    }
})


client.on('message', msg => {
  if(msg.content.toLowerCase() == `${prefix}toast`) {
    fetch(`https://source.unsplash.com/1600x900/?toast`).then((response) => {
      msg.reply(response.url)
      console.log("Toast Requested By " + msg.author.tag);
     });
    if(msg.content.toLowerCase() == `${prefix}toast`)
    msg.react('969787192341839883')
     }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}apple`) {
        fetch(`https://source.unsplash.com/1600x900/?apple`).then((response) => {
            msg.reply(response.url)
            console.log("Apple Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}apple`)
            msg.react('🍎')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}banana`) {
        fetch(`https://source.unsplash.com/1600x900/?banana`).then((response) => {
            msg.reply(response.url)
            console.log("Banana Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}banana`)
            msg.react('🍌')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}strawberry`) {
        fetch(`https://source.unsplash.com/1600x900/?strawberry`).then((response) => {
            msg.reply(response.url)
            console.log("Strawberry Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}strawberry`)
            msg.react('🍓')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}lime`) {
        fetch(`https://source.unsplash.com/1600x900/?lime`).then((response) => {
            msg.reply(response.url)
            console.log("Lime Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}lime`)
            msg.react('970087186584191078')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}lemon`) {
        fetch(`https://source.unsplash.com/1600x900/?lemon`).then((response) => {
            msg.reply(response.url)
            console.log("Lemon Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}lemon`)
            msg.react('🍋')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}blueberry`) {
        fetch(`https://source.unsplash.com/1600x900/?blueberry`).then((response) => {
            msg.reply(response.url)
            console.log("Blueberry Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}blueberry`)
            msg.react('970089519649026098')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}blackberry`) {
        fetch(`https://source.unsplash.com/1600x900/?blackberry`).then((response) => {
            msg.reply(response.url)
            console.log("Blackberry Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}blackberry`)
            msg.react('970099283812556840')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}raspberry`) {
        fetch(`https://source.unsplash.com/1600x900/?raspberry`).then((response) => {
            msg.reply(response.url)
            console.log("Raspberry Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}raspberry`)
            msg.react('970099876593553488')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}peach`) {
        fetch(`https://source.unsplash.com/1600x900/?nectarine`).then((response) => {
            msg.reply(response.url)
            console.log("Peach Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}peach`)
            msg.react('🍑')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}mango`) {
        fetch(`https://source.unsplash.com/1600x900/?mango`).then((response) => {
            msg.reply(response.url)
            console.log("Mango Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}mango`)
            msg.react('🥭')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}tomato`) {
        fetch(`https://source.unsplash.com/1600x900/?tomato`).then((response) => {
            msg.reply(response.url)
            console.log("Tomato Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}tomato`)
            msg.react('🍅')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}avocado`) {
        fetch(`https://source.unsplash.com/1600x900/?avocado`).then((response) => {
            msg.reply(response.url)
            console.log("Avocado Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}avocado`)
            msg.react('🥑')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}pear`) {
        fetch(`https://source.unsplash.com/1600x900/?pear`).then((response) => {
            msg.reply(response.url)
            console.log("Pear Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}pear`)
            msg.react('🍐')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}kiwi`) {
        fetch(`https://source.unsplash.com/1600x900/?kiwi`).then((response) => {
            msg.reply(response.url)
            console.log("Kiwi Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}kiwi`)
            msg.react('🥝')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}cherries`) {
        fetch(`https://source.unsplash.com/1600x900/?cherries`).then((response) => {
            msg.reply(response.url)
            console.log("Cherries Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}cherries`)
            msg.react('🍒')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}coconut`) {
        fetch(`https://source.unsplash.com/1600x900/?coconut`).then((response) => {
            msg.reply(response.url)
            console.log("Coconut Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}coconut`)
            msg.react('🥥')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}melon`) {
        fetch(`https://source.unsplash.com/1600x900/?melon`).then((response) => {
            msg.reply(response.url)
            console.log("Melon Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}melon`)
            msg.react('🍈')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}watermelon`) {
        fetch(`https://source.unsplash.com/1600x900/?watermelon`).then((response) => {
            msg.reply(response.url)
            console.log("Watermelon Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}watermelon`)
            msg.react('🍉')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}pineapple`) {
        fetch(`https://source.unsplash.com/1600x900/?pineapple`).then((response) => {
            msg.reply(response.url)
            console.log("Pineapple Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}pineapple`)
            msg.react('🍍')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}orange`) {
        fetch(`https://source.unsplash.com/1600x900/?orange`).then((response) => {
            msg.reply(response.url)
            console.log("Orange Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}orange`)
            msg.react('🍊')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}grapes`) {
        fetch(`https://source.unsplash.com/1600x900/?grapes`).then((response) => {
            msg.reply(response.url)
            console.log("Grapes Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}grapes`)
            msg.react('🍇')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}lettuce`) {
        fetch(`https://source.unsplash.com/1600x900/?lettuce`).then((response) => {
            msg.reply(response.url)
            console.log("Lettuce Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}lettuce`)
            msg.react('🥬')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}lettuce`) {
        fetch(`https://source.unsplash.com/1600x900/?lettuce`).then((response) => {
            msg.reply(response.url)
            console.log("Lettuce Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}lettuce`)
            msg.react('970136534554644572')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}potato`) {
        fetch(`https://source.unsplash.com/1600x900/?potato`).then((response) => {
            msg.reply(response.url)
            console.log("Potato Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}potato`)
            msg.react('🥔')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}eggplant`) {
        fetch(`https://source.unsplash.com/1600x900/?eggplant`).then((response) => {
            msg.reply(response.url)
            console.log("Eggplant Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}eggplant`)
            msg.react('🍆')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}corn`) {
        fetch(`https://source.unsplash.com/1600x900/?corn`).then((response) => {
            msg.reply(response.url)
            console.log("Corn Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}corn`)
            msg.react('🌽')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}broccoli`) {
        fetch(`https://source.unsplash.com/1600x900/?broccoli`).then((response) => {
            msg.reply(response.url)
            console.log("Broccoli Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}broccoli`)
            msg.react('🥦')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}cucumber`) {
        fetch(`https://source.unsplash.com/1600x900/?cucumber`).then((response) => {
            msg.reply(response.url)
            console.log("Cucumber Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}cucumber`)
            msg.react('🥒')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}pepper`) {
        fetch(`https://source.unsplash.com/1600x900/?pepper`).then((response) => {
            msg.reply(response.url)
            console.log("Pepper Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}pepper`)
            msg.react('🌶️')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}onion`) {
        fetch(`https://source.unsplash.com/1600x900/?onion`).then((response) => {
            msg.reply(response.url)
            console.log("Onion Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}onion`)
            msg.react('🧅')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}garlic`) {
        fetch(`https://source.unsplash.com/1600x900/?garlic`).then((response) => {
            msg.reply(response.url)
            console.log("Garlic Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}garlic`)
            msg.react('🧄')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}mushroom`) {
        fetch(`https://source.unsplash.com/1600x900/?mushroom`).then((response) => {
            msg.reply(response.url)
            console.log("Mushroom Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}mushroom`)
            msg.react('🍄')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}pumpkin`) {
        fetch(`https://source.unsplash.com/1600x900/?pumpkin`).then((response) => {
            msg.reply(response.url)
            console.log("Pumpkin Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}pumpkin`)
            msg.react('🎃')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}peanuts`) {
        fetch(`https://source.unsplash.com/1600x900/?peanuts`).then((response) => {
            msg.reply(response.url)
            console.log("Peanuts Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}peanuts`)
            msg.react('🥜')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}chestnut`) {
        fetch(`https://source.unsplash.com/1600x900/?chestnut`).then((response) => {
            msg.reply(response.url)
            console.log("Chestnut Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}chestnut`)
            msg.react('🌰')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}beans`) {
        fetch(`https://source.unsplash.com/1600x900/?beans`).then((response) => {
            msg.reply(response.url)
            console.log("Beans Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}beans`)
            msg.react('970145028863316078')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}bread`) {
        fetch(`https://source.unsplash.com/1600x900/?bread`).then((response) => {
            msg.reply(response.url)
            console.log("Bread Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}bread`)
            msg.react('🍞')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}baguette`) {
        fetch(`https://source.unsplash.com/1600x900/?baguette`).then((response) => {
            msg.reply(response.url)
            console.log("Baguette Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}baguette`)
            msg.react('🥖')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}flatbread`) {
        fetch(`https://source.unsplash.com/1600x900/?flatbread`).then((response) => {
            msg.reply(response.url)
            console.log("Flatbread Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}flatbread`)
            msg.react('970146433942560808')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}pretzel`) {
        fetch(`https://source.unsplash.com/1600x900/?pretzel`).then((response) => {
            msg.reply(response.url)
            console.log("Pretzel Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}pretzel`)
            msg.react('🥨')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}bagel`) {
        fetch(`https://source.unsplash.com/1600x900/?bagel`).then((response) => {
            msg.reply(response.url)
            console.log("Bagel Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}bagel`)
            msg.react('🥯')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}pancakes`) {
        fetch(`https://source.unsplash.com/1600x900/?pancakes`).then((response) => {
            msg.reply(response.url)
            console.log("Pancakes Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}pancakes`)
            msg.react('🥞')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}waffles`) {
        fetch(`https://source.unsplash.com/1600x900/?waffles`).then((response) => {
            msg.reply(response.url)
            console.log("Waffles Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}waffles`)
            msg.react('🧇')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}icecream`) {
        fetch(`https://source.unsplash.com/1600x900/?icecream`).then((response) => {
            msg.reply(response.url)
            console.log("Ice Cream Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}icecream`)
            msg.react('🍦')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}shavedice`) {
        fetch(`https://source.unsplash.com/1600x900/?shavedice`).then((response) => {
            msg.reply(response.url)
            console.log("Shaved Ice Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}shavedice`)
            msg.react('🍧')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}donut` || msg.content.toLowerCase() == `${prefix}doughnut` ) {
        fetch(`https://source.unsplash.com/1600x900/?donut`).then((response) => {
            msg.reply(response.url)
            console.log("Donut Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}donut` || msg.content.toLowerCase() == `${prefix}doughnut` )
            msg.react('🍩')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}cookie`) {
        fetch(`https://source.unsplash.com/1600x900/?cookie`).then((response) => {
            msg.reply(response.url)
            console.log("Cookie Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}cookie`)
            msg.react('🍪')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}cake`) {
        fetch(`https://source.unsplash.com/1600x900/?cake`).then((response) => {
            msg.reply(response.url)
            console.log("Cake Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}cake`)
            msg.react('🍰')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}pie`) {
        fetch(`https://source.unsplash.com/1600x900/?pie`).then((response) => {
            msg.reply(response.url)
            console.log("Pie Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}pie`)
            msg.react('🥧')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}chocolate`) {
        fetch(`https://source.unsplash.com/1600x900/?chocolate`).then((response) => {
            msg.reply(response.url)
            console.log("Chocolate Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}chocolate`)
            msg.react('🍫')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}lollipop`) {
        fetch(`https://source.unsplash.com/1600x900/?lollipop`).then((response) => {
            msg.reply(response.url)
            console.log("Lollipop Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}lollipop`)
            msg.react('🍭')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}custard`) {
        fetch(`https://source.unsplash.com/1600x900/?custard`).then((response) => {
            msg.reply(response.url)
            console.log("Custard Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}custard`)
            msg.react('🍮')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}soda`) {
        fetch(`https://source.unsplash.com/1600x900/?soda`).then((response) => {
            msg.reply(response.url)
            console.log("Soda Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}soda`)
            msg.react('🥤')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}water`) {
        fetch(`https://source.unsplash.com/1600x900/?water`).then((response) => {
            msg.reply(response.url)
            console.log("Water Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}water`)
            msg.react('💧')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}juice`) {
        fetch(`https://source.unsplash.com/1600x900/?juice`).then((response) => {
            msg.reply(response.url)
            console.log("Juice Requested by" + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}juice`)
            msg.react('🧃')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}beer`) {
        fetch(`https://source.unsplash.com/1600x900/?beer`).then((response) => {
            msg.reply(response.url)
            console.log("Beer Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}beer`)
            msg.react('🍺')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}wine`) {
        fetch(`https://source.unsplash.com/1600x900/?wine`).then((response) => {
            msg.reply(response.url)
            console.log("Winer Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}wine`)
            msg.react('🍷')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}cocktail`) {
        fetch(`https://source.unsplash.com/1600x900/?cocktail`).then((response) => {
            msg.reply(response.url)
            console.log("Cocktail Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}cocktail`)
            msg.react('🍸')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}milk`) {
        fetch(`https://source.unsplash.com/1600x900/?milk`).then((response) => {
            msg.reply(response.url)
            console.log("Milk Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}milk`)
            msg.react('🥛')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}cheese`) {
        fetch(`https://source.unsplash.com/1600x900/?cheese`).then((response) => {
            msg.reply(response.url)
            console.log("Cheese Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}cheese`)
            msg.react('🧀')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}egg`) {
        fetch(`https://source.unsplash.com/1600x900/?egg`).then((response) => {
            msg.reply(response.url)
            console.log("Egg Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}egg`)
            msg.react('🥚')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}bacon`) {
        fetch(`https://source.unsplash.com/1600x900/?bacon`).then((response) => {
            msg.reply(response.url)
            console.log("Bacon Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}bacon`)
            msg.react('🥓')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}ham`) {
        fetch(`https://source.unsplash.com/1600x900/?ham`).then((response) => {
            msg.reply(response.url)
            console.log("Ham Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}ham`)
            msg.react('🍖')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}chicken`) {
        fetch(`https://source.unsplash.com/1600x900/?chicken`).then((response) => {
            msg.reply(response.url)
            console.log("Chicken Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}chicken`)
            msg.react('🍗')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}steak`) {
        fetch(`https://source.unsplash.com/1600x900/?steak`).then((response) => {
            msg.reply(response.url)
            console.log("Steak Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}steak`)
            msg.react('🥩')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}burger`) {
        fetch(`https://source.unsplash.com/1600x900/?burger`).then((response) => {
            msg.reply(response.url)
            console.log("Burger Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}burger`)
            msg.react('🍔')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}frenchfries` || msg.content.toLowerCase() == `${prefix}fries`) {
        fetch(`https://source.unsplash.com/1600x900/?fries`).then((response) => {
            msg.reply(response.url)
            console.log("Fries Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}frenchfires` || msg.content.toLowerCase() == `${prefix}fries`)
            msg.react('🍟')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}pizza`) {
        fetch(`https://source.unsplash.com/1600x900/?pizza`).then((response) => {
            msg.reply(response.url)
            console.log("Pizza Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}pizza`)
            msg.react('🍕')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}hotdog`) {
        fetch(`https://source.unsplash.com/1600x900/?hotdog`).then((response) => {
            msg.reply(response.url)
            console.log("Hotdog Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}hotdog`)
            msg.react('🌭')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}sandwich`) {
        fetch(`https://source.unsplash.com/1600x900/?sandwich`).then((response) => {
            msg.reply(response.url)
            console.log("Sandwich Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}sandwich`)
            msg.react('🥪')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}taco`) {
        fetch(`https://source.unsplash.com/1600x900/?taco`).then((response) => {
            msg.reply(response.url)
            console.log("Taco Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}taco`)
            msg.react('🌮')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}burrito`) {
        fetch(`https://source.unsplash.com/1600x900/?burrito`).then((response) => {
            msg.reply(response.url)
            console.log("Burrito Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}burrito`)
            msg.react('🌯')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}salad`) {
        fetch(`https://source.unsplash.com/1600x900/?salad`).then((response) => {
            msg.reply(response.url)
            console.log("Salad Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}v`)
            msg.react('🥗')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}popcorn`) {
        fetch(`https://source.unsplash.com/1600x900/?popcorn`).then((response) => {
            msg.reply(response.url)
            console.log("Popcorn Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}popcorn`)
            msg.react('🍿')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}rice`) {
        fetch(`https://source.unsplash.com/1600x900/?rice`).then((response) => {
            msg.reply(response.url)
            console.log("Rice Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}rice`)
            msg.react('🍚')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}spaghetti`) {
        fetch(`https://source.unsplash.com/1600x900/?spaghetti`).then((response) => {
            msg.reply(response.url)
            console.log("Spaghetti Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}spaghetti`)
            msg.react('🍝')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}curry`) {
        fetch(`https://source.unsplash.com/1600x900/?curry`).then((response) => {
            msg.reply(response.url)
            console.log("Curry Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}curry`)
            msg.react('🍛')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}shrimp`) {
        fetch(`https://source.unsplash.com/1600x900/?shrimp`).then((response) => {
            msg.reply(response.url)
            console.log("Shrimp Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}shrimp`)
            msg.react('🍤')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}coffee`) {
        fetch(`https://source.unsplash.com/1600x900/?coffee`).then((response) => {
            msg.reply(response.url)
            console.log("Coffee Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}coffee`)
            msg.react('☕')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}oyster`) {
        fetch(`https://source.unsplash.com/1600x900/?oyster`).then((response) => {
            msg.reply(response.url)
            console.log("Oyster Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}oyster`)
            msg.react('🦪')
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == `${prefix}tea`) {
        fetch(`https://source.unsplash.com/1600x900/?tea`).then((response) => {
            msg.reply(response.url)
            console.log("Tea Requested By " + msg.author.tag);
        });
        if (msg.content.toLowerCase() == `${prefix}tea`)
            msg.react('🍵')
    }
});


client.login(config.token);
