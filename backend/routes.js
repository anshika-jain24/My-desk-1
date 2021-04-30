module.exports = function(app, db){
    // GET - For Testing
    app.get("/test", (req,res) => {
        let query = "SELECT * FROM EMPLOYEE";
        db.query(query, (err, result) => {
            if(err) throw err;
            res.send(result);
        });
    });
}

