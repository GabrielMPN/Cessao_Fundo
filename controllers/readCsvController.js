
const cessaoFundoModel = require('../models/cessaoFundoModel')

// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({ region: 'us-east-1' });

// Create S3 service object
s3 = new AWS.S3({ apiVersion: '2006-03-01' });

// enviar CSV para o banco
const sendToDB = function (params) {
    return new Promise((resolve, reject) => {
      s3.createBucket({
        Bucket: 'data-s3-bucket-aws'
      }, function () {
        s3.getObject(params, function (err, data) {
          if (err) {
            reject(err);
          } else {
            var body = data.Body;
            const readingFile = (Buffer.from(body, 'utf-8')).toString();
            const splitFile = readingFile.split('\r\n');
            const files = splitFile;
  
            for (let i = 1; i < files.length; i++) {
              let splitFiles = files[i].split(';')
             cessaoFundoModel.create({
                ORIGINADOR: splitFiles[0],
                  DOC_ORIGINADOR: splitFiles[1].replaceAll('.','').replace('-','').replace('/',''),
                  CEDENTE: splitFiles[2],
                  DOC_CEDENTE: splitFiles[3],
                  CCB: splitFiles[4],
                  ID_EXTERNO: splitFiles[5],
                  CLIENTE: splitFiles[6],
                  CPF_CNPJ: splitFiles[7].replaceAll('.','').replace('-','').replace('/',''),
                  ENDERECO: splitFiles[8],
                  CEP: splitFiles[9],
                  CIDADE: splitFiles[10],
                  UF: splitFiles[11],
                  VALOR_DO_EMPRESTIMO: splitFiles[12],
                  VALOR_PARCELA: splitFiles[14],
                  TOTAL_PARCELAS: splitFiles[19],
                  PARCELA: splitFiles[20],
                  DATA_DE_EMISSAO: splitFiles[23],
                  DATA_DE_VENCIMENTO: splitFiles[24],
                  PRECO_DE_AQUISICAO: splitFiles[26],
              })
            }
            resolve(data);
          }
        });
      });
    });
  }

exports.readCsvPost = async (req, res) => {
    try {
      var params = {
        Bucket: req.body.bucket_name,
        Key: req.body.object_key
      };
       await sendToDB(params).then(()=> {
          res.status(201).send('Registrado com sucesso!')
        })
        .catch((err)=> {
          res.status(400).send(err)
        });
        
    } catch(err) {
      res.send(err)
    }
  }