import Discord from 'discord.js';
import { SlashCommandBuilder } from "discord.js";

export interface ISlash {
    data: any;
    execute(interaction: Discord.Interaction): Promise<void>;
}