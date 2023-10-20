const Item = require("./Item");

module.exports = class Cart {
    constructor() {
        this.itemList = [];
        this.totalPrice = 0;
    }

    getCart() {
        return this.itemList;
    }

    getPrice() {
        let price = 0.0;
        for (let item of this.itemList) {
            price += item.getItemPrice() * item.getQuantity();
        }
        return price;
    }

    addItem = (i, qty) => {

        this.itemList.push({...i,qty});
        for (let i = 0; i < this.itemList.length; i++){
        this.totalPrice += this.itemList[i].itemPrice*qty;
        }
        return this.itemList;
    }

    itemQuantities=(itemList ) => {
        let arr = [];
        for (let i of itemList){
            arr.push(`${Item.name} -x${Item.qty}`);
        }
        return arr;
    };

    itemizedList = () => {
        let items = "";
        this.itemList.forEach(i =>{
            items += `${i.itemName}, ${i.itemPrice}, ${i.qty}`
        })
        return items;
    }
    
    ItemsonSale = () => {
        let saleitems = this.itemList.filter(i=> i.isOnSale)
        return saleitems;
    }

}