import React, { useEffect, useRef, useState } from 'react'
 
function Main() {
    const table = [12,22,19,3,7]
    const [inp01,setinp01]=useState()
    const [inp02,setinp02]=useState()
    const [newtab,setnewtab]=useState([])
    const [newtab2,setnewtab2]=useState([])
    const [newtabPop,setnewtabPop]=useState([])
    const [newtabshif,setnewshift] = useState([])
    const[delSplice,setDelSplice] = useState([])
    const[Ajou_SPLICE,setAjouSplice] = useState([])
    // const [,setSelected] = useState()
    const [fil,setFil] = useState([])
    const [ind_inp,setind]=useState()
    const [much_inp,setmuch]=useState()
    const [ind_ajou,setind_ajou]=useState()
    const [mm,setmap] = useState([])
    const [val,setval]=useState()
    const [inc,setInc] = useState(false)//here cant be boolean khas ya true ya false
    const [red,setred] = useState()
    const ind_A = useRef(null)
    const val_Ajou = useRef(null)
    const ind = useRef(null)
    const how_much = useRef(null)
    const inp = useRef(null)
    const innp = useRef(null)
    const inp_includes = useRef(null)
    const op_inp = useRef(null)
    const had = useRef(null)
    const red_inp = useRef(null)
 
 
 
 
    const handlePush = ()=>{
        table.push(inp.current.value)
        setnewtab(table)
 
    }
    const handleUNSHIFT = ()=>{
        table.unshift(innp.current.value)
        setnewtab2(table)
       
    }
    const handlePOP = ()=>{
        table.pop()
        setnewtabPop(table)
    }
 
    const handleSHIFT = ()=>{
        table.shift()
        setnewshift(table)
    }
 
    const handleDelSplice = ()=>{
        table.splice(ind.current.value,how_much.current.value)
        setDelSplice(table)
    }
 
    const handleAjouSplice = ()=>{
        table.splice(ind_A.current.value,0,val_Ajou.current.value)
        setAjouSplice(table)
 
    }
 
    const handleUncludes = ()=>{
        const inp_nbr = Number(inp_includes.current.value)
        const res = table.includes(inp_nbr)
       setInc(res)
       console.log(res)
    }

useEffect(()=>{
    console.log(typeof(mm),'mm',mm)
},[mm])
const handleMap = ()=>{
    switch(had.current.value){
        case '*':
            return setmap(table.map((v)=>{
return v * op_inp.current.value    
}))
        case'+':
        return setmap(table.map((v)=>{
            return v + Number(op_inp.current.value)    
        }))
                case '-':
                    return setmap(table.map((v)=>{
            return  v - op_inp.current.value    
        }))
                 
 
    }

 
}
 
const handleFILTER = ()=>{
   const mmf =  table.filter((i)=>i%2===0)
    setFil(mmf)
 
}

const handleReduce = ()=>{
    const red = table.reduce((s,v)=>{
        return s+v
    }, Number(red_inp.current.value))
    setred(red)
console.log(red)
}
 
  return (
    <div>
        <h1>---------the basics--------------</h1>
        <table border={2}>
            <thead>
               
                    <tr>
                        <th>Methode</th>
                        <th>the initialState</th>
                        <th>the result</th>
                    </tr>
               
            </thead>
            <tbody>
                <tr>
                    <td>------PUSH--------</td>
                    <td>
                        {table.join(", ")}
                        <input type='text' value={inp01} ref={inp} onChange={(e)=>setinp01(e.target.value)}/>
                        <button onClick={handlePush}>PUSH</button>
                        </td>
                    <td>{newtab.join(", ")}</td>
                </tr>
{/* {' -------unshift----- '} */}
                <tr>
                    <td>------UNSHIFT--------</td>
                    <td>
                        {table.join(", ")}
                        <input type='text' value={inp02} ref={innp} onChange={(e)=>setinp02(e.target.value)}/>
                        <button onClick={handleUNSHIFT}>UNSHIFT</button>
                        </td>
                    <td>{newtab2.join(", ")}</td>
                </tr>
               
{/* {' -------POP----- '} */}
<tr>
                    <td>------POP--------</td>
                    <td>
                        {table.join(", ")}
                        <button onClick={handlePOP}>POP</button>
                        </td>
                    <td>{newtabPop.join(", ")}</td>
                </tr>
 
               
{/* {' -------shift----- '} */}
<tr>
                    <td>------SHIFT--------</td>
                    <td>
                        {table.join(", ")}
                        <button onClick={handleSHIFT}>SHIFT</button>
                        </td>
                    <td>{newtabshif.join(", ")}</td>
                </tr>
 
 
               
{/* {' -------Splice supprimer----- '} */}
<tr>
                    <td>------Splice/delete--------</td>
                    <td>
                        {table.join(", ")}
                        <input type='text' value={ind_inp}  ref={ind} placeholder='index' onChange={(e)=>setind(e.target.value)}/>
                        <input type='text' value={much_inp} ref={how_much} placeholder='how much' onChange={(e)=>setmuch(e.target.value)}/>
                        <button onClick={handleDelSplice}>Del_SPLICE</button>
                        </td>
                    <td>{delSplice.join(", ")}</td>
                </tr>
 
               
               
{/* {' -------Splice ajouter ----- '} */}
<tr>
                    <td>------Splice/ajoute--------</td>
                    <td>
                        {table.join(", ")}
                        <input type='text' value={val}  ref={ind_A} placeholder='which index' onChange={(e)=>setval(e.target.value)}/>
                        <input type='text' value={ind_ajou} ref={val_Ajou} placeholder='the value  want to add' onChange={(e)=>setind_ajou(e.target.value)}/>
                        <button onClick={handleAjouSplice}>Ajou_SPLICE</button>
                        </td>
                    <td>{Ajou_SPLICE.join(", ")}</td>
                </tr>
 
                               
               
{/* {' -------uncludes----- '} */}
<tr>
          <td>------Includes--------</td>
          <td>
            {table.join(", ")}
            <input
              type="text"
              ref={inp_includes}
              placeholder="Enter a number"
            />
            <button onClick={handleUncludes}>Is it here?</button>
          </td>
          <td>{inc ? 'Yes' : 'No'}</td> {/* whna darori khas msg hit mabghax yktb true w false */}
         
        </tr>
 {/* --------map------- */}
               <tr>
               <td>------MAP--------</td>
               <td> {table.join(", ")}
                <input type='text' placeholder='the number' ref={op_inp} />
               
               <select name="" id="" ref={had} >
 
                    <option >shose a operation</option>
                    <option  value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                </select>
                <button onClick={handleMap}>Mapi</button></td>
       
          <td> {mm.length>0?mm.join(","):mm}</td>
               </tr>
 
                {/* --------FILTER------- */}
                <tr>
               <td>------FILTER--------</td>
               <td> {table.join(", ")}
           
                <button onClick={handleFILTER}>Pair</button></td>
       
          <td>{fil.join(", ")} </td>
               </tr>
 
              
{/* {' -------Reduce----- '} */}
<tr>
          <td>------Reduce--------</td>
          <td>
            {table.join(", ")}
            <input
              type="text"
              placeholder="Enter the first value "
              ref={red_inp}
            />
            <button onClick={handleReduce}>calculer</button>
          </td>
          <td>la somme est : {red}</td> 
         
        </tr>

            </tbody>
        </table>
    </div>
 
   
  )
}
 
export default Main
 
 