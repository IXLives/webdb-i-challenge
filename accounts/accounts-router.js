const express = require("express");

const db = require("../data/dbConfig");

const router = express.Router();

router.get("/", (req, res) => {
  db("accounts")
    .then(accounts => {
      res.status(200).json(accounts);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Error retrieving accounts." });
    });
});

router.get("/:id", (req, res) => {
    db("accounts")
        .where("id", req.params.id)
        .then(accounts => {
            const account = accounts[0]
            if(account) {
                res.json(account)
            } else {
                res.status(404).json({message:"No such account exists."})
            }
        })
})

router.post("/", (req, res) => {
    const accountData = req.body
    db("accounts")
        .insert(accountData)
        .then(account => {
            res.status(201).json(account)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message:"Error: " + err})
        })
})

router.put("/:id", (req, res) => {
    const {id} = req.params
    const changes = req.body
    db("accounts")
        .where({id})
        .update(changes)
        .then(count => {
            res.status(200).json(count)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: "Bad request."})
        })
})

router.delete("/:id", (req, res) => {
    const {id} = req.params

    db("accounts")
        .where({id})
        .del()
        .then(count => {
            if (count){
                res.status(201).json({message: "Deleted"})
            } else {
                res.status(300).json({message: "Delete failed"})
            }
        })
        .catch(err => {
            res.status(500).json({message: "Bad Request"})
        })
})

module.exports = router;
