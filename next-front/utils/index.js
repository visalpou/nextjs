import moment from "moment"



export const formateDate = (date,fomat='TL',) =>{
    moment.locale('km')
    return moment(date).format(fomat)
}

export const cutSting =(string, length = 50) =>{
    return string.length > length ?
        string.substring(0, length) + '...' :
        string;
}

