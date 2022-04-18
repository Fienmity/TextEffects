import { Command, EnmitySectionID, ApplicationCommandType, ApplicationCommandInputType, ApplicationCommandOptionType } from "enmity-api/commands";
import lunicode from "lunicode";

const bendCommand: Command = {
	id: "bend-command",
	applicationId: EnmitySectionID,

	name: "bend",
	displayName: "bend",

	description: "Bends the characters in your message",
	displayDescription: "Bends the characters in your message",

	type: ApplicationCommandType.Chat,
	inputType: ApplicationCommandInputType.BuiltInText,

	options: [{
		name: "message",
		displayName: "message",

		description: "Message to bend",
		displayDescription: "Message to bend",

		type: ApplicationCommandOptionType.String,
		required: true
	}],

	execute: function (args, _) {
		const message = args[0].value;

		return {
			content: lunicode.tools.bent.encode(message)
		}
	}
}

export { bendCommand }
