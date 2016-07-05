import React from 'react'
import Firebase from 'firebase'
import ReactfireMixin from 'reactfire'
import Story from './Story';

const App = React.createClass({
    mixins: [ReactfireMixin],
    getInitalState: function(){
        return {
            items: []
        };
    },
    componentWillMount: function(){
        var ref = new Firebase("https://hacker-news.firebaseio.com/v0/topstories");
        this.bindAsArray(ref, "items");
    },
    render: function(){
        if(this.state.items.length > 0){
            const stories = this.state.items.map((s, i) => (<Story key={i} id={s['.value']} />));
            return (<div className="app">{ stories }</div>);
        }
        else {
            return (
                <div className="spinner-wrapper">
                    <i className="fa fa-circle-o-notch fa-spin fa-5x fa-fw margin-bottom" />
                </div>
            );
        }
    }
});

export default App;
