import React from 'react';

export default class Search extends React.Component {
  state = {
    error: undefined,
    searchStr:''
  };

  doSearch(option){this.props.handleSearch(option);}

  handleSearch = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    this.doSearch(option);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSearch}>
            <div className="input-field">
                <input 
                    id="search" 
                    name="option" 
                    type="search"  />
                <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                <i className="material-icons">close</i>
                <button className="btn waves-light" type="submit" name="action">Submit</button>
            </div>
        </form>
      </div>
    );
  }
}
