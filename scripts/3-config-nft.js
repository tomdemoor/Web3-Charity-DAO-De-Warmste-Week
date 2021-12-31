import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xB850176b75F27c1898B25e7177dafEF3cc666045",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Warmste Week Badge",
        description: "Deze NFT geeft je toegang tot De Warmste Week Steunfonds stemming!",
        image: readFileSync("scripts/assets/dewarmstedao-badge.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()