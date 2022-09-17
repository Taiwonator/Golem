import Text from "src/components/primitives/Text";
import TextDecorator from "src/components/primitives/TextDecorator";
import SETTINGS from "src/styles/settings";
import { Config } from ".";

export const makeProjectsConfig = (slides: any[]): Config => ({
  slides,
  slideOptions: {
    center: true,
    loop: true,
    hideThumbnails: true,
    sneakPeak: true
  }
})