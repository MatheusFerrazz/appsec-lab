// Sistema de Login da Aula de DevSecOps
const express = require('express');
const app = express();

// --- ERRO 1: Senha exposta (Secret Exposure) ---
// Imagine que esta é a chave para acessar o cofre da empresa!
const API_KEY_COFRE = "SK-abc1234567890-PROD-SEGREDOS";

app.get('/login', (req, res) => {
    let user = req.query.user;

    // --- ERRO 2: Mensagem de erro com muita informação ---
    // Se o banco falhar, o sistema mostra detalhes técnicos pro atacante
    try {
        res.send("Bem-vindo, " + user);
    } catch (error) {
        res.status(500).send("Erro interno no servidor Node.js v14.1: " + error.stack);
    }
});

app.listen(3000, () => console.log('App rodando na porta 3000'));