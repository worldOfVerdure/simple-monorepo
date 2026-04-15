import postcssCustomMedia from "postcss-custom-media";
import postcssGlobalData from "@csstools/postcss-global-data";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
  plugins: {
    "@csstools/postcss-global-data": {
      files: [
        resolve(__dirname, "../design-system/src/custom-media.css")
      ]
    },
    "postcss-custom-media": {}
  }
};
