export const products = [
  { id: '1',
    name: 'Imperial negro' ,
    img: "https://www.mundomate.cl/wp-content/uploads/2020/11/mate-imperial-2133-scaled.jpg",
    price: 2200,
    category: 'Imperial',
    stock: 10,

    descriptionLarga: 'Imperial cuero natura, color negro, virola de alpaca guarda pampa aca agregale mas informacion ya que es el detalle del producto y la idea de aca es que puedas hablar mas sobre ese producto en particular, la otra descripcion es solo una idea y esta descripcion es mas detallada jajajaja y estoy escribiendo mucho texto para que quede bien pero despues ponele lo que vos quieras'
  },

  { id: '2',
    name: 'Imperial marron' ,
    img: "https://www.mundomate.cl/wp-content/uploads/2020/11/mate-imperial-2131-scaled.jpg",
    price: 2200,
    category: 'Imperial',
    stock: 5,
    descriptionLarga: 'Imperial cuero natural, color marrón clarito, virola de alpaca guarda pampa aca agregale mas informacion ya que es el detalle del producto y la idea de aca es que puedas hablar mas sobre ese producto en particular, la otra descripcion es solo una idea y esta descripcion es mas detallada jajajaja y estoy escribiendo mucho texto para que quede bien pero despues ponele lo que vos quieras'
  }
]

export const getProducts = () =>{
    return new Promise ((resolve) =>{
        setTimeout(()=>{
            resolve(products)
        })
    })
}

//get que le paso id por parametro
export const getProduct = (id) =>{
    return new Promise ((resolve) =>{
        setTimeout(()=>{
            resolve(products.find(product => product.id === id))
        })
    })
}

