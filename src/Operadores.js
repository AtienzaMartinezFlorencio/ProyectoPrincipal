/*Vamos a mostrar las artesanass que tienen menos de 5 grados*/
db.artesanas.find({"caracteristicas.graduacion":{$lte:5}}).pretty()
/*Ahora queremos solo las artesanass que son polter o Ipa*/
db.artesanas.find({$or:[{tipo:'porter'},{tipo:'Indian Pale Ale'}]}).pretty()
/*Mostremos ahora las artesanass que no son ni de origen Belga, ni Ingles, ni Aleman*/
db.artesanas.find({origen:{$nin:['Ingles','Belga','Aleman']}})
/*Muestra las artesanass que no tienen menos de 6 grados y que son de tipo Indian Pale Ale*/
db.artesanas.find({$and:[{"caracteristicas.graduacion":{$lte:6}},{tipo:{$eq:'Indian Pale Ale'}}]})
/*Ordenamos las artesanas por orden alfabetico hacia atras*/
db.artesanas.find({_id: false, nombre: true}).sort({nombre: -1})
/*Vamos a mostrar aquellas artesanas cuyo lupulo sea "cascade"*/
db.artesanas.find({"ingredientes.lupulo":"cascade"}, {_id: false,nombre: true })
/*Vamos a mostrar todas aquellas artesanas cuyo ingrediente malta sea pilsner*/
db.artesanas.find({envase:{$all:[1, 0.5, 0,25]}})
db.artesanas.find({envase:1})
db.artesanas.find( {"caracteristicas.ibus": {$gte: 25, $lt: 75}}).pretty()
db.inventory.find( {"ingredientes.lupulo": {min45: "golding", cantidad: 6 } } )


/*Ignora los N primeros documentos especificados. El siguiente ejemplo salta los 5 primeros documentos y devuelve los siguientes*/
db.artesanas.find({"friends.2.name":{$gte:"T"}},{name:1}).skip(5)
/*Limita el número de resultados devuelto. El siguiente ejemplo devuelve los  5  primeros documentos.*/

db.artesanas.find({"tipo": {$regex:".*Ale", $options:"i"}},{name:1})
/*Se puede ver que entre comillas hemos especificado el campo "friends.name", lo que quiere decir que tenemos que buscar en el subdocumento friends, por el campo name. En este caso se devuelven todos los documentos que cumplen el _ “friends.name”:”Trinity Ford”_ independientemente del _id _que tengan.
Usando Dot Notation, podemos hacer consultas más precisas y complejas:
Buscamos en el array _friends _los elementos que estén en la posición 2 y cuyo nombre sea mayor o igual que T. Además en la proyección mostramos el último elemento, que es por el que estamos filtrando.*/
db.artesanas.find({"friends.2.name":{$gte:"T"}}, {friends:{$slice:-1},name:1})

db.artesanas.find({"envase.1":1})



 db.artesanas.find( { size: { h: 14, w: 21, uom: "cm" } } )

 db.artesanas.find( { size: { w: 21, h: 14, uom: "cm" } } )

 db.artesanas.find( { "size.uom": "in" } ).pretty()

 db.artesanas.find( { "size.h": { $lt: 15 } } ).pretty()

 db.artesanas.find( { "size.h": { $lt: 15 }, "size.uom": "in", status: "D" } ).pretty()


 db.aetesanas.find( { nombre: { $regex: /ie$/ } } ).pretty()
 db.aetesanas.find( { sku: { $regex: /^ab/ } } ).pretty()
 db.aetesanas.find( { description: { $regex: /^S/im } } ).pretty()
 db.aetesanas.find( { description: { $regex: /^S/, $options: 'm' } } )

 db.artesanas.find({
    mes: {$eq: new Date("2017-05-31").getMonth()+1} 
}).pretty()

 db.artesanas.find({
    ano: {$eq: new Date("2017-07-31").getFullYear()} 
}).pretty()
 db.artesanas.find({
     dateA: {$gt: new Date("2020-07-31")} 
 }).pretty().count()

