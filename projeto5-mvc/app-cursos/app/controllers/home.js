var cursos = [
    {nome: "Unity3D", categoria: "Jogos"},
    {nome: "Express", categoria: "Back end"},
    {nome: "React", categoria: "Front end"},
]

module.exports = function (app) {

    var controller = {
        index: function(req, res){
                res.render('index', {cursos})

        },
        newItem: function(req,res){
            cursos.push(req.body);
            res.json(cursos);
        }
    }

    return controller;
    
}



// module.exports = function (app) {

//     var Curso = app.models.curso;
//     // console.log(app)
//     var controller = {
//         index: function(req, res){
//             Curso.find({}, [], {sort: {nome: 1}}).exec().then((cursos)=>{
//                 res.render('index', {cursos})
//             })

//         },
//         newItem: function(req,res){
//             // cursos.push(req.body);
//             var curso = new Curso(req.body);
//             curso.save(function(err, curso){
//                 if (err){
//                     res.status(500).end();
//                 }else{
//                     res.json(curso);
//                 }
                
//             })

//         }
//     }

//     return controller;
    
// }