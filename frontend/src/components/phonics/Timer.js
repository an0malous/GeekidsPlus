import React from 'react';

export default class Timer extends React.Component {
    constructor(props){
        super(props)
        this.state = {totalSeconds: 0};
        this.mintues = 0;
        this.seconds = 0;
        this.interval = setInterval (this.tick, 1000)
    }


    tick = () => {
        this.setState({totalSeconds: this.state.totalSeconds + 1})
        this.seconds = this.state.totalSeconds % 60
        this.minutes = parseInt(this.state.totalSeconds / 60);
    }

    render () {
        return (
            <div>{this.minutes}:{this.seconds}</div>
        )
    }
}