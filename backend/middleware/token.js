/*npm install jsonwebtoken

const jwt = require('jsonwebtoken');
const secretKey = 'yourSecretKey'; // Usa una chiave più sicura in produzione!

users.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Cerca l'utente nel database
        const user = await UserModel.findOne({ email });
        if (!user || user.password !== password) {
            return res.status(401).send({ message: 'Credenziali non valide' });
        }

        // Genera il token
        const token = jwt.sign(
            { id: user._id, role: user.role }, // Dati incorporati nel token
            secretKey,
            { expiresIn: '1h' } // Tempo di scadenza
        );

        res.status(200).send({ token });
    } catch (error) {
        res.status(500).send({ message: 'Errore durante il login', error });
    }
});


*/