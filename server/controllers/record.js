const Record = require("../models/record");

exports.create = async(req, res) => {
    const record = req.body;

    //validate
    if(!record.title) {
        res.status(400).send({
            message: "Must include title."
        });
    }

    //create record
    const dbRecord = new Record({
        id: record.id,
        title: record.title,
        status: record.status,
        description: record.description,
        priority: record.priority
    })

    dbRecord.save((err) => {
        if (err){
            res.status(500).send({ message: err });
            return;
        }

        res.send({ message: "Record has been created." });
    });
};

exports.findAll = async(req, res) => {
    const title = req.query.title;
    var condition;

    if(title){
        condition = { title: { $regex: new RegExp(title), $options: "i"}}
    } else {
        condition = {};
    }

    Record.find(condition)
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occured while retrieving records."
            });
        });
};

exports.findOne = async(req, res) => {
    const id = req.params.id;
    
    Record.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({message: "Not found with id " + id});
            else res.send(data);
        })
        .catch(err => {
            res.status(500).send({ message: "Error retrieving record with id " + id});
        });
};

exports.update = async(req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;
    Record.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update record with id = ${id}. Record might not be found.`
                });
            } else res.send({ message: "Record updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating record with id " + id
            });
        });
};

exports.delete = async(req, res) => {
    const id = req.params.id;

    Record.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete record with id = ${id}. Record might not be found.`
                });
            } else res.send({ message: "Record was deleted successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error deleting record with id " + id
            });
        });
};
