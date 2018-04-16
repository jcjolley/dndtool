var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://jcjolley.com:27017/mydb";
import { Player } from "../common/player";
const express = require('express');
const app = express();
const bodyParser = require('body-parser');


async function createPlayer(player: Player) {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            const dbo = db.db("dnd")
            dbo.collection("players").insertOne(player, (err, res) => {
                if (err) reject(err);
                console.log(`Insereted player:  ${JSON.stringify(player)} `)
                db.close();
                resolve(true);
            })
        });
    })
}

async function getPlayers() {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            const dbo = db.db("dnd")
            dbo.collection("players").find({}).toArray((err, result) => {
                if (err) reject(err);
                db.close();
                resolve(result);
            });
        });
    });
};

async function getPlayer(name) {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            const dbo = db.db("dnd")
            dbo.collection("players").findOne({ name }, (err, result) => {
                if (err) reject(err);
                db.close();
                resolve(result);
            });
        });
    });
};

async function main() {
    const player = new Player("Aydin");
    await getPlayers();
    await getPlayer('Aydin');

    app.listen(3000, () => {
        console.log('Server started on 3000');
    })

    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.get('/players', async (request, response, next) => {
        response.send(await getPlayers());
    });

    app.post('/add', (req, res, next) => {
        const {name, skills, saves} = req.body;
        console.log(`Adding player ${name} to database`);
        createPlayer(new Player(name, skills, saves));
    })
}

main();

