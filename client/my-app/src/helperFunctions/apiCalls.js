
export  const apiCalls = async(reqType , reqBody , destination) => {

    const res = await fetch(`http://localhost:8080/${destination}` , {

        method:reqType , 
        credentials:'include',
        headers:{
            "Content-Type":"application/json"
        },
        body:((reqType=='GET') ? null : JSON.stringify(reqBody)),

    });

    const ans = await res.json();

    return ans;

}