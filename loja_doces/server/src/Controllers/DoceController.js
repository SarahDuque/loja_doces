import DoceModel from "../Models/DoceModel.js";

class DoceController{
    constructor(){
    }
    create(req,res){
        const nome = req.body.nome;
        const id_categoria = req.body.id_categoria;
        DoceModel.create(nome,id_categoria).then(
            resposta =>{
                console.debug("Incerindo um doce");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug("Erro ao inserir um doce");
                res.status(resposta[0]).json(resposta[1])
            }
        )

    }

    read(req,res){
        DoceModel.read().then(
            resposta =>{
                console.debug("Mostrando um doce");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug("Erro ao mostrar um doce");
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    update(req,res){
        const id_doce = req.params.id_doce;
        const nome = req.body.nome;

        DoceModel.update(id_doce,nome).then(
            resposta =>{
                console.debug("Atualizando um doce");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug("Erro ao atualizar um doce");
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }


    delete(req,res){
        const id_doce = req.params.id_doce;

        DoceModel.delete(id_doce).then(
            resposta =>{
                console.debug("Deletando um doce");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug("Erro ao deletar um doce");
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

}
export default new DoceController();