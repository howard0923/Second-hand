const express = require("express")
const nodemailer = require('nodemailer');
const cors = require("cors")
const bodyParser = require("body-parser")
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: true })
const jwt = require("jsonwebtoken")
const multer = require("multer")
const upload = multer()
//const bcrypt = require('bcrypt');
const db = require("./db")
const { cp } = require("fs");
//const util = require('util');

const app = express()

app.use(upload.array())
app.use(urlencodedParser)
app.use(express.json())
app.use(cors())
app.use(jsonParser)

//會員專區
app.post("/api/userProfiles", (req, res) => {
  const email = req.body.UserEmail
  const sqlUserData =
    "SELECT * FROM user JOIN address ON user.uId = address.uId WHERE email = ?"
  db.query(sqlUserData, email, (err, result) => {
    if (err) console.log(err)
    const address = result[0].city + result[0].district + result[0].remaining
    result[0].address = address
    res.send(result)
  })
})

app.post("/api/updateUser", (req, res) => {
  const email = req.body.email
  const name = req.body.name
  const phone = req.body.phone
  const address = req.body.address
  const city = address.substring(0, 3)
  const district = address.substring(3, 6)
  const remaining = address.substring(6, 100)
  const sqlGetUid = "SELECT uId FROM user WHERE email = ?"
  const sqlUpdateUser = "UPDATE user set name = ?,phone = ? WHERE email = ?"
  const sqlUpdateUserAddress =
    "UPDATE address set city = ?,district = ?,remaining = ? WHERE uId = ?"
  //const sqlUserData = "SELECT * FROM user JOIN address ON user.uId = address.uId WHERE email = ?";
  db.query(sqlGetUid, email, (err, result) => {
    if (err) console.log(err)
    const uId = result[0].uId
    db.query(sqlUpdateUser, [name, phone, email], (err, result) => {
      if (err) console.log(err)
      db.query(
        sqlUpdateUserAddress,
        [city, district, remaining, uId],
        (err, result) => {
          if (err) console.log(err)
          res.send(result)
        }
      )
    })
  })
})

//最愛收藏

app.post("/api/favorite", (req, res) => {
  const uId = req.body.uId;
  const pageIndex = req.query.page * 20;
  const sqlGetProduct =
    "SELECT p.pId,p.name,p.price,p.note,product_pic.image,product_status.status \
     FROM product as p JOIN product_pic ON product_pic.pId=p.pId \
     JOIN product_status ON product_status.pId = p.pId \
     LEFT JOIN `favorite` ON p.pId = `favorite`.pId JOIN `user` ON `favorite`.uId = `user`.uId \
     where user.uId = ? \
     GROUP BY p.pId \
     LIMIT ?,20";

  db.query(sqlGetProduct, [uId, pageIndex], (err, result) => {
    if (err) console.log(err);
    for (var i = 0; i < result.length; i++) {
      result[i].isFavorite = true;
    }
    res.send(result);
  })
})

app.delete("/api/deleteFavorite/:id", (req, res) => {
  const pId = req.params.id
  const sqlDelete = "DELETE FROM favorite WHERE pId = ?"

  db.query(sqlDelete, pId, (err, result) => {
    if (err) console.log(err)
    res.send(result)
  })
})

app.post("/api/addFavorite", (req, res) => {
  const pId = req.body.product.pId
  const email = req.body.email
  const sqlGetUid = "SELECT uId FROM user WHERE email = ?"
  const sqlAddFavorite =
    "INSERT INTO favorite (pId,uId,available) VALUES (?,?,?)"
  const sqlCheckFavorite = "SELECT pId FROM favorite WHERE pId = ? AND uId = ?"
  db.query(sqlGetUid, email, (err, result) => {
    if (err) console.log(err)

    const uId = result[0].uId
    db.query(sqlCheckFavorite, [pId, uId], (err, rows) => {
      if (err) console.log(err)

      if (rows.length >= 1) {
        const message = "product has add!"
        return res.send(message)
      } else {
        db.query(sqlAddFavorite, [pId, uId, 1], (err, result) => {
          if (err) console.log(err)
          const message = "Product add success"
          res.send(message)
        })
      }
    })
  })
})


//-----------Menu------------------

app.get('/api/getBrand', (req, res) => {
  const sqlGetBrand = "SELECT * FROM brand";
  db.query(sqlGetBrand, (err, result) => {
    if (err) console.log(err);
    for (var i = 0; i < result.length; i++) {
      result[i].classify = result[i].brand;
      result[i].classifyId = result[i].brandId;
      result[i].typeOf = 'b';
    }
    res.send(result);
  })
})

app.get('/api/getColor', (req, res) => {
  const sqlGetColor = "SELECT * FROM color";
  db.query(sqlGetColor, (err, result) => {
    if (err) console.log(err);
    for (var i = 0; i < result.length; i++) {
      result[i].classify = result[i].color;
      result[i].classifyId = result[i].colorId;
      result[i].typeOf = 'c';
    }
    res.send(result);
  })
})

app.get('/api/getType', (req, res) => {
  const sqlGetType = "SELECT * FROM type";
  db.query(sqlGetType, (err, result) => {
    if (err) console.log(err);
    for (var i = 0; i < result.length; i++) {
      result[i].classify = result[i].type;
      result[i].classifyId = result[i].typeId;
      result[i].typeOf = 't';
    }
    res.send(result);
  })
})


