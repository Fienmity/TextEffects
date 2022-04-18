import { Plugin, registerPlugin } from "enmity-api/plugins";
import { mockCommand } from "./effects/mock";
import { zalgoCommand } from "./effects/zalgo";
import { tinyCapsCommand } from "./effects/tinycaps";
import { flipCommand } from "./effects/flip";
import { mirrorCommand } from "./effects/mirror";
import { bubbleCommand } from "./effects/bubble";
import { bendCommand } from "./effects/bend";

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