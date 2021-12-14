export const iconEffect = (effect) => {
    let icon,
      color = "";
    if (effect === "fire") {
      icon = "fire";
      color = "orange";
    } else if (effect === "blood") {
      icon = "tint";
      color = "red";
    } else if (effect === "poison") {
      icon = "skull-crossbones";
      color = "purple";
    } else if (effect === "electric") {
      icon = "poo-storm";
      color = "dodgerblue";
    } else if (effect === "pure") {
      icon = "hand-spock";
      color = "blue";
    }
    return { icon, color };
  };