//---------classification-----------
app.post('/api/classifyProducts', (req, res) => {
  const pageIndex = req.body.page * 20;
  const Id = req.body.id;
  const typeOf = req.body.type;
  const sqlGetClassifyBrandProducts =
    "SELECT p.pId,p.name,p.price,p.note,product_pic.image,product_status.status \
   FROM product as p JOIN product_pic ON product_pic.pId=p.pId JOIN product_status ON product_status.pId = p.pId \
   WHERE brandId = ? \
   Group by p.pId \
   LIMIT ?,20";
  const sqlGetClassifyColorProducts =
    "SELECT p.pId,p.name,p.price,p.note,product_pic.image,product_status.status \
   FROM product as p JOIN product_pic ON product_pic.pId=p.pId JOIN product_status ON product_status.pId = p.pId \
   WHERE colorId = ? \
   Group by p.pId \
   LIMIT ?,20";
  const sqlGetClassifyTypeProducts =
    "SELECT p.pId,p.name,p.price,p.note,product_pic.image,product_status.status \
    FROM product as p JOIN product_pic ON product_pic.pId=p.pId JOIN product_status ON product_status.pId = p.pId \
    WHERE typeId = ? \
    Group by p.pId \
    LIMIT ?,20";

  if (typeOf == 'b') {
    db.query(sqlGetClassifyBrandProducts, [Id, pageIndex], (err, result) => {
      if (err) console.log(err);
      res.send(result);
    })
  }

  else if (typeOf == 'c') {
    db.query(sqlGetClassifyColorProducts, [Id, pageIndex], (err, result) => {
      if (err) console.log(err);
      res.send(result);
    })
  }

  else if (typeOf == 't') {
    db.query(sqlGetClassifyTypeProducts, [Id, pageIndex], (err, result) => {
      if (err) console.log(err);
      res.send(result);
    })
  }
})

///////首頁產品///////

app.get('/api/sourceProducts', (req, res) => {
  const sqlProduct =
    "SELECT p.pId,p.name,p.price,p.note,product_pic.image,product_status.status \
     FROM product as p JOIN product_pic ON product_pic.pId=p.pId \
     JOIN product_status ON product_status.pId = p.pId \
     Group by p.pId ";

  db.query(sqlProduct, (err, result) => {
    if (err) console.log(err)
    res.send(result)
  })

})

app.get("/api/getProducts", (req, res) => {
  const pageIndex = req.query.page * 20;
  const sqlProduct =
    "SELECT pId \
     FROM product  \
     LIMIT ?,20";

  const sqlRandomProduct =
    "SELECT p.pId,p.name,p.price,p.note,product_pic.image,product_status.status \
      FROM product as p JOIN product_pic ON product_pic.pId=p.pId JOIN product_status ON product_status.pId = p.pId \
      WHERE p.pId IN (?) \
      Group by p.pId \
      ORDER BY rand()";

  db.query(sqlProduct, pageIndex, (err, rows) => {
    if (err) console.log(err);
    const arrayPId = [];
    for (var j = 0; j < rows.length; j++) {
      arrayPId.push(rows[j].pId)
    }
    db.query(sqlRandomProduct, [arrayPId], (err, result) => {
      if (err) console.log(err);
      res.send(result)
    })
  })
})

function pythonProcess(req, res) {
  const pageIndex = req.query.page * 20;
  const uId = req.body.uId;

  let spawn = require("child_process").spawn

  let process = spawn('python', [
    "test.py",
    uId
  ])

  process.stdout.on('data', (data) => {
    const parsedString = JSON.parse(data);
    const sqlGetFavoriteItem = "SELECT pId FROM favorite WHERE uId = ?"
    const sqlGetProduct =
      "SELECT p.pId,p.name,p.price,p.note,product_pic.image,product_status.status \
       FROM product as p JOIN product_pic ON product_pic.pId=p.pId JOIN product_status ON product_status.pId = p.pId \
       WHERE p.pId IN (?) \
       Group by p.pId \
       ORDER BY FIELD(p.pId,?) \
       LIMIT ?,20";
    db.query(sqlGetFavoriteItem, uId, (err, rows) => {
      if (err) console.log(err)
      const Fpid = [];
      for (var j = 0; j < rows.length; j++) {
        Fpid.push(rows[j].pId)
      }
      db.query(sqlGetProduct, [parsedString, parsedString, pageIndex], (err, result) => {
        if (err) console.log(err)

        for (var i = 0; i < result.length; i++) {
          if (Fpid.includes(result[i].pId)) {
            result[i].isFavorite = true
          } else {
            result[i].isFavorite = false
          }
        }
        res.send(result);
      })
    })

  })
}

app.post("/api/recommendProducts", pythonProcess)

//訂閱方案

app.get("/api/GetPlan", (req, res) => {
  const sqlPlan = "SELECT * FROM plan_content"
  db.query(sqlPlan, (err, result) => {
    if (err) console.log(err)

    res.send(result)
  })
})

