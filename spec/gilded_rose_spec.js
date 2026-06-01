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

});