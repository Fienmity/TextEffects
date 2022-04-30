import { Plugin, registerPlugin } from "enmity-api/plugins";
import { effects } from "./effects";

const TextEffects: Plugin = {
  name: "TextEffects",
  author: 'Fiery',
  version: '1.0.0',
  description: "Bunch of text modifiers for your messages, all in one plugin.",
  authors: [
     {
        name: 'Fiery',
        id: '890228870559698955'
     }
  ],
  commands: [],

  onStart() {
    this.commands = effects;
  },

  onStop() {
    this.commands = [];
  }
}

registerPlugin(TextEffects);