app.post("/api/GetPlanMember", (req, res) => {
  const uId = req.body.uId;
  const current = new Date()
  const sqlPlan = "SELECT * FROM `plan` WHERE uId = ? && due_date > ? order by due_date DESC";
  db.query(sqlPlan, [uId, current], (err, result) => {
    if (err) console.log(err)
    if (result) res.send(result[0])
    if (result == null) res.send(0)
  })
})

app.post("/api/GetPlanContent", (req, res) => {
  const planId = req.body.planId
  const sqlPlan = "SELECT * FROM plan_content WHERE planId = ?"
  db.query(sqlPlan, planId, (err, result) => {
    if (err) console.log(err)

    res.send(result)
  })
})
const addDays = (current, days) => {
  const due_date = new Date(
    current.getFullYear(),
    current.getMonth(),
    current.getDate() + days,
    current.getHours(),
    current.getMinutes(),
    current.getSeconds()
  )
  return due_date
}

app.post("/api/payForPlan", (req, res) => {
  const planId = req.body.planId;
  const user_due_date = new Date(req.body.due_date);
  const uId = req.body.uId;
  const planStatus = req.body.planStatus;
  const date = req.body.date
  const current = new Date()
  const due_date = addDays(current, date);
  const sqlVerifyCheck = "SELECT IsVerified FROM user WHERE uId = ?";
  const sqlAddPlan =
    "INSERT INTO plan (planId,uId,start_date,due_date) VALUES (?,?,?,?)";
  const sqlChangePlan =
    "UPDATE plan SET planId = ? WHERE  due_date = (SELECT MAX(due_date) FROM plan WHERE uId = ?)";
  const sqlProlongPlan =
    "UPDATE plan SET due_date = ? WHERE due_date = (SELECT MAX(due_date) FROM plan WHERE uId = ?)";
  db.query(sqlVerifyCheck,uId,(err,rows) => {
    if(err) console.log(err);
    if(rows[0].IsVerified == 1){
      if (planStatus == '前往支付') {
        db.query(sqlAddPlan, [planId, uId, current, due_date], (err, result) => {
          if (err) console.log(err)
          res.send({ message: '訂閱成功' });
        })
      }
      else if (planStatus == '更改方案') {
        db.query(sqlChangePlan, [planId, uId], (err, result) => {
          if (err) console.log(err)
          res.send({ message: '方案更改成功' });
        })
      }
      else if (user_due_date < current && planStatus == '續訂方案') {
        db.query(sqlAddPlan, [planId, uId, current, due_date], (err, result) => {
          if (err) console.log(err)
          res.send({ message: '續訂成功' });
        })
      }
      else {
        const prolong_due_date = addDays(user_due_date, date);
        db.query(sqlProlongPlan, [prolong_due_date, uId], (err, result) => {
          if (err) console.log(err)
          res.send({ message: '您的方案已延長' });
        })
      }
    
    }
    else{
      res.send({message:'信箱尚未驗證'})
    }
  })

})

//產品詳細資訊

app.post("/api/productDetail", (req, res) => {
  const pId = req.body.pId
  const sqlProductDetail = "SELECT * FROM product WHERE product.pId = ? "
  db.query(sqlProductDetail, pId, (err, result) => {
    if (err) console.log(err)
    res.send(result)
  })
})

app.post("/api/productDetailImage", (req, res) => {
  const pId = req.body.pId;
  const sqlImage = "SELECT image FROM product_pic WHERE pId = ? ";
  db.query(sqlImage, pId, (err, result) => {
    if (err) console.log(err)
    res.send(result)
  })
})

app.post("/api/productStatus", (req, res) => {
  const pId = req.body.pId;
  const sqlCheck = "SELECT status FROM product_status WHERE pId = ?";
  db.query(sqlCheck, pId, (err, result) => {
    if (err) console.log(err);
    res.send(result);
  })
})

//購物車


app.post("/api/getCartProduct", (req, res) => {
  const email = req.body.email
  const sqlGetUid = "SELECT uId FROM user WHERE email = ?"
  const sqlGetPid = "SELECT pId FROM cart WHERE uId = ?"
  const sqlGetProduct = "SELECT * FROM product WHERE product.pId = ?"
  db.query(sqlGetUid, email, (err, result) => {
    if (err) console.log(err)

    const uId = result[0].uId
    db.query(sqlGetPid, uId, (err, result) => {
      if (err) console.log(err)

      const pId = result[0].pId
      db.query(sqlGetProduct, pId, (err, result) => {
        if (err) console.log(err)
        res.send(result)
      })
    })
  })
})

app.post("/api/getCartProductImage", (req, res) => {
  const email = req.body.email
  const sqlGetUid = "SELECT uId FROM user WHERE email = ?"
  const sqlGetPid = "SELECT pId FROM cart WHERE uId = ?"
  const sqlGetProductImage = "SELECT image FROM product_pic WHERE pId = ?"
  db.query(sqlGetUid, email, (err, result) => {
    if (err) console.log(err)

    const uId = result[0].uId
    db.query(sqlGetPid, uId, (err, result) => {
      if (err) console.log(err)

      const pId = result[0].pId

      db.query(sqlGetProductImage, pId, (err, result) => {
        if (err) console.log(err)
        res.send(result)
      })
    })
  })
})

app.post("/api/userPlan", (req, res) => {
  const uId = req.body.uId;
  const sqlCheckPlan = "SELECT * FROM plan WHERE uId = ?";
  db.query(sqlCheckPlan, uId, (err, result) => {
    if (err) console.log(err);
    res.send(result);
  })
})

