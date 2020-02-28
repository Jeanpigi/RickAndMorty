import React, {Component} from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import CharacterGrid from '../components/CharacterGrid'


class Home extends Component {
    static async getInitialProps(ctx) {
        const res = await fetch('http://rickandmortyapi.com/api/character/');
        const json = await res.json()
        return { characters: json.results }
    }

    render() {
        const { characters } = this.props
        return (
            <Layout title="RickandMorty" >
                <CharacterGrid characters={ characters } />
            </Layout>
        )
    }
}

export default Home
