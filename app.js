const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

const dbURI = 'serverURI'
mongoose.connect(dbURI)
.then((result) => {
    app.listen(3000)})
.catch((err) => {
    console.log(err);
});

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('static'))
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'About page'});
    });


app.use('/blogs', blogRoutes);

app.use((req, res) => {
    res.status(404).render('404', {title: 'Not found'});
})