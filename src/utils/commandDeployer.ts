import Discord, { Collection, SlashCommandBuilder } from 'discord.js'
import { ISlash } from './interfaces/slashInterface';
import {REST} from 'discord.js'
import { ConfigHandler } from './ConfigHandler';
import { client } from '..';

const path = 'slash';
let commands: Array<Discord.RESTPostAPIChatInputApplicationCommandsJSONBody> = [];

export async function deployCommands(commands: Discord.Collection<unknown, unknown>) {
    let list: Array<Discord.RESTPostAPIChatInputApplicationCommandsJSONBody> = [];

    commands.forEach((value, key) => {
        let kom = value as ISlash;
        list.push(kom.data.toJSON());
    });

    const rest = new REST().setToken(ConfigHandler.getToken());

    console.log(`Started refreshing ${commands.size} application (/) commands.`);

    const data = await rest.put(
        Discord.Routes.applicationCommands(client.user.id),
        { body: list },
    );

    console.log(`Successfully reloaded application (/) commands.`);
}