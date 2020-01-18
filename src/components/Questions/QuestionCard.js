import React from 'react';


class QuestionCard extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            collapse: false
        }

        this.collapseSegment = this.collapseSegment.bind(this)
    }

    collapseSegment(event){
        this.setState({collapse:!this.state.collapse})
    }
    
    render(){
        let containerState = !this.state.collapse ? "collapsible_bar_container_closed" :  "collapsible_bar_container_open"
        return (
            <div className="row centered">
                <div className="twelve wide column" >
                    <div className={containerState} onClick={this.collapseSegment}>
                        <div className="collapsible_bar_title">Question {this.props.number}</div>
                    </div>
                    {this.state.collapse ? (<div className="collapsible_bar_content">{this.props.question}</div>) : null} 
                </div>
            </div>
        )
    }
}

export default QuestionCard;