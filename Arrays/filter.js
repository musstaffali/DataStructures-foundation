    
    // filter array method
    const items = [
            { name: 'Bike',   price: 100 },
            { name: 'TV',   price: 200  },
            { name: 'Album',   price: 10  },
            { name: 'Book',   price: 5  },
            { name: 'Phone',   price: 500  },
            { name: 'Computer',   price: 1000  },
            { name: 'Keyboard',   price: 25   }
        ];
// function to filter items over $100 out the console.log
const filteredItems = items.filter((item) => {
    return item.price <= 100
})


// console.log all items from const
console.log(items)

// console.log filteredItems
console.log(filteredItems)