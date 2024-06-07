const app = require('./app');
const admin = require('./app');

// Get user data from Firestore
app.get('/users/:id', async (req, res) => {
    const userId = req.params.id;
    try {
      const userRecord = await admin.auth().getUser(userId);
      res.status(200).send(userRecord);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });
  