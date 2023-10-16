import Discord from "discord.js";
import { IButton } from "../utils/interfaces/buttonInterface";

export default class template implements IButton {
    name() {
        return "template";
    }

    description() {
        return "template";
    }

    async execute(interaction: Discord.ButtonInteraction) {
        await interaction.deferReply;
        
        let buttonInfo = interaction.customId;

    }

}