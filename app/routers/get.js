module.exports = function(app){
    const player = require('../controllers/playerController.js');
    app.get('/player/:id',player.getPlayerById)
}