module.exports = {
    getInfo: (req,res) => {
        const db = req.app.get('db')
        db.info.get_info().then((results)=>{
            res.status(200).send(results)
        })
        
    },
    addInfo: (req,res) => {
        const db = req.app.get('db')
        const {info_name,info_age,info_gender} = req.body
        db.info.add_info(info_name,info_age,info_gender).then((results)=>{
            res.status(200).send(results)})
        
    },
    deleteInfo: (req,res) => {
        const db = req.app.get('db')
        const {info_id} = req.params
        db.info.delete_info(info_id).then((results)=>{
            res.status(200).send(results)
        })
        
    },
    editInfo: (req,res) => {
        const db = req.app.get('db')
        const {info_name,info_age,info_gender} = req.body
        const {info_id} = req.params
        db.info.edit_info(info_id,info_name,info_age,info_gender).then((results)=>{
            res.status(200).send(results)
        })
        
    },
}