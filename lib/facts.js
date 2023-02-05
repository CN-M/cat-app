const getFactData = async () => {
    const response = await fetch('https://cat-fact.herokuapp.com/facts')
    return response.json()
}

const getAllPostIds = async () => {
    const response = await fetch('https://cat-fact.herokuapp.com/facts')
    const facts = await response.json()

    const factIds = {}
    facts.forEach((fact, i) => {
        factIds[i] = fact._id
    });

    // factIds.map((id, i) => {
    //     facts.map((fact) => {
    //         console.log(fact._id)
    //     return {
    //         params: {
    //             // id: fact._id,
    //             slug: String(Math.floor(Math.random()*10)),
    //         }
    //     }
    // })
    facts.map((fact) => {
        console.log(fact._id)
        return {
            params: {
                    id: fact._id
                },
            }
        })

    //  facts.map((fact, i) => {
        // console.log(fact._id)
        // return {
        //   params: {
        //     id: fact._id,
        //   },
        // };
    //   });
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