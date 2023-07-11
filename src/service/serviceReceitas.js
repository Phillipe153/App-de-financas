require('dotenv/config');
const { receita } = require('../models');
// const request = require('request');

const adicionaNovaReceitaService= async (fonte, valor ) => {
    try {
        await receita.create({
            fonte,
            valor
        })

        return {status: 201, message: "Nova fonte de renda adicionada!"}


    } catch (error) {
    console.log(error);
    } 
};

const verificaReceitasService= async (fonte, valor ) => {
    try {

        const dados = await receita.findAll()

        return dados


    } catch (error) {
    console.log(error);
    } 
};

module.exports = {adicionaNovaReceitaService, verificaReceitasService}