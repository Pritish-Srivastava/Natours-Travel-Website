const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log('Hello from the middleware 👋');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3) ROUTES
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;





/*//const fs=require('fs');
const express = require('express');
const morgan = require('morgan');


const app=express();
//1) MIDDLEWARE
app.use(morgan('dev'));
app.use(express.json());//use middleware

app.use((req,res,next)=>{
  console.log('Hello from middleware');
  next();
});
app.use((req,res,next)=>{
  req.requestTime=new Date().toISOString();
  next();
});

app.use('/api/v1/tours',tourRouter);//Mounting a new Router on this url route
app.use('/api/v1/users',userRouter);

const port=3000;
app.listen(port,()=>{
  console.log(`App runing on port ${port}...`);

});

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

//const tours=JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));
/*2)ROUTE HANDLERS
const getAllTours=(req,res)=>{
  console.log(req.requestTime);
  console.log(res);
    res.status(200).json({
     status:'success',
     requestedAt:req.requestTime,
     results:tours.length,
     data:{
       tours
     }
    });
   };
const getTour=(req,res)=>{
    console.log(req.params);
    const id=req.params.id * 1;//string to number
    const tour=tours.find(el=>el.id===id);
    if(!tour){
    //if(id>tours.length){
      return res.status(404).json({
        
        status:'fail',
        message:'Invalid ID'});
    }
    
    res.status(200).json({
     status:'success',
     //results:tours.length,
     data:{
      tours
     }
    });
   };
const createTour=(req,res)=>{
  //console.log(req.body);
  const newId=tours[tours.length-1].id+1;
  const newTour=Object.assign({id:newId},req.body);
  tours.push(newTour);
  fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`,JSON.stringify(tours),err=>{
    res.status(201).json({
      status:'success',
      data:{
        tour:newTour
      }
    });
  
  });
  //res.send('Done');
};
const updateTour=(req,res)=>{
  if(req.params.id*1>tours.length){
    return res.status(404).json({
      status:'fall',
      message:'Invalid ID'});
    }  
    res.status(200).json({
      status:'success',
      data:{
        tour:'<Updated tour'
      }
    });
  
  };
  //res.send('Done');
  const deleteTour=(req,res)=>{
    if(req.params.id*1>tours.length){
      return res.status(404).json({
        
        status:'fail',
        message:'Invalid ID'});
    }
    res.status(204).json({
    status:'success',
  data:null//data no longer exist
  })
  };

  const getAllUsers=(req,res)=>{
    console.log(res);
    res.status(500).json({
      status:'error',
      message:'This route not yet defined '
    });
  };

  const getUser=(req,res)=>{
    res.status(500).json({
      status:'error',
      message:'This route not yet defined '
    });
  };

  const createUser=(req,res)=>{
    res.status(500).json({
      status:'error',
      message:'This route not yet defined '
    });
  };
  const updateUser=(req,res)=>{
    res.status(500).json({
      status:'error',
      message:'This route not yet defined '
    });
  };
  const deleteUser=(req,res)=>{
    res.status(500).json({
      status:'error',
      message:'This route not yet defined '
    });
  };
//3)Routes

const tourRouter=express.Router();
const userRouter=express.Router();
tourRouter
.route('/')
.get(getAllTours)
.post(createTour);

tourRouter
.route('/:id')
.get(getTour)
.patch(updateTour)
.delete(deleteTour);

userRouter
.route('/')
.get(getAllUsers)
.post(createUser);

userRouter
.route(':id')
.get(getUser)
.patch(updateUser)
.delete(deleteUser);*/








//const app = express();
/*
// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log('Hello from the middleware 👋');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3) ROUTES
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;

*/