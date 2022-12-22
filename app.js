const express = require("express");
const config = require('config')
const path = require('path')
const mongoose = require('mongoose')
const authRoutes = require('./routes/auth.routes.js')
const timeRoutes = require('./routes/time.routes.js')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', authRoutes)
app.use('/api/times', timeRoutes)

app.use('/', express.static(path.join(__dirname, 'client', 'build')))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})
const PORT = process.env.PORT || 5000;

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}
start()