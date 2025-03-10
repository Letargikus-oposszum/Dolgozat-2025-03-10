import express from 'express'
import movieRoutes from './routes/routesjs.js'

const app = express()
app.use(express.json())
app.use('/movies',movieRoutes)

app.listen(3000,()=>{
    console.log('The server is running!')
})