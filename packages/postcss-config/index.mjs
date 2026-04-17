import postcssCustomMedia from "postcss-custom-media";
import postcssGlobalData from "@csstools/postcss-global-data";
import { fileURLToPath } from "url";
import { resolve } from "path";

const customMediaFile = resolve(
  fileURLToPath(new URL("../design-system/src/custom-media.css", import.meta.url))
);

export default {
  plugins: {
    "@csstools/postcss-global-data": {
      files: [
        customMediaFile
      ]
    },
    "postcss-custom-media": {}
  }
};
