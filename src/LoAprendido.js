db /*Nos muestra la base de datos activa actualmente.*/
show dbs /*Nos permite ver todas las bases de datos disponibles.*/
show collections /*nos permite mostrar todas las colecciones que tenemos.*/
use cervezas /*indica la base de datos para trabajar. Si no existe, la crea.*/
db.col01.insertOne() /*Inserta tres campos con sus valores en la coleccion col01 de la base de datos cervezas. */
db.col01.insertMany()
db.col01.find()/*Muestra el documento que tiene en su campo nombre la cerveza llamada Tostadita.*/
db.col01.deleteOne()/*Borra los documentos que coincidan con la condición o sea que su nombre sea Olorosa.*/
db.col01.deleteMany() /*Borra todo lo creado hasta el momento.*/
db.artesanas.remove()

/*Operadores*/
{"campo":valor}     /*Igualdad*/
{valor:[$lt:valor}} /*menor que*/
{valor:[$lte:valor}}/*menor que*/
{valor:[$gt:valor}} /*menor que*/ 
{valor:[$gte:valor}}/*menor que*/  
{valor:[$ne:valor}} /*menor que*/
{{campo:valor,campo:valor}}/*AND*/
$in /*pertenece*/
$nin/*no pertenece*/
$ne /**/
$exists
$elemMatch
$all
$eq
$or
$and
$regex