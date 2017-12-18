const express = require('express');
const router = express.Router();
const pg = require('pg');
const path = require('path');
const connectionString = 'postgres://localhost:5432/Concerts_Tour';
const config = {
    user: 'postgres',
    database: 'Concerts_Tour',
    password: '1234',
    port: 5432
};

// pool takes the object above as parameter
const pool = new pg.Pool(config);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/venue/:vname', (req, res, next) => {
  const results = [];
  const vname = req.params.vname;
  // Get a Postgres client from the connection pool
  pool.connect(function (err, client, done) {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    };

    res.send("{'name':'Verizon', 'artistName':'Foo Fighters'}");

    /*
    client.query('SELECT * FROM venues WHERE name = \'' + vname.replace('%20', ' ') + '\';', function (err, result) {
            done();
            if (err) {
                console.log(err);
                res.status(400).send(err);
            }
            res.status(200).send(result.rows);
       })
    */

    /*
    // SQL Query > Select Data
    client.query('SELECT * FROM venues WHERE name = ($1);', [vname]);
    // Stream results back one row at a time
    query.on('row', (row) => {
      results.push(row);
    });
    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json(results);
    });*/
  });
});


router.get('/api/artist/:aname', (req, res, next) => {
  const results = [];
  const aname = req.params.aname;
  // Get a Postgres client from the connection pool
  pool.connect(function (err, client, done) {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    };

    res.send("{'name':'Foo Fighters', 'timePlaying':'8:00 pm'}");

    /*
    client.query('SELECT * FROM artists WHERE artistsName = "' + aname.replace('%20', ' ') + '";', function (err, result) {
            done();
            if (err) {
                console.log(err);
                res.status(400).send(err);
            }
            else
            {
                res.status(200).send(result.rows);
            }
       })
    */

    /*
    // SQL Query > Select Data
    const query = client.query('SELECT * FROM artists WHERE artistsName = ($1);', [aname]);
    // Stream results back one row at a time
    query.on('row', (row) => {
      results.push(row);
    });
    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json(results);
    });*/
  });
});

module.exports = router;
