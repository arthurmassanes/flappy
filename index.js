const { Game } = require('./src/Game');

const g = new Game();
while (g.isRunning()) {
    g.update();
}
g.unload();