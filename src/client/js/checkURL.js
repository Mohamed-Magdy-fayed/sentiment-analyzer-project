export const testURL = (url) => {
    const regexp = new RegExp(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi)
    
    if (regexp.test(url)) {
        return true
    } else {
        return false
    }
}