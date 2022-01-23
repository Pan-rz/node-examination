const {
    PlayerModel
} = require('../model/player.js');

exports.getPlayerById = async function (req, res) {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).send('Invalid ID supplied');
        }
        const player = await PlayerModel.findOne({_id:id, isDeleted: false}, '-__v');
        
        if (player) {
            res.status(200).send(player);
        } else {
            res.status(404).send('Player not found');
        }
    } catch (error) {
        return res.status(500).send('Invalid ID supplied');
    }
}

exports.addPlayer = async function (req, res) {
    try {
        const playerObj = req.body;
        const player = await PlayerModel.create(playerObj);
        res.status(200).send(player);
    } catch (error) {
        console.log(error);
        res.status(405).send('Invalid input')
    }
}

exports.updatePlayerById = async function (req, res) {
    try {
        const { id } = req.params;
        const playerObj = req.body;
        if(!id){
            return res.status(405).send('Invalid ID supplied');
        }
        const player = await PlayerModel.findOne({_id: id, isDeleted: false});
        if(player){
            await PlayerModel.updateOne({_id:id},playerObj);
            res.status(200).send('update success')
        }else{
            res.status(404).send('Player not found');
        }
        
    } catch (error) {
        console.log(error);
        res.status(405).send('Validation exception');
    }
}

exports.deletePlayerById = async function (req, res) {
    try {
        const { id } = req.params;
        const player = await PlayerModel.findOne({_id: id, isDeleted: false});
        if(player){
            await PlayerModel.updateOne({_id: id},{isDeleted: true});
            res.status(200).send('delete success')
        }else{
            res.status(404).send('Player not found');
        }
    } catch (error) {
        res.status(500).send('delete faile');
    }
}