import data from "../../data/data.json";

export const requestData = () => {

    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve(data);
            }, 400)
        } catch (error) {
            reject(error)
        }
    })
}

export const requestItem = (id) =>{

    return new Promise ((resolve, reject) => {
        const item = (data.find(item =>Number(item.id)  === id))
        if(item)
        try {
            setTimeout(()=>{  
                resolve (item);
            },300)
        } catch (error) {
            reject(error)
        }
    })
}