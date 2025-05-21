// @ts-check
import { defineConfig } from "astro/config";
import clerk from "@clerk/astro";
import { esES } from "@clerk/localizations";
import vercel from "@astrojs/vercel";

export default defineConfig({
  integrations: [
    clerk({
      localization: esES,
    }),
  ],
  adapter: vercel({}),
  output: "server",
});
