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

/*Necesitamos saber que cervezas llevan lupulo "golding" en la primera adicion a los 60 min con una cantidad mayor o igual a 0.40.*/
db.artesanas.find({"ingredientes.lupulo":{$elemMatch: {min60:"golding", cantidad:{$gte: 0.40}}}},{_id:1,nombre:1,"ingredientes.lupulo":1})

/*Vamos a ver todas aquellas cervezas de tipo Pilsner lager que no tengan maltas especiales o que no se hayan fabricado aun. */ 
db.artesanas.find({tipo:"Pilsner lager", $or:[{"ingredientes.malta.especial":{$exists:false}},{fabricada:{$ne:true}}]},{_id:1,nombre:1,tipo:1,"ingredientes.malta":1,fabricada:1})

/*Mostrar todas las cervezas que esten envasadas en 0,25 y en 1 litro sin importar el orden y que se hayan fabricado.*/
db.artesanas.find({envase:{$all:[0.25,1]},fabricada:true},{_id:1,nombre:1,envase:1,fabricada:1})

/*Mostrar todas las cervezas fabricadas en 2020 y que esten envasadas en medio litro y 1 litro.*/
db.artesanas.find({$and:[{fecha: {$gte: new Date("2019/12/31")}},{fecha: {$lte: new Date("2021/01/01")}},{envase: {$all:[1,0.5]}}]},{_id:1,nombre:1,fecha:1,envase:1})

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

/*Ahora vamos a ver todas las cervezas artesanas que sean de tipo "Ale amarga" y cuya graduaci??n sea menor de 4.8 grados.*/
db.artesanas.find({tipo:{$eq:"Ale amarga"}},{"caracteristicas.graduacion":{$lt:4.8}},{_id:1,nombre:1,tipo:1,caracteristicas:1})

/*Vamos a ver todas las cervezas cuya graduacion sea mayor que 4.5 y menor o igual que 5.5*/
db.artesanas.find({"caracteristicas.graduacion":{$gt:4.5,$lte:5.5}},{_id:1,nombre:1,tipo:1,caracteristicas:1})

/*Ahora queremos tomarnos una cervecita que tenga pocos grados (graduacion hasta 5 grados) pero que sea oscurita (ebc por encima de 14) y que no amargue mucho, por ejemplo de 22 IBUS)*/
db.artesanas.find({"caracteristicas.graduacion":{$lte:5},"caracteristicas.ebc":{$gt:14},"caracteristicas.ibus":{$eq:22}},{_id:1,nombre:1,caracteristicas:1})

/* Veamos todas las cervezas que sean muy alcoholicas de 7.5 o mas grados o que por el contrario tengan poco alcohol de 4.2 o menos.*/
db.artesanas.find({$or:[{"caracteristicas.graduacion":{$gte:7.5}},{"caracteristicas.graduacion":{$lte:4.2}}]},{_id:1,nombre:1,caracteristicas:1})

/*Buscamos todas las cervezas que se han fabricado antes de junio del 2018 que sean de origen ingles.*/
db.artesanas.find({$and:[{fabricada:true},{origen:"Ingles"},{fecha:{$lt:new Date("2018-06-01")}}]},{_id:1,nombre:1,origen:1,fabricada:1,fecha:1})

/*Buscamos todas las cervezas que tengan 25 grs de levadura wyeast (sea la numeraci??n que sea y ya este en mayusculas o minusculas) y que lleve azucar en su fermentacion. */
db.artesanas.find( {$and:[{"ingredientes.levadura.marca":{$regex:/wyeast/i}},{"ingredientes.levadura.cant":{$lte:0.25}},{"ingredientes.fermentables.azucar":{$exists:true}}]},{_id:1,nombre:1,"ingredientes.levadura.cant":1,"ingredientes.fermentables":1})

/*Me apetece una cervecita de mas de 5 grados para alegrarme el dia que se haya fabricado recientemente, desde 2020 hacia delante.*/
db.artesanas.find({$and:[{fecha:{$gte: new Date("2018/01/01")}},{"caracteristicas.graduacion":{$gte:5}}]},{_id:1,nombre:1,"caracteristicas.graduacion":1,fecha:1})

/* Muestra los artesanas que no sean de origen ingles, que no esten envasadas ni en 0.25 litros, ni en 0.5 litros y que su fecha de fabricacion sea entre enero 2020 y enero de 2022.*/ 
db.artesanas.find({$and:[{origen:{$ne:"Ingles"}},{envase:{$nin:[0.25,0.5]}},{fecha:{$lte: new Date ("2022/01/01")}},{fecha:{$gt: new Date ("2019/12/31")}}]},{_id:1,nombre:1,origen:1,envase:1,fecha:1})


/* Necesitamos buscar una cerveza artesana o:
- Que sea de tipo Ale fabricada entre Enero de 2019 y Diciembre de 2021 que tenga un amargor mayor de 20 IBUS,un color inferior a 35 EBC (no muy oscura)
  que tenga lupulo adicionado de 0.40,0.55,0.65 o 0.75 que no este envasada en 0.25 o 0.5 litros. 
- Que sea de tipo Lager fabricada entre enero de 2013 y diciembre de 2019 con una graduacion inferior a 7 grados que no lleve fermentables pero entre su
  malta base haya alguna de la familia pils y que este envasada en uno de estos formatos: o mayor o igual que 0.5 y menor que 1 litro.*/

db.artesanas.find({$or:[
    {$and:[
        {tipo:{$regex:/Ale/}},
        {fecha:{$gte: new Date("2018,12,31")}},
        {fecha:{$lte: new Date("2021,12,31")}},
        {"caracteristicas.ibus":{$gt: 20}},
        {"caracteristicas.ebc":{$lt: 35}},
        {"ingredientes.lupulo.cantidad":{$in:[0.40,0.55,0.65,0.75]}},
        {fabricada: true},
        {envase:{$nin: [0.25,0.5]}},
    ]},
    {$and:[
        {tipo:{$regex:/Lager/i}},
        {fecha:{$gte: new Date("2013,01,01")}},
        {fecha:{$lte: new Date("2019,12,31")}},
        {"caracteristicas.graduacion":{$lte:7}},
        {"ingredientes.fermentables:":{$exists:false}},
        {"ingredientes.malta.base":{$regex:/pils/i}},
        {fabricada:{$ne:false}},
        {envase:{$elemMatch:{$gte: 0.50, $lt: 1}}},
    ]}
]}).pretty()