db.artesanas.find( { dim_cm: { $eq: 21 } } ).pretty()
db.artesanas.find( { dim_cm: { $gt: 21 } } ).pretty()
db.artesanas.find( { dim_cm: { $gt: 15, $lt: 20 } } ).pretty()
db.artesanas.find( { dim_cm: {$elemMatch: { $gt: 15, $lt: 20 } } } ).pretty()
db.artesanas.find( { tags: ["red", "blank"] } ).pretty()
db.artesanas.find( { tags: { $all: ["red", "blank"] } } ).pretty()
db.artesanas.find( { item: "journal"}).pretty()
db.artesanas.find( { tags: "red" } ).pretty()
db.artesanas.find( { tags: {$eq: "red" } } ).pretty()
db.fechas.deleteMany({})
db.fechas.insertMany([
    {
        mes: 9,
        año: 2019,
        día: 23,
        fecha0: Date(),
        fecha1: new Date(),
        fecha2: new Date("2020-09-10")  
    },
    {
        mes: 8,
        año: 2020,
        día: 4,
        fecha0: Date(),
        fecha1: new Date(),
        fecha2: new Date("2020-08-10")  
    }
])
db.fechas.find({
    fecha2: {$gt: new Date("2020-07-10")}
})
db.fechas.find({
    mes: {$eq: new Date("2020-08-10").getMonth()+1}
})
db.fechas.find({
    día: {$eq: new Date("2020-07-04").getDate()}
})

db.artesanas.insertMany([
    {id:1, item: {name:"ab", code:"123"}, qty: 15, tags: ["A","B","C"]},
    {id:2, item: {name:"cd", code:"123"}, qty: 20, tags: ["B"]},
    {id:3, item: {name:"ij", code:"456"}, qty: 25, tags: ["A","B"]},
    {id:4, item: {name:"xy", code:"456"}, qty: 30, tags: ["B","A"]},
    {id:5, item: {name:"mn", code:"000"}, qty: 20, tags: [["A","B"],"C"]},
])
/*
Los articulos con código "123"
*/
db.artesanas.find({"item.code":{$eq:"123"}})
/*
Los articulos que eq sea "20"
*/
db.artesanas.find({qty:{$eq:20}})
/*
Los articulos que eq sea "123" y 
*/
db.artesanas.find({"item.code":{$eq:"123",qty:{$eq:20}}})
/*
Los articulos que eq sea "20"
*/
db.artesanas.find({qty:{$gte:20,$lte:25}})
/*
Los articulos que code sea igual a 20 o qty =
*/
db.artesanas.find($or["item.code":{$eq:"123"},qty:20])
/* <=25 o <=15 */
db.artesanas.find($or[{qty:{gte:25}},{qty:{$lte:15}}])
/* =15 o =20 */
db.artesanas.find({qty:{$lte:20}})
db.artesanas.find({qty:{$in:[15,20]}})
db.artesanas.find($or[{qty:15},{qty:20}])
/*
Aquellos en los que el campo tags sea igual a "B"
*/
/*
Aquellos en los que el campo qty sea >=25 con operador not y sin operador not
*/
db.artesanas.find({qty:{$gte:25}})
db.artesanas.find({qty:{$gte:25}})

/*Este fin de semana voy a estar con mis abuelos y quiero invitarles por sorpresa a
ver una película que se estrenó el año de su nacimiento 1922. El problema es que solo
tengo 10 euros, por lo que como máximo la entrada tiene que valer 3.33 euros*/
db.artesanas.find( 
    { $and: [ 
        {date: {$gte: new Date("1922-01-01")}},
        {date: {$lte: new Date("1923-01-01")}},
        {precioentrada: { $lte: 3.33 }}
        ] 
    } 
).pretty()
db.artesanas.find(
    { $and: [
            {date: {$gte: new Date("1922-01-01"), $lt: new Date("1923-01-01")},
            precioentrada: { $lte: 3.33 }
        }
            ]
    }
).pretty()
db.artesanas.find(
    {
        date: { $gte: new Date("1921-12-31"), $lte: new Date("1923-01-01")},
        precioentrada: { $lte: 3.33 }
    }
).pretty()

//Odio el cine español y solo me apetece ver películas que no sean españolas.
db.artesanas.find().count()
db.artesanas.find({
    pais: "España"
},
    {
        _id: 0,
        pais: 1
    }   
).count()
db.artesanas.find(
    {
        pais:{$exists:}
    }
)