// app.post("/api/getPlanPrice",(req,res) => {
//   const planId = req.body.planId;
//   const sqlGetPrice = "SELECT price FROM plan_content WHERE planId = ?";
//   db.query(sqlGetPrice,planId,(err,result) => {
//     if (err) console.log(err);
//     res.send(result);
//   })
// })

app.post("/api/addCart", (req, res) => {
  const pId = req.body.pId;
  const email = req.body.email;
  const current = new Date();
  const sqlCheckPlan = "SELECT * FROM plan WHERE uId = ?";
  const sqlGetUid = "SELECT uId FROM user WHERE email = ?";
  const sqlAddCart = "INSERT INTO cart (pId,uId) VALUES(?,?)";
  const sqlCartCheck = "SELECT * FROM cart WHERE uId = ?";
  const sqlVerifyCheck = "SELECT IsVerified FROM user WHERE uId = ?";
  const sqlGetTransaction = "SELECT isProductReturned FROM transaction WHERE uId = ?  ORDER by date DESC";


  db.query(sqlGetUid, email, (err, result) => {
    if (err) console.log(err)
    const uId = result[0].uId
    db.query(sqlVerifyCheck, uId, (err, rows) => {
      if (err) console.log(err)
      if (rows[0].IsVerified == 1) {
        db.query(sqlCartCheck, uId, (err, rows) => {
          if (err) console.log(err);
          if (rows.length > 0) {
            res.send({ message: '購物車中已有其他商品，請先清空購物車' });
          }
          else {
            db.query(sqlCheckPlan, uId, (err, result) => {
              if (err) console.log(err);
              const due_date = result[0].due_date;
              if ((Date.parse(current)).valueOf() < (Date.parse(due_date)).valueOf()) {
                db.query(sqlGetTransaction, uId, (err, rows) => {
                  if (err) console.log(err);
                  if(rows.length > 0 && rows[0].isProductReturned == null){
                    res.send({ message: '您目前已租用其他商品' });
                  }
                  else {
                    db.query(sqlAddCart, [pId, uId], (err, result) => {
                      if (err) {
                        console.log(err)
                      }
                      res.send(result)
                    })
                  }
                })
              }
              else {
                res.send({ message: '您的訂閱方案已過期' });
              }
            })
          }
        })

      }
      else{
        res.send({ message: '此信箱尚未驗證，請先驗證信箱。' });
      }
    })
  })
})

app.post("/api/deleteCart", (req, res) => {
  const email = req.body.email
  const pId = req.body.pId
  const sqlGetUid = "SELECT uId FROM user WHERE email = ?"
  const sqlDelete = "DELETE FROM cart WHERE  uId = ? AND pId = ?"
  db.query(sqlGetUid, email, (err, result) => {
    if (err) console.log(err)
    const uId = result[0].uId
    db.query(sqlDelete, [uId, pId], (err, result) => {
      if (err) console.log(err)
      res.send(result)
    })
  })
})

app.post("/api/addOrder", (req, res) => {
  const pId = req.body.pId
  const uId = req.body.uId
  const staffId = req.body.isStaff
  const date = new Date()
  const sqlPlan = "SELECT * FROM plan WHERE uId = ?";
  const sqlupdateStatus = "UPDATE product_status SET status = ? WHERE pId = ?";
  const deleteCart = "DELETE FROM cart WHERE  uId = ? AND pId = ?";
  const sqladdOrder =
    "INSERT INTO transaction (pId,uId,staffId,planId,date,start_date,ShippingAddressId,deliveryId) VALUES (?,?,?,?,?,?,?,?)"

  db.query(sqlPlan, uId, (err, rows) => {
    if (err) console.log(err)
    const planId = rows[0].planId
    const start_date = rows[0].start_date
    db.query(
      sqladdOrder,
      [pId, uId, staffId, planId, date, start_date, uId, 0],
      (err, result) => {
        if (err) console.log(err);
        db.query(sqlupdateStatus, ['unavailable', pId], (err, result) => {
          if (err) console.log(err);
          db.query(deleteCart, [uId, pId], (err, result) => {
            if (err) console.log(err);
          })
        })
      }
    )
  })
})

//訂單管理

app.post("/api/getOrder", (req, res) => {
  const uId = req.body.uId;
  const sqlGetOrder = "SELECT * FROM transaction JOIN delivery ON transaction.deliveryId = delivery.deliveryId WHERE uId = ?";
  if (uId) {
    db.query(sqlGetOrder, uId, (err, result) => {
      if (err) console.log(err);
      res.send(result);
    })
  }

})

app.post("/api/orderGetProduct", (req, res) => {
  const pId = req.body.pId;
  const sqlProduct = "SELECT p.name,product_pic.image FROM product as p JOIN product_pic ON product_pic.pId=p.pId WHERE p.pId = ?";
  db.query(sqlProduct, pId, (err, result) => {
    if (err) console.log(err);
    res.send(result);
  })
})

app.post("/api/confirmTransaction", (req, res) => {
  const tId = req.body.tId;
  const sqlConfirmTransaction = "UPDATE transaction SET isConsummerReceived = true WHERE tId = ?";
  db.query(sqlConfirmTransaction, tId, (err, result) => {
    if (err) console.log(err);
    res.send(result);
  })
})

