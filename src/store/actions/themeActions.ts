import { themeActionsName } from "../constances/themeActionName";

 export const themeActions={
    darkTheme:()=>({type:themeActionsName.DARK_THEME}),
    lightTheme:()=>({type:themeActionsName.LIGHT_THEME})

};
