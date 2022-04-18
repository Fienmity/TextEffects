import { Command, EnmitySectionID, ApplicationCommandType, ApplicationCommandInputType, ApplicationCommandOptionType } from "enmity-api/commands";
import lunicode from "lunicode";

const tinyCapsCommand: Command = {
	id: "tinycaps-command",
	applicationId: EnmitySectionID,

	name: "tinycapitals",
	displayName: "tinycapitals",

	description: "Turns your message into capitals and shrinks it",
	displayDescription: "Turns your message into capitals and shrinks it",

	type: ApplicationCommandType.Chat,
	inputType: ApplicationCommandInputType.BuiltInText,

	options: [{
		name: "message",
		displayName: "message",

		description: "Message to turn into tiny capitals",
		displayDescription: "Message to turn into tiny capitals",

		type: ApplicationCommandOptionType.String,
		required: true
	}],

	execute: function (args, _) {
		const message = args[0].value;

		return {
			content: lunicode.tools.tiny.encode(message)
		}
	}
}

export { tinyCapsCommand }
