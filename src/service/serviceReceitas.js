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
const verificaUmaReceitaService= async (id) => {
    try {

        const dados = await receita.findOne({
            where: {id}
        })
        if (!dados) {
            return {status: 400, message: "Receita nao encontrada!"}
        }

        return {status: 200, message: dados}


    } catch (error) {
    console.log(error);
    } 
};

const alteraReceitasService= async (id, fonte, valor ) => {
    try {

        const dados = await receita.findOne({
            where: {id}
        })
        if (!dados) {
            return {status: 400, message: "Receita nao encontrada!"}
        }

        await receita.update({fonte, valor},{
            where: { id }
        })
        

        return {status: 201, message: "Alteraçao concluida com sucesso!"}


    } catch (error) {
    console.log(error);
    } 
};

const deletaUmaReceitaService= async (id, fonte, valor ) => {
    try {

        await receita.destroy({
            where: { id }
        })

        return {status: 201, message: "Receita excluida com sucesso!"}


    } catch (error) {
    console.log(error);
    } 
};

module.exports = {
    adicionaNovaReceitaService, 
    verificaReceitasService, 
    alteraReceitasService, 
    verificaUmaReceitaService,
    deletaUmaReceitaService}