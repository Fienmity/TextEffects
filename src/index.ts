import { Plugin, registerPlugin } from "enmity-api/plugins";
import { effects } from "./effects";

const TextEffects: Plugin = {
  name: "TextEffects",
  commands: [],

  onStart() {
    this.commands = effects;
  },

  onStop() {
    this.commands = [];
  }
}

registerPlugin(TextEffects);