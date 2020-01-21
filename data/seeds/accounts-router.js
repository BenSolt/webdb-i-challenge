const express = require('express');

const router = express.Router();


const AccInfo = require('../dbConfig');

router.get("/", async (req, res, next) => {
    try{
        //translates to SELECT * FROM posts
        res.json(await db.select("*").from("posts"))
    } catch (err){
        next(err)
    }
})

router.get("/:id", async (req, res, next) => {
    try{
       res.json(await db.select("*").from("posts").where("id", req.params.id))
    }catch (err){
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    try{

    }catch (err){
        next(err)
    }
})

router.put("/:id", async (req, res, next) => {
    try{

    }catch (err){
        next(err)
    }
})

router.delete("/:id", async (req, res, next) => {
    try{

    } catch (err) {
        next(err)
    }
})

module.exports = router