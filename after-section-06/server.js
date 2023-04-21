const mongoose=require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });
const DB=process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD);
mongoose.connect(DB,{//process.env.DATABASE_LOCAL for local DB'
  useNewUrlParser:true,
  usecreateIndex:true,
  userFindModify:false //to get rid of deprication warning 
}).then(()=>{
  //console.log(con.connections);
  console.log('DB connection is successful!');
});
//console.log(process.env);
//console.log(process.env.PORT);
const tourSchema=new mongoose.Schema({
  name:{
    type :String,
    required:[true,'A tour must have a name'],
    unique:true//tour doc
  },
    
  rating:{
    type:Number,
    default:4.5
  },
  price:{
    type:Number,
    required:[true,'A tour must have a price']}
});
const Tour=mongoose.model('Tour',tourSchema);

const testTour=new Tour({//constructor out of class
  name:'The Park Camper',
 // rating:4.7,
  price:997
});

testTour
.save()
.then(doc=>{
  console.log(doc);
})
.catch(err=>{
  console.log('ERROR:',err)
});//return promise and save to db

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
