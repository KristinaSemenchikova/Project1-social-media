import React, { Component } from 'react';
import s from './News.module.css';
import NewsItem from './NewsItem/NewsItem';
import {actionCreator} from '../../redux/state';

const News = (props) => {
    let newsElement = props.news.newsItem.map((item, i) => <NewsItem key={i} id={item.id} newsText={item.newsItemText} img={item.img} likes={item.likes} />);
    let addFile = React.createRef();
    let addFileButton = React.createRef();
    let clickOnFileButton = (e) => {
        addFile.current.click();
    };
    let showFileButton = () => {
        addFileButton.current.style.visibility = 'visible';
    };
let addNew = () => {
props.dispatch(actionCreator('ADD-NEW-NEW-ITEM','ADD-NEW-NEW-ITEM'));
};
let newsTextChange = (e) => {
    let newsText = e.target.value;
    props.dispatch(actionCreator('UPDATE-NEW-NEWS-ITEM-TEXT',newsText));
};

    return (
        <div className={s.news}>
            News
            {newsElement}
            <div className={s.newItem}>
                <div>
                    <textarea cols="69" rows="3" onFocus={showFileButton} onChange = {newsTextChange} value = {props.news.newsText}/>
                </div>
                <div className = {s.buttons}>
                    <button onClick = {addNew} > Add new </button>
                    <div className={s.addFile}>
                        <button onClick={clickOnFileButton} ref={addFileButton}> File </button>
                        <input type='file' ref={addFile} ></input>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default News;