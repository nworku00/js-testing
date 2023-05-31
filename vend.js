class VendingMachine {
    constructor() {
        this.contents =[]
    }
    displayContents() {
        return this.contents;
    }
    stock(inventory) {
        this.contents.push(...inventory)
    }
    purchase(itemName) {
        let soughtItem = this.contents.find(item => item.item === itemName)
        // return soughtItem ? soughtItem.quantity-- : 'item not found';
        if (soughtItem) {
            return soughtItem.quantity--;
        } else if (!soughtItem) {
            return 'item not found';
        }  else if (soughtItem.quantity < 1){
            return 'item out of stock';
        }
    }
}
module.exports = {
    VendingMachine
}