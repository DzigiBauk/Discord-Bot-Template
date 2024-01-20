export class ConfigHandler {
    static readonly config = require('../../config.json');

    static getToken() {
        return process.env.TOKEN || this.config.token;
    } 
}