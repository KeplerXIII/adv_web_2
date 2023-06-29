import Game, { GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from "./js/game";
import ("./css/style.css")

const game = new Game();
game.start();