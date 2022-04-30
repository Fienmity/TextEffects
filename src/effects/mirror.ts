import { Command, EnmitySectionID, ApplicationCommandType, ApplicationCommandInputType, ApplicationCommandOptionType } from "enmity-api/commands";
import lunicode from "lunicode";

const mirrorCommand: Command = {
	id: "mirror-command",
	applicationId: EnmitySectionID,

	name: "mirror",
	displayName: "mirror",

	description: "ƚxɘƚ ᴎɘviǫ ɘʜƚ ꙅɿoɿɿiM",
	displayDescription: "ƚxɘƚ ᴎɘviǫ ɘʜƚ ꙅɿoɿɿiM",

	type: ApplicationCommandType.Chat,
	inputType: ApplicationCommandInputType.BuiltInText,

	options: [{
		name: "text",
		displayName: "text",

		description: "Text to mirror",
		displayDescription: "Text to mirror",

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
