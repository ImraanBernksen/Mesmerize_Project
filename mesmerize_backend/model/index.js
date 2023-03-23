const db = require('../config');

const {hash, compare, hashSync } = require('bcrypt');

const {createToken} = require('../middleware/AuthenticatedUser.js');

/** User **/
class User {
    login(req, res) {
        const {userEmail, userPassword} = req.body;
        const strQry =
        `
        SELECT firstName, lastName, userEmail, userPassword, userImg, userRole, DATE_FORMAT(joinDate, '%d-%m-%Y') AS joinDate
        FROM Users
        WHERE userEmail = '${userEmail}';
        `;
        db.query(strQry, async (err, data) => {
            if (err) throw err;
            if ((!data.length) || (data == null)) {
                res.status(401).json({err:
                "PROVIDED A WRONG EMAIL ADDRESS!"});
            } else {
                await compare(userPassword, data[0].userPassword,(cErr, cResult) => {
                    if (cErr) throw cErr; const jwToken = createToken(
                        {
                            userEmail, userPassword
                        }
                    );
                    res.cookie('LegitUser',
                    jwToken, {
                        maxAge: 3600000,
                        httpOnly: true
                    })
                    if (cResult) {
                        res.status(200).json({
                            msg: 'USER IS LOGIN',
                            jwToken,
                            result:data[0]
                        })  
                    } else {
                        res.status(401).json({
                            err: 'YOU ENTERED AN INVALID PASSWORD OR DID NOT SIGNUP. '
                        })
                    }
                })
            }
        })
    }
    fetchUsers(req, res) {
        const strQry =
        `
        SELECT userID, firstName, lastName, userEmail, userPassword, userImg, userRole, DATE_FORMAT(joinDate, '%d-%m-%Y') AS joinDate
        FROM Users;
        `;
        db.query(strQry, (err, data) => {
            if (err) throw err;
            else res.status(200).json(
                {results: data} );
        })
    }
    fetchUser(req, res) {
        const strQry =
        `
        SELECT userID, firstName, lastName, userEmail, userPassword, userImg, userRole, DATE_FORMAT(joinDate, '%d-%m-%Y') AS joinDate
        FROM Users
        WHERE userID = ?;
        `;
        db.query(strQry,[req.params.id],
            (err,data) => {
                if (err) throw err;
                else res.status(200).json(
                    {results: data} );
            })
    }
    async createUser(req, res) {
        let detail = req.body;
        detail.userPassword = await
        hash(detail.userPassword, 15);
        let user = {
            userEmail: detail.userEmail,
            userPassword: detail.userPassword
        }
        const strQry =
        `INSERT INTO Users
        SET ?;`;
        db.query(strQry, [detail], (err) => {
            if (err) {
                res.status(401).json({err});  
            } else {
                const jwToken = createToken(user);
                res.cookie("LegitUser", jwToken, {
                    maxAge: 3600000,
                    httpOnly: true
                });
                res.status(200).json({msg: "A USER RECORD WAS SAVED."})
            }
        })
    }
    updateUser(req, res) {
        let data = req.body;
        if(data.userPassword !== null ||
            data.userPassword !== undefined)
            data.userPassword = hashSync(data.userPassword, 15);
        const strQry =
        `
        UPDATE Users
        SET ?
        WHERE userID = ?;
        `;
        db.query(strQry,[data, req.params.id],
            (err) => {
                if(err) throw err;
                res.status(200).json( {msg: "A ROW WAS AFFECTED"})
            })
    }
    deleteUser(req,res) {
        const strQry =
        `
        DELETE FROM Users
        WHERE userID = ?;
        `;
        db.query(strQry, [req.params.id],
            (err) => {
                if(err) throw err;
                res.status(200).json( {msg:
                "A RECORD WAS REMOVED FROM A DATABASE"} );
        })
    }
}

/** Product **/
class Product {
    fetchProducts(req, res) {
        const strQry =
        `
        SELECT productID, productName, productDescription, 
        category, productPrice, productImg, quantity
        FROM Products;
        `;
        db.query(strQry, (err, results) => {
            if(err) throw err;
            res.status(200).json({results: results})
        });
    }
    fetchProduct(req, res) {
        const strQry =
        `
        SELECT productID, productName, productDescription,
        category, productPrice, productImg, quantity
        FROM Products
        WHERE productID = ?;
        `;
        db.query(strQry, [req.params.id], (err, results) => {
            if(err) throw err;
            res.status(200).json({results: results})
        });
    }
    addProduct(req, res) {
        const strQry =
        `
        INSERT INTO Products
        SET ?;
        `;
        db.query(strQry, [req.body],
            (err) => {
                if (err) {
                    res.status(400).json({err: "UNABLE TO INSERT A NEW RECORD."});
                } else {
                    res.status(200).json({msg: "PRODUCT SAVED"});
                }
            }
        );
    }
    updateProduct(req, res) {
        const strQry =
        `
        UPDATE Products
        SET ?
        WHERE productID = ?
        `;
        db.query(strQry, [req.body, req.params.id],
            (err) => {
                if (err) {
                    res.status(400).json({err: "UNABLE TO UPDATE A RECORD."});
                } else {
                    res.status(200).json({msg: "PRODUCTS UPDATED"});
                }
            }
        );
    }
    deleteProduct(req, res) {
        const strQry =
        `
        DELETE FROM Products
        WHERE productID = ?;
        `;
        db.query(strQry, [req.params.id], (err) => {
            if (err) res.status(400).json({err: "THE RECORD WAS NOT FOUND."});
            res.status(200).json({msg: "A PRODUCT WAS DELETED."});
        })
    }
}

/** Cart **/
class Cart {
    fetchCart(req, res) {
        const strQry =
        `
        SELECT productName, productPrice, productImg
        FROM Users
        INNER JOIN Cart ON Users.userID = Cart.userID
        INNER JOIN Products ON Cart.productID = Products.productID
        WHERE Cart.userID = ${req.params.id}; 
        `;
        db.query(strQry, (err, results) => {
            if(err) throw err;
            res.status(200).json({results: results})
        });
    }
    addCart(req, res) {
        const strQry =
        `
        INSERT INTO Cart
        SET ?;
        `;
        db.query(strQry, [req.body],
            (err) => {
                if (err) {
                    res.status(400).json({err: "UNABLE TO INSERT A NEW RECORD."});
                } else {
                    res.status(200).json({msg: "CART INFO SAVED"});
                }
            }
        );
    }
    updateCart(req, res) {
        const strQry =
        `
        UPDATE Cart
        SET ?
        WHERE cartID = ?
        `;
        db.query(strQry, [req.body, req.params.id],
            (err) => {
                if (err) {
                    res.status(400).json({err: "UNABLE TO UPDATE A RECORD."});
                } else {
                    res.status(200).json({msg: "CART UPDATED"});
                }
            }
        );
    }
    deleteCarts(req, res) {
        const strQry =
        `
        DELETE FROM Cart
        WHERE cartID = ?;
        `;
        db.query(strQry, [req.params.id], (err) => {
            if (err) res.status(400).json({err: "THE RECORD WAS NOT FOUND."});
            res.status(200).json({msg: "CARTS WAS CLEARED."});
        })
    }
    deleteCart(req, res) {
        const strQry =
        `
        DELETE FROM Cart
        WHERE cartID = ?;
        `;
        db.query(strQry, [req.params.id], (err) => {
            if (err) res.status(400).json({err: "THE RECORD WAS NOT FOUND."});
            res.status(200).json({msg: "A CART WAS DELETED."});
        })
    }

}


module.exports = {
    User,
    Product,
    Cart
}