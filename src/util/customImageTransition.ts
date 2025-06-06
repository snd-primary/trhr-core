import type {
  TransitionAnimationPair,
  TransitionDirectionalAnimations,
} from "astro";

const duration = "0.5s";

const imageAnim: TransitionAnimationPair = {
  old: {
    name: "customAnim",
    duration: duration,
    easing: "ease-in",
    direction: "reverse",
  },
  new: {
    name: "customAnim",
    duration: duration,
    easing: "ease-out",
  },
};

export const customImageTransition: TransitionDirectionalAnimations = {
  forwards: imageAnim,
  backwards: imageAnim,
};
