import express from 'express'
import movies from '../movies/movies.js'
import {RouterGet} from '../controllers/controllersjs.js'
import {RouterPost} from '../controllers/controllersjs.js'
import {RouterPut} from '../controllers/controllersjs.js'
import {RouterDelete} from '../controllers/controllersjs.js'

const router = express.Router()

router.get('/', (req, res) =>{
    res.status(200).json(movies)
})

router.get('/:id', (req, res) =>{
    RouterGet()
})

router.post('/', (req, res) =>{
    RouterPost()
})

router.put('/:id', (req, res) =>{
    RouterPut()
})

router.delete('/:id', (req, res) =>{
    RouterDelete()
})

export default router
