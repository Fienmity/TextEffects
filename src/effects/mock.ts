import { Command, EnmitySectionID, ApplicationCommandType, ApplicationCommandInputType, ApplicationCommandOptionType } from "enmity-api/commands";

function isLetter(c) {
	return c.toLowerCase() != c.toUpperCase();
}

function mock(str) {
	var lastChar = true;
	const chars = str.split('');
	var mocked = "";

	for (let i = 0; i < str.length; i++) {
		if (isLetter(chars[i])) {
			if (!lastChar) {
				mocked += chars[i].toUpperCase();
				lastChar = !lastChar
			} else {
				mocked += chars[i].toLowerCase();
				lastChar = !lastChar
			}
		} else {
			mocked += chars[i]
		}
	}

	return mocked
}

const mockCommand: Command = {
	id: "mock-command",
	applicationId: EnmitySectionID,

	name: "mock",
	displayName: "mock",

	description: "eXaMpLe TeXt",
	displayDescription: "eXaMpLe TeXt",

	type: ApplicationCommandType.Chat,
	inputType: ApplicationCommandInputType.BuiltInText,

	options: [{
		name: "message",
		displayName: "message",

		description: "message to mock",
		displayDescription: "message to mock",

		type: ApplicationCommandOptionType.String,
		required: true
	}],

	execute: function (args, _) {
		const message = args[0].value;
		return {
			content: mock(message)
		}
	}
}

export { mockCommand };
