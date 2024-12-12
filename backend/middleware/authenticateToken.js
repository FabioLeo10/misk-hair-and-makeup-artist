/*
Crea un middleware per controllare se l'utente è autenticato e ha il ruolo richiesto:


const jwt = require('jsonwebtoken');
const secretKey = 'yourSecretKey';

// Middleware per verificare l'autenticazione
function authenticateToken(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).send({ message: 'Accesso negato, token mancante' });

    jwt.verify(token, secretKey, (err, user) => {
        if (err) return res.status(403).send({ message: 'Token non valido' });
        req.user = user; // Aggiunge i dati dell'utente alla richiesta
        next();
    });
}

// Middleware per verificare il ruolo di admin
function authorizeAdmin(req, res, next) {
    if (req.user.role !== 'admin') {
        return res.status(403).send({ message: 'Accesso negato, solo gli admin possono eseguire questa operazione' });
    }
    next();
}
*/
