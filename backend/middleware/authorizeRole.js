module.exports = function authorizeRole(req, res, next) {
    if (req.user !== 'admin') {
        return res.status(403).send({ message: 'Access denied!' });
        
    } else {
        next()
    }
    
}