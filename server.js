import ex from 'express'
import cors from 'cors'
import {router} from './routes/route.js'

let app = ex()

app.use(cors())
app.use(ex.json())
app.use(ex.static("./frontend/build"))
app.use(router)

app.use(function(req, res) {
    res.status(404).end('error');
});

const port = process.env.PORT || 8080
app.listen(port, function(){
    console.log("Servidor iniciado")
})
