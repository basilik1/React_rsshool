import styles from './Home.module.css';
import Header from '../../ui/Header';
import Main from '../../ui/Main';
import { Component } from 'react';
import { AxiosApi } from '../../../api/Axios.api';

// TODO: add typing
class App extends Component {
  state = {
    sData: [],
    isLoading: true,
  };

  async localStValue(): Promise<void> {
    let value = localStorage.getItem('searchValue');
    let str = '';

    if (value === null) value = '';

    if (value === '') {
      str = '';
    } else {
      str = `?search=${value}`;
    }

    const { data } = await AxiosApi.getAll(str);

    this.setState({
      sData: data.results,
      isLoading: false,
    });
  }

  handleClick = async (value: string) => {
    let str = '';

    if (value === '') {
      str = '';
    } else {
      str = `?search=${value}`;
    }

    this.setState({
      isLoading: true,
    });

    const { data } = await AxiosApi.getAll(str);

    this.setState({
      sData: data.results,
      isLoading: false,
    });
  };

  render() {
    return (
      <>
        <div className={styles.block}>
          <Header getValue={this.handleClick} />

          {this.state.isLoading ? (
            <h2>Loading...</h2>
          ) : (
            // TODO: add property sData typing
            <Main sData={this.state.sData} />
          )}
        </div>
      </>
    );
  }
}

export default App;
