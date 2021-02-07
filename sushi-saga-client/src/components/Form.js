import React, {Component} from 'react'

class Form extends Component {

  render(){
    return(
       <form className="m-3" onSubmit={this.props.handleAddMoney}>
           <input name="money" type="text" className="form-control" placeholder="$"/>
          <input className="btn btn-primary mt-2" id="submit" type="submit"/>
        </form>
    )
  }
}

export default Form;