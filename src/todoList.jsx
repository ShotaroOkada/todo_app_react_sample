import React from 'react';

// 親componentから受け取ったtodoリストを画面上に表示させるcomponentを作っています
const TodoList = (props) => { // (props)にて、「親component」から情報を受け取ることができます。今回の場合、親はApp Componentです
    return (
        <div> {/* react componentでreturnする要素は必ず1つにまとめてあげる必要があります*/}
        {props.todoList.map((todo, index) => { // 「map」は「配列」を操作するためのものです。(ここの記述が一番難しいかもしれないです...) 簡単にいうと、配列の要素を1つずつ取り出し、その情報を元にHTML要素を返しているイメージです
                return <li key={index}> {/*<li>は「html」さんの特殊能力です。何をするものかわからなかったら調べてみてください。ちなみに、ここで一意となるkeyを指定しないと、reactさんに警告を出されます。なぜ警告が出されるかを調べると、Reactの知識がかなり深まると思います!!! */}
                    タイトル：{todo.title}<br /> {/*<br>も「html」さんの特殊能力です。 */}
                    内容：{todo.content}<br />
                    <button onClick={() => props.deleteTodo(index)}>削除{index}</button> {/*<button>も「html」さんの特殊能力です。onClickという記述で、このボタンが押されたときの処理を追加できます*/}
                </li>;
        })}
        </div>
    )
}

export default TodoList;