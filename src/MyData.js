import MyForm from "./MyForm";

export const MyData = () => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            'firstName': 'Hayk',
            'lastName': 'Gabrielyan',
            'birthDay': '04/07/1987',
            'gender': 'male'
        })
    }
    fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
        .then((response) => response.json())
        .then((json) =>  console.log(json)
        )
}

export default MyData;