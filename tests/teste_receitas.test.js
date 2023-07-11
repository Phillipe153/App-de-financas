const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const { app } = require('../app');
const service = require('../src/service/indexService');

const { expect } = chai;
chai.use(chaiHttp);


describe('Receitas', () => { 
    
    describe('adiciona receitas', () => {
        
    const DadosDeUmaNovaFonteDeReceita = {
        fonteDaReceita: "dividendos",
        valor: 500,
        data: 15/19/1991
    }

    const retornoFunçaoAdicionaNovaReceita = {
        status: 200,
        message: "Tudo certo!"
    }
    before(() => {
        sinon.stub(service,'adicionaNovaReceitaService').resolves(retornoFunçaoAdicionaNovaReceita);
    });
    after(() => {
        service.adicionaNovaReceitaService.restore();
    });

    it('Verifica a adição de uma nova receita.', async() => {
        const response = await chai.request(app).post('/adicionaNovaReceita').send(DadosDeUmaNovaFonteDeReceita);
        expect(response).to.be.an('object')
        expect(response).to.be.include.keys("status")
        expect(response.body).to.be.eq("Tudo certo!")

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

    })

    describe('verifica receitas', () => {
        
        const DadosDeUmaNovaFonteDeReceita = {
            fonteDaReceita: "dividendos",
            valor: 500,
            data: 15/19/1991
        }
    
        before(() => {
            sinon.stub(service,'verificaReceitasService').resolves(DadosDeUmaNovaFonteDeReceita);
        });
        after(() => {
            service.verificaReceitasService.restore();
        });
        
        it('Verifica a visualizção de todas as receitas.', async() => {
            const response = await chai.request(app).get('/verificaReceitas');
    
            expect(response.body).to.be.an('object')
            expect(response.body).to.have.property('fonteDaReceita')
            expect(response.body).to.have.property('data')
            expect(response.body).to.have.property('valor')
        })
    
        })


    describe('verifica a exclusao de uma receita', () => {
        
        const TodasReceitas = [
            {
                "id": 1,
                "fonte": "dividendos",
                "valor": 500,
                "createdAt": "2023-06-29",
                "updatedAt": "2023-06-29"
            },
            {
                "id": 2,
                "fonte": "dividendos",
                "valor": 5000,
                "createdAt": "2023-06-30",
                "updatedAt": "2023-06-30"
            }
        ]
    
        before(() => {
            sinon.stub(service,'deletaReceitasService').resolves(TodasReceitas);
        });
        after(() => {
            service.verificaReceitasService.restore();
        });
        
        it('Verifica a visualizção de todas as receitas.', async() => {
            const response = await chai.request(app).delete('/deletaReceitasService');
    
            // expect(response.body).to.be.an('object')
            // expect(response.body).to.have.property('fonteDaReceita')
            // expect(response.body).to.have.property('data')
            // expect(response.body).to.have.property('valor')
        })
    
        })

        describe('verifica a alteração de uma fobte de receita', () => {
        
            const TodasReceitas = 
                {
                    "id": 2,
                    "fonte": "aluguel",
                    "valor": 5000,
                    "createdAt": "2023-06-30",
                    "updatedAt": "2023-06-30"
                }
            
        
            before(() => {
                sinon.stub(service,'alteraReceitasService').resolves(TodasReceitas);
            });
            after(() => {
                service.verificaReceitasService.restore();
            });
            
            it('Verifica a visualizção de todas as receitas.', async() => {
                const response = await chai.request(app).delete('/alteraReceitas');
        
                // expect(response.body).to.be.an('object')
                // expect(response.body).to.have.property('fonteDaReceita')
                // expect(response.body).to.have.property('data')
                // expect(response.body).to.have.property('valor')
            })
        
            })

})