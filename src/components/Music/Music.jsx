import React, { Component } from 'react';
import axios from 'axios';
import s from './Music.module.scss'


class Music extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            quotes: null
        }
    }
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
        axios.get('https://breaking-bad-quotes.herokuapp.com/v1/quotes/5')
            .then(
                result => {
                    let res = result.data;
                    let quotes = res.map(item => {
                      return  <div className={s.post}><span className={s.author}>{item.author} </span>{item.quote}</div>
                    });
                    this.setState({ quotes: quotes })
                }
            );
    }
    componentWillUnmount() {
        clearInterval(this.timerID)
    }
    tick() {
        this.setState({ date: new Date() })
    }
    render() {
        return (
            <div>
                <span>
                    Now {this.state.date.toLocaleTimeString()}
                </span>
                <div className={s.items}>
                    {this.state.quotes}
                </div>
            </div>
        )
    }
}
export default Music;