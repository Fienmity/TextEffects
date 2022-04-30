import { Command, EnmitySectionID, ApplicationCommandType, ApplicationCommandInputType, ApplicationCommandOptionType } from "enmity-api/commands";

const clapCommand: Command = {
	id: "clap-command",
	applicationId: EnmitySectionID,

	name: "clap",
	displayName: "clap",

	description: "Example 👏 text",
	displayDescription: "Example 👏 text",

	type: ApplicationCommandType.Chat,
	inputType: ApplicationCommandInputType.BuiltInText,

	options: [{
		name: "message",
		displayName: "message",

		description: "message to clap",
		displayDescription: "message to clap",

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
