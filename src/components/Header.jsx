import classes from "./Header.module.css"

const Header = () => {
    return (
        <header className={classes.header} >
            
            <h1 className={classes.logo}>Seja Bem-vindo</h1>

            <ul className={classes.menu} >
                <li><a href="#" target="_blank">Home</a></li>
                <li><a href="https://github.com/Willian-97#" target="_blank">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/willian-gasparini-854a9521a" target="_blank">Linkedin</a></li>
            </ul>
        </header>
    )
}

export default Header