import React ,{useState} from "react";
// import App from "./App";


const Tabs = ({tabsprop}) =>{
    const [des , setDes] = useState(tabsprop[0])
return (
    
    <div>
        <ul>
        {tabsprop.map((tab)=>(
         <li onClick={()=>setDes(tab)}>{tab.title}</li>
        ))}
    </ul>
    <div>
        {
            des && <p>{des.content}</p>
        }
    
    </div>
    </div>
)
}
export default Tabs;