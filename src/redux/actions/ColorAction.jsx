export function changeBackgroundColor(payload) {
    return {
        type: 'CHANGE_BACKGROUND_COLOR',
        payload
    }
} 

export function changeTextColor(payload) {
    return {
        type: 'CHANGE_TEXT_COLOR',
        payload
    }
}