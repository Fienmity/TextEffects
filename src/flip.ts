import { Command, EnmitySectionID, ApplicationCommandType, ApplicationCommandInputType, ApplicationCommandOptionType } from "enmity-api/commands";
import lunicode from "lunicode";

const flipCommand: Command = {
	id: "flip-command",
	applicationId: EnmitySectionID,

	name: "flip",
	displayName: "flip",

	description: "Flips and mirrors your message",
	displayDescription: "Flips and mirrors your message",

	type: ApplicationCommandType.Chat,
	inputType: ApplicationCommandInputType.BuiltInText,

	options: [{
		name: "message",
		displayName: "message",

		description: "Message to flip",
		displayDescription: "Message to flip",

		type: ApplicationCommandOptionType.String,
		required: true
	}],

	execute: function (args, _) {
		const message = args[0].value;

		return {
			content: lunicode.tools.flip.encode(message)
		}
	}
}

export { flipCommand }
