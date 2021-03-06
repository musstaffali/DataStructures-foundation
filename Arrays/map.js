
// map array method
const items = [
    { name: 'Bike',   price: 100 },
    { name: 'TV',   price: 200  },
    { name: 'Album',   price: 10  },
    { name: 'Book',   price: 5  },
    { name: 'Phone',   price: 500  },
    { name: 'Computer',   price: 1000  },
    { name: 'Keyboard',   price: 25   }
];
// function to map items over $100 out the console.log
const itemNames = items.map((item) => {
return item.price // or item.name to map name or price
})



// console.log map Items
console.log(itemNames)