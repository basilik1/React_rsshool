import styles from './UI.module.css';
import React from 'react';

interface IHeaderValue {
  getValue: (value: string) => Promise<void>;
}

class Header extends React.Component<IHeaderValue> {
  state = {
    value: '',
  };

  constructor(props: IHeaderValue) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleCLick = this.handleCLick.bind(this);
  }

  localStValue() {
    const value = localStorage.getItem('searchValue');

    if (value !== null) {
      this.setState({
        value: localStorage.getItem('searchValue'),
      });
    }
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      value: event.target.value,
    });
    localStorage.setItem('searchValue', event.target.value);
  }

  handleCLick() {
    this.props.getValue(this.state.value);
  }

  render() {
    return (
      <div className={styles.header}>
        <div className={styles.form}>
          <h2>Name</h2>
          <p>
            Luke Skywalker <br />
            R2-D2 <br />
            Darth Vader
          </p>
        </div>
        <div className={styles.search}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          ></input>
          <button type="submit" onClick={this.handleCLick}>
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
