var React =require('react');
var ReactDOM=require('react-dom');
var ShowAddButton=require('./ShowAddButton.js');
var QuestionForm=require('./QuestionForm.js');
var QuestionList=require('./QuestionList.js');
var _=require('lodash');
module.exports = React.createClass({
  getInitialState:function(){
    var questions=[
      {
        key:1,
        id:1,
        title:'产品经理与程序员矛盾的本质是什么',
        description:'理性探讨，请勿撕逼，产品经理的主要工作职责是产品设计，接受来自其他部门的需求，经过设计后交互研发，但这里有好些职责不清楚的地方。',
        voteCount:10,
      },
      {
        key:2,
        id:2,
        title:'热爱编程是一种怎样的体验',
        description:'别人对玩游戏感兴趣，我对写代码、看技术文章感兴趣；把泡github,stackoverflow',
        voteCount:8,
      }
    ];
    return{
      questions:questions,
      formDisplayed:false,
    }
  },
  onNewQuestion:function(newQuestion){
    newQuestion.id=this.state.questions.length+1;
    newQuestion.key=newQuestion.id;
    var newQuestions =this.state.questions.concat(newQuestion);

    newQuestions=this.sortQuestion(newQuestions);

    this.setState({
      questions:newQuestions
    });

  },
  sortQuestion:function(questions){
    // var arr = Array.of(questions);
    var arr=new Array();
    // console.log(questions,'========questions');
    questions.map((qst,index)=>{
      arr.push(qst);
    });

    var questions = arr.sort((a, b) => b.voteCount - a.voteCount);
    // console.log(questions,'排序后');
    return questions;
  },
  onToggleForm:function(){
    this.setState({
      formDisplayed:!this.state.formDisplayed,
    });
  },
  onVote:function(key,newCount){
    var questions=_.uniq(this.state.questions);
    var index=_.findIndex(questions,function(qst){
      return qst.key == key;
    });
    questions[index].voteCount=newCount;
    questions=this.sortQuestion(questions);

    this.setState({
      questions:questions
    })
  },
  render:function(){
    return (
      <div>
        <div className="jumbotron text-center">
          <div className="container">
            <h1>React---问答</h1>
            <ShowAddButton onToggleForm={this.onToggleForm} />
          </div>
        </div>
        <div className="main container">
          <QuestionForm
            onNewQuestion={this.onNewQuestion}
            onToggleForm={this.onToggleForm}
            formDisplayed={this.state.formDisplayed} />
          <QuestionList onVote={this.onVote} questions={this.state.questions} />
        </div>
      </div>
    )
  }
});
