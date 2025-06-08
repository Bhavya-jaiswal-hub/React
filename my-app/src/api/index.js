 export  const getPosts = async() => {
     const response  = await fetch('https://jsonplaceholder.typicode.com/posts',{
          method: 'GEt',

     });

     return await response.json();
}

export const getRandomUser = async() => {
     const response = await fetch('https://randomuser.me/api/',{
        method: 'GET',
     });

     return await response.json();
}