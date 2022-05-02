export function firstLetterCase(name) {
    const firstletter= name && name[0]?.toUpperCase()
    const otherletter= name && name?.slice(1)?.toLowerCase() 
    const result= firstletter?.concat(otherletter)
    return result
}

export const firstName= (nameLetter) => firstLetterCase(nameLetter?.split(" ")[0])
export const secondName= (nameLetter) => firstLetterCase(nameLetter?.split(" ").length > 1 ? nameLetter?.split(" ")[1] : nameLetter)