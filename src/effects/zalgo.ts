import { Command, EnmitySectionID, ApplicationCommandType, ApplicationCommandInputType, ApplicationCommandOptionType } from "enmity-api/commands";
import lunicode from "lunicode";

const zalgoCommand: Command = {
	id: "zalgo-command",
	applicationId: EnmitySectionID,

	name: "zalgo",
	displayName: "zalgo",

	description: "u̶̓̀ṉ̷̚ĺ̴̨e̶͒̔a̴͋̈́ś̸̋h̷͒̉e̸̒͘s̸̀̒ ̴̈́͐z̵̀͋ǎ̷͑l̶̖̔g̷̔̍o̴̓͛ ̴͐͆i̴̇̍n̷͑͑ ̴̇̎t̸̽̔h̸̋̈ẽ̴̉ ̷͂̆g̷͐̌i̸̅̄v̶͐̽e̸͑͛n̷͆͝ ̷̊́t̵̋̈́e̴̐̕x̵̒̈t̴̀͝",
	displayDescription: "u̶̓̀ṉ̷̚ĺ̴̨e̶͒̔a̴͋̈́ś̸̋h̷͒̉e̸̒͘s̸̀̒ ̴̈́͐z̵̀͋ǎ̷͑l̶̖̔g̷̔̍o̴̓͛ ̴͐͆i̴̇̍n̷͑͑ ̴̇̎t̸̽̔h̸̋̈ẽ̴̉ ̷͂̆g̷͐̌i̸̅̄v̶͐̽e̸͑͛n̷͆͝ ̷̊́t̵̋̈́e̴̐̕x̵̒̈t̴̀͝",

	type: ApplicationCommandType.Chat,
	inputType: ApplicationCommandInputType.BuiltInText,

	options: [{
		name: "text",
		displayName: "text",

		description: "Text to unleash zalgo in",
		displayDescription: "Text to unleash zalgo in",

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
