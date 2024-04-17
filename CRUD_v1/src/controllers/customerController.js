const controller={};

controller.list=(req,res)=>{
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM cliente',(err,customers)=>{
            if(err){
               res.json(err); 
            }
            console.log(customers);
            res.render('customers',{
                data:customers
            });
        })

    });
    //res.send('holla william Suárez !!!');
}

controller.save = (req, res) => {
   const data = req.body;
             //console.log(req.body);
            // res.send('works');
        req.getConnection((err, connection) => {
        const query = connection.query('INSERT INTO cliente set ?', data, (err, customer) => {
        console.log(customer)
        res.redirect('/');
      });
    });
}    

controller.delete = (req, res) => {
    const { id } = req.params;
         req.getConnection((err, connection) => {
         connection.query('DELETE FROM cliente WHERE id = ?', [id], (err, rows) => {
         res.redirect('/');
        });
       });
     }


     controller.edit = (req, res) => {
        const { id } = req.params;
        req.getConnection((err, conn) => {
        conn.query("SELECT * FROM cliente WHERE id = ?", [id], (err, rows) => {
        res.render('customer_edit', {
        data: rows[0]
        })
     });
   });
};


controller.update = (req, res) => {
    const { id } = req.params;
    const newCustomer = req.body;
    req.getConnection((err, conn) => {
    
    conn.query('UPDATE cliente set ? where id = ?', [newCustomer, id], (err, rows) => {
    res.redirect('/');
    });
    });
    };







module.exports=controller;