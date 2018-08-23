import React, { Component } from 'react';
import Card from '../Cards/Card';
import Error from './Error';

class RandomGiphy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      giphies: [],
      error: false,
    };
  }

  componentDidMount() {
   this.getRandomGiphy();
  }

  getRandomGiphy(){
    this.getRandomGiphy=this.getRandomGiphy.bind(this);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=a3uXNfYPx2n78osenBQzaCmtW4ERwmyn&tag=&rating=G`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then(({data}) => {
        this.setState({
            giphies: data
        })
      })
      .catch((error) => {
        this.setState({
            error: true
        })
      });
  }

  renderItems() {
    if (!this.state.error) {
     return (
        <div>
            <div className="row">
                <Card key={this.state.giphies.id} type='random' item={this.state.giphies}/>
            </div>
            <div className="row">
                    <a onClick={this.getRandomGiphy} className="waves-effect waves-light btn-large">Get random giphy</a>
            </div>
       </div>
     );
    } else {
      return <Error />
    }
  }

  render() {
    return (
        this.renderItems()
    );
  }
}

export default RandomGiphy;