import React ,{useState} from "react";
// import App from "./App";


const Tabs = ({tabsprop}) =>{
    const [des , setDes] = React.useState("")
return (
    
    <div>
        <ul>
        {tabsprop.map((tab)=>(
         <li onClick={()=>{setDes(tab.des)}}>{tab.title}</li>
        ))}
    </ul>
    <p>{des}</p>
    </div>
)
}
export default Tabs;