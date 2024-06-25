import CategoriaModel from "../Models/CategoriaModel.js";

class CategoriaController{
    constructor(){
    }
    create(req,res){
        const nome = req.body.nome;
        CategoriaModel.create(nome).then(
            resposta =>{
                console.debug("Incerindo uma categoria");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug("Erro ao inserir uma categoria");
                res.status(resposta[0]).json(resposta[1])
            }
        )

    }

    read(req,res){
        CategoriaModel.read().then(
            resposta =>{
                console.debug("Mostrando uma categoria");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug("Erro ao mostrar uma categoria");
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    update(req,res){
        const id_categoria = req.params.id_categoria;
        const nome = req.body.nome;

        CategoriaModel.update(id_categoria,nome).then(
            resposta =>{
                console.debug("Atualizando uma categoria");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug("Erro ao atualizar uma categoria");
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }


    delete(req,res){
        const id_categoria = req.params.id_categoria;

        CategoriaModel.delete(id_categoria).then(
            resposta =>{
                console.debug("Deletando uma categoria");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug("Erro ao deletar uma categoria");
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

}
export default new CategoriaController();