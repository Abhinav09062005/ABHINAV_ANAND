import multer from "multer";
// take help from docs and google
const storage = multer.diskStorage({
  destination: (req,file,a) => {
    a(null,"uploads/");
  },
  filename: (req, file, a) => {
    a(null,Date.now()+"-"+file.originalname);
  }
});

const fileFilter=(req,file,a)=>{
  if (file.mimetype.startsWith("image/")){
    a(null,true);
  }else{
    a(new Error("Only image files are allowed!"),false);
  }
};

const upload=multer({
  storage,
  limits: {fileSize:5*1024 *1024},
  fileFilter
});
export default upload;
