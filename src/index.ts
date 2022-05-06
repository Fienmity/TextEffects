import { Plugin, registerPlugin } from "enmity-api/plugins";
import { effects } from "./effects";
import Manifest from "./manifest.json";

const TextEffects: Plugin = {
  name: Manifest.name,
  // @ts-ignore
  description: Manifest.description,
  authors: Manifest.authors,
  version: Manifest.version,
  color: Manifest.color,
  commands: [],

  onStart() {
    this.commands = effects;
  },

  onStop() {
    this.commands = [];
  }
}

registerPlugin(TextEffects);
