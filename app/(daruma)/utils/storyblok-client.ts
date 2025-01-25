import StoryblokClient from "storyblok-js-client";

export const BASE_URL = import.meta.env.STORYBLOK_BASE_URL;
export const SPACE_ID = "268527";

export const Storyblok = new StoryblokClient({
  accessToken: import.meta.env.STORYBLOK_TOKEN,
  cache: {
    clear: "auto",
    type: "memory",
  },
});
