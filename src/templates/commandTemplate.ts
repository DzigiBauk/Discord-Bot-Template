import Discord from 'discord.js';
import { ISlash } from "../utils/interfaces/slashInterface";
import { SlashCommandBuilder } from '@discordjs/builders'

export default class template implements ISlash {
    data = new SlashCommandBuilder()
        .setName('template')
        .setDescription('template description')
        .addStringOption(option => 
            option.setName('input')   
            .setDescription('Input to echo back') 
        );

	async execute(interaction: Discord.ChatInputCommandInteraction) {
        let input = interaction.options.getString('input');
		await interaction.reply(input);
	}
}