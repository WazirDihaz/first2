import { Button } from "bootstrap/dist/js/bootstrap.bundle";
import { useState } from "react";
import { Table } from "react-bootstrap";
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Fform()
{
     let [data,setdata]=useState({
    name:"",
    emial:"",
    phone:"",
    age:""

});

    function Change(event)
    {
        let oldvalue={...data}
        let getname=event.target.name;
        let  getvalue=event.target.value;

        oldvalue[getname]=getvalue;
        setdata(oldvalue);

    }

    let [sum,setsum]=useState([])

    function Sumit(event)
    {
        event.preventDefault()
        let exist=false;
        sum.map((item)=>
        {
            if(item.name==data.name)
                return(
            exist=true
            )
        })
        if(exist)
        {
                alert(`all ready exist ${data.name}`)
            return;
        }

        let curr={
           name:data.name,
           emial:data.emial,
           phone:data.phone,
           age:data.age
        }

        let alldata=[...sum,curr];
        setsum(alldata)

     let va={ name:"",emial:"", phone:"", age:"" }
      setdata(va)
      console.log(alldata)
     console.log(curr)
    }

    const de = (index) => {
        // Show the clicked index

        let alldata = sum.filter((item, i) => i !== index );

        setsum(alldata);
    };
    function up(index)
    {
     let reqobj=sum[index];
     let valuee={
        name:reqobj.name,
        emial:reqobj.emial,
        phone:reqobj.phone,
        age:reqobj.age

     }
       reqobj.name=data.name;
       reqobj.age=data.age;
       reqobj.phone=data.phone;
       reqobj.emial=data.emial;

       setdata(valuee)
    setsum([...sum])

    }

    return(

        <div className="container-fluid bg-danger btn">
          <div className="containaer contain" >
            <div className="row ">
                <div className="col-3 ">

                    <h1>USER</h1>
                    <form onSubmit={Sumit} >
                        <br></br>
                    <label>
                            Name:
                            <input onChange={Change} name="name" value={data.name}  placeholder="Type name"></input>
                        </label>
                        <br></br>
                        <label>
                            Email:
                            <input onChange={Change} name="emial" value={data.emial}  placeholder="Type name"></input>
                        </label>
                        <br></br>
                        <label>
                           Phone :
                            <input onChange={Change} name="phone" value={data.phone}   placeholder="Type name"></input>
                        </label>
                        <br></br>
                        <label>
                            age:
                            <input onChange={Change} name="age" value={data.age}   placeholder="Type name"></input>
                        </label>
                        <br></br>
                        <button className="btn btn-primary sar">Save</button>

                    </form>

                        <div className="col-2">
                            <Table striped bordered hover>
                                <thead>
                                   <tr>
                                    <th>
                                      id
                                    </th>
                                    <th>
                                        name
                                    </th>
                                    <th>
                                        email
                                    </th>

                                    <th>
                                        phone
                                    </th>
                                    <th>
                                        age
                                    </th>
                                    <th colSpan={2}>
                                        status
                                    </th>
                                   </tr>
                                </thead>
                                <tbody>
                                    {
                                        sum.length>0 ?

                                            sum.map((object,index)=>{
                                                return(
                                                    <tr>
                                                    <td key={index}>{index}</td>
                                                    <td>{object.name}</td>
                                                    <td>{object.emial}</td>
                                                    <td>{object.age}</td>
                                                    <td>{object.phone}</td>
                                                  <td><button key={index} onClick={()=>de(index)}>delete </button></td>
                                                  <td><button key={index} onClick={()=>up(index)}>update </button></td>
                                                  </tr>
                                                )
                                            }

                                           )
                                       :
                                      <tr><td colSpan={6}> data not found</td></tr>
                                    }

                                </tbody>
                            </Table>

                        </div>

                </div>
            </div>
          </div>
        </div>
    )

}




// import React, { useState } from "react";
// import { Button } from "bootstrap";
// import { LC, NC, SC, UC } from "./DATA";

// function Fform() {
//   let [upper,setupper]=useState(true);
//   let [lower,setlower]=useState(true);
//     let a="Anila"
//    let c=a.charAt[2]
//     console.log(c)

//   let [num,setnum]=useState(true);

//   let [symbol,setsymbol]=useState(true);
//   let [v,setv]=useState()
//   let [pass,setpass]=useState(10)
//  function creation()
//  {

//   let final=""
//   let value="";
//   if(upper || lower || num || symbol)
//   {
//     if(upper)
//     {
//       value+=UC;
//     }
//     if(lower)
//       {
//         value+=LC;
//       }
//       if(num)
//         {
//           value+=NC;
//         }
//         if(Symbol)
//           {
//             value+=SC;
//           }
   
    
//     for(let i=0;i<pass;i++)
//     {
//        final+=value.charAt(Math.floor(Math.random()*value.length))
//     }
//   setv(final)

//   }
//   else
//   {
//    value=""
//    setv(value)
//   }
 
//  }

//   return (
//     <div className="body">
//       <div className="password">
//         <h3>password</h3>
//         <div className="pass">
//         <input type="text" className="inp" value={v}  />

//         </div>

//         <div className="pw">
//           <label>
//             pasword lengt <input type="number" max={20} min={10} value={pass} onChange={(event)=>setpass(event.target.value)} className="bt"></input>
//           </label>
//         </div>
//         <div className="t">
//           <label>
//             upper case <input checked={upper} onClick={()=>setupper(!upper)} type="checkbox"></input>
//           </label>
//         </div>
//         <div className="t">
//           <label>
//             lower case <input type="checkbox" checked={lower} onClick={()=>setlower(!lower)}></input>
//           </label>
//         </div>
//         <div className="t">
//           <label>
//             numb case <input type="checkbox" checked={num} onClick={()=>setnum(!num)}></input>
//           </label>
//         </div>
//         <div className="t">
//           <label>
//             symbl case <input type="checkbox" checked={symbol} onClick={()=>setsymbol(!symbol)}></input>
//           </label>
//         </div>
//         <button className="btnn" onClick={creation}>generation</button>
//       </div>
//     </div>
//   );
// }

 export default Fform;