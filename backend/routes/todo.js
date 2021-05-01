module.exports = function(app, db){
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
        const date = "2021-04-06";
        let query = `SELECT TodoName FROM TODOS WHERE Email='${req.params.email}' AND TodoDate='${date}' ORDER BY TodoTime`;
        db.query(query, (err, result) => {
            if(err) throw err;
            res.send(result);
        });
    })
}

