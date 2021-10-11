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
export default Contacto; abcbac

var arrayDeObj = [];
var lengthOfLongestSubstring = function(s) {
    
var string1 = s;
var string2 = '';
    
for (var x=0;x<string1.length;x++){
string2=string1[x];
    for (var y=x+1;y<string1.length;y++){
              
            if (string2.search(string1[y]) != -1){
                        break;
                        } 
                string2=string1.substring(x,y+1);
        }
        arrayDeObj[x]={
                'cuerpo':string2,
                'largo':string2.length,
                };    
}
for (var x=0;x<arrayDeObj.length;x++){
        for (var y=x+1;y<arrayDeObj.length;y++)
        {
                if(arrayDeObj[x].largo<arrayDeObj[y].largo)
                {
                        let helper = arrayDeObj[x];
                        arrayDeObj[x]=arrayDeObj[y];
                        arrayDeObj[y]=helper;
                }
        }
}

var mayor =arrayDeObj[0].largo;
return mayor;
};