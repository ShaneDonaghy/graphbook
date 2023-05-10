module.exports = {
    "development": {
        "username": "devuser",
        "password": "boobs",
        "database": "graphbook_dev",
        "host": "192.168.1.139",
        "dialect": "mysql",
        "pool": {
            "max": 5,
            "min": 0,
            "acquire": 30000,
            "idle": 10000
        }
    },
    "production": {
        "host": process.env.host,
        "username": process.env.username,
        "password": process.env.password,
        "database": process.env.database,
        "logging": false,
        "dialect": "mysql",
        "pool": {
            "max": 5,
            "min": 0,
            "acquire": 30000,
            "idle": 10000
        }
    }
}