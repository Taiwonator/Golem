export function getInitials (string) {
    if(!string) return null

    let initials = ''
    const stringArr = string.split(' ')
    for(var i = 0; i < stringArr.length; i++){
        initials += stringArr[i][0]
    }
    return initials
}