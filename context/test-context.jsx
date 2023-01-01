import {useState,createContext} from "react"

const NumberContext = createContext({
    value:0,
    AddNumber:function(){},
    subtractNumber:function(){}
})

export function NumberContextProvider(props){

    const [number,setNumber] = useState(0)
    function IncreaseNumber(){setNumber((prev=>prev+1))}
    function DecreaseNumber(){setNumber((prev=>prev-1))}

    const context = {value:number,AddNumber:IncreaseNumber,subtractNumber:DecreaseNumber}

    return(
        <NumberContext.Provider value ={context}>
            {props.children}
        </NumberContext.Provider>
    )
}

export default NumberContext