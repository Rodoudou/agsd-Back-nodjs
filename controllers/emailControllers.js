
// Route Get
export const getTest = (req, res)=>{
    res.send({name : 'Redouane'})
}

// Route Post recuperer data du form contact coté front
export const getPost = async(req, res)=>{
    console.log("req.body", req.body);
    res.send(req.body)
}