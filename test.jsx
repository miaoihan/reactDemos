class MyTitle extends React.Component{
    	propTypes: {
    		title: React.PropTypes.string.isRequired
  	}
  	getDefaultPros(){
  		return{
  			title: 'this is default title'
  		}
  	}

    	render(){
    		// return <h1>{ this.props.name }</h1>
    		return <h1>{ this.props.title }</h1>
    	}
    }

    	let data = 123
      ReactDOM.render(
      	// <MyTitle name={data}></MyTitle>,
      	<MyTitle/>,
        example
        )

      