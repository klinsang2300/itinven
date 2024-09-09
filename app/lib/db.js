
import sql from "mssql"

// connection configs
const config = {
    user: 'sa',
    password: 'Pa$$w0rd',
    server: '192.168.1.26',
    database: 'IT',
    multipleStatements: true,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: false,
        trustServerCertificate: false
    },
}

export default async function ExcuteQuery(query, options) {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query(query);
        return products.recordsets;
    }
    catch (error) {
        console.log( error);
    }
}


