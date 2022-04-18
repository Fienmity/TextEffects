import { Command, EnmitySectionID, ApplicationCommandType, ApplicationCommandInputType, ApplicationCommandOptionType } from "enmity-api/commands";
import lunicode from "lunicode";

const zalgoCommand: Command = {
	id: "zalgo-command",
	applicationId: EnmitySectionID,

	name: "zalgo",
	displayName: "zalgo",

	description: "Unleash zalgo in your messsages",
	displayDescription: "Unleash zalgo in your messsages",

	type: ApplicationCommandType.Chat,
	inputType: ApplicationCommandInputType.BuiltInText,

	options: [{
		name: "message",
		displayName: "message",

		description: "Message to unleash zalgo in",
		displayDescription: "Message to unleash zalgo in",

		type: ApplicationCommandOptionType.String,
		required: true
	}],

	execute: function (args, _) {
		const message = args[0].value;

		return {
			content: lunicode.tools.creepify.encode(message)
		}
	}
}

export { zalgoCommand }
