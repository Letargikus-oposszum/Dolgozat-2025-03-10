import express from 'express'

export function RouterGet(){
    const id = req.params.id
    if(id < 0 || id > movies.length){
        return res.json({message:"Movie not found"})
    }
    res.status(200).json(movies[id])
}

export function RouterPost(){
    const {title,year,author,haveOscar} = req.body
    if (!author|title||!year){
        return res.status(404).json({message: "Missing data"})
    }
    const newMovie = {author,title,year};
    movies.push(newMovie)
    res.status(201).json(newMovie)
}

export function RouterPut(){
    const id = req.params.id
    if(id < 0 || id > movies.length){
        return res.json({message:"Movie not found"})
    }
    const {author,title,year} = req.body
    if (!author|title||!year){
        return res.status(404).json({message: "Missing data"})
    }
    res.status(200).json(movies[id])
}
export function RouterDelete(){
    const id = req.params.id
    if(id < 0 || id > movies.length){
        return res.json({message:"Movie not found"})
    }
    movies.splice(id, 1)
    res.status(200).json({message:"Movie has been successfully deleted!"})
}