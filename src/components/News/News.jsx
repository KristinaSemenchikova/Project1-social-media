import React, { Component } from 'react';
import s from './News.module.css';
import NewsItem from './NewsItem/NewsItem';
import {addNewActionCreator,updateNewActionCreator } from './../../redux/news-reducer';


const News = (props) => {
    let newsElement = props.news.newsItem.map((item, i) => <NewsItem isLiked = {item.isLiked} key={i} id={item.id} newsText={item.newsItemText} img={item.img} likes={item.likes} dispatch={props.dispatch} />);
    let addFile = React.createRef();
    let addFileButton = React.createRef();
    let clickOnFileButton = (e) => {
        addFile.current.click();
    };
    let showFileButton = () => {
        addFileButton.current.style.visibility = 'visible'
    };
    let addNew = () => {
        props.dispatch(addNewActionCreator());
    };
    let newsTextChange = (e) => {
        let newsText = e.target.value;
        props.dispatch(updateNewActionCreator(newsText));
    };

    return (
        <div className={s.news}>
            News
            {newsElement}
            <div className={s.newItem}>
                <div>
                    <textarea cols="69" rows="3" onFocus={showFileButton} onChange={newsTextChange} value={props.news.newsText} />
                </div>
                <div className={s.buttons}>
                    <button onClick={addNew} > Add new </button>
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