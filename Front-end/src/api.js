/*TODO
*  1. Login feature
*  2. */

import { useState, useEffect } from "react";

// const BASE_URL = "https://info30005-pear.herokuapp.com";

//Temporary base url before update heroku server
const BASE_URL = "http://localhost:3000";

function getConversations() {
    const endpoint = BASE_URL + '/conversation/readAll';
    console.log("getConversations");
    return fetch(endpoint).then(res => res.json());
}

// export function getConversation(id) {
//     const endpoint = BASE_URL + `/conversation/readOne/${id}`;
//     console.log("getConversation");
//     return fetch(endpoint).then(res => {
//         console.log(res);
//     });
// }

export function useConversations() {
    const [loading, setLoading] = useState(true);
    const [conversations, setConversations] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getConversations()
            .then(conversations => {
                setConversations(conversations);
                setLoading(false);
            })
            .catch(e => {
                console.log(e);
                setError(e);
                setLoading(false);
            });
    }, []);

    return {
        loading,
        conversations,
        error
    };
}


export function addConversation(conversation) {
    const { topic, category, participantsId } = conversation;
    if (!topic || !category) {
        alert("must include all fields");
        return;
    }

    console.log({
        topic,
        category
    });

    const endpoint = BASE_URL + `/conversation/create/`;
    console.log("addConversation");
    // console.log(author);
    return fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            topic,
            category,
            participantsId
        })
    }).then(res => window.location.reload());
}





