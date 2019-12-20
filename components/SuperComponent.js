import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';

class SuperComponent extends Component {

    static getInitialProps (){
        console.log("im getting initial props")
        return {initialData : [1,2,3,4]}
    }
    // всегда должно возращать обьект
    // функция запускается на сервере и на на фронте юзера
    // статик означает что может запускатся без инициализации класа

    constructor(){
        //супер - спец фунеция что запускает конструктор
        super()
        this.state = {
            name: false,
            title: ''
        }
    }
    alertName(title) {
        alert(title)
    }

    render() {
        // samples
        const {title} = this.state;
        // const title = this.state.title;
        console.log(title);
        // різна структиризація
        const data = this.props.initialData

        return (
                <h1>title</h1>
        );
    }
}

export default SuperComponent;