var React=require('react');

module.exports=React.createClass({
  voteUp:function(){
    var newCount=parseInt(this.props.voteCount,10)+1;
    this.props.onVote(this.props.questionKey,newCount);
  },
  voteDown:function(){
    var newCount=parseInt(this.props.voteCount,10)-1;
    this.props.onVote(this.props.questionKey,newCount);
  },
  render:function(){
    return(
      <div className="media" key={this.props.id} >
        <div className="media-left">
          <button className="btn btn-default">
            <span className="glyphicon glyphicon-chevron-up" onClick={this.voteUp}>
            </span>
            <span className="vote-count">{this.props.voteCount}</span>
            <span className="glyphicon glyphicon-chevron-down"  onClick={this.voteDown}>
            </span>
          </button>
        </div>
        <div className="media-body">
          <h4 className="media-heading">{this.props.title}</h4>
          <p>
            {this.props.description}
          </p>
        </div>
      </div>
    )
  }
});
