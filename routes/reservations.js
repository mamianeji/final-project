const express=require('express'); 

const reservationRouter=express.Router(); 
const Reservation=require('../models/reservation'); 



//post 

reservationRouter.post("/add",  async (req,res)=> {

    try {
        
      const newReservation= new Reservation(req.body); 
      const result = await newReservation.save();
      res.send({reservation:result, msg:"reservation added successfully"});


    } catch (error) {
        console.log(error)
    }
})


//get 

reservationRouter.get("/",  async (req,res)=> {

  try {
      
    const result = await Reservation.find();
    res.send({reservation:result, msg:"all reservations"});


  } catch (error) {
      console.log(error)
  }
})


//get by id 

reservationRouter.get("/:id",  async (req,res)=> {

  try {
      
    const result = await Reservation.findById({_id:req.params.id});
    res.send({reservation:result, msg:"searched reservation"});


  } catch (error) {
      console.log(error)
  }
})



//update game 

reservationRouter.put("/:id",  async (req,res)=> {

  try {
      
    const result = await Reservation.findByIdAndUpdate({_id:req.params.id}, {$set:{...req.body}});
    res.send({ msg:"reservation updated "});


  } catch (error) {
      console.log(error)
  }
})

//delete game 

reservationRouter.delete("/:id",  async (req,res)=> {

  try {
      
    const result = await Reservation.findByIdAndDelete({_id:req.params.id}, {$set:{...req.body}});
    res.send({ msg:"reservation deleted "});


  } catch (error) {
      console.log(error)
  }
})


module.exports=reservationRouter; 