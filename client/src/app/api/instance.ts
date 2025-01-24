
export const get = async (url: string) => {
    try {
        const configs = {
            method: 'GET'
        }
        const response = await fetch(url, configs);
      
        return response.json();
    } catch (error) {
        console.warn(error)
        return null;
    }
}
