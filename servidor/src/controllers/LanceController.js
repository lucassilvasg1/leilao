const Lance = require('../models/Lance')

var lances = []

module.exports = {
   
    async index(req, res){

        let posicoesRepetidas = []

        //ordenar array
        lances.sort((a,b) => parseFloat(a.valor) - parseFloat(b.valor) );

        lances.map( (l, index) => {
            //Inserir elemento repetido no final da lista e o indice do elemento é adicionar na lista de repetidas
            if(includes(l.valor)){
                posicoesRepetidas.push(index)
                lances.push(l)
            }
        })

        //aqui eu retiro todos os elementos usando os indices adicionados no vetor de posições repetidas
        for (let index = posicoesRepetidas.length ; index > 0; index--) {
            lances.splice(posicoesRepetidas[index-1],1)
        }

        return res.json(lances)
        
    },

    async store(req, res) {
        console.log(JSON.stringify(req.body))
        let { nome, valor } = req.body;
        let lance = new Lance(nome, valor)
        lances.push(lance)
        return res.json(lance);
    }
}

// verifica se lá tem um elemento com o mesmo valor na lista
includes = a => {
    var counter = 0
    lances.map( e => {
        if( e.valor == a){
            counter++
            return
        }
    })
    return counter >= 2 ? true : false 

}