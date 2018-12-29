import React from "react";
import ReactDOM from "react-dom";

import Post from './Post/Post';
import Footer from './Footer/Footer';

require('./index.css');

const posts = [{
  id: 1,
  title: 'Почему Webpack - это круто?',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe excepturi harum error, quos eveniet ipsa maiores autem magni. Fugiat suscipit debitis earum doloremque incidunt recusandae quo accusantium cumque nisi nam.'
}, {
  id: 2,
  title: 'Почему React - это круто?',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe excepturi harum error, quos eveniet ipsa maiores autem magni. Fugiat suscipit debitis earum doloremque incidunt recusandae quo accusantium cumque nisi nam.'
}, {
  id: 3,
  title: 'Почему JavaScript - это круто?',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe excepturi harum error, quos eveniet ipsa maiores autem magni. Fugiat suscipit debitis earum doloremque incidunt recusandae quo accusantium cumque nisi nam.'
}, {
  id: 4,
  title: 'Почему программирование - это круто?',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe excepturi harum error, quos eveniet ipsa maiores autem magni. Fugiat suscipit debitis earum doloremque incidunt recusandae quo accusantium cumque nisi nam.'
}];

class App extends React.PureComponent {
  render() {
    return (
      <div className='App'>
        <h1 className='App__title'>{isDev ? 'Блог в разработке' : 'Блог крутого разработчика'}</h1>
        {posts.map(post => <Post key={post.id} title={post.title} text={post.text} />)}
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