db.artesanas.find(
    {
        pais:{$ne: "España",$exists:true}
    },
    {
        _id:0,
        pais:1
    }
)

db.artesanas.find(
    {
        pais:{$regex:/canad./i}
    },
    {
        _id:0,
        pais:1
    }
)

db.artesanas.find( { pais: { $not: { $eq: "España" } } } )
db.artesanas.find( { pais: { $ne: "España" } } )


/*Mi primo me recomendó una película que tenía las siguientes características pero no se acordaba del nombre.
-Que fuese a color
-Que fuese de superhéroes
-Que se estrenara antes del 2005*/

db.artesanas.find({$and:[{color:true},{genero:"Superhéroes"},{date:{$lt:new Date("2005-01-01")}}]}).pretty()



db.artesanas.find( { $and: [ { color:true }, { genero: "Superhéroes" }, { date: { $lt: "2005-01-01" } } ] } )

//Tengo como máximo 115 minutos para ver una película y me apetece ver una de animación.
db.artesanas.find( { $and: [ { duracion: { $lt: 115 } }, { genero: "Animación" } ] } )

//Quiero ver todas las películas que hay en esta cartelera de un director que sé que se apellida Spielberg o Spielverg pero no se su nombre.
db.artesanas.find( { "personal.direccion": { $regex: /Spiel.erg$/ } } )

/*Quiero ir al cine a ver películas modernas del año 2000 hasta hoy y tengo 28 euros para el cine.
Por lo tanto, tengo que elegir entre ver 3 películas de 8 euros o 5 películas de 5 euros.
Para elegir entre una opción u otra quiero saber qué artesanas hay de 8 euros y de 5 euros del año 2000 hasta hoy*/

