
module.exports ={
    read:(req,res,next) =>{
        const db = req.app.get("db")
        db.select_all().then(response =>{
            res.status(200).json(response)
        }).catch(error =>{console.log("error posting listing, " , error)})
    },
    create:(req,res,next) =>{
        const db = req.app.get("db")
        const { house_name,address,city,state,zip,img,mortgage,rent} = req.body
        db.create_listing([house_name, address, city, state, zip,img,mortgage,rent]).then(response =>{
            res.status(200).json(response)
        }).catch(error =>{console.log("error posting listing, " , error)})
    },
    delete:(req,res,next) =>{
        const db = req.app.get("db")
        const { id } = req.query
        console.log("Id: ", id)
        db.delete_listing(id).then(response =>{
            res.status(200).json(response)
        }).catch(error =>{console.log("Couldn't delete house", error)})
    },
    edit:(req,res,next) =>{
        const db = req.app.get("db")
        const { id, name } = req.params
        db.update_listing(id, name).then(response =>{
            res.status(200).json(response)
        }).catch(error =>{console.log("error posting listing, " , error)})
    }
}