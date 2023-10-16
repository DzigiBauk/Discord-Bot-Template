const fs = require('node:fs');
const config = require('../../config.json')

import Discord, { Collection, SlashCommandBuilder } from 'discord.js'
import { ISlash } from './interfaces/slashInterface';
import {REST} from 'discord.js'

const path = 'slash';
let commands: Array<Discord.RESTPostAPIChatInputApplicationCommandsJSONBody> = [];

export async function deployCommands(commands: Discord.Collection<unknown, unknown>) {
    let list: Array<Discord.RESTPostAPIChatInputApplicationCommandsJSONBody> = [];

    commands.forEach((value, key) => {
        let kom = value as ISlash;
        list.push(kom.data.toJSON());
    });

    const rest = new REST().setToken(config.token);

    console.log(`Started refreshing ${commands.size} application (/) commands.`);

    const data = await rest.put(
        Discord.Routes.applicationCommands(config.client_id),
        { body: list },
    );

    console.log(`Successfully reloaded application (/) commands.`);
}