const router = require('express').Router();
const Todos = require('../models/todo.model');

//Home
router.get('/',(req,res)=>{
// Todos.find()
// .then((todo)=>{
//     console.log('Items Retrived.....')
//     //console.log(todo)
//     res.render('index',{todos:todo})  
// })
// .catch((err)=>{
//     console.error(err)
// })
res.render('index')
})



router.post('/addPost', (req,res)=>{
    //const todo =req.body.search;
    const newtodo = new Todos({
        todo:req.body.search
    })
    newtodo
    .save()
    .then((item)=> {
        console.log(item)
        res.redirect('/todos')
    })
    .catch((err) => {
        console.error(err)
    
    })


})

router.delete('/delete/:id',(req,res)=>{
    let query = {_id:req.params.id}
    Todos.remove(query,(err)=>{
        if(err){
            console.log(err)
        }
        res.send('Success')
    });
    //console.log(req.params.id);
});

//Load edit form
router.get('/edit/:id',(req,res)=>{
Todos.findById(req.params.id,(err,todo)=>{
    //console.log(todo)
    res.render('edit',{
        item:todo
    })
})
})



router.post('/edit/:id', (req,res)=>{
    //const todo =req.body.search;
    let editTodo = {
        todo:req.body.search
    }
   // newtodo

    let query = {_id:req.params.id}
    Todos.updateOne(query,editTodo,(err)=>{
        if (err){
            console.log(err);
            return;

        }
        else{
            res.redirect('/todos')
        }
    })


})

module.exports = router