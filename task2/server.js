// const { number, string } = require("yargs")
// const yargs = require("yargs")
// const author = require("./js/custom")
// yargs.command({
//   command: 'add',
//   describe: 'add new author',
//   builder: {
//     name: { type: 'string', demandOption: true },
//     age: { type: 'string', demandOption: false },
//     status: { type: 'string', demandOption: false },
//   },
//   handler: (argv) => {
//     custom.addUser(argv.name, argv.age, argv.status);
//   },
// });
// yargs.command({
//     command:"showAll",
//     describe:"show all authors",
//     handler:()=>{
//         author.showAll()
//     }
// })
// yargs.command({
//     command:"single",
//     describe:"show single author",
//     builder:{
//         id: { type:"number", demandOption:true}
//     },
//     handler:(argv)=>{
//         author.single(argv.id)
//     }
// })
// yargs.command({
//     command:"delete",
//     describe:"delete author",
//     builder:{
//         id:{type:"number", demandOption:true}
//     },
//     handler:(argv)=>{
//         author.del(argv.id)
//     }
// })
// yargs.command({
//     command:"edit",
//     describe:"add new author",
//     builder:{
//         id:{type:number, demandOption:true},
//         // newData:{
//             name:{type:"string"},
//             field:{type:"string"}
//         // }
//     },
//     handler:(argv)=>{
//         // console.log(JSON.parse(argv.newData))

//         // let x = "{\"name\":\"marwa\"}"
//         // console.log(JSON.parse(x))
//         author.edit(argv.id, {name:argv.name, field:argv.field})
//     }
// })
// yargs.argv