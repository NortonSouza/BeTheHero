const express = require('express'); // importa todas as funcionalidades do express
const cors = require('cors');
const routes = require('./routes');
const app = express(); // variavel que armazena a aplicação


app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333); // porta que será rodada a aplicação


/** Metodos HTTP
 * GET - BUSCAR/LISTAR: Buscar uma informação no back-end
 * POST: Criar uma informaçãp no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
*/

/** TIpos de parametros
 * Query parms: parametros nomeados e enviasos na rota após o simbolo = "?" ('filtros', 'paginação')
 * Route parms: parametros utilizados pata identificar recursos (unico usuario/ recurso)
 * Request Body: corpo da requisição utilizado para criar ou alterar recursos
 * 
*/





