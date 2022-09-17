import { Config } from ".";

export const makeFieldReportsConfig = (slides: any): Config => ({
  slides,
  slideOptions: {
    center: true,
    sneakPeak: true,
    perViewOptions: {
      mobile: {
        perView: 1
      },
      tablet: {
        perView: 3
      }
    }
  }
})