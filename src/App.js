import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { people: 0, classes: 0 };
  }

  totalValue(people) {
    return 30 + (people - 1) * 10;
  }

  descountApply(people, classes) {
    if (classes < 4) {
      return 0;
    }
    if (classes < 8) {
      return this.totalValue(people) * classes * 0.25;
    }

    return this.totalValue(people) * classes * 0.35;
  }

  render() {
    const valueTotalWithouDescount =
      this.totalValue(this.state.people) * this.state.classes;

    const valueWithDescount = this.descountApply(
      this.state.people,
      this.state.classes,
    );

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Calculadora de preços FdeXis</h1>
        </header>
        <div>
          <label>Entre com a quantidade de pessoas:</label>
          <input
            style={{
              height: 40,
              borderColor: 'green',
              borderWidth: 1,
            }}
            onChange={e => this.setState({ people: e.target.value })}
            value={this.state.people}
            type="number"
          />
        </div>

        <p>Quantidade de pessoas: {this.state.people}</p>
        <div>
          <label>Entre com a quantidade de aulas:</label>
          <input
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChange={e => this.setState({ classes: e.target.value })}
            value={this.state.classes}
            maxLength={1}
          />
        </div>
        <p>Quantidade de aulas: {this.state.classes}</p>

        <p>Valor sem desconto R$ {valueTotalWithouDescount}</p>
        <p>Desconto aplicado R$ {valueWithDescount}</p>
        <p>Valor total R$ {valueTotalWithouDescount - valueWithDescount}</p>
      </div>
    );
  }
}

export default App;