db.artesanas.find( { $and: [ { date: { $gte: "2000-01-01" } }, { precioentrada: 8 } ] } )
db.pelicular.find({$and:[{date:{$gte: new Date ("2000-12-31")}},{$or:[{precioentrada:{$or:[{$eq:8},{$eq:5}]}}]}}).pretty()

db.artesanas.find( { $and: [ { date: { $gte: "2000-01-01" } }, { precioentrada: 5 } ] } )

db.artesanas.find( { 
        $and: [ 
            { date: { $gte: "2000-01-01" } }, 
            { $or: [ {precioentrada: 5 }, {precioentrada: 8 }] }
        ] 
})

db.artesanas.find( { 
    $and: [ 
        { date: { $gte: "2000-01-01" } }, 
        { precioentrada: 5  }
    ] 
})

//La semana que viene voy al cine con mis primos de 7 años a ver una película de aventura o animacion y que sea recomendable para su edad.
db.artesanas.find( { $and: [ { $or: [ { pegi: "TP" }, { pegi: { $lte:7 } } ] } , { $or: [ { genero: "Aventura" }, { genero: "Animación" } ] } ] } )
{ "_id" : ObjectId("5fb0ee83e8b9b1d8cd75a34d"), "titulo" : "Ice Age", "precioentrada" : 5, "personal" : { "direccion" : [ "Chris Wedge", "Carlos Saldanha" ], "protagonista" : [ "Manny", "Sid", "Diego", "Scrat", "Roshan", "Soto", "Dodo", "Carl", "Frank", "Ken" ] }, "pegi" : 3, "genero" : [ "Animación", "Comedia", 
"Ciencia ficción", "Infantil" ], "pais" : [ "Estados Unidos" ], "duracion" : 81, "date" : "2002-02-08", "color" : true }
{ "_id" : ObjectId("5fb0ee83e8b9b1d8cd75a351"), "titulo" : "Indiana Jones en busca del arca perdida", "precioentrada" : 8, "personal" : { "direccion" : [ "George Lucas" ], "protagonista" : [ "Harrison Ford" ] }, "pegi" : "TP", "genero" : [ "Aventura", "Acción" ], "pais" : [ "Estados Unidos" ], "duracion" : 115, "date" : "1981-10-27", "color" : true }
{ "_id" : ObjectId("5fb0ee83e8b9b1d8cd75a35b"), "titulo" : "Avatar", "precioentrada" : 8, "personal" : { "direccion" : [ "James Cameron" ], "protagonista" : 
[ "Sam Worthington", "Zoe Saldaña", "Sigourney Weaver", "Michelle Rodríguez", "Stephen Lang", "Giovanni Ribisi", "Joel David Moore" ] }, "pegi" : 7, "genero" : [ "Ciencia Ficción", "Aventura", "Acción", "Fantástico", "Animación" ], "pais" : [ "Estados Unidos" ], "duracion" : 178, "date" : "2009-08-16", "color" : 
true }

//El otro día ví una película donde aparecía la actriz Belen Rueda y el director era Juan Antonio Bayona pero no me acuerdo del título y quiero saberlo.
db.artesanas.find( { $and: [ { "personal.direccion": "Juan Antonio Bayona" }, { "personal.protagonista": "Belén Rueda" } ] } )
{ "_id" : ObjectId("5fb0ee83e8b9b1d8cd75a352"), "titulo" : "El orfanato", "precioentrada" : 5, "personal" : { "direccion" : [ "Juan Antonio Bayona" ], "protagonista" : [ "Belén Rueda", "Fernando Cayo", "Roger Príncep", "Geraldine Chaplin" ] }, "pegi" : 16, "genero" : [ "Terror", "Suspense", "Drama" ], "pais" : [ 
    "España", "México" ], "duracion" : 100, "date" : "2007-01-30", "color" : true }


//Muestra el producto Caracoles
db.artesanas.find({producto:"Caracoles"}).pretty()


// Muestra los artesanas cárnicos cuya cantidad en el almacén sea superior a 15kg.
db.artesanas.find({$and:[
    {categoria:{$in:
        ["Chacina","Carne"]}},
    {"cantidad.num":{$gte:15}}, 
    {"cantidad.unid":"kg"}
]}).pretty()


//  Muestra todos los artesanas baratos cuyo precio de venta al público sea inferior a 10$.
db.artesanas.find({preciovp:{$lt:10}}).pretty()


//Muestra los artesanas almacenados en bandejas y paquetes con una cantidad superior a 10
db.artesanas.find({$and:[
    {$or:[ 
      {"cantidad.unid":"bandejas"},
      {"cantidad.unid":"paquetes"},
    ]},
    {"cantidad.num":{$gt:10}}
]}).pretty()


/* Muestra los artesanas que no procedan del provedor Hispasur ni sean cárnicos, así como
que su precio de venta oscile entre 5$ y 10$. */
db.artesanas.find({$and:[
    {proveedor:{$ne:"Hispasur"}},
    {categoria:{$nin:
        ["Carne","Chacina"]}},
    {"preciovp":{$lte:10}},
    {"preciovp":{$gt:5}}
]}).pretty()


// Muestra los artesanas que no sean ni chicharrones ni tartas y que sean de tres proveedores en concreto
db.artesanas.find( {$and:[
    {producto:{$not:{$regex: /^Chicharron/i}}},
    {categoria:{$nin:["Tarta"]}},
    {proveedor:{$in:
        ["Frito-Lay","Angel Lopez","Marclem"]}}
]}).pretty()


// Muestra los artesanas que tengan ofertas
db.artesanas.find({oferta:
    {$exists: true}
}).pretty()


// Muestra los artesanas que tengan dos ofertas en concreto
db.artesanas.find({oferta:{$all: 
    ["3x2", "2x1"] 
}}).pretty()


/* Muestra los artesanas que tengan 2 o más ofertas entre las que debe haber al menos una oferta de
entre tres elegidas.
$size no puede ir acompañado de operadores, ergo no se admite $size:{$gte:2}, la única forma es con nor.*/
db.artesanas.find({$and:[
    {oferta:{$in:["11x9", "12x10", "6x5"]}},
    {$nor:[
        {oferta:{$size:1}},
        {oferta:{$size:0}}
    ]}
]}).pretty()


/* Muestra todos los artesanas pero los aperitivos, los moluscos y los que estén hecho de pollo
deben ser de dos proveedores en concreto */
db.artesanas.find({$or:[
    {$and:[
        {producto:{$not:{$regex: /pollo/i}}},
        {$nor:[
            {categoria:{$eq:"Molusco"}},
            {categoria:{$eq:"Aperitivo"}},
        ]}
    ]},
    {proveedor:{$in:["Hispasur","Angel Lopez"]}},
]}).pretty()


// Muestra los beneficios que obtiene la empresa por cada uno de sus artesanas. 
db.artesanas.aggregate([
        {$project: {beneficio:
        {$subtract:["$preciovp", "$precio"]}}}
]).pretty()
   

//Muestra el beneficio que obtiene la empresa vendiendo un producto en concreto.
db.artesanas.aggregate([{$match: {producto: "Chorizo rosario"}},
    {$project: {beneficio:
    {$subtract:["$preciovp", "$precio"]}}}
]).pretty()


/* Muestra el dinero gastado en función de los artesanas en el almacén de
aquellos cuya cantidad supere las 10 unidades y que no sean de pollo.*/
db.artesanas.aggregate([
    {$match:{$and:[
        {producto:{$not:{$regex: /pollo/i}}},
        {"cantidad.num":{$gt:10}}
    ]}},
    {$project: {valor:
    {$multiply:["$cantidad.num", "$precio"]}}}
]).pretty()


/* Muestra los días que se ha tardado en entregar los artesanas. La resta de fecha da un resultado
en milisegundos, ergo hay que dividirlo para pasarlo a días.*/   
db.artesanas.aggregate([
    {$project: {tardanza:
        {$divide:[{
    $subtract:["$fechaEntrega", "$fechaPedido"]},
   86400000]}}}
]).pretty()


// Muestra los artesanas con un cobro superior a 50 que hayan llegado con retraso.
db.artesanas.find({
    precio:{$gte:50},
    retraso:true
}).pretty()

    
// Muestra los artesanas de Cheetos que no hayan sido enviados con retraso.
db.artesanas.find( {$and:[
    {producto:{$regex: /^Cheetos/i}},
    {retraso:false}
]}).pretty()


/* Muestra los artesanas que no valgan entre 50 y 100 o aquellos cuya cantidad sea
10 o superior (a excepción de un producto),que hayan sido entregados con retraso.*/
db.artesanas.find( {$or:[
    {$and:[
        {$or:[
            {precio:{$gt:100}},
            {precio:{$lt:50}},
        ]},
        {retraso: true},
    ]},
    {$and:[
        {cantidad:{$gte:10}},
        {retraso: true},
        {producto:{$ne:"Loncha chorizo"}},
    ]}
]}).pretty()


/* Muestra los artesanas realizados en Arahal y Sevilla cuya cantidad supere las 5 unidades y 
un precio de 20, o los realizados en el resto de municipios después del 2018 que no sean ni
chistorras ni chicharrones, ambas opciones realizadas sin retraso.*/
db.artesanas.find({$or:[
    {$and:[
        {localidad:{$in:["Arahal","Sevilla"]}},
        {precio:{$gt:20}},
        {cantidad:{$gte:5}},
        {retraso: false},
    ]},
    {$and:[
        {localidad:{$nin:["Arahal","Sevilla"]}},
        {"fechaEntrega":{"$gte": new Date("2019,01,01")}},
        {$nor:[
            {producto:{$regex: /^Chistorras/i}},
            {producto:{$regex: /^Chicharrones/i}},
            {retraso: true}
        ]}
    ]}
]}).pretty()


/* Muestra los artesanas de más de 10 cubos de caracoles realilzados en 2018 y 2019 sin
retraso en la localidad de Morón, O los artesanas de 10 o menos cubos de cabrillas
realizados con retraso en la localidad de Arahal. */
db.artesanas.find({$or:[
    {$and:[
        {localidad:{$eq: "Moron"}},
        {"fechaEntrega":{"$gte": new Date("2018,01,01")}},
        {"fechaEntrega":{"$lte": new Date("2019,12,31")}},
        {producto:{$eq: "Caracoles"}},
        {cantidad:{$gt:10}},
        {retraso: false},
    ]},
    {$and:[
        {retraso: true},
        {cantidad:{$lte:10}},
        {producto:{$eq: "Cabrillas"}},
        {"fechaEntrega":{"$lt": new Date("2018,01,01")}},
        {localidad:{$eq: "Arahal"}},
    ]}
]}).pretty()

db.artesanas.updateMany(
    { titulo: "Tenet" },
    { $set: { precioentrada: 5 } }
)