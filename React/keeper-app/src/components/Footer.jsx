import React from "react";

function Footer() {

    const currentYear = new Date().getFullYear();

    return <footer>
        <p>{currentYear} Gleycon Xavier | Todos os direitos reservados</p>
        </footer>
}

export default Footer;