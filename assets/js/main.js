/**
 * Created by marcella on 10/7/2016.
 */
var game;

// Create a new game instance 600px wide and 450px tall:
game = new Phaser.Game(600, 450, Phaser.AUTO, '');

// First parameter is how our state will be called.
// Second parameter is an object containing the needed methods for state functionality
game.state.add('Menu', Menu);
// Adding the Game state.
game.state.add('Game', Game);

game.state.start('Menu');
