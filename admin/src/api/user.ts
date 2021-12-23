async function getUserName (user) {
    if(user) {
       const {uid} = user
       const res = await fetch(`http://localhost:5001/blog-backend-67f71/us-central1/admin/users/${uid}`)
       const userInfo = await res.json()
       return userInfo.name
    } else {
        return null
    }
}

export { getUserName }