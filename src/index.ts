const fs = require('node:fs');

import Discord from 'discord.js';
import { ISlash } from './utils/interfaces/slashInterface';
import { deployCommands } from './utils/commandDeployer';
import { IButton } from './utils/interfaces/buttonInterface';
import { ConfigHandler } from './utils/ConfigHandler';


//Client + Flags
const client = new Discord.Client({ intents: [ 
    //Discord.GatewayIntentBits.Guilds,
    //Discord.GatewayIntentBits.GuildMessages,
    //Discord.GatewayIntentBits.GuildPresences,
    //Discord.GatewayIntentBits.GuildMembers,
    //Discord.GatewayIntentBits.MessageContent
]});

//Command Collection
let commands = new Discord.Collection();
const commandNameList: string[] = [];

//Button Collection
let buttons = new Discord.Collection();

//Bot Startup
client.on("ready", () => {
    //Deploy the commands to Discord
    deployCommands(commands);

    if (client.user?.username) console.log(`${client.user.username} is up!`);
})


//On Interaction
client.on("interactionCreate", async (interaction: Discord.Interaction) => {
    //On chat interaction
    if (interaction.isChatInputCommand()) {
        const command = commands.get(interaction.commandName) as ISlash;

        //If command does not exist, return
        if (!command) return;

        try {
            //Do command logic
            command.execute(interaction);
        }

        catch {
            console.log("Something went wrong!");
        }
        
    }

    //On button interaction
    if (interaction.isButton()) {
        let interactionID = interaction.customId.split(':')[0];
        const button = buttons.get(interactionID) as ISlash;

        //If button does not exist, return
        if(!button) return;

        //Do button logic
        button.execute(interaction);
    } 

    
})


//Slash Loader
slashLoader('./commands')

//Load all slash commands into cache
function slashLoader(path: string) {
    const allFiles = fs.readdirSync(path);
    const commandFiles = allFiles.filter((file: string) => file.endsWith('js'));

    for (const file of allFiles) {
        if (fs.statSync(path + "/" + file).isDirectory()) {
            slashLoader(path + "/" + file);
        }
    }


    for (const file of commandFiles) {
        const commandClass = require(`${path}/${file}`).default;
        const command = new commandClass() as ISlash;
        let name = command.data.name;
        
        commands.set(name, command);
        commandNameList.push(name);
        console.log(`[!] Command loaded: ${name}`);
    }
}

//Button Loader
buttonLoader(`./buttons`)

//Load all buttons into cache
function buttonLoader(path: string) {
    const allFiles = fs.readdirSync(path);
    const buttonFiles = allFiles.filter((file: string) => file.endsWith('js'));

    for (const file of allFiles) {
        if (fs.statSync(path + "/" + file).isDirectory()) {
            buttonLoader(path + "/" + file);
        }
    }


    for (const file of buttonFiles) {
        const buttonClass = require(`${path}/${file}`).default;
        const button = new buttonClass() as IButton;
        let name = button.name();
        
        buttons.set(name, button);
        console.log(`[!] Button loaded: ${name}`);
    }
}

export { client }



//Bot Login
client.login(ConfigHandler.getToken());