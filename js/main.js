import Dark from "./dark.js"
import Color from "./color.js"
import Sound from "./sounds.js"
import Timer from "./timer.js"
import Events from "./events.js"
import {
  minutesDisplay,
  secondsDisplay,
} from "./elements.js"
import Controls from "./controls.js"

const dark = Dark()

const color = Color()

const sound = Sound()


const timer = Timer({
minutesDisplay,
  secondsDisplay,
})

const controls = Controls()



Events({timer, color, sound, dark, controls})