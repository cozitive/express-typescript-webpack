import express from 'express'

const app = express()
app.use(express.json())

const PORT = 8000

app.get('/', (req, res) => {
    res.send('test')
})

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}...`)
})
