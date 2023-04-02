import { themeActionsName } from "../constances/themeActionName"
import {theme} from '../../theme'
 export const themeReducer=(themeObject=theme,action:any)=>{
switch (action.type) {
 case themeActionsName.DARK_THEME:return {...themeObject,main:themeObject.darkTheme}
 case themeActionsName.LIGHT_THEME:return {...themeObject,main:themeObject.lightTheme}


    default:  return theme;
}
}