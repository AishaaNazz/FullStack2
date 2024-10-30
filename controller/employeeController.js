// const Employee=require('../model/employee')

// const createEmployee=async(req,res)=>{
//     try{
//         const {name,email,phone}=req.body
//         const employee=new Employee({
//             name,
//             email,
//             phone
//         })
//         await employee.save();
//         res.status(201).json({message:"Employee data inserted successfully"})
//     }
//     catch(Error){
//         console.log(Error);
//     }
// }
// module.exports={createEmployee};

const Employee=require('../model/employee')

const createEmployee=async(req,res)=>{
    try{
        const {name,email,phone}=req.body
        const employee=new Employee({
            name,
            email,
            phone
        })
        await employee.save();
        res.status(201).json({message:"Employee data inserted successfully"})
    }
    catch(Error){
        console.log(Error);
    }
}
module.exports={createEmployee};