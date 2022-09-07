module.exports =(catchasync)=>(req,res,next)=>{
    Promise.resolve(catchasync(req,res,next)).catch(next);
};