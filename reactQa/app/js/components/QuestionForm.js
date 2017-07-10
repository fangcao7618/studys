var React=require('react');
module.exports=React.createClass({
  handleForm:function(e){
    e.preventDefault();
    var newQuestion={
      title:this.refs.title.value,
      description:this.refs.description.value,
      voteCount:0,
    };
    this.refs.addQuestionForm.reset();

    this.props.onNewQuestion(newQuestion);
  },
  render:function(){
    var styleObj={
      display:this.props.formDisplayed ? 'block' : 'none',
    }
    return(
    <form ref="addQuestionForm" onSubmit={this.handleForm} style={styleObj} name="addQuestion" className="clearfix">
        <div className="form-group">
          <label htmlFor="qtTitle">问题</label>
          <input ref="title" type="text" className="form-control" id="qtTitle" placeholder="您的问题的标题" />
        </div>
        <textarea ref="description"  className="form-control" rows="3" placeholder="问题的描述"></textarea>
        <button className="btn btn-success pull-right">确认</button>
        <button onClick={this.props.onToggleForm} className="btn btn-default pull-right">取消</button>
      </form>
    )
  }
});
