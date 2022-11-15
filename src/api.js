const API_END_POINT = "localhost:8888";

export const request = async (url, options = {}) => {
    try {
        const fullUrl = `${API_END_POINT}${url}`;
        const response = await fetch(fullUrl, options)

        if(response.ok) {
            
        }
    } catch(e) {
        alert(e.message)
    }
}