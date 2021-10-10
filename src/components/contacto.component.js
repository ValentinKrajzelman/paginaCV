import React from  "react";
import {FaGithub} from "react-icons/fa";
import {FiExternalLink} from "react-icons/fi";
import {AiFillLinkedin, AiOutlineMail,AiFillPhone,AiOutlineLink} from "react-icons/ai";
import { Link } from "react-router-dom";


const Contacto = () => {

    
        return(<div>
        <div id="texto1del04"><Link className='link' to={{pathname:"https://github.com/ValentinKrajzelman"}} target="_blank"><FaGithub/> ValentinKrajzelman <FiExternalLink size="0.75em"/></Link></div>
        <div id="texto2del04"><Link className='link' to={{pathname:'https://www.linkedin.com/in/valentin-krajzelman-b23380161/'}} target='_blank' > <AiFillLinkedin/> Valentin Krajzelman<FiExternalLink size="0.75em"/></Link></div>
        <div id="texto3del04"><AiOutlineMail/> valentinkrajzelman@hotmail.com</div>
        <div id="texto4del04"><AiFillPhone/> (0221) 15 4187611</div>
        
        <div className="lineahoja">a</div>
        <div className="piehoja">.04</div>
        </div>);
    

};
export default Contacto;

