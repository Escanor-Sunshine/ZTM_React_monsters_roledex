import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.compoment';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            monsters: [],
            searchField: '',
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => this.setState({ monsters: users }));
    }

    render() {
        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter((monster) => {
            return monster.name
                .toLowerCase()
                .includes(searchField.toLocaleLowerCase());
        });

        return (
            <div className='App'>
                <h1>Monsters Roledex Testing1</h1>
                <SearchBox
                    placeholder='Search people'
                    handleChange={(e) =>
                        this.setState({ searchField: e.target.value })
                    }
                />
                <CardList monsters={filteredMonsters}></CardList>
            </div>
        );
    }
}

export default App;
