/*Vamos a mostrar todas las cervezas artesanas cuyo amargor sea menor de 30*/
db.artesanas.find({"caracteristicas.ibus":{$lt: 20}},{_id:1,nombre:1,"caracteristicas.ibus":1})

/*Vamos a mostrar todas las cervezas artesanas cuya graduacion sea menor o igual de 4*/
db.artesanas.find({"caracteristicas.graduacion":{$lte: 4.4}},{_id:1,nombre:1,"caracteristicas.graduacion":1})

/*Vamos a mostrar todas las cervezas artesanas que tengan un color oscuro por encima de ebc de 20*/
db.artesanas.find({"caracteristicas.ebc":{$gt: 35}},{_id:1,nombre:1,"caracteristicas.ebc":1})

/*Mostraremos todas las cervezas artesanas que se fabrican con 45 litros de agua o mas */
db.artesanas.find({"ingredientes.agua":{$gte: 45}},{_id:1,nombre:1,"ingredientes.agua":1})

/*Mostrar todas las cervezas que no hayan sido fabricadas*/
db.artesanas.find({fabricada:{$ne:true}},{_id:1,nombre:1,fabricada:1})

/*Mostrar todos aquellos documentos que tienen fermentables adicionales*/
db.artesanas.find({"ingredientes.fermentables":{$exists:true}},{_id:1,nombre:1,"ingredientes.fermentables":1})

/*Mostrar todas las cervezas alemanas de 5 o mas grados*/
db.artesanas.find({$and:[{"caracteristicas.graduacion":{$gte: 5}},{origen:"Aleman"}]},{_id:1,nombre:1,tipo:1,origen:1,"caracteristicas.graduacion":1})

/*Mostrar todas las cervezas que sean tipo Lager O que entre sus ingredientes fermentables tenga cilantro*/
db.artesanas.find({$or:[{tipo:"Lager"},{"ingredientes.fermentables.cilantro":{$exists:true}}]},{_id:1,nombre:1,tipo:1,"ingredientes.fermentables":1})

/*Mostrar todas aquellas cervezas que tengan 0.10 o 0.15 de algun lupulo en cualquier adicion*/
db.artesanas.find({"ingredientes.lupulo.cantidad":{$in:[0.15,0.10]}},{_id:1,nombre:1,"ingredientes.lupulo":1})

/*Vamos a mostrar todas las cervezas que estan envasadas al menos en un formato mayor o igual que 0.50 y menor de que 1.*/
db.artesanas.find({envase:{$elemMatch:{$gte: 0.50, $lt: 1}}},{_id:1,nombre:1,envase:1})

/*Necesitamos saber que cervezas llevan lupulo "golding" en la primera adicion a los 60 min.*/
db.artesanas.find({"ingredientes.lupulo":{$elemMatch: {min60:"golding", cantidad:{$gte: 0.40}}}},{_id:1,nombre:1,"ingredientes.lupulo":1})


db.artesanas.find({"ingredientes.lupulo.min15":{$ne:"tettnang"}},{_id:1,nombre:1,"ingredientes.lupulo":1})
db.artesanas.find({"ingredientes.lupulo":{$elemMatch: {min15: {$ne: ["golding","tettnang"]}}}},{_id:1,nombre:1,"ingredientes.lupulo":1})

/*Vamos a ver todas aquellas cervezas de tipo Pilsner lager que no tengan maltas especiales o que no se hayan fabricado aun. */ 
db.artesanas.find({tipo:"Pilsner lager", $or:[{"ingredientes.malta.especial":{$exists:false}},{fabricada:{$ne:true}}]},{_id:1,nombre:1,tipo:1,"ingredientes.malta":1,fabricada:1})

/*Mostrar todas las cervezas que esten envasadas en 0,25 y en 1 litro sin importar el orden y que se hayan fabricado.*/
db.artesanas.find({envase:{$all:[0.25,1]},fabricada:true},{_id:1,nombre:1,envase:1,fabricada:1})

/*Mostrar todas las cervezas fabricadas en 2020 y que esten envasadas en medio litro y 1 litro.*/
db.artesanas.find({$and:[ 
    {fecha: {$gte: new Date("2019/12/31")}},
    {fecha: {$lte: new Date("2021/01/01")}},
    {envase: {$all:[1,0.5]}}
]},{_id:1,nombre:1,fecha:1,envase:1})

/*Vamos a mostrar las cervezas que contienen una adicion de lupulo northern en el minuto 60 de 0,45gr. para darle sabor*/
db.artesanas.find({"ingredientes.lupulo":{min60:"northern", cantidad:0.45}},{_id:1,nombre:1,"ingredientes.lupulo":1})

/*vamos a listar todas las cervezas que posean en el tipo la palabra Ale*/
db.artesanas.find({tipo:{$regex:/Ale/}},{_id:1,nombre:1,tipo:1})

/*Queremos obtener todas las cervezas que no tengan maltas especiales y que su malta base contenga "pils" ya sea mayuscula o minuscula o "vie" ya sea mayuscula o minuscula*/
db.artesanas.find({$and:[{"ingredientes.malta.especial":{$exists:false}},{$or:[{"ingredientes.malta.base":{$regex:/pils/i}},{"ingredientes.malta.base":{$regex:/vie/i}}]}]},{_id:1,nombre:1,"ingredientes.malta":1})

/*Queremos obtener todas las cervezas cuya malta base contenga "pilsner" ya sea mayuscula o minuscula o aquellas cuya malta base contenga "viena" ya sea mayuscula o minuscula*/
db.artesanas.find({$or:[{"ingredientes.malta.base":{$regex:/pilsner/i}},{"ingredientes.malta.base":{$regex:/viena/i}}]},{_id:1,nombre:1,"ingredientes.malta":1})

/*Mostramos las cervezas artesanas cuyo amargor sea igual a 25 IBU's */
db.artesanas.find({"caracteristicas.ibus":{$eq:25}},{nombre:1,caracteristicas:1})

/*Ahora vamos a mostrar aquellos articulos que su origen sea "Aleman"*/
db.artesanas.find({origen:{$eq:"Aleman"}},{_id:1,nombre:1,tipo:1,origen:1})

/*Ahora vamos a ver todas las cervezas artesanas que sean de tipo "Ale" y cuya graduación sea menor de 4.8 grados.*/
db.artesanas.find({tipo:{$eq:"Ale amarga"}},{"caracteristicas.graduacion":{$lt:4.8}},{_id:1,nombre:1,tipo:1,caracteristicas:1})

/*Vamos a ver todas las cervezas cuya graduacion sea mayor que 4.5 y menor o igual que 5.5*/
db.artesanas.find({"caracteristicas.graduacion":{$gt:4.5,$lte:5.5}},{_id:1,nombre:1,tipo:1,caracteristicas:1})

/*Ahora queremos tomarnos una cervecita que tenga pocos grados (graduacion hasta 5 grados) pero que sea oscurita (ebc por encima de 14) y que no amargue mucho, por ejemplo de 22 IBUS)*/
db.artesanas.find({"caracteristicas.graduacion":{$lte:5},"caracteristicas.ebc":{$gt:14},"caracteristicas.ibus":{$eq:22}},{_id:1,nombre:1,caracteristicas:1})

/* Veamos todas las cervezas que sean muy alcoholicas de 7.5 o mas grados o que por el contrario tengan poco alcohol de 4.2 o menos.*/
db.artesanas.find({$or:[{"caracteristicas.graduacion":{$gte:7.5}},{"caracteristicas.graduacion":{$lte:4.2}}]},{_id:1,nombre:1,caracteristicas:1})

