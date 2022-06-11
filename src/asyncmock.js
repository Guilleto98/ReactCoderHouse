export const products = [
  { id: '1',
    name: 'Imperial negro' ,
    img: "https://www.mundomate.cl/wp-content/uploads/2020/11/mate-imperial-2133-scaled.jpg",
    price: 2200,
    category: 'Imperial',
    stock: 10,
    description: 'Imperial cuero natura, color negro, virola de alpaca guarda pampa'
  },

  { id: '2',
    name: 'Imperial marron' ,
    img: "https://www.mundomate.cl/wp-content/uploads/2020/11/mate-imperial-2131-scaled.jpg",
    price: 2200,
    category: 'Imperial',
    stock: 5,
    description: 'Imperial cuero natural, color marrón clarito, virola de alpaca guarda pampa'
  }
]

export const getProducts = () =>{
    return new Promise ((resolve) =>{
        setTimeout(()=>{
            resolve(products)
        }, 2000)
    })
}

