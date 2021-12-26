// import models
import Example from "../models/example.js";

// function get All
export const GetAll = async (req, res) => {
	try {
		const data = await Example.find();
		res.json(data);
	} catch (error) {
		res.status(500).json({message: error.message});
  }  
}

// function get single
export const GetById = async (req, res) => {
  try {
		const data = await Example.findById(req.params.id);
		res.json(data);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
}

// function Create
export const Save = async (req, res) => {
	const data = new Example(req.body);
	try {
		const saved = await data.save();
		res.status(201).json(saved);
  } catch (error) {
		res.status(400).json({message: error.message});
  }
}

// function Update
export const Update = async (req, res) => {
	const ids = await Example.findById(req.params.id);
	if(!ids) return res.status(404).json({message: "Data tidak ditemukan"}); 
	try {
		const updated = await Example.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updated);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

// function Delete
export const Delete = async (req, res) => {
    const ids = await Example.findById(req.params.id);
    if(!ids) return res.status(404).json({message: "Data tidak ditemukan"});
    try {
        const deleted = await Example.deleteOne({_id: req.params.id});
        res.status(200).json(deleted);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}