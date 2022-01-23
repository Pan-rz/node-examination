module.exports = function(app){
    const player = require('../controllers/playerController.js');
    app.put('/player/:id', player.updatePlayerById); 
}