
// find array method
const items = [
    { name: 'Bike',   price: 100 },
    { name: 'TV',   price: 200  },
    { name: 'Album',   price: 10  },
    { name: 'Book',   price: 5  },
    { name: 'Phone',   price: 500  },
    { name: 'Computer',   price: 1000  },
    { name: 'Keyboard',   price: 25   }
];
// function to find single item in an array
const foundItem = items.find((item) => {
    // true item selected will be returned 
return item.name === 'Book'
})


console.log(foundItem)