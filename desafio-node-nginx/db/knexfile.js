module.exports = {
    development: {
        client: 'mysql',
        connection: {
            host: 'db',
            database: 'nodenginx',
            user: 'root',
            password: 'root'
        },
        pool: {
            min: 2,
            max: 10
        },
    },
};