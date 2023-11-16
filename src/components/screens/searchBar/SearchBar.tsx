import React from 'react';
import Header from '../../ui/Header.js';
import { AxiosApi } from '../../../api/Axios.api.tsx';
import Main from '../../ui/Main.tsx';

class SearchBar extends React.Component {
  saveValue = localStorage.getItem('searchValue');

  state = {
    data: [],
    loading: true,
    searchValue: this.saveValue || '',
  };

  errorMessage() {
    console.log(`Error button`);
    throw new Error('Error message');
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchValue: e.target.value });
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('searchValue', this.state.searchValue);
    this.responseAxios(this.state.searchValue);
  };

  async responseAxios(str: string) {
    this.setState({
      loading: true,
    });

    const response = await AxiosApi.getAll(str).catch((error) => {
      console.error(error);
      this.setState({
        loading: false,
      });
    });
    this.setState({
      data: response.results,
      loading: false,
    });
    await console.log(this.state.data);
  }

  componentDidMount() {
    this.responseAxios(this.state.searchValue);
  }

  render() {
    return (
      <>
        <Header
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          value={this.state.searchValue}
          loading={this.state.loading}
          errorClick={this.errorMessage}
        />
        <Main sData={this.state.data} />
      </>
    );
  }
}
export default SearchBar;
