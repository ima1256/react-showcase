
export const fetchQuestions = async (url) => {


    if (!getLS(url)) {

        const response = await fetch(url)
    
        const data = await response.json()
    
        saveLS(url, data)

    }

    return getLS(url)

}

export const saveLS = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const getLS = (key) => {
    return JSON.parse(localStorage.getItem(key))
}