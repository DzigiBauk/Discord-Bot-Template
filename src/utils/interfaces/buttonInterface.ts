import Discord from 'discord.js'

export interface IButton {
    name(): string;
    description(): string;
    execute(interaction: Discord.Interaction): void;
}