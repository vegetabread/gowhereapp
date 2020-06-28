const main = require('./index.json')
const submain = require('./city.json')
const last = require('./detail.json')
const one = main.data
const two = submain.data
const three = last.data
module.exports={
    devServer: {
        before(app) {
            app.get('/api/index',(req,res)=>{
                res.json({
                    eno:0,
                    data: one
                })
            }),
            app.get('/api/city',(req,res)=>{
                res.json({
                    eno:0,
                    data: two
                })
            }),
            app.get('/api/detail',(req,res)=>{
                res.json({
                    eno:0,
                    data: three
                })
            })
        }
    }
} 