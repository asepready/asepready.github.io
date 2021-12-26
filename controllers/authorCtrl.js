// import models
import Author from "../models/author.js";

// function get All
export const GetAll = async (req, res) => {
	try {
		const data = await Author.find();
		res.json(data);
	} catch (e) {
		res.status(500).json({message: e.message});
  }  
}

// function get single
export const GetById = async (req, res) => {
  try {
		const data = await Author.findById(req.params.id);
		res.json(data);
  } catch (e) {
    res.status(404).json({message: e.message});
  }
}

// function Create
export const Save = async (req, res) => {
	const data = new Author(req.body);
	try {
		const saved = await data.save();
		res.status(201).json(saved);
  } catch (e) {
		res.status(400).json({message: e.message});
  }
}

// function Update
export const Update = async (req, res) => {
	const ids = await Author.findById(req.params.id);
	if(!ids) return res.status(404).json({message: "Data tidak ditemukan"}); 
	try {
		const updated = await Author.updateOne({_id: req.params.id}, {$set: req.body});
    res.status(200).json(updated);
  } catch (e) {
    res.status(400).json({message: e.message});
  }
}

// function Delete
export const Delete = async (req, res) => {
    const ids = await Author.findById(req.params.id);
    if(!ids) return res.status(404).json({message: "Data tidak ditemukan"});
    try {
        const deleted = await Author.deleteOne({_id: req.params.id});
        res.status(200).json(deleted);
    } catch (e) {
        res.status(400).json({message: e.message});
    }
}