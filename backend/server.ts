var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://jcjolley.com:27017/dnd";
import { Player } from "../common/player";
const express = require('express');
const app = express();
const bodyParser = require('body-parser');


async function createPlayer(player: Player) {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, async function (err, db) {
            if (err) throw err;
            const dbo = db.db("dnd")
            const playerExists = await new Promise(resolve => {
                dbo.collection("players").findOne({ name: player.name, userId: player.userId }, (err, res) => {
                    if (err) throw err;
                    resolve(res)
                })
            });
            console.log('Player Exists: ', playerExists)
            if (!playerExists) {
                dbo.collection("players").insertOne(player, async (err, res) => {
                    if (err) reject(err);
                    console.log(`Insereted player:  ${JSON.stringify(player)} `)
                    const players = await new Promise(resolve => {
                        dbo.collection("players").find({ userId: player.userId }).toArray((err, result) => {
                            if (err) throw (err);
                            resolve(result);
                        });
                    });
                    db.close();
                    resolve(players);
                })
            } else {
                resolve(false);
            }
        });
    })
}

async function getPlayers(userId: string) {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            const dbo = db.db("dnd")
            dbo.collection("players").find({ userId }).toArray((err, result) => {
                if (err) reject(err);
                db.close();
                resolve(result);
            });
        });
    });
};

async function getPlayer(name, userId: string) {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            const dbo = db.db("dnd")
            dbo.collection("players").findOne({ name, userId }, (err, result) => {
                if (err) throw err;
                db.close();
                resolve(result);
            });
        });
    });
};

async function createUser(username: string, password: string) {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, async function (err, db) {
            if (err) throw err;
            const dbo = db.db("dnd")
            const userExists = await new Promise(resolve => {
                dbo.collection("users").findOne({ username }, (err, res) => {
                    if (err) reject(err);
                    console.log("checking if user exists: ", res);
                    resolve(res);
                })
            });
            if (!userExists) {
                dbo.collection("users").insertOne({ username, password }, (err, res) => {
                    if (err) reject(err);
                    console.log(`Created user: ${username} ${JSON.stringify(res)} `)
                    db.close();
                    resolve(true);
                })
            } else {
                resolve(false);
            }
        });
    })
}

async function login(username: string, password: string) {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            const dbo = db.db("dnd")
            dbo.collection("users").findOne({ username, password }, (err, res) => {
                if (err) reject(err);
                console.log(`Result of Login attempt:  ${JSON.stringify(res)} `)
                db.close();
                resolve(res);
            })
        });
    })

}

async function removePlayer(name, userId) {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            const dbo = db.db("dnd")
            dbo.collection("players").remove({ name, userId }, (err, result) => {
                if (err) throw err;
                db.close();
                resolve(result);
            });
        });
    })
}

async function main() {
    const player = new Player("Aydin", null, null, 'test');
    await getPlayers('test');
    await getPlayer('Aydin', 'test');

    app.listen(3007, () => {
        console.log('Server started on 3007');
    })

    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        next();
    });

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.post('/players', async (request, response, next) => {
        const { userId } = request.body;
        response.send(await getPlayers(userId));
    });

    app.post('/add', async (req, res, next) => {
        const { name, skills, saves, userId } = req.body;
        console.log(`Adding player ${name} to database`);
        res.send(await createPlayer(new Player(name, skills, saves, userId)));
    })

    app.post('/createUser', async (req, res, next) => {
        const { username, password } = req.body;
        console.log(`Creating new user: ${username}`);
        res.send(await createUser(username, password));
    })

    app.post('/login', async (req, res, next) => {
        const { username, password } = req.body;
        console.log(`Logging in user: ${username}`);
        res.send(await login(username, password));
    })

    app.post('/removePlayer', async (req, res, next) => {
        const { name, userId } = req.body;
        console.log(`Removing player ${name}`);
        res.send(await removePlayer(name, userId));
    })
}

main();

