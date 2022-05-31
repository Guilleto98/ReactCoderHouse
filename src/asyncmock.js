export const products = [
  { id: '1',
    name: 'Imperial negro' ,
    price: 2200,
    category: 'Imperial',
    img: "",
    stock: 10,
    description: 'Imperial cuero natura, color negro, virola de alpaca guarda pampa'
  },

  { id: '2',
    name: 'Imperial marrón clarito' ,
    price: 2200,
    category: 'Imperial',
    img: "",
    stock: 10,
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