function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = []
var BRIE = 'Aged Brie';
var SULFURAS = 'Sulfuras, Hand of Ragnaros';
var PASSES = 'Backstage passes to a TAFKAL80ETC concert';
var CONJURED = 'Conjured Mana Cake';

items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new Item(BRIE, 2, 0));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item(SULFURAS, 0, 80));
items.push(new Item(PASSES, 15, 20));
items.push(new Item(CONJURED, 3, 6));

function update_quality() {
  for (var i = 0; i < items.length; i++) {
    if (items[i].name != BRIE && items[i].name != PASSES) {
      if (items[i].quality > 0) {
        if (items[i].name != SULFURAS) {
          items[i].quality = items[i].quality - 1
          if (items[i].name == CONJURED && items[i].quality > 0) {
              items[i].quality = items[i].quality - 1
          }
        }
      }
    } else {
      if (items[i].quality < 50) {
        items[i].quality = items[i].quality + 1
        if (items[i].name == PASSES) {
          if (items[i].sell_in < 11) {
            if (items[i].quality < 50) {
              items[i].quality = items[i].quality + 1
            }
          }
          if (items[i].sell_in < 6) {
            if (items[i].quality < 50) {
              items[i].quality = items[i].quality + 1
            }
          }
        }
      }
    }
    if (items[i].name != SULFURAS) {
      items[i].sell_in = items[i].sell_in - 1;
    }
    if (items[i].sell_in < 0) {
      if (items[i].name != BRIE) {
        if (items[i].name != PASSES) {
          if (items[i].quality > 0) {
            if (items[i].name != SULFURAS) {
              items[i].quality = items[i].quality - 1
              if (items[i].name == CONJURED && items[i].quality > 0) {
                  items[i].quality = items[i].quality - 1
              }
            }
          }
        } else {
          items[i].quality = items[i].quality - items[i].quality
        }
      } else {
        if (items[i].quality < 50) {
          items[i].quality = items[i].quality + 1
        }
      }
    }
  }
}
