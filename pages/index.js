import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
// import SuperComponent from '../components/SuperComponent';
import axios from  'axios';
// Funct components:
// dump components
// get data
// return data
//*************************** */
// Class Component
// more functionality
// more stuff
// use lifecycle function

// const Index = () => {
//     return (
        
//     );
// };

// export default Index;

export default class index extends Component {

    //асинхронний код для запита на сервері. щоб він був разом з функцією гетінітпропс
    static async getInitialProps () {
        let userData ={}
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
            userData = response.data
            console.log(response.data);
        }
        catch (err) {
            console.error(err)
        }
        return { initialData : [1,2,3,4] , userData : userData }
    }
        //стичний базовий код
    // static getInitialProps (){
    //     axios.get('https://jsonplaceholder.typicode.com/todos/1')
    //     .then(
    //         (response) => console.log(response.data))
    //     .catch(
    //         (error) =>  console.error(error))
    //     // console.log("im getting initial props")
    //     return {initialData : [1,2,3,4]}
    // }

    constructor(){
        super()
        //супер - спец фунеция что запускает конструктор
        this.state = {
            name: false,
            title: ''
        }
    }
    render() {
        // const initialData = this.props.initialData
        const {initialData , userData } = this.props

        return (
            <BaseLayout>
                <h1>Alter Ego</h1>
                <span>{initialData[1]}</span>
                <br/>
                <span>{userData.title}</span>
            </BaseLayout>
        )
    }
}
