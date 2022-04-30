import { Command, EnmitySectionID, ApplicationCommandType, ApplicationCommandInputType, ApplicationCommandOptionType } from "enmity-api/commands";
import lunicode from "lunicode";

const flipCommand: Command = {
	id: "flip-command",
	applicationId: EnmitySectionID,

	name: "flip",
	displayName: "flip",

	description: "ʇxǝʇ uǝʌıɓ ǝɥʇ sɹoɹɹıɯ puɐ sdılℲ",
	displayDescription: "ʇxǝʇ uǝʌıɓ ǝɥʇ sɹoɹɹıɯ puɐ sdılℲ",

	type: ApplicationCommandType.Chat,
	inputType: ApplicationCommandInputType.BuiltInText,

	options: [{
		name: "text",
		displayName: "text",

		description: "Text to flip",
		displayDescription: "Text to flip",

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
