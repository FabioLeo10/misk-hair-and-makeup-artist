

app.get('/works', async (req, res) => {
    const works = await WorkModel.find().sort({ createdAt: -1 });
    res.status(200).json(works);
});
