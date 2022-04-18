import { Command, EnmitySectionID, ApplicationCommandType, ApplicationCommandInputType, ApplicationCommandOptionType } from "enmity-api/commands";
import lunicode from "lunicode";

const mirrorCommand: Command = {
	id: "mirror-command",
	applicationId: EnmitySectionID,

	name: "mirror",
	displayName: "mirror",

	description: "Mirrors your message",
	displayDescription: "Mirrors your message",

	type: ApplicationCommandType.Chat,
	inputType: ApplicationCommandInputType.BuiltInText,

	options: [{
		name: "message",
		displayName: "message",

		description: "Message to mirror",
		displayDescription: "Message to mirror",

		type: ApplicationCommandOptionType.String,
		required: true
	}],

	execute: function (args, _) {
		const message = args[0].value;

		return {
			content: lunicode.tools.mirror.encode(message)
		}
	}
}

export { mirrorCommand }
