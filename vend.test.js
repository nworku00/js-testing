const { VendingMachine } = require("./vend");
describe("The Vending Machine", () => {
    let machine;
    const newInv = [
        { item: "Just", quantity: 8 },
        { item: "gum", quantity: 20 },
    ];
    beforeEach(() => {
        machine = new VendingMachine();
    });
    test("should list contents", () => {
        expect(machine.displayContents()).toEqual([]);
    });
    test("should be able to be stocked", () => {
        machine.stock(newInv);
        expect(machine.contents).toEqual([
            { item: "Just", quantity: 8 },
            { item: "gum", quantity: 20 },
        ]);
    });
    test("able to vend", () => {
        machine.stock(newInv);
        machine.purchase("gum");
        expect(machine.contents).toEqual([
            { item: "Just", quantity: 8 },
            { item: "gum", quantity: 19 },
        ]);
    });
    test('able to tell out of stock', () => {
        const nextInv = [
            { item: "Just", quantity: 0 },
            { item: "gum", quantity: 20 },
        ];
        machine.stock(nextInv);
        expect(machine.purchase('Just')).toEqual('item out of stock')
    })
    test("able to tell empty", () => {
        machine.stock(newInv);
        expect(machine.purchase('funyun')).toEqual('item not found');
    });
});
