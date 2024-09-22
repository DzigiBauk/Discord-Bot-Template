const fs = require('node:fs');

import Discord, { Collection, SlashCommandBuilder } from 'discord.js';
import { ISlash } from './interfaces/slashInterface';
import {REST} from 'discord.js';
import { ConfigHandler } from './ConfigHandler';
import { client } from '..';

//Used for deleting commands from Discord
export async function deleteCommand(id: string){
    const rest = new REST().setToken(ConfigHandler.getToken());

    rest.delete(Discord.Routes.applicationCommand(client.user.id, id))
	.then(() => console.log('Successfully deleted application command'))
	.catch(console.error);
}