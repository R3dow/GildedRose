describe("Gilded Rose", function() {

  it("normal item decreases quality and sell_in by 1", function() {
    items = [ new Item("+5 Dexterity Vest", 10, 20) ];

    update_quality();

    expect(items[0].sell_in).toEqual(9);
    expect(items[0].quality).toEqual(19);
  });

  it("normal item quality is never negative", function() {
    items = [ new Item("+5 Dexterity Vest", 10, 0) ];

    update_quality();

    expect(items[0].quality).toEqual(0);
  });

  it("normal item quality decreases twice as fast after sell date", function() {
    items = [ new Item("+5 Dexterity Vest", 0, 20) ];

    update_quality();

    expect(items[0].sell_in).toEqual(-1);
    expect(items[0].quality).toEqual(18);
  });

  it("aged brie increases in quality", function() {
    items = [ new Item("Aged Brie", 10, 20) ];

    update_quality();

    expect(items[0].sell_in).toEqual(9);
    expect(items[0].quality).toEqual(21);
  });

  it("aged brie quality never exceeds 50", function() {
    items = [ new Item("Aged Brie", 10, 50) ];

    update_quality();

    expect(items[0].quality).toEqual(50);
  });

  it("sulfuras never changes quality or sell_in", function() {
    items = [ new Item("Sulfuras, Hand of Ragnaros", 0, 80) ];

    update_quality();

    expect(items[0].sell_in).toEqual(0);
    expect(items[0].quality).toEqual(80);
  });

  it("backstage passes increase quality by 1 when sell_in is more than 10", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20) ];

    update_quality();

    expect(items[0].sell_in).toEqual(14);
    expect(items[0].quality).toEqual(21);
  });

  it("backstage passes increase quality by 2 when sell_in is 10 days or less", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20) ];

    update_quality();

    expect(items[0].sell_in).toEqual(9);
    expect(items[0].quality).toEqual(22);
  });

});