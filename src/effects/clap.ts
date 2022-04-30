import { Command, EnmitySectionID, ApplicationCommandType, ApplicationCommandInputType, ApplicationCommandOptionType } from "enmity-api/commands";

const clapCommand: Command = {
	id: "clap-command",
	applicationId: EnmitySectionID,

	name: "clap",
	displayName: "clap",

	description: "Claps 👏 the 👏 given 👏 text",
	displayDescription: "Claps 👏 the 👏 given 👏 text",

	type: ApplicationCommandType.Chat,
	inputType: ApplicationCommandInputType.BuiltInText,

	options: [{
		name: "text",
		displayName: "text",

		description: "Text to clap",
		displayDescription: "Text to clap",

		type: ApplicationCommandOptionType.String,
		required: true
	}],

	execute: function (args, _) {
		const message = args[0].value;
		return {
			// @ts-ignore
			content: message.replaceAll(" ", " 👏 ")
		}
	}
}

export { clapCommand };
