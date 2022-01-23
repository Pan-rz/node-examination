module.exports = function(app){
    const player = require('../controllers/playerController.js');
    app.post('/player', player.addPlayer);
}