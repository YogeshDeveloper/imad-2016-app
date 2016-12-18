var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var crypto = require('crypto');
var bodyParser = require('body-parser');
var session = require('express-session');


//console.log(process.env.DB_PASSWORD);

var config = {
    user: 'yogeshdeveloper',
    database: 'yogeshdeveloper',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
};


var app = express();
app.use(morgan('combined'));


var pool = new Pool(config);

app.get('/test-db', function (req, res) {
   // make a select request
   // return a response with the results
   pool.query('SELECT * FROM test', function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          res.send(JSON.stringify(result.rows));
      }
   });
});


var articles={
    'article-one':{
        title: 'Article One | Yogesh',
        heading: 'Article One',
        date:'dec 8,2016',
        content:`<p>
                   The poem which I read it on my textbooks back in school days. I love this poem. It gives a lot of power. My love towards literature started only after reading this.....
                    </p>`
        
        
       
    },
    'article-two':{
        
        title: 'Article Two | Yogesh',
        heading: 'Article Two',
        date:'dec 8,2016',
        content:`<p>
                   The poem which I read it on my textbooks back in school days. I love this poem. It gives a lot of power. My love towards literature started only after reading this.....
                    </p>`
    },
    'article-three':{
        
        title: 'Article Two | Yogesh',
        heading: 'Article Two',
        date:'dec 8,2016',
        content:`<p>
                   The poem which I read it on my textbooks back in school days. I love this poem. It gives a lot of power. My love towards literature started only after reading this.....
                    </p>`
    }
    
};


function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    
    var htmlTemplate = `
    <html>
      <head>
          <title>
              ${title}
          </title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href="/ui/style.css" rel="stylesheet" />
      </head> 
      <body>
          <div class="container">
              <div>
                  <a href="/">Home</a>
              </div>
              <hr/>
              <h3>
                  ${heading}
              </h3>
              <div>
                  ${date}
              </div>
              <div>
                ${content}
              </div>
              <hr/>
              <h4>Comments</h4>
              <div id="comment_form">
              </div>
              <div id="comments">
                <center>Loading comments...</center>
              </div>
          </div>
          <script type="text/javascript" src="/ui/article.js"></script>
      </body>
    </html>
    `;
    return htmlTemplate;
}


app.get('/articles/:articleName', function (req, res) {
  // SELECT * FROM article WHERE title = '\'; DELETE WHERE a = \'asdf'
  pool.query("SELECT * FROM article WHERE title = '", req.params.articleName,"'", function (err, result) {
    if (err) {
        res.status(500).send(err.toString());
    } else {
        if (result.rows.length === 0) {
            res.status(404).send('Article not found');
        } else {
            var articleData = result.rows[0];
            res.send(createTemplate(articleData));
        }
    }
  });
});




var express = require('express');
var morgan = require('morgan');
var path = require('path');


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/article.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '/article.js'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/img/demo-screen-1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'img', 'demo-screen-1.jpg'));
});

app.get('/img/bg-cta.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'img', 'bg-cta.jpg'));
  });

app.get('/img/bg-pattern.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'img', 'bg-pattern.png'));
  });
  
app.get('/img/demo-screen-1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'img', 'demo-screen-1.jpg'));
  });
  
app.get('/css/new-age.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'css', 'new-age.css'));
  });

app.get('/css/new-age.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'css', 'new-age.min.css'));
  });
  
app.get('/vendor/bootstrap/css/bootstrap.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'vendor/bootstrap/css', 'bootstrap.css'));
  });
  
app.get('/vendor/bootstrap/css/bootstrap.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'vendor/bootstrap/css', 'bootstrap.min.css'));
  });
  
app.get('/vendor/device-mockups/device-mockups.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'vendor/device-mockups', 'device-mockups.css'));
  });
  
app.get('/vendor/device-mockups/device-mockups2.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'vendor/device-mockups/device-mockups2.css', 'device-mockups2.css'));
  });
  
app.get('/vendor/device-mockups/device-mockups.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'vendor/device-mockups', 'device-mockups.min.css'));
  });
  
app.get('/vendor/device-mockups/device-mockups2.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'vendor/device-mockups', 'device-mockups2.min.css'));
  });
  
app.get('/vendor/font-awesome/css/font-awesome.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'vendor/font-awesome/css', '/font-awesome.css'));
  });
  
app.get('/vendor/font-awesome/css/font-awesome.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'vendor/font-awesome/css', '/font-awesome.min.css'));
  });
  
app.get('/vendor/simple-line-icons/css/simple-line-icons.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'vendor/simple-line-icons/css', 'simple-line-icons.css'));
  });
  
app.get('/img/bg.jpeg', function (req, res) {
  res.sendFile(path.join(__dirname, 'img', 'bg.jpeg'));
});


app.get('/img/lataka.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'img', 'lataka.jpg'));
});


app.get('/img/do_not_quit.jpeg', function (req, res) {
  res.sendFile(path.join(__dirname, 'img', 'do_not_quit.jpeg'));
});

app.get('/img/bari.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'img', 'bari.jpg'));
});

app.get('/img/Interstellar.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'img', 'Interstellar.jpg'));
});

app.get('/img/avatar.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'img','blog', 'avatar.jpg'));
});

app.get('/ui/1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '1.jpg'));
});


app.get('/img/music.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'img','blog', 'music.jpg'));
});

app.get('/img/life.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'img','blog', 'life.jpg'));
});

app.get('/img/travel.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'img','blog', 'travel.jpg'));
});

app.get('/js/jquery.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'js', 'jquery.js'));
});

app.get('/js/typed.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'js', 'typed.js'));
});

app.get('/js/script.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'js', 'script.js'));
});

app.get('/ui/main_blog.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main_blog.js'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/js/blog/pace.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'js','blog', 'pace.min.js'));
});

app.get('/js/blog/parallax.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'js','blog', 'parallax.js'));
});

app.get('/js/blog/smoothScroll.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'js','blog', 'smoothScroll.js'));
});

app.get('/js/blog/wow.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'js','blog', 'wow.min.js'));
});

app.get('/js/blog/jquery-1.11.2.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'js','blog', 'jquery-1.11.2.min.js'));
});

app.get('/ui/Blog.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Blog.html'));
});

app.get('/ui/one.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'one.html'));
});

app.get('/ui/article.js', function (req, res) {
  res.sendFile(path.join(__dirname,'ui', 'article.js'));
});


//app.get('/ui/two.html', function (req, res) {
//  res.sendFile(path.join(__dirname, 'ui', 'two.html'));
//});

//app.get('/ui/three.html', function (req, res) {
//  res.sendFile(path.join(__dirname, 'ui', 'three.html'));
//});

//app.get('/ui/four.html', function (req, res) {
//  res.sendFile(path.join(__dirname, 'ui', 'four.html'));
//});

app.get('/ui/animate_blog.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'animate_blog.css'));
});

app.get('/ui/blog_style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'blog_style.css'));
});

app.get('/ui/yogi.gif', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'yogi.gif'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
