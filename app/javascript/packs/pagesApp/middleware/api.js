/ Private API
let post = (payload) => {
    console.log(payload);
}

// Public API
const helloWorld = () => {
    let payload = 'Pages and pricing!'

    post(payload)
}

// Export Api
export const Api = {
    helloWorld
}