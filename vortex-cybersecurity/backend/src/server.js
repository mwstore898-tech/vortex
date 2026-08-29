import 'dotenv/config';import express from'express';import cors from'cors';import helmet from'helmet';import rateLimit from'express-rate-limit';import multer from'multer';import crypto from'node:crypto';
const app=express();const port=process.env.PORT||4000;app.use(helmet());app.use(cors({origin:process.env.FRONTEND_ORIGIN||'http://localhost:5173'}));app.use(express.json({limit:'1mb'}));app.use(rateLimit({windowMs:60_000,max:120}));
const upload=multer({dest:'./tmp',limits:{fileSize:10*1024*1024}});
app.get('/api/health',(req,res)=>res.json({ok:true,service:'vortex-backend'}));
app.post('/api/ai/chat',(req,res)=>{res.json({message:'AI provider not configured. Connect your provider in backend environment variables.',conversationId:req.body.conversationId||crypto.randomUUID(),usage:{promptTokens:0,completionTokens:0}})});
app.post('/api/scanner/upload',upload.single('file'),(req,res)=>{if(!req.file)return res.status(400).json({error:'file_required'});res.json({id:crypto.randomUUID(),file:{name:req.file.originalname,size:req.file.size,mime:req.file.mimetype},status:'queued'});});
app.get('/api/scanner/result/:id',(req,res)=>res.json({id:req.params.id,status:'pending',message:'Connect YARA/ClamAV/VirusTotal/Sandbox services for real analysis.'}));
app.listen(port,()=>console.log(`Vortex backend listening on http://localhost:${port}`));
