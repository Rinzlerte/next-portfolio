import React from 'react';
import {withRouter} from 'next/router';
import axios from  'axios';

import BaseLayout from '../../components/layouts/BaseLayout';

class Portfolio extends React.Component {
    
    static async getInitialProps (context) {
        let post ={}
        const postId = context.query.id
        try {
            const response = await axios.get(`https:jsonplaceholder.typicode.com/posts/${postId}`)
            post = response.data
            console.log(response.data);
        }
        catch (err) {
            console.error(err)
        }
        return {post}
    }

    render() {
        const {post} = this.props
        return (
            <BaseLayout>
                <h1>Title : {post.title}</h1>
                <h2>Id : {this.props.router.query.id}</h2>
                <p>{post.body}</p>
            </BaseLayout>
        )
    }
}

export default withRouter(Portfolio);
//подкл к виводу через роутер
//визроутер получив квери создает динамический урл.
//даный пример не очень удобный так как в адрсено строке будет куча инфы. это надо комплиметировать cпомощью clean Url / route masking
// c помощью доп атирмуба аз <Link href="/p/[id]" as={`/p/${props.id}`}>
//теперь урла станет короче. но если обновить странцу будет 404 нет такой страницы и это надо доп фиксануть.надо сделать custom server api
//1 надо инстальнуть express -(удобный пакет фреймворк для создания сервера) и сзодать файл server.js
//что дает нам возможность заменить некст джс сервер на свой настраимавый нодсервер, даеть возможность подключить дата базу, авторизацию и тд
//таким орбразом можем создать endpoitn для кастомного урл.
//2 создать папку портфолио Pages/portfolio а в ней страницу что будет репреезнтовать станицу айди -  [id].js  - this ill be dynamic route
//заменяем написание атрибутов линка href={`/portfolio?id=${post.id}`} на href="/portfolio/[id]" -- свзано с тем что ранее инфа в динамческим отображалась 
//через несколько милисикунд. а данный новый синтаксис устранил это. и теперь отображается мгновенно..
//3 далее в [id]  создаем static async getInitialProps ()  и принимаем в него context >  static async getInitialProps (context)
//4 урлу запроса аxios меняем с get('https://jsonplaceholder.typicode.com/posts') на get(`https://jsonplaceholder.typicode.com/posts`)
//5 определяем  let post ={} и   constId = context.query.id
//это айди можео получить поскольку название файла специфицирвано как айди в брекетсах - [id] и оно заменяется нашим  - query
//6 уточянем динамичный адрес с  `https://jsonplaceholder.typicode.com/posts`  na  `https:jsonplaceholder.typicode.com/posts/${postId}`

//7 расмотриv динамические урлы с помощью next/routes
//7.1 npm install next-routes --save и создаем файл routes.js
//7.2 const routes = require('next-routes')            // Name   Page      Pattern
// module.exports = routes()                           // ----   ----      -----
// .add('about')                                       // about  about     /about
// .add('blog', '/blog/:slug')                         // blog   blog      /blog/:slug
// .add('user', '/user/:id', 'profile')                // user   profile   /user/:id
// .add('/:noname/:lang(en|es)/:wow+', 'complex')      // (none) complex   /:noname/:lang(en|es)/:wow+
// .add({name: 'beta', pattern: '/v3', page: 'v3'})    // beta   v3        /v3

//7.3 добавление возможностей в сервер. подключение роутов.js и подключить их к хендлеру.
//const routes = require('./routes')
//const handle = app.getRequestHandler();  на  const handler = routes.getRequestHandler(app)
//чтоб просмотреть все возможности этого способо создаем test.js pages/test.js  - копия как єтот файлс
//убираем пока настрйоки запроса. в роутах настраиваем как именно будет создаватся каталог и айди  в адресной строке.
//по дефолту .add('blog', '/blog/:slug') настраиваем >   .add('test', '/test/:id')  тест название каталога, при нвоом будет каталог  с айди.
//7.4 прописываем и определяем данные из контекста  - const testId = context.query.id
//7.5 упрощяем код.  static async getInitialProps ({query}) //  const testId = query.id и перезапуск сервера!!
//7.6 import {Link} from '../routes' для роутов  - On the client сайд   in Header..
//7,7 чтоб не былок конфликтов переназвём линки при импорте. import {Link} from '../routes' на import {Link as NextLink} from '../routes'
//7.8 можно добавлять параметры в урлу params={{slug: 'hello-world'}}   
// <NextLink route='test' params={{id: '1'}}>Test 1</NextLink> / bulo <NextLink route='/test/2'>Test 2</NextLink>
