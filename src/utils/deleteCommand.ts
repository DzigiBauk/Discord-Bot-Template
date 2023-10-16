const fs = require('node:fs');
const config = require('../../config.json');

import Discord, { Collection, SlashCommandBuilder } from 'discord.js';
import { ISlash } from './interfaces/slashInterface';
import {REST} from 'discord.js';

//Used for deleting commands from Discord
export async function deleteCommand(id: string){
    const rest = new REST().setToken(config.token);

    rest.delete(Discord.Routes.applicationCommand(config.client_id, id))
	.then(() => console.log('Successfully deleted application command'))
	.catch(console.error);
}