app.post("/api/backToStore", (req, res) => {
  const tId = req.body.tId;
  const sqlBackToStore = "UPDATE transaction SET isProductReturned = true, deliveryId = 3 WHERE tId = ?";
  db.query(sqlBackToStore, tId, (err, result) => {
    if (err) console.log(err);
    res.send(result);
  })
})

//新增 刪除 修改

app.delete("/api/delete/:id", (req, res) => {
  const pId = req.params.id
  const sqlDelete = "DELETE FROM product WHERE pId = ?"

  db.query(sqlDelete, pId, (err, result) => {
    if (err) console.log(err)
    res.send(result)
  })
})

app.put("/api/update", (req, res) => {
  const pId = req.body.id
  const name = req.body.name
  const price = req.body.price
  const tags = req.body.tags
  const image = req.body.image
  const status = req.body.status
  const sqlUpdate =
    "UPDATE product SET name = ?,price = ?, note = ? WHERE pId = ?"
  const sqlUpdateImage = "UPDATE product_pic SET image = ? WHERE pId = ?"
  const sqlUpdateStatus = "UPDATE product_status SET status = ? WHERE pId = ?"

  db.query(sqlUpdate, [name, price, tags, pId], (err, result) => {
    if (err) console.log(err)
    db.query(sqlUpdateImage, [image, pId], (err, result) => {
      if (err) console.log(err)
    })
    db.query(sqlUpdateStatus, [status, pId], (err, result) => {
      if (err) console.log(err)
    })
    result = req.body
    res.send(result)
  })
})

app.post("/api/insert", (req, res) => {
  const name = req.body.name
  const price = req.body.price
  const tags = req.body.tags
  const image = req.body.image
  const status = req.body.status
  console.log(req.body)
  const sqlInsert = "INSERT INTO product (name, price, note) VALUES (?,?,?)"
  const sqlGetPid = "SELECT pId FROM product WHERE name = ?"
  const sqlInsertImage = "INSERT INTO product_pic (pId,image) VALUES (?,?)"
  const sqlInsertStatus = "INSERT INTO product_status (pId,status) VALUES (?,?)"

  db.query(sqlInsert, [name, price, tags], (err, result) => {
    if (err) {
      console.log(err)
    }
    db.query(sqlGetPid, name, (err, rows) => {
      if (err) console.log(err)
      const pId = rows[0].pId
      db.query(sqlInsertImage, [pId, image], (err, result) => {
        if (err) console.log(err)
      })
      db.query(sqlInsertStatus, [pId, status], (err, result) => {
        if (err) console.log(err)
      })
    })
    result = req.body
    res.send(result)
  })
})

//登入 註冊
const SECRET = "12321JKLSJKLSDFJK23423432"
const expiresIn = "1h"
const createToken = (payload) => {
  return jwt.sign(payload, SECRET, { expiresIn })
}

app.post("/api/login", (req, res) => {
  const { email, password } = req.body
  const sqlCheck = "SELECT * FROM user WHERE email = ?"
  db.query(sqlCheck, email, (err, rows) => {
    if (err) console.log(err)
    if (rows.length >= 1) {
      if (password == rows[0].password) {
        const uId = rows[0].uId
        const nickname = rows[0].name
        const isStaff = rows[0].isStaff
        const email = rows[0].email

        // jwt
        const jwToken = createToken({ nickname, isStaff, email, uId })
        return res.status(200).json(jwToken)
      } else {
        const status = 401
        const message = "Incorrect password"
        return res.status(status).json({ status, message })
      }
    } else {
      const status = 401
      const message = "Incorrect Email"
      return res.status(status).json({ status, message })
    }
  })
})

//mail

function Mail(address, token, subject, html) {

  //
  // setting of SMTP
  //
  const options = {
    host: 'smtp.gmail.com', // mail server
    port: 465, // port
    secure: true, // if use 465 = true. else = false
    requireTLS: false,
    tls: {
      rejectUnauthorized: false,
    },
    auth: { // mail-setting
      user: 'yucharming123@gmail.com', // used email address
      pass: 'jackhsu520' // address password
    },
  };
  //
  // mail message
  //

  const mail = {
    from: '由簡入奢 yucharming123@gmail.com', // sending address
    to: address, // sending to address
    subject: subject,
    html: html + token
  };
  //
  // send setting
  //
  (async () => {
    try {
      const transport = nodemailer.createTransport(options);
      const result = await transport.sendMail(mail);
      console.log('+++ Sent +++');
      console.log(result);
    } catch (err) {
      console.log('--- Error ---');
      console.log(err);
    }
  })();
};

