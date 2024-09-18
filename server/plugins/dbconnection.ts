import mongoose, { ConnectOptions } from "mongoose"

export default defineNitroPlugin(async (nitro) => {
    
    const mongoConfig = useRuntimeConfig().mongodb;

    const DATABASE_CONFIG: ConnectOptions = {
        dbName: mongoConfig.dbName,
        user: mongoConfig.username,
        pass: mongoConfig.password,
        authSource: mongoConfig.authSource,
    }
    
    try {
        await mongoose.connect(mongoConfig.dbUri, DATABASE_CONFIG);
        console.log("Successfully connected to the database: " + mongoose.connection.name);
    } catch (error) {
        console.error(error);
    }

})