import { comb_esta, comb_movel } from "../mocks/datas"
import dataSelect from "../mocks/dataSelectOptions.json"

export function firstLetterCase(name) {
    const firstletter= name && name[0]?.toUpperCase()
    const otherletter= name && name?.slice(1)?.toLowerCase() 
    const result= firstletter?.concat(otherletter)
    return result
}

export const firstName= (nameLetter) => firstLetterCase(nameLetter?.split(" ")[0])
export const secondName= (nameLetter) => firstLetterCase(nameLetter?.split(" ").length > 1 ? nameLetter?.split(" ")[1] : nameLetter)

const randdConvite = (params) => {
    const result= params.split('').sort(function(){return 0.5-Math.random()}).join('').substring(0,100)
    return result
}

export const randPassUser = (email, name) => {
    
    const num= "1234567890"
    const letter= "abcdefghijkl"
    const username= randdConvite(num+letter)
    const password= randdConvite(email+name+num)

    return {username, password}
}

export const handleDataSelect = (data, title) => {
    const result= data?.filter(i => i?.type?.toLowerCase() == title?.toLowerCase())[0]
    // console.log(title);
    return result?.items
}

export const handleSubItem = (item) => {
    
    const { id, data } = item
    // console.log("id: ", id);
    switch (id) {
        case 1093763195:
          return comb_esta(data)
    
        case 5208192:
          return comb_movel(data)
      
        default:
          return false;
    }
}

export const handleSubItemSelectData = (item) => {
    
    const { title, data } = item
    // console.log("id: ", id);
    switch (title) {
        case "Transporte rodoviário":
          return comb_esta(data)
    
        case 5208192:
          return comb_movel(data)
      
        default:
          return false;
    }
}