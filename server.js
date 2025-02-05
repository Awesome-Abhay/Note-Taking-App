const express= require('express');
const app = express();
app.set('search engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
const path= require('path');
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
    res.render('auth.ejs');
});
app.get('/noteApp', (req, res) => {
    res.render('index.ejs');
});