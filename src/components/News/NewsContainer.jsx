import React from 'react';
import { connect } from 'react-redux';
import {addNewActionCreator, updateNewActionCreator,likeNewsActionCreator, dislikeNewsActionCreator } from '../../redux/news-reducer';
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
            dispatch(likeNewsActionCreator(id))
          },
          onDislike: (id) => {
            dispatch(dislikeNewsActionCreator(id))
          },
          onAddNew: () => {
            dispatch(addNewActionCreator())
          },
          onChangeNew: (text) => {
            dispatch(updateNewActionCreator(text))
          },  
    } )
}
export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);
