// Emojipasta was done by beerpiss (https://github.com/beerpiss). Thanks beerpiss for letting me include it in TextEffects :)
import { Command, EnmitySectionID, ApplicationCommandType, ApplicationCommandInputType, ApplicationCommandOptionType } from "enmity-api/commands";
import { emoji_mappings } from "./emoji-mappings";

const MAX_EMOJIS_PER_BLOCK = 2;

export function generateEmojipasta(text: string): string {
    let blocks = splitIntoBlocks(text);
    let newBlocks = [];
    blocks.forEach(block => {
        newBlocks.push(block);
        let emojis = generateEmojisFrom(block);
        if (emojis) {
            newBlocks.push(" " + emojis);
        }
    });
    return newBlocks.join("");
}

function splitIntoBlocks(text: string): RegExpMatchArray {
    return text.match(/\s*[^\s]*/g);
}

function generateEmojisFrom(block: string): string {
    var trimmedBlock = trimNonAlphanumericalChars(block);
    var matchingEmojis = getMatchingEmojis(trimmedBlock);
    var emojis = [];
    if (matchingEmojis) {
        var numEmojis = Math.floor(Math.random() * (MAX_EMOJIS_PER_BLOCK + 1));
        for (var i = 0; i < numEmojis; i++) {
            emojis.push(matchingEmojis[Math.floor(Math.random() * matchingEmojis.length)]);
        }
    }
    return emojis.join("");
}

function trimNonAlphanumericalChars(text: string): string {
    return text.replace(/^\W*/, "").replace(/\W*$/, "");
}

function getMatchingEmojis(word: string): string[] {
    var key = String(getAlphanumericPrefix(word.toLowerCase()));
    if (key in emoji_mappings) {
        return emoji_mappings[key];
    }
    return [];
}

function getAlphanumericPrefix(s: string): RegExpMatchArray {
    return s.match(/^[a-z0-9]*/i);
}

const emojipastaCommand: Command = {
    id: "emojipasta-command",
    applicationId: EnmitySectionID,

    name: "emojipasta",
    displayName: "emojipasta",

    description: "Generates an emojipasta from ▶👉 the 👏👘 given 👈👤 text. 😱",
    displayDescription: "Generates an emojipasta from ▶👉 the 👏👘 given 👈👤 text. 😱",

    type: ApplicationCommandType.Chat,
    inputType: ApplicationCommandInputType.BuiltInText,

    options: [
        {
            name: "text",
            displayName: "text",

            description: "The 😫😗 text to 👁😖 emojify",
            displayDescription: "The 😫😗 text to 👁😖 emojify",

            type: ApplicationCommandOptionType.String,
            required: true
        },
    ],

    execute: function (args, message) {
        const text = args[0].value;
        return {
            content: generateEmojipasta(text)
        };
    }
}

export { emojipastaCommand }
