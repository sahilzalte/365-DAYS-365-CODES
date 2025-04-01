const express = require('express'); // Correctly require express
const app = express(); // Initialize express app
const port = 3000; // Define the port
app.set('view engine', 'ejs'); // Set the view engine to ejs

// Define a route
app.get('/', (req, res) => {
    let siteName = "adidas"
    let search = "Search Now"
    let arr = [1, 54, 65]
    res.render("index", { siteName: siteName, search: search, arr }); // Properly close the string  
})

app.get('/blog:slog', (req, res) => {
    let blogTitle = "Adidas Blog"
    let blogContent = "Welcome to the Adidas Blog"
    res.render('blogpost', {
        blogTitle: blogTitle, blogContent: blogContent
    }); // Properly close the string

}
)

// Start the server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`); // Fix typo in console.log
});