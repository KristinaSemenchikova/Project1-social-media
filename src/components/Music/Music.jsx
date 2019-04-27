import React, { Component } from 'react';
import axios from 'axios';
import s from './Music.module.scss'


class Music extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            users: []
        }
    }
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(
                result => {
                    let res = result.data.items;
                    console.log(res)
                    // this.setState({ quotes: res})
                }
            );
    }  
    render() {     
        let quotesTags = this.state.users.map(item => {
            return  <div className={s.post}><span className={s.author}>{item.author} </span>{item.quote}</div>
          });
        return (
            <div>
                <div className={s.items}>
                    {quotesTags}
                </div>
            </div>
        )
    }
}
export default Music;