app.post("/api/register", (req, res) => {
  const nickname = req.body.nickname
  const birthday = req.body.birthday
  const gender = req.body.gender
  const phone = req.body.phone
  const address_remaining = req.body.address_remaining
  const email = req.body.email
  const password = req.body.password
  const isStaff = req.body.isStaff
  const county = req.body.county
  const district = req.body.district
  const zipCode = req.body.zipCode
  const birthdays = new Date(birthday)

  // ----- 1 steps
  const sqlCheck = "SELECT email FROM user WHERE email = ?";

  db.query(sqlCheck, email, (err, rows) => {
    if (err) console.log(err)

    if (rows.length >= 1) {
      const status = 401
      const message = "Email already exist"
      return res.status(status).json({ status, message })
    }
    else {
      const sqlRegister =
        "INSERT INTO user (isStaff,name,birthday,gender,phone,email,password,token) VALUES (?,?,?,?,?,?,?,?)"
      db.query(
        sqlRegister,
        [isStaff, nickname, birthdays, gender, phone, email, password, null],
        (err, result) => {
          if (err) {
            console.log(err)
            const status = 401
            const message = err
            return res.status(status).json({ status, message })
          }
          const sqlGetUid = "SELECT * FROM user where email = ?"
          db.query(sqlGetUid, email, (err, rows) => {
            if (err) console.log(err)

            if (rows.length >= 1) {
              const uId = rows[0].uId
              const sqlAddress =
                "INSERT INTO address (uId,city,district,remaining) VALUES(?,?,?,?)"
              db.query(
                sqlAddress,
                [uId, county, district, address_remaining],
                (err, result) => {
                  if (err) console.log(err)
                  const jwToken = createToken({ nickname, isStaff, uId, email })
                  res.status(200).json(jwToken)
                }
              )
            }
          })

        }
      )
    }
  })
})


app.post("/api/resetPassword", (req, res) => {
  const passowrd = req.body.password;
  const email = req.body.email;
  const sqlResetPasword = "UPDATE user SET password = ? WHERE email = ?";
  db.query(sqlResetPasword, [passowrd, email], (err, result) => {
    if (err) {
      console.log(err)
      const status = 401
      const message = "發生錯誤"
      return res.status(status).json({ status, message })
    };
    return res.status(200).json("更改密碼成功!");
  })
})

app.post("/api/checkPassword", (req, res) => {
  const password = req.body.password;
  const email = req.body.email;
  const sqlCheckPassword = "SELECT password FROM user WHERE email = ?";
  db.query(sqlCheckPassword, email, (err, rows) => {
    if (err) console.log(err);
    if (password == rows[0].password) {
      res.send(rows)
    }
    else {
      const status = 401
      const message = "密碼不正確";
      return res.status(status).json({ status, message })
    }
  })
})

//--------------token----------------------
const crypto = require('crypto');
const { parse } = require("path");
const { application } = require("express");
//const { isRegExp } = require("util/types");
const nBytes = 4;
// Max value
// (= 4294967295) (= (1 << 4*8) - 1)
const maxValue = new Buffer.from(Array(nBytes).fill(0xff)).readUIntBE(0, nBytes);
function secureRandom() {
  const randomBytes = crypto.randomBytes(nBytes);
  const r = randomBytes.readUIntBE(0, nBytes);
  return r / maxValue * 100000000000000000;
}

app.post("/api/updateToken", (req, res) => {
  const token = secureRandom();
  const uId = req.body.uId;
  const email = req.body.email;
  const subject = 'email信箱認證';
  const html = `<p> 認證碼如下</p>
  <p>this is your token please copy and paset to site</p></b>`;
  const sqlUpdate = "UPDATE user SET token = ? WHERE uId = ?";
  db.query(sqlUpdate, [token, uId], (err, result) => {
    if (err) console.log(err);
    Mail(email, token, subject, html) // this is for mail function, please set data to be can use...
    res.send(result);
  })
})


app.post("/api/token", (req, res) => {
  const { token } = req.body;
  const sqlCheck = "SELECT * FROM user WHERE token = ?";
  const sqlVerify = "UPDATE user SET token = null ,IsVerified = ? WHERE uId = ?";
  db.query(sqlCheck, token, (err, rows) => {
    if (err) console.log(err);
    if (rows.length >= 1) {
      if (token == rows[0].token) {
        if (rows[0].IsVerified == 1) {
          const status = 401;
          const message = 'this email isVerified!';
          return res.status(status).json({ status, message });
        }
        else {
          const nickname = rows[0].name;
          const { isStaff, email, uId } = rows[0];
          db.query(sqlVerify, [1, uId], (err, result) => {
            if (err) console.log(err);
            // jwt
            const jwToken = createToken({ nickname, isStaff, email, uId });
            return res.status(200).json(jwToken);
          })
        }
      }
      else {
        const status = 401;
        const message = 'Incorrect token';
        return res.status(status).json({ status, message });
      }
    }
    else {
      const status = 401;
      const message = 'Incorrect token';
      return res.status(status).json({ status, message });
    }
  })
})

app.post("/api/getToken", (req, res) => {
  const email = req.body.email;
  const subject = '重設密碼驗證信';
  const html = `<p> 認證碼如下</p>
  <p>this is your token please copy and paset to site</p></b>`;
  const sqlCheckEmail = "SELECT email FROM user WHERE email = ?";
  db.query(sqlCheckEmail, email, (err, rows) => {
    if (err) console.log(err);
    if (rows.length > 0) {
      const token = secureRandom();
      Mail(email, token, subject, html);
      return res.status(200).json(token);
    }
    else {
      const status = 401;
      const message = '這個信箱尚未註冊';
      return res.status(status).json({ status, message });
    }
  })
})

////Admin///////
app.get("/api/adminGetOrder", (req, res) => {
  const sqlGetOrder = "SELECT * FROM transaction";
  db.query(sqlGetOrder, (err, result) => {
    if (err) console.log(err);
    res.send(result);
  })
})

app.post("/api/adminGetTransactionProduct", (req, res) => {
  const pId = req.body.pId;
  const sqlGetProduct = "SELECT * FROM product WHERE pId = ?";
  db.query(sqlGetProduct, pId, (err, result) => {
    if (err) console.log(err);
    res.send(result);
  })
})

app.post("/api/adminGetPlan", (req, res) => {
  const uId = req.body.uId;
  const sqlGetPlan = "SELECT * FROM plan WHERE uId = ?";
  db.query(sqlGetPlan, uId, (err, result) => {
    if (err) console.log(err);
    res.send(result);
  })
})

app.post("/api/adminCustomerProfile", (req, res) => {
  const uId = req.body.uId
  const sqlCustomerData = "SELECT * FROM user JOIN address ON user.uId = address.uId WHERE user.uId = ?";
  db.query(sqlCustomerData, uId, (err, result) => {
    if (err) console.log(err)
    const address = result[0].city + result[0].district + result[0].remaining
    result[0].address = address
    res.send(result)
  })
})

app.post("/api/adminConfirmShip", (req, res) => {
  const uId = req.body.uId;
  const email = req.body.email;
  const tId = req.body.tId;
  const sqlShipStaff = "UPDATE transaction SET staffId = ? , deliveryId = 1 WHERE tId = ?";
  const subject = '訂單已出貨';
  const html = `<p>您租用的商品已出貨</p>
  <p>請留意近期的訊息通知</p></b>`;
  db.query(sqlShipStaff, [uId, tId], (err, result) => {
    if (err) console.log(err);
    Mail(email, [], subject, html);
    res.send({ message: '出貨成功!' });
    // this is for mail function, please set data to be can use...
  })
})

//-----------recommend------------

app.post("/api/addRecord", (req, res) => {
  const uId = req.body.uId;
  const pId = req.body.pId;
  const sqlAddRecord = "INSERT INTO record (uId,pId) VALUES (?,?)";
  const sqlCheckRecord = "SELECT * FROM record WHERE uId =? AND pId =?";
  db.query(sqlCheckRecord, [uId, pId], (err, rows) => {
    if (err) console.log(err);
    if (rows.length > 0) {
      res.send(rows);
    }
    else {
      db.query(sqlAddRecord, [uId, pId], (err, result) => {
        if (err) console.log(err);
        res.send(result);
      })
    }
  })
})

//-----------userlike------------
app.post("/api/LikeColorChange", (req, res) => {
  const color = req.body.likeColor
  const email = req.body.email
  var colorId = null

  switch (color) {
    case 'grey':
      colorId = 1
      break;

    case 'yellow':
      colorId = 2
      break;

    case 'red':
      colorId = 4
      break;

    case 'littlepink':
      colorId = 5
      break;

    case 'yellowwhite':
      colorId = 6
      break;

    case 'littleblue':
      colorId = 7
      break;

    case 'brown':
      colorId = 8
      break;

    case 'black':
      colorId = 9
      break;

    case 'white':
      colorId = 10
      break;

    case 'pink':
      colorId = 11
      break;

    default:
      console.log('error color');
  }

  const sqlGetUid = "SELECT uId FROM user WHERE email = ?"
  const sqlAddLike =
    "INSERT INTO user_liketype (uId,colorId) VALUES (?,?)"
  const sqlCheckLike = "SELECT colorId FROM user_liketype WHERE colorId = ? AND uId = ?"
  db.query(sqlGetUid, email, (err, result) => {
    if (err) console.log(err)

    const uId = result[0].uId
    db.query(sqlCheckLike, [colorId, uId], (err, rows) => {
      if (err) console.log(err)

      if (rows.length >= 1) {
        const message = "product Delete sucess!"
        return res.send(message)
      } else {
        db.query(sqlAddLike, [uId, colorId], (err, result) => {
          if (err) console.log(err)
          const message = "Like add success!"
          res.send(message)
        })
      }
    })
  })
})

app.post("/api/LikeColorDelete", (req, res) => {
  const color = req.body.likeColor
  const email = req.body.email
  var colorId = null

  switch (color) {
    case 'grey':
      colorId = 1
      break;

    case 'yellow':
      colorId = 2
      break;

    case 'red':
      colorId = 4
      break;

    case 'littlepink':
      colorId = 5
      break;

    case 'yellowwhite':
      colorId = 6
      break;

    case 'littleblue':
      colorId = 7
      break;

    case 'brown':
      colorId = 8
      break;

    case 'black':
      colorId = 9
      break;

    case 'white':
      colorId = 10
      break;

    case 'pink':
      colorId = 11
      break;

    default:
      console.log('error color');
  }

  const sqlGetUid = "SELECT uId FROM user WHERE email = ?"
  const sqlDeleteLike =
    "DELETE FROM user_liketype WHERE uId = ? AND colorId = ?"
  const sqlCheckLike = "SELECT colorId FROM user_liketype WHERE colorId = ? AND uId = ?"
  db.query(sqlGetUid, email, (err, result) => {
    if (err) console.log(err)

    const uId = result[0].uId
    db.query(sqlCheckLike, [colorId, uId], (err, rows) => {
      if (err) console.log(err)

      if (rows.length < 1) {
        const message = "User never Like!"
        return res.send(message)
      } else {
        db.query(sqlDeleteLike, [uId, colorId], (err, result) => {
          if (err) console.log(err)
          const message = "Like Delete success"
          res.send(message)
        })
      }
    })
  })
})
//-------------------user Like Type-----------------------------

app.post("/api/LikeTypeChange", (req, res) => {
  const typeId = req.body.likeType
  const email = req.body.email

  const sqlGetUid = "SELECT uId FROM user WHERE email = ?"
  const sqlAddLike =
    "INSERT INTO user_liketype (uId,typeId) VALUES (?,?)"
  const sqlCheckLike = "SELECT typeId FROM user_liketype WHERE brandId = ? AND uId = ?"
  db.query(sqlGetUid, email, (err, result) => {
    if (err) console.log(err)

    const uId = result[0].uId
    db.query(sqlCheckLike, [typeId, uId], (err, rows) => {
      if (err) console.log(err)

      if (rows.length >= 1) {
        const message = "Like type Delete sucess!"
        return res.send(message)
      } else {
        db.query(sqlAddLike, [uId, typeId], (err, result) => {
          if (err) console.log(err)
          const message = "Like type add success!"
          res.send(message)
        })
      }
    })
  })
})


app.post("/api/LikeTypeDelete", (req, res) => {
  const typeId = req.body.likeType
  const email = req.body.email

  const sqlGetUid = "SELECT uId FROM user WHERE email = ?"
  const sqlDeleteLike =
    "DELETE FROM user_liketype WHERE uId = ? AND typeId = ?"
  const sqlCheckLike = "SELECT colorId FROM user_liketype WHERE typeId = ? AND uId = ?"
  db.query(sqlGetUid, email, (err, result) => {
    if (err) console.log(err)

    const uId = result[0].uId
    db.query(sqlCheckLike, [typeId, uId], (err, rows) => {
      if (err) console.log(err)

      if (rows.length < 1) {
        const message = "User never Like!"
        return res.send(message)
      } else {
        db.query(sqlDeleteLike, [uId, typeId], (err, result) => {
          if (err) console.log(err)
          const message = "Like Type Delete success"
          res.send(message)
        })
      }
    })
  })
})
//-----------------------------user like brand----------------------------------
app.post("/api/LikeBrandChange", (req, res) => {
  const brandId = req.body.likeBrand
  const email = req.body.email

  const sqlGetUid = "SELECT uId FROM user WHERE email = ?"
  const sqlAddLike =
    "INSERT INTO user_liketype (uId,brandId) VALUES (?,?)"
  const sqlCheckLike = "SELECT typeId FROM user_liketype WHERE brandId = ? AND uId = ?"
  db.query(sqlGetUid, email, (err, result) => {
    if (err) console.log(err)

    const uId = result[0].uId
    db.query(sqlCheckLike, [brandId, uId], (err, rows) => {
      if (err) console.log(err)

      if (rows.length >= 1) {
        const message = "Like type Delete sucess!"
        return res.send(message)
      } else {
        db.query(sqlAddLike, [uId, brandId], (err, result) => {
          if (err) console.log(err)
          const message = "Like brand add success!"
          res.send(message)
        })
      }
    })
  })
})

app.post("/api/LikeBrandDelete", (req, res) => {
  const brandId = req.body.likeBrand
  const email = req.body.email

  const sqlGetUid = "SELECT uId FROM user WHERE email = ?"
  const sqlDeleteLike =
    "DELETE FROM user_liketype WHERE uId = ? AND brandId = ?"
  const sqlCheckLike = "SELECT colorId FROM user_liketype WHERE brandId = ? AND uId = ?"
  db.query(sqlGetUid, email, (err, result) => {
    if (err) console.log(err)

    const uId = result[0].uId
    db.query(sqlCheckLike, [brandId, uId], (err, rows) => {
      if (err) console.log(err)

      if (rows.length < 1) {
        const message = "User never Like!"
        return res.send(message)
      } else {
        db.query(sqlDeleteLike, [uId, brandId], (err, result) => {
          if (err) console.log(err)
          const message = "Like Brand Delete success"
          res.send(message)
        })
      }
    })
  })
})
//------------------------------reset user like list-----------------------------
app.post("/api/resetUserLike", (req, res) => {
  const email = req.body.UserEmail

  const sqlGetUid = "SELECT uId FROM user WHERE email = ?"
  const sqlDeleteLike =
    "DELETE FROM user_liketype WHERE uId = ?"
  const sqlCheckLike = "SELECT colorId FROM user_liketype WHERE uId = ?"
  db.query(sqlGetUid, email, (err, result) => {
    if (err) console.log(err)

    const uId = result[0].uId
    db.query(sqlCheckLike, [uId], (err, rows) => {
      if (err) console.log(err)

      if (rows.length < 1) {
        const message = "User never Like!"
        return res.send(message)
      } else {
        db.query(sqlDeleteLike, [uId], (err, result) => {
          if (err) console.log(err)
          const message = "Like Type Delete success"
          res.send(message)
        })
      }
    })
  })
})
//-------------------listen-----------------------------
app.listen(3001, () => {
  console.log("running server 3001")
})

