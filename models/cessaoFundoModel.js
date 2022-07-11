const Sequelize = require('sequelize');
const db = require('../connection').sequelize;
const cessaoFundo = db.define('tb_cessao_fundo', {
    ORIGINADOR: {
        type: Sequelize.STRING(250),
        allowNull: false
    },
    DOC_ORIGINADOR: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    CEDENTE: {
        type: Sequelize.STRING(250),
        allowNull: false
    },
    DOC_CEDENTE: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    CCB: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    ID_EXTERNO: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    CLIENTE: {
        type: Sequelize.STRING(250),
        allowNull: false
    },
    CPF_CNPJ: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    ENDERECO: {
        type: Sequelize.STRING(250),
        allowNull: false
    },
    CEP: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    CIDADE: {
        type: Sequelize.STRING(250),
        allowNull: false
    },
    UF: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    VALOR_DO_EMPRESTIMO: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
    },
    VALOR_PARCELA: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
    },
    TOTAL_PARCELAS: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    PARCELA: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    DATA_DE_EMISSAO: {
        type: Sequelize.DATE,
        allowNull: false
    },
    DATA_DE_VENCIMENTO: {
        type: Sequelize.DATE,
        allowNull: false
    },
    PRECO_DE_AQUISICAO: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
    },
},
    {
        timestamps: false,
    })

//Anuncio.sync({ alter: true });

module.exports = cessaoFundo;