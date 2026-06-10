const express = require('express');
const characterRoutes = require('./routes/characters.js');
const spellRoutes = require('./routes/spells.js');
const gameRoutes = require('./routes/game.js');

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

app.use('/api', characterRoutes);
app.use('/api/spells', spellRoutes);
app.use('/api', gameRoutes);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.info(`Servidor rodando na porta ${PORT}`);
});
