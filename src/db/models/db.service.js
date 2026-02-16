
export const create=async ({model,data}={})=>{
return await model.create(data)
}

export const findone=async ({model ,filter={},options={}}={})=>{
    const doc=model.findone(filter)
    if(options.populate){
        doc.populate(options.populate)

    }
if(options.limit){
    doc.limit(options.limit)

}if(options.skip){
    doc.skip(options.skip)

}
return await doc.exec()

}
export const updateone=async ({model ,update={},filter={},options={}}={})=>{
const doc=model.updateone(filter,update,{runValidators:true,...options})
return await doc.exec()
}

export const findoneandupdate=async ({model ,update={},filter={},options={}}={})=>{
const doc=model.findoneandupdate(filter,update,{new:true,runValidators:true,...options})
return await doc.exec()
}



    
    
