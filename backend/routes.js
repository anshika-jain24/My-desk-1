
module.exports = function(app, db){
    // GET - For Testing
    app.get("/test", (req,res) => {
        let query = "SELECT * FROM USERS";
        db.query(query, (err, result) => {
            if(err) throw err;
            res.send(result);
        });
    });

    // POST - Adding users who login through Google
    app.post("/addUser", (req, res) => {
        let query1 = `SELECT * FROM USERS WHERE EMAIL='${req.body.email}'`;
        db.query(query1, (err, result) => {
            if(err) throw err;
            const res1 = JSON.parse(JSON.stringify(result));

            if(!res1[0]){
                let query2 = `INSERT INTO USERS VALUES('${req.body.name}', '${req.body.email}', '${req.body.googleId}')`;
                db.query(query2, (err, result) => {
                    if(err) throw err;
                    res.send("User successfully Added!");
                });
            }else{
                res.send("User already exists!")
            }
        });
    });

    // POST - Add new Todos 
    app.post("/addTodo", (req, res) => {
        let query = `INSERT INTO TODOS VALUES('${req.body.email}', '${req.body.todoName}', '${req.body.todoDate}', '${req.body.todoTime}')`;
        db.query(query, (err, result) => {
            if(err) throw err;
            res.send("Todo successfully added!")
        });
    });

    // GET - Get all Todos of User
    app.get("/getTodo/:email", (req, res) => {
        const d = new Date();
        // const date = `${d.getFullYear()}-${d.getMonth()}-${d.getDay()}`;
        const date = "2021-03-05";
        let query = `SELECT TodoName FROM TODOS WHERE Email='${req.params.email}' AND TodoDate='${date}' ORDER BY TodoTime`;
        db.query(query, (err, result) => {
            if(err) throw err;
            res.send(result);
        });
    })
}

