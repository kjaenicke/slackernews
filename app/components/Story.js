import React from 'react'
import Firebase from 'firebase'
import ReactfireMixin from 'reactfire'
import { shell } from 'electron'

const Story = React.createClass({
    mixins: [ReactfireMixin],
    getInitalState: function(){
        return {
            story: {}
        };
    },
    componentWillMount: function(){
        var ref = new Firebase(`https://hacker-news.firebaseio.com/v0/item/${this.props.id}`);
        this.bindAsObject(ref, 'story');
    },
    getAgeLabel: function(){
        var now = new Date();
        var timeDiff = now - this.state.story.time;
        var minutes = Math.floor((timeDiff / 1000) % 60);

        // if(minutes < 60){
            return `${minutes} minutes ago`;
        // }

        // remove minutes from the date
        timeDiff = Math.floor(timeDiff / 60);

        // get hours
        var hours = Math.round(timeDiff % 24);

        return `${hours} ago`;
    },
    handleTitleClicked: function(e){
        e.preventDefault();
        shell.openExternal(this.state.story.url);
    },
    render: function(){
        if(!this.state || !this.state.story){
            return null;
        }
        else {
            return (
                <div className="story">
                    <a href="#" onClick={ this.handleTitleClicked }>
                        <h3>{ this.state.story.title }</h3>
                    </a>
                    <p>Score: {this.state.story.score } by: { this.state.story.by } | { this.state.story.descendants || 0 } comments</p>
                </div>
            );
        }
    }
});

export default Story;
