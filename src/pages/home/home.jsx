import HousePreview from "../../containers/HousePreview.jsx";

var React = require('react');

// var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// App css
// require('style!css!sass!applicationStyles')


export default class Home extends React.Component {



  renderPreviews() {
    var array = [1,2,3];
    return array.map(() => {
      return (
        <li><HousePreview /></li>
      )
    })
  }

  render() {
      return(
        <ul>
          {this.renderPreviews()}
      </ul>

      )
    }
  }
