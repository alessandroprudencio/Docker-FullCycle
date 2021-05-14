const knex = require('../db/config')

exports.insertPerson = async (name) => {
    try {
        await knex('people').insert({ name: name || 'alessandro prudencio' })
    } catch (error) {
        throw new Error('Erro ao inserir pessoa !');
    }
}

exports.createTable = async () => {
    try {
        const existsTable = await knex.schema.hasTable('people')
        if (!existsTable) {
            await knex.schema.createTable('people', (table) => {
                table.increments();
                table.string('name');
                table.timestamps(true, true);
            })
        }
    } catch (error) {
        throw new Error('Erro ao criar tabela => ' + error.message);
    }
}

exports.getPeople = async () => {
    try {
        const resp = await knex.select('*').from('people');
        return resp
    } catch (error) {
        throw new Error('Erro ao buscar pessoas !');
    }
}