import React, { createElement } from 'react'
import { FaSolarPanel } from "react-icons/fa"
import { HiOutlineSpeakerphone } from "react-icons/hi"
import { RiDashboardLine } from 'react-icons/ri';
import { VscHistory } from "react-icons/vsc"
import { RiUserSettingsLine } from "react-icons/ri"
import { GiBlackBook } from "react-icons/gi"
import { GiBugleCall } from "react-icons/gi"
import { AiOutlineSetting } from "react-icons/ai"

const Components = {
    painel: FaSolarPanel,
    resumo: HiOutlineSpeakerphone,
    dashboard: RiDashboardLine,
    historico: VscHistory,
    usersProfile: RiUserSettingsLine,
    manualUsuario: GiBlackBook,
    sugestoes: GiBugleCall,
    configuracao: AiOutlineSetting
}

export const IconComponent= ({icon, size, color, style}) => {
    if (typeof Components[icon] !== "undefined") {
        return createElement(Components[icon], {
            key: icon.key,
            icon: icon,
            size: size ?? 20,
            color: color,
            style: style
        })
    }
    return createElement(() => <RiDashboardLine key={1} size={size} color={color} />)
}