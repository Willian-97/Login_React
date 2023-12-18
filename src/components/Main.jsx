import classes from "./Main.module.css"
import { useState } from "react"

const Main = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Enviado com Sucesso')
    }

    const handleName = (e) => {
        setName(e.target.value)
    }
    
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleTel = (e) => {
        setTel(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    
    

    return (
        <div className={classes.container} >
            <h1>Faça seu cadastro!</h1>
            <form className={classes.containerForm} onSubmit={handleSubmit} >
                <div>
                    <label htmlFor="name">Digite seu nome: </label>
                    <input type="text" name="name" placeholder="Digite seu nome aqui" onChange={handleName} />
                </div>
                <div>
                    <label htmlFor="email">Digite seu Email: </label>
                    <input type="email" name="email" placeholder="Digite seu Email aqui" onChange={handleEmail} />
                </div>
                <div>
                    <label htmlFor="tel">Digite seu número de Telefone: </label>
                    <input type="tel" name="tel" placeholder="Digite seu número de Telefone aqui"onChange={handleTel} />
                </div>
                <div>
                    <label htmlFor="password">Crie sua senha: </label>
                    <input type="password" name="password" placeholder="Crie sua senha" onChange={handlePassword} />
                </div>
                <div className={classes.submit} >
                    <input type="submit" value="Enviar"/>
                </div>
            </form>
        </div>
    )
}

export default Main