const React = require('react');
const ReactDOM = require('react-dom');

const containerR = document.querySelector('#containerR');

class LikeButton extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {isLiked : false}
    }

    render(){

        if (this.state.isLiked) {
            return 'You liked!!!';
        }

        return <button
            style={{border: '1px solid #000', background: 'red'}}
            onClick= { () => this.setState( { isLiked : true } ) }>Like</button>
    }        
}

ReactDOM.render(<LikeButton/>, containerR);