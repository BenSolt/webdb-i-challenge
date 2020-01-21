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
       res.json(await db.select("*").from("posts")
       .where("id", req.params.id))
    }catch (err){
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    try{
        const payload = {
            title: req.body.title,
            contents: req.body.contents,
        }
        //translates INSERT INTO posts (title, contents) VALUES(?,?);

        //const [id] = await db.select("*").from("posts").insert(payload)
        const [id] = await db("posts").insert(payload)
        res.json(await db ("posts").where("id", id).first())
        
    }catch (err){
        next(err)
    }
})

router.put("/:id", async (req, res, next) => {
    try{
        const payload = {
            title: req.body.title,
            contents: req.body.contents,
        }
        //translate to UPDATE posts SET title = ? AND contenst = ? WHERE id = ?;
        await db("posts").where("id", req.params.id).update(payload)
        res.json(await db ("posts").where("id", req.params.id).first())
    }catch (err){
        next(err)
    }
})

router.delete("/:id", async (req, res, next) => {
    try{
        await db("posts").where("id", req.params.id).del()
        res.status(204).end()
    } catch (err) {
        next(err)
    }
})

module.exports = router