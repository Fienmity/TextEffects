import { Command, EnmitySectionID, ApplicationCommandType, ApplicationCommandInputType, ApplicationCommandOptionType } from "enmity-api/commands";
import lunicode from "lunicode";

const bendCommand: Command = {
	id: "bend-command",
	applicationId: EnmitySectionID,

	name: "bend",
	displayName: "bend",

	description: "ҍҽղժʂ էհҽ çհąɾąçէҽɾ ìղ էհҽ ցìѵҽղ էҽ×է",
	displayDescription: "ҍҽղժʂ էհҽ çհąɾąçէҽɾ ìղ էհҽ ցìѵҽղ էҽ×է",

	type: ApplicationCommandType.Chat,
	inputType: ApplicationCommandInputType.BuiltInText,

	options: [{
		name: "text",
		displayName: "text",

		description: "Text to bend",
		displayDescription: "Text to bend",

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
