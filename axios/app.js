// axios.get('https://swapi.tech/api/people/1').then((res) =>{
//     console.log(res.data);
// }) .catch((err) => {
//     console.log(err);
// });

const loadPeople = async (id) => {
    try{
        const res = await axios.get(`https://swapi.tech/api/people/${id}`);
        console.log(res.data);
    } catch (error) {
        console.log(error);
        console.log(error.message);
        console.log(error.response.status);
        console.log(error.response.data);
    }
};