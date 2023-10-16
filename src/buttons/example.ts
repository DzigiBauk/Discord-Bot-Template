import Discord from "discord.js";
import { IButton } from "../utils/interfaces/buttonInterface";

export default class template implements IButton {
    name() {
        return "exampleBTN";
    }

    description() {
        return "Example button.";
    }

    async execute(interaction: Discord.ButtonInteraction) {
        await interaction.deferReply;
        
        let buttonInfo = interaction.customId;
        interaction.reply("Button clicked!");
    }

}