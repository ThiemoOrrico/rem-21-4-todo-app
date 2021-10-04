export function fetchGETTodos(){
    return fetch(`https://localhost:8080/api/todo/`)
        .then(response => {
                if (response.ok){
                    return response.json()
                }
                else {
                    throw new Error("Failed to load characters from API")
                }
            }
        )
        .then(page => page.results)
}