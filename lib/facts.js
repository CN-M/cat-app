const getFactData = async () => {
    const response = await fetch('https://cat-fact.herokuapp.com/facts')
    return response.json()
}

const getAllPostIds = async () => {
    const response = await fetch('https://cat-fact.herokuapp.com/facts')
    const facts = await response.json()

    return facts.map((fact) => {
        return {
            params: {
                id: fact._id
            }
        }
    })
}

const getSinglePost = async (id) => {
    const response = await fetch('https://cat-fact.herokuapp.com/facts')
    const facts = await response.json()
    const post = facts.find((fact) => fact._id === id )
    return {
        post
    }
}

export { getFactData, getAllPostIds, getSinglePost }