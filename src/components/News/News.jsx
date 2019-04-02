import React from 'react';
import s from './News.module.css';
import NewsItem from './NewsItem/NewsItem';
import PropTypes from 'prop-types';

const News = (props) => {
    let newsElement = props.newsItem.map((item) => <NewsItem isLiked={item.isLiked} key={item.id} id={item.id} newsText={item.newsItemText} img={item.img} likes={item.likes} onLike={props.onLike} onDislike={props.onDislike} />);
    let addFile = React.createRef();
    let addFileButton = React.createRef();

    let clickOnFileButton = (e) => {
        addFile.current.click();
    };
    let showFileButton = () => {
        addFileButton.current.style.visibility = 'visible'
    };
    let addNew = () => {
        props.onAddNew();
    };
    let newsTextChange = (e) => {
        let newsText = e.target.value;
        props.onChangeNew(newsText);
    };

    return (
        <div className={s.news}>
            News
            {newsElement}
            <div className={s.newItem}>
                <div>
                    <textarea cols="69" rows="3" onFocus={showFileButton} onChange={newsTextChange} value={props.newsText} />
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
News.propTypes = {
    newsItem: PropTypes.array,
    newsText: PropTypes.string,
    onLike: PropTypes.func,
    onDislike: PropTypes.func,
    onChangeNew: PropTypes.func,
    onAddNew: PropTypes.func
};
export default News;
