/*
function authorizeRole(requiredRole) {
    return (req, res, next) => {
        if (req.user.role !== requiredRole) {
            return res.status(403).send({ message: 'Accesso negato, ruolo insufficiente' });
        }
        next();
    };
}

*/