const Query = React.createClass({
  
    getInitialState : function() {
      return({
        modal: false
      });
    },
    
    modalToggle : function() {
      this.setState({modal: !this.state.modal})
      console.log('hello');
    },
    
    render : function(){
      return(
        <div>
          <button className="place-order" onClick={this.modalToggle}>
            <span className="fa fa-shopping-cart"></span>
          </button>
          <Modal onClick={this.modalToggle} status={this.state.modal}/>
        </div>
      );
    }
  });
  
  
  const Modal = React.createClass({
    
    getDefaultProps : function(){
      return({
        title: "Ova Highchair",
        description: "From formula to fruits, your baby's got a lot of eating ahead. An Ova high chair is the right place for breakfast, lunch and dinner.",
        price: "€" + 89
      });
    },
    
    render : function() {
      return(
        <div className="modal" data-status={this.props.status}>
          <div className="modal-left">
            <span className="price-tag">{this.props.price}</span>
          </div>
          <div className="modal-right">
            <h2>{this.props.title}</h2>
            <p>{this.props.description}</p>
            <button onClick={this.props.onClick} className="close">
              <span className="fa fa-close"></span>
            </button>
          </div>
        </div>
      );
    }
  });
  
  
  
  
  ReactDOM.render(
  <Query />,
  document.getElementById('main')
  )