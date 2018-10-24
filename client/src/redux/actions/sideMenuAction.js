import {
    OPEN_MENU,
    CLOSE_MENU
} from './movieConstants'



export const openSideMenu = clicked => {    
    return {
        type: OPEN_MENU,
        data: clicked
    }
};

export const closeSideMenu = (clicked) => {
    return {
        type: CLOSE_MENU,
        data: clicked
    }
};