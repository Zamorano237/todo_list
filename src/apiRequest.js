const apiRequest = async (URL = "", options = null, errMsg = null) => {
    try {
        const result = await fetch(URL, options)
        if(!result.ok) throw Error ('impossible de fetch les datas')
    } catch (error) {
        errMsg = error.message
    }finally{
        return errMsg
    }
}

export default apiRequest