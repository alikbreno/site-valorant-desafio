import React, { useEffect, useState } from 'react'
import style from './Cards.module.css'

const Cards = ({ img, nome, descricao, classe, iconeClasse, background, habilidades }) => {

    //Criada para armazenar o array das habilidades
    const [lista, setLista] = useState([])

    //Estado booleano para ativar ou desativar a descrição das habilidades
    const [mensagem, setMensagem] = useState(false) 

    //useEffect para atribuir a "lista" o array de habilidades
    useEffect(() => {
        setLista(habilidades)
    }, [])

    //Função para mudar o valor de mensagem ao ser clicado
    const abrirSkill = () => {
        setMensagem(!mensagem)
    }

  return (
    <main>
        <div className={style.container}>
            <div style={{ backgroundImage: `url(${background})`, backgroundPosition:"center", backgroundSize: "cover" }}>
                <img className={style.boneco} src={img} alt={nome} />
            </div>
            <div className={style.linha}></div>
            <div className={style.space}>
                <div className={style.direita}>
                    <p>Name: {nome}</p>
                    <p>Role: {classe}</p>
                    <p>Description: {descricao}</p>
                </div>
                <div className={style.habilidadesContainer}>
                    {lista.map(habilidade=>
                        <div key={habilidade.displayName} className={style.habilidades}>
                            <img onClick={abrirSkill} src={habilidade.displayIcon} alt="" width="50px"/>
                            {mensagem && <p>{habilidade.description}</p>}
                        </div>
                    )}
                </div>
                <div className={style.icone}><img src={iconeClasse} alt="" width="50px"/></div>
            </div>
        </div>
    </main>
  )
}

export default Cards
