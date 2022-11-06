import { Component } from 'react';

class PhoneBookEditor extends Component {
  state = {
    contacts: [],

    name: '',
    number: '',
  };

  handleChangeName = e => {
    this.setState({ name: e.currentTarget.value });
  };

  handleChangeNumber = e => {
    this.setState({ number: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit(name, number);
    this.setState({ name: ' ', number: ' ' });

    // console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Name</p>
        <input
          value={this.state.name}
          onChange={this.handleChangeName}
          placeholder="Chaika Andrii"
          required
        ></input>
        <p>Number</p>
        <input
          value={this.state.number}
          onChange={this.handleChangeNumber}
          type="tel"
          name="number"
          placeholder="+38(050)505-55-55"
          pattern="\+?[0-9\s\-\(\)]+"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        ></input>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default PhoneBookEditor;
