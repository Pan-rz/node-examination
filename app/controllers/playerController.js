const playerService = require('../services/playerService.js');
exports.getPlayerById = async function (req, res) {
    await playerService.getPlayerById(req, res);
}

exports.addPlayer = async function (req, res) {
    await playerService.addPlayer(req,res);
}

exports.updatePlayerById = async function (req, res) {
    await playerService.updatePlayerById(req, res);
}

exports.deletePlayerById = async function (req, res) {
    await playerService.deletePlayerById(req, res);
}