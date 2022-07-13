   const  exp  =   require("express")

     
   var cors = require('cors')
    
    const app = exp()

    app.use(cors())
    app.get('/data', (req , res)=>{
        
        res.send('yassine')
        
    })





    app.listen(5000, ()=>{
        console.log('port running at 5000')
    })  