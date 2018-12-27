export const addVisitor = (visitor) => {
    console.log(visitor);
    fetch('https://fantastic-four-visitors-pr-1.herokuapp.com/visitors/', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(visitor)
    }).then(res => res.json());
};