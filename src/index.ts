import { Plugin, registerPlugin } from "enmity-api/plugins";
import { effects } from "./effects";


const TextEffects: Plugin = {
  name: "TextEffects",
  // @ts-ignore
  version: '1.1.0',
  description: "Bunch of text modifiers for your messages, all in one plugin.",
  color: "#EB459E",
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
