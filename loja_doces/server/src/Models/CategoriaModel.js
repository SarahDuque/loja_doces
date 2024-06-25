import mysql from "mysql2"
import config from "../Config.js";

class CategoriaModel {
    constructor(){
        this.conexao = mysql.createConnection(config.db);
        
    }
    create(nome){
       let sql = `insert into categorias (nome) values("${nome}");`;
        
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([201,"Categoria Adicionada"])
            })
        })

    }
    read(){
        let sql = `select * from categorias;`;

        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([200,retorno])
            })
        })
    }

    update(id_categoria,nome){
        let sql = `update categorias set nome = "${nome}" where id_categoria="${id_categoria}";`

        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400],erro)
                }else if(retorno.affectedRows>0){
                    resolve([200],retorno)
                }else{
                    resolve([404,"Categoria não encontrada"])
                }
            })
        });
    }

    delete(id_categoria){
        let sql = `delete from categorias where id_categoria="${id_categoria}";`

        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400],erro)
                }else if(retorno.affectedRows>0){
                    resolve([200],retorno)
                }else{
                    resolve([404,"Categoria não encontrada"])
                }
            })
        });
    }
}

export default new CategoriaModel()