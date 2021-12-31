import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const app = sdk.getAppModule("0xA4F1Af87b5d05f98D5298038B4d11c84b27B76dB");

(async () => {
  try {
    const bundleDropModule = await app.deployBundleDropModule({
      // The collection's name, ex. CryptoPunks
      name: "Warmste Week Steunfonds Membership",
      // A description for the collection.
      description: "Dit steunfonds is volledig in handen van jullie, de deelnemers, zonder tussenpartij. Samen stemmen we over de automatische verdeling van de fondsen over verschillende goede doelen.",
      // The image for the collection that will show up on OpenSea.
      image: readFileSync("scripts/assets/dewarmstedao-badge.png"),
      // We need to pass in the address of the person who will be receiving the proceeds from sales of nfts in the module.
      // We're planning on not charging people for the drop, so we'll pass in the 0x0 address
      // you can set this to your own wallet address if you want to charge for the drop.
      primarySaleRecipientAddress: ethers.constants.AddressZero,
    });
    
    console.log(
      "✅ Successfully deployed bundleDrop module, address:",
      bundleDropModule.address,
    );
    console.log(
      "✅ bundleDrop metadata:",
      await bundleDropModule.getMetadata(),
    );
  } catch (error) {
    console.log("failed to deploy bundleDrop module", error);
  }
})()