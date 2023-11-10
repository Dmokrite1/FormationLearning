export default class Footer extends HTMLElement{
    connectedCallback(){
        const current = this.getAttribute('current');
        this.innerHTML = `
        <footer>
            <nav>
                <ul>
                    <li>
                        <a style="color: ${current === "home" ? 
                        "green": "red"} "href="./">Accueil</a>
                    </li>
                    <li>
                        <a style="color: ${current === "contact" ? 
                        "green": "red"} "href="./contact.html">Contact</a>
                    </li>
                </ul>
            </nav>
        </footer>`
    }
}