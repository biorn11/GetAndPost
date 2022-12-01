import express from 'express'
import http from 'http'

const app = express()
app.use(express.json())

app.get('/sum', async (request,response)=>{
    
    const sumAll = request.query.numbers.split('').reduce((acc,el)=> acc+Number(el),0)
    response.send(`The sum of the numbers [${request.query.numbers}] is ${sumAll}`)
})

app.get('/unique',async(request,response)=>{
    
    const uniqueValues = request.query.numbers.split('').filter((el,i,arr)=> arr.indexOf(el)===i)
    response.send(`The unique values in [${request.query.numbers}] is ${uniqueValues}`)
})
app.post('/sum',async(request,response)=>{

    const sumAll = request.query.numbers.split('').reduce((acc,el)=> acc+Number(el),0)
    response.send(`The sum of the numbers [${request.query.numbers}] is ${sumAll}`)

})

app.post('/unique',async(request,response)=>{
    
    const uniqueValues = request.query.numbers.split('').filter((el,i,arr)=> arr.indexOf(el)===i)
    response.send(`The unique values in [${request.query.numbers}] are ${uniqueValues}`)
})

const port = 3000
app.listen(port,()=>{
    console.log(`Example in the ${port}`)
})
