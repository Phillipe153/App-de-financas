const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const { app } = require('../app');
const service = require('../service/service');

const { expect } = chai;
chai.use(chaiHttp);

discribe('Receitas', () => {

    const DadosDeUmaNovaFonteDeReceita = {
        fonteDaReceit: "dividendos",
        data: 15/19/1991
    }
    before(() => {
        sinon.stub(service,'postReceitas').resolves(DadosDeUmaNovaFonteDeReceita);
    });
    after(() => {
        service.postReceitas.restore();
    });

    it('Verifica a adição de uma nova receita.', async() => {
        const response = await chai.request(app).post('/NovaReceita');

        expect(response).to.be.an('object')
        expect(response).to.be.include.keys(fonteDaReceit)
        expect(response).to.be.include.keys(data)
        expect(response.fonteDaReceit).to.be.equal("dividendos")

    })

    // it('Verifica a ediçao de uma receita.', async() => {
    //     const response = await chai.request(app).get('');
    // })

    // it('Verifica a remoção de uma receita.', async() => {
    //     const response = await chai.request(app).get('');
    // })

    // it('Verifica a visualizção de uma receita.', async() => {
    //     const response = await chai.request(app).get('');
    // })

    // it('Verifica a visualizção de todas as receitas.', async() => {
    //     const response = await chai.request(app).get('');
    // })
})
