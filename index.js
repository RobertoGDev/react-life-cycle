class Padre extends React.Component {
  state = {
    valueMax: 20,
    value: null,
  };

  cambio(value) {
    console.log("Nuevo click", this.state)
    this.setState({value: value});
  }
  
  render() {
    if (this.state.value > this.state.valueMax) {
        return (<p>Adiós hijo :( te has emancipado)</p>);
    }
    
    return(<Hijo valor={this.state.valor} onsetClick={valor => this.cambio(valor)} />);
  }
}






class Hijo extends React.Component {
  
}
class Hijo extends React.Component {
  constructor(props) {
     super(props);
    
    this.state = {
      doneClick: null
    };
    
    console.log("--> Construyo");
  }
  
  render() {
    console.log("--> Render");
    
    return (
      <React.Fragment>
        <p>Hola</p>
        <p>Rápido pulsa el botón para conseguir llegar a la meta!</p> 
        <p>Clicks hechos: {this.props.valor}</p>
        <button onClick={() => this.setClick()}>Púlsame, deprisa!!</button>
      </React.Fragment>      
    );
  }
/*   
  componentDidMount() {
    console.log("--> Fin montaje")
  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log("--> Fin render");
  }
  
  componentWillUnmount() {
    console.log("--> Adiós mundo!");
  } */
  
  
  setClick(e) {
    
    const lastClick = this.state.valor;

    let newClick = lastClick++;
    
    this.setState({doneClick: newClick});
    
    this.props.onsetClick(newClick);
  }
}

ReactDOM.render(
  <Padre />,
  document.getElementById('root')
);
