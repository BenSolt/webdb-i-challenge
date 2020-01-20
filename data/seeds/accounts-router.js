const express = require('express');

const router = express.Router();


const AccInfo = require('../dbConfig');

router.get("/", async (req, res, next) => {
    try{

    } catch (err){
        next(err)
    }
})

router.get("/:id", async (req, res, next) => {
    try{

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