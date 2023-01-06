var emp=[{id:"1", name:"asd", desg:"fghj"},{id:"2", name:"ghj",desg:"kjhg"}];

Add=(ob)=>{
    alert("ass")
    emp.push(ob);
}

Length=()=>{
    return emp.length;
}

Search=(Id)=>{
    for(var empob of emp){
        if(e.id===parseInt(Id)){
            return empob;
        }
    }
}

module.exports={
    Add,Search,Length
}