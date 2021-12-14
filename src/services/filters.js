export function setFilterRarity(item, filterToken) {
  if (Object.values(filterToken.rarity).includes(true)) {
    if (
      Object.keys(filterToken.rarity).includes(item.rarity) &&
      filterToken.rarity[item.rarity]
    ) {
      return item;
    }
  } else {
    return item;
  }
}
export function setFilterFaction(item, filterToken) {
  if (Object.values(filterToken.faction).includes(true)) {
    if (
      Object.keys(filterToken.faction).includes(item.faction) &&
      filterToken.faction[item.faction]
    ) {
      return item;
    }
  } else {
    return item;
  }
}
export function setFilterBlock(item, filterToken) {
  if (Object.values(filterToken.block).includes(true)) {
    if (
      Object.keys(filterToken.block).includes(item.block) &&
      filterToken.block[item.block]
    ) {
      return item;
    }
  } else {
    return item;
  }
}
export function setFilterPrice(item, filterToken) {
  if (filterToken.price >= item.price ) {
    return item;
  }
}
