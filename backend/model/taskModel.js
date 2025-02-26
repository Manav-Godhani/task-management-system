// const mongoose = require('mongoose');

// const userSchema =new mongoose.Schema({
//     taskname: {
//         type: String,
//         required: true
//     },
//     taskdes: {
//         type: String,
//         required: true,
//         // unique: true
//     },
//     taskstatus: {
//         type: String,
//         enum: ['pending', 'completed'],
//         default: 'pending',
//         // required: true,
//     }
    
// });

//  const User = mongoose.model('task', userSchema);
// module.exports = User;

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    taskname: {
        type: String,
        required: true
    },
    taskdes: {
        type: String,
        required: true
    },
    taskstatus: {
        type: String,
        required: true
    },
    priority:{
        type: String,
        required: true
    },
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: true
    }
});

const User = mongoose.model('task', userSchema);
module.exports = User;
