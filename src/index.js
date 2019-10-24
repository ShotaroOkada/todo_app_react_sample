import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

ReactDOM.render( // reactの機能を使って()内のものを画面上に表示させています。
    <App/>, // 表示させるものとして、app.jsxに書かれているApp componentを指定しています
    document.getElementById('root') // public/index.htmlにある <div id="root"></div> という記述が関係しています
);



