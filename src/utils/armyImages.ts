// React Native needs static requires for bundled images, so Firestore stores keys.
export const armyImages = {
  imperialKnights: require("../assets/images/army_imperialknights_image.png"),
  ultramarines: require("../assets/images/army_ultramarines_image.png"),
  necrons: require("../assets/images/army_necron_image.png"),
};

// This type keeps Firestore imageKey values aligned with available local images.
export type ArmyImageKey = keyof typeof armyImages;
