var React=require('react');
var QuestionItem=require('./QuestionItem.js');

module.exports=React.createClass({
  render:function(){
    var questions=this.props.questions;
    if(!Array.isArray(questions)){
      throw new Error('this.props.questions 问题必须是数组');
    }
    var self = this;
    var questionComps = questions.map(function(qst){
      return <QuestionItem key={qst.id}
                    questionKey={qst.id}
                    id = {qst.id}
                    title={qst.title}
                    description={qst.description}
                    voteCount={qst.voteCount}
                    onVote={self.props.onVote} />
    });
    return(
      <div id="question" className="">
      {questionComps}
      </div>
    )
  }
});
