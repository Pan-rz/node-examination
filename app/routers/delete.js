module.exports = function(app){
    const player = require('../controllers/playerController.js');
    app.delete('/player/:id', player.deletePlayerById); 
}