// Owoify was done by beerpiss (https://github.com/beerpiss). Thanks beerpiss for letting me include it in TextEffects :)
import { Command, EnmitySectionID, ApplicationCommandInputType, ApplicationCommandOptionType, ApplicationCommandType } from "enmity-api/commands";
import owoify from "owoify-js";

const owoifyCommand: Command = {
	id: "owoify-command",
	applicationId: EnmitySectionID,

	name: "owoify",
	displayName: "owoify",

	description: "hewwowo ^w^ i am ywouw wowowst nyightmawe",
	displayDescription: "hewwowo ^w^ i am ywouw wowowst nyightmawe",

	type: ApplicationCommandType.Chat,
	inputType: ApplicationCommandInputType.BuiltInText,

	options: [
		{
			name: "text",
			displayName: "text",

			description: "text twowo send",
			displayDescription: "text twowo send",

			type: ApplicationCommandOptionType.String,
			required: true
		},
		{
			name: "level",
			displayName: "level",

			description: "teh wewew twowo cuwse ywowouw text wif",
			displayDescription: "teh wewew twowo cuwse ywowouw text wif",

			type: ApplicationCommandOptionType.String,
			required: false,
			choices: [
				{
					name: "owo",
					displayName: "owo",
					value: "owo"
				},
				{
					name: "uwu",
					displayName: "uwu",
					value: "uwu"
				},
				{
					name: "uvu",
					displayName: "uvu",
					value: "uvu"
				}
			]
		}
	],

	execute: function (args, message) {
		const text = args[0].value;
		const level = args[1]?.value ?? "owo";

		return {
			content: owoify(text, level)
		};
	}
}

export { owoifyCommand }
