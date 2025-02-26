const admin = require("../model/adminModel");
const student = require("../model/studentModel");
const task = require("../model/taskModel");

exports.adminregister = async (req,res) => {
  try {
    const data = await admin.create(req.body);
    res.status(200).json({
        msg:"admin login successful",
        data: data
    })
  } catch (e) {
    console.log(e);
  }
};
exports.adminlogin = async (req, res) => {
    try{
        const data = await admin.find({email:req.body.email, password:req.body.password});
        console.log(data.length);
        console.log(data);

        
        if(data.length > 0){
            res.status(200).json({
                msg:"admin login successful",
                data: data,
                success: true
            })

        }else{
            res.status(401).json({
                msg:"Invalid email or password",
                success: false
            })
        }

    }catch(e){}
}


exports.studresgister = async (req,res) => {
    try {
      const data = await student.create(req.body);
      res.status(200).json({
          msg:"student register successful",
          data: data
      })
    } catch (e) {
      console.log(e);
    }
  };
  
  exports.stulogin = async (req, res) => {
      try{
          const data = await student.find({email:req.body.email, password:req.body.password});
          console.log(data);
          
          if(data.length>0){
              res.status(200).json({
                  msg:"student login successful",
                  data: data,
                  success: true
              })
  
          }else{
              res.status(400).json({
                  msg:"Invalid email or password of student",
                  success: false
              })
          }
  
      }catch(e){
         res.status(500).json({
              msg:"Server Error"
          })
      }
  }
  
    exports.addtask = async (req, res) => {
        try{
            const data = await task.create(req.body);
            res.status(200).json({
                msg : "Task Added Success fully",
                data : data,
                success: true
            })
        }catch(e){
            res.status(500).json({
                msg : "Server Error",
                error: e,
                success: false
            });
            
        }
    }
    
    exports.gettask= async (req,res) => {
        try{
            const data = await task.find();
            res.status(200).json({
                msg : "Task List",
                data : data,
                success: true
            })
        }catch(error){
            res.status(500).json({
                msg : "Server Error",
                error: error,
                success: false
            });
        }
    }

    exports.updatetask = async (req, res) => {
        try {
            const id = req.params.id;
            // Fetch the task by ID
            const getrecord = await task.findById(id);
    
            // Check if the task exists
            if (!getrecord) {
                return res.status(404).json({
                    msg: "Task not found",
                    success: false
                });
            }
    
            // Update task status if it's pending
            if (getrecord.taskstatus === "pending" || getrecord.taskstatus === "in progress" || getrecord.taskstatus === "deployed" || getrecord.taskstatus === "deferred") {
                getrecord.taskstatus = "completed";
            }
    
            // Update the task in the database
            const data = await task.findByIdAndUpdate(req.params.id,  getrecord , { new: true });
    
            res.status(200).json({
                msg: "Task updated successfully",
                data: data,
                success: true
            });
    
        } catch (error) {
            res.status(500).json({
                msg: "Server Error",
                error: error,
                success: false
            });
        }
    }
    
    
    exports.deletetask= async (req,res) => {
        try{
            const data = await task.findByIdAndDelete(req.params.id);
            res.status(200).json({
                msg : "Task deleted successfully",
                data : data,
                success: true
            })
        }catch(error){
            res.status(500).json({
                msg : "Server Error",
                error: error,
                success: false
            })
        }
    }
