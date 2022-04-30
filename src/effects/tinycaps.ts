import { Command, EnmitySectionID, ApplicationCommandType, ApplicationCommandInputType, ApplicationCommandOptionType } from "enmity-api/commands";
import lunicode from "lunicode";

const tinyCapsCommand: Command = {
	id: "tinycaps-command",
	applicationId: EnmitySectionID,

	name: "tinycapitals",
	displayName: "tinycapitals",

	description: "ᴄᴀᴘɪᴛᴀʟɪᴢᴇꜱ ʏᴏᴜʀ ᴛᴇxᴛ ᴀɴᴅ ꜱʜʀɪɴᴋꜱ ɪᴛ",
	displayDescription: "ᴄᴀᴘɪᴛᴀʟɪᴢᴇꜱ ʏᴏᴜʀ ᴛᴇxᴛ ᴀɴᴅ ꜱʜʀɪɴᴋꜱ ɪᴛ",

	type: ApplicationCommandType.Chat,
	inputType: ApplicationCommandInputType.BuiltInText,

	options: [{
		name: "text",
		displayName: "text",

		description: "Text to turn into tiny capitals",
		displayDescription: "Text to turn into tiny capitals",

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
