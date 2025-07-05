
<h1 align="center">Template Engine Setup in Express.js</h1>

```
A template engine in web development allows you to use static templates alongside dynamic data to generate HTML pages. It is useful when building dynamic web pages, as you can embed JavaScript-like code within your HTML to generate content dynamically, such as looping through data or inserting values into placeholders.
```

```
In Express.js, several popular template engines can be used, such as EJS, Pug, and Handlebars. Here, we will focus on EJS (Embedded JavaScript) as it's one of the most widely used template engines.
```

## Basic Steps for Setting Up a Template Engine in Express.js:

```md
1. Install the template engine.
2. Configure the template engine with Express.
3. Create and serve dynamic views.
4. Setting Up EJS in Express.js
```

#### Step 1: Installing EJS
To start, you need to install the EJS package in your Node.js project.

```bash
npm install ejs
```

#### Step 2: Configuring EJS in Express.js
You need to tell Express to use EJS as its template engine by setting the view engine to ejs in your Express configuration.

```js
const express = require('express');
const app = express();

// Set the view engine to ejs
// app.set('view engine', 'ejs'): Tells Express that you are using EJS.

app.set('view engine', 'ejs');

// Set the folder where your views (templates) are located
// app.set('views', './views'): Tells Express where to find the EJS templates (usually in a folder called views).

app.set('views', './views'); // Default folder is "views"
```


#### Step 3: Creating EJS Templates
Now, create a folder named views and place your EJS files (templates) inside it. For example, you might create a file index.ejs.

```html
<!-- views/index.ejs -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><%= title %></title>
</head>
<body>
    <h1>Hello, <%= name %>!</h1>
</body>
</html>
```

#### Step 4: Rendering EJS Templates with Dynamic Data
You can now render this EJS template in your Express routes, passing dynamic data to it using the res.render() method.

```js
app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page', name: 'Abhishek' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```

#### In this example:

```md
1. res.render('index', { title: 'Home Page', name: 'Abhishek' }): Express looks for a file named index.ejs in the views folder and sends it to the browser, replacing <%= title %> with 'Home Page' and <%= name %> with 'Abhishek'.

2. The <%= %> tag in EJS is used to embed variables into the HTML template.
```

## Features of EJS (Embedded JavaScript)

1. Display Variables in Templates
EJS allows you to embed JavaScript code directly into HTML templates.

<%= %>: Outputs the value and escapes any HTML special characters.
<%- %>: Outputs the value without escaping HTML.
Example:

html
Copy code
<p>Your name is: <%= name %></p>
<p>Your unescaped name is: <%- name %></p>
2. Control Flow (if, for, while)
You can use JavaScript control flow logic like if, for, while, etc., inside your EJS template.

If-Else Example:
html
Copy code
<% if (isAuthenticated) { %>
  <h2>Welcome back, <%= user %>!</h2>
<% } else { %>
  <h2>Please log in to continue.</h2>
<% } %>
For Loop Example:
html
Copy code
<ul>
  <% for(let i = 0; i < items.length; i++) { %>
    <li><%= items[i] %></li>
  <% } %>
</ul>
3. Partial Templates
EJS allows you to reuse chunks of HTML across multiple views. This is helpful when you have common components like headers, footers, or sidebars.

Create a partial file, for example, header.ejs:
html
Copy code
<!-- views/partials/header.ejs -->
<header>
  <h1>Welcome to My Website</h1>
</header>
Then, include it in your main template:

```html
<!-- views/index.ejs -->
<%- include('partials/header') %>
<h2>Welcome, <%= name %>!</h2>
```
<%- include('filename') %> includes the content of the partial file into your template.

4. Layouts with EJS
While EJS doesn't natively support layouts like some other template engines, you can simulate them using partials.

Example of creating a layout-like system:

```html
<!-- views/layout.ejs -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><%= title %></title>
</head>
<body>
  <%- include('partials/header') %>
  
  <main>
    <%- body %>
  </main>

  <%- include('partials/footer') %>
</body>
</html>
```
Then in your routes, pass the body of the template to this layout:

```js
app.get('/', (req, res) => {
  res.render('layout', { title: 'Home', body: '<h2>Home Content</h2>' });
});
```

## Static Files in EJS

You can serve static files like CSS, images, or JavaScript files by using Express's built-in express.static() middleware. For example, to serve CSS files:

Create a public folder and place your CSS file in it.

Use express.static() to serve the folder:

```js
app.use(express.static('public'));
```
Then link the CSS file in your EJS template:

```html
<!-- Inside your EJS file -->
<link rel="stylesheet" href="/style.css">
```

## Complete Example

```js
const express = require('express');
const app = express();

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', './views');

// Serve static files from the 'public' folder
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { title: 'Welcome', name: 'Abhishek' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About Us', content: 'We are a tech company' });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

#### Folder Structure:

```markdown
- views/
  - index.ejs
  - about.ejs
  - partials/
    - header.ejs
    - footer.ejs
- public/
  - style.css
```

## Summary of EJS Setup in Express.js

```md
1. Install ejs via npm and configure it in your Express app.
2. Use res.render() to render dynamic EJS templates.
3. Use EJS syntax to embed JavaScript logic inside your HTML templates.
4. Organize your code by using partials and static files.
5. EJS provides flexibility for creating dynamic, reusable web pages in an easy-to-understand way.
6. This setup allows you to create dynamic, efficient, and organized web applications!
```