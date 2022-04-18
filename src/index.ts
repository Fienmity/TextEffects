import { Plugin, registerPlugin } from "enmity-api/plugins";
import { mockCommand } from "./mock";
import { zalgoCommand } from "./zalgo";
import { tinyCapsCommand } from "./tinycaps";
import { flipCommand } from "./flip";
import { mirrorCommand } from "./mirror";
import { bubbleCommand } from "./bubble";
import { bendCommand } from "./bend";

const TextEffects: Plugin = {
  name: "TextEffects",
  commands: [],

  onStart() {
    this.commands = [
      mockCommand,
      zalgoCommand,
      tinyCapsCommand,
      flipCommand,
      mirrorCommand,
      bubbleCommand,
      bendCommand
    ]
  },

  onStop() {
    this.commands = [];
  }
}

registerPlugin(TextEffects);