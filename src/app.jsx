import React, { useState } from 'react'; // ここでreactの機能が使えるような呼び出しを行なっています
import TodoList from './todoList';

// ファイル名についている.jsxは、JavaScript内でhtmlっぽいものが記述できるかなり優秀な子です。

const App = () => { // Appという名前の「React Function Component」を宣言しています。
  const [todoList, setTodolist] = useState([]); // 「React Hooks」における「state」初期化の書き方で、「useState」というものを用います
  const [textTitle, setTextTitle] = useState('');
  const [textContent, setTextContent] = useState('');

  const addTodo = () => { // 追加ボタンが押されたときの処理を書いている「関数」です。この => は、「アロー関数」といいます。
    const newTodoList = [...todoList]; // この ... は「スプレッド構文」です。reactおよびreduxにおいては必須となってくる知識です!!!
    newTodoList.push({title: textTitle, content: textContent}) // 「push」は「配列」を操作するためのものです。ここで、更新するためのstatewp作っています
    setTodolist(newTodoList); // React Hooksでは、stateを更新するためにあらかじめ宣言した関数を経由する必要があります。
    setTextTitle(''); 
    setTextContent(''); // 追加ボタンが押されると、フォームの記述内容を空にします
  }

  const deleteTodo = (index) => { // 削除ボタンが押されたときの処理を書いている「関数」です。
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1); // 「splice」は「配列」を操作するためのものです。
    setTodolist(newTodoList);
  }

  return (  
    <div> {/*<div>も「html」さんの特殊能力です */}
      <div>
        タイトル：<input type="text" value={textTitle}
          onChange={e => setTextTitle(e.target.value)} /> {/*<input>も「html」さんの特殊能力です。type, value, onChangeは全部<input>さんの特殊能力なので、わからなかったら調べてみてください */}

        内容：<input type="text" value={textContent}
          onChange={e => setTextContent(e.target.value)} />

      </div>
      <button onClick={addTodo}>追加</button>
      <ul>{<TodoList todoList={todoList} deleteTodo={deleteTodo}/>}</ul> {/* todoList.jsxに書かれているtodoListを呼び出しています。あと、<ul>は「html」さんの特殊能力です */}
      {/* toDoList=〜 の部分で「子component」に「props」(情報)を渡しています。 */}
      {/* TodoList componentは「state」であるtoDoListを元に描画されているため、toDoListの値が更新されるたびにtodoList componentで表示されている内容も自動で更新されます。これがReactの大きな特徴の1つです */}
    </div>
  );
}

export default App; // 他のcomponentにてApp function componentで呼び出せるようにしています。