const mongoose = require('mongoose');

module.exports = async () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try {
        await mongoose.connect(process.env.DB, connectionParams);
        console.log('Connected to database');
    } catch (error) {
        console.log(error);
        console.log("No connection to backend database server");
    }
};
