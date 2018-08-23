import React, { Component } from 'react';
import Card from './Card';
import Search from '../Search';
import Error from './Error';

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      giphies: [],
      error: false,
      qtype:'trending',
      queryStr:'',
    };
  }
  getGiphy(){
    this.getGiphy=this.getGiphy.bind(this);
    const query=this.state.queryStr ? `q=${this.state.queryStr}&` : ''
    const url =`https://api.giphy.com/v1/gifs/${this.state.qtype}?${query}api_key=a3uXNfYPx2n78osenBQzaCmtW4ERwmyn&limit=25&rating=G`
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

  handleSearch(queryStr){ 
    queryStr ? 
    this.setState({queryStr,qtype:'search'}) 
    : this.setState({qtype:'trending'}); 
  }
  

  componentDidMount() {this.getGiphy();}

  componentWillUpdate() {this.getGiphy();}


  renderItems() {
    if (!this.state.error) {
      return this.state.giphies.map((item) => (
         <Card key={item.id} item={item}/>
      ));
    } else {
      return <Error />
    }
  }

  render() {
    return (
      <div>
        <Search handleSearch={this.handleSearch.bind(this)}/>    
        <div className="row">
          {this.renderItems()}
        </div>
      </div>  
    );
  }
}

export default Cards;
