export const armyImages = {
  imperialKnights: require("../assets/images/army_imperialknights_image.png"),
  ultramarines: require("../assets/images/army_ultramarines_image.png"),
  necrons: require("../assets/images/army_necron_image.png"),
};

export type ArmyImageKey = keyof typeof armyImages;
