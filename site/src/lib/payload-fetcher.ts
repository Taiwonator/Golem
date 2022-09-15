type PayloadFetch = (query: string) => Promise<[any, Response, Error | null]>

export const getPayloadDocs = (data: any) => data.docs

export const resolveImage = async(id: string) => payloadFetch(`media/${id}`)

export const useSWRConfig = (query: string) => ({ 
    key: `${process.env.NEXT_PUBLIC_PAYLOAD_API_URL}/${query}`,
    fetcher: (url) => fetch(url).then((res) => res.json())
 })

const payloadFetch: PayloadFetch = async(query) => {
    let data: any = null,
        response: Response = null, 
        error: Error | null = null
    
    response = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_API_URL}/${query}`)

    if(!response.ok) {
        error = new Error(`HTTP error! Status: ${response.status}`);
    }
    
    data = await response.json()

    return [data, response, error]
}

export default payloadFetch