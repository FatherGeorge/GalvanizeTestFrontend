export const addVisitor = (visitor) => {
    console.log(visitor);
    fetch('visitors/', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(visitor)
    });
};