// server.js
// Simple Express backend for Code Learning Assistant

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());           // allow requests from frontend
app.use(express.json());   // parse JSON bodies

// Test route
app.get('/', (req, res) => {
  res.send('Backend is running 🚀');
});

// Route to simulate code execution
app.post('/run', (req, res) => {
  const code = req.body.code || '';

  const simulatedOutput = `You sent this code:\n${code}\n(This is simulated output.)`;

  res.json({
    message: 'Code received successfully!',
    yourCode: code,
    simulatedOutput: simulatedOutput
  });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://127.0.0.1:${PORT}`));
