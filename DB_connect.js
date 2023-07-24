const mongoose=require('mongoose'); 


const Dbconnect= async ()=> {

     try {
        
       let result=mongoose.connect(process.env.DB_URI);

       console.log('database is connected')
     } catch (error) {

        console.log(error);
        
     }

}


module.exports=Dbconnect; 