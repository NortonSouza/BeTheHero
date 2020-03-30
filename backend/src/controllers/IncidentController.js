const connection = require('../database/connection');


module.exports = {

    // listando as ongs
    async index(request, response) {

        //esquema de paginação
        const { page = 1 } = request.query;
        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)//mostra somente 5 casos por pagina
            .offset((page - 1) * 5)
            .select([
                'incidents.*',
                'ongs.nome',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.cidade',
                'ongs.uf'
            ]);

        const [count] = await connection('incidents').count();

        response.header('X-Total_Count', count['count(*)']);



        return response.json(incidents);
    },



    async create(request, response) {
        const { titulo, descricao, valor } = request.body;
        request.headers; // guarda informações do contexto -> mostrar msg em ingles pors EUA e em ptbr pra BR
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            titulo,
            descricao,
            valor,
            ong_id,
        });

        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incidents = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

        if (incidents.ong_id != ong_id) {
            return response.status(401).json({ error: 'Operation not permitted.' });
        }

        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
    }
}