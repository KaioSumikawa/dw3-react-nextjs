import express from "express";
import gameController from "../controllers/gameController.js";
import Auth from '../middleware/Auth.js';

const gameRoutes = express.Router();

// Endpoint para listar todos os games (rota)
gameRoutes.get("/games", Auth.Authorization, gameController.getAllGames);

// Endpoint para cadastrar um jogo
gameRoutes.post("/games", Auth.Authorization, gameController.createGame);

// Endpoint para excluir um jogo
gameRoutes.delete("/games/:id", Auth.Authorization, gameController.deleteGame);

// Endpoint para alterar um jogo
gameRoutes.put("/games/:id", Auth.Authorization, gameController.updateGame);

// Endpoint para listar um único jogo
gameRoutes.get("/games/:id", Auth.Authorization, gameController.getOneGame);

export default gameRoutes;