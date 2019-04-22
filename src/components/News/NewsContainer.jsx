import React from 'react';
import { connect } from 'react-redux';
import {addNewNewsItem, updateNewNewsItem,likeNews, dislikeNews } from '../../redux/news-reducer';
import {newsText, newsItem} from './/../../redux/selectors';
import News from './News';

const NewsContainer = (props) => {
    return (
        <News 
        newsText = {props.newsText}
        newsItem = {props.newsItem}
        onLike = {props.onLike}
        onDislike = {props.onDislike}
        onAddNew = {props.onAddNew}
        onChangeNew = {props.onChangeNew}
        />
    )
}
const mapStateToProps = (state) => {
    return ( {
        newsText: newsText(state),
        newsItem: newsItem(state)
    } )
}
const mapDispatchToProps = (dispatch) => {
    return ( {
          onLike: (id) => {
            dispatch(likeNews(id))
          },
          onDislike: (id) => {
            dispatch(dislikeNews(id))
          },
          onAddNew: () => {
            dispatch(addNewNewsItem())
          },
          onChangeNew: (text) => {
            dispatch(updateNewNewsItem(text))
          },  
    } )
}
export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);
