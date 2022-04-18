import { Command, EnmitySectionID, ApplicationCommandType, ApplicationCommandInputType, ApplicationCommandOptionType } from "enmity-api/commands";
import lunicode from "lunicode";

const bubbleCommand: Command = {
	id: "bubble-command",
	applicationId: EnmitySectionID,

	name: "bubble",
	displayName: "bubble",

	description: "Puts each character in your message into a bubble",
	displayDescription: "Puts each character in your message into a bubble",

	type: ApplicationCommandType.Chat,
	inputType: ApplicationCommandInputType.BuiltInText,

	options: [{
		name: "message",
		displayName: "message",

		description: "Message to make each character bubbled",
		displayDescription: "Message to make each character bubbled",

		type: ApplicationCommandOptionType.String,
		required: true
	}],

	execute: function (args, _) {
		const message = args[0].value;

		return {
			content: lunicode.tools.bubbles.encode(message)
		}
	}
}

export { bubbleCommand }
