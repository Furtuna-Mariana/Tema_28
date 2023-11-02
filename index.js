const getPosts = (limit) => {
   return fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
}

const renderPosts = async () => {
    try {
        const response = await getPosts(5);

        if(!response.ok) {
            throw new SyntaxError('Something went wrong')
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
            throw new SyntaxError('Something went wrong');
        }
data.forEach(item => console.log(item));
    } catch (error) {
        console.error('Handled error: ' + error.message);
    }
}

renderPosts()