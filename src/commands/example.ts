import Discord, { ButtonStyle } from 'discord.js';
import { ISlash } from "../utils/interfaces/slashInterface";
import { ActionRowBuilder, ButtonBuilder, SlashCommandBuilder } from '@discordjs/builders'

export default class ping implements ISlash {
    data = new SlashCommandBuilder()
        .setName('example')
        .setDescription('Example command.')
        .addStringOption(option => 
            option.setName('input')   
            .setDescription('Input to echo back') 
        );

	async execute(interaction: Discord.ChatInputCommandInteraction) {
        let input = interaction.options.getString('input');

        //Building the button
        const exampleButton = new ButtonBuilder()
            .setCustomId(`exampleBTN`)  //Custom ID = Name of button in the button file
            .setLabel('Click me!')
            .setStyle(ButtonStyle.Success);

        const buttonrow = new ActionRowBuilder<ButtonBuilder>()
        .addComponents(exampleButton);

		await interaction.reply({ content: `Wow, this command works! Your argument was + ${input}`, components: [buttonrow]} );
	}
}