import React from  "react";
import {FaGithub} from "react-icons/fa";
import {FiExternalLink} from "react-icons/fi";
import {AiFillLinkedin, AiOutlineMail,AiFillPhone,AiOutlineLink} from "react-icons/ai";
import { Link } from "react-router-dom";


const Contacto = () => {

    
        return(<div>
        <div id="texto1del04">Mis repositorios estan en:  </div><Link style="none" to={{pathname:"https://github.com/ValentinKrajzelman"}} target="_blank"><FaGithub/> ValentinKrajzelman <FiExternalLink size="0.75em"/></Link>
        <div id="texto2del04">Mi pagina en linkedin: <AiFillLinkedin/> Valentin Krajzelman<FiExternalLink size="0.75em"/></div>
        <div id="texto3del04"><AiOutlineMail/> valentinkrajzelman@hotmail.com</div>
        <div id="texto4del04"><AiFillPhone/> (0221) 15 4187611</div>
        
        <div className="lineahoja">a</div>
        <div className="piehoja">.04</div>
        </div>);
    

};
export default Contacto;

