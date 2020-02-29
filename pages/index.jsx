import React, {Component} from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import CharacterGrid from '../components/CharacterGrid';
import Error from 'next/error';


export default class extends Component {
    static async getInitialProps(ctx) {
        const res = await fetch('http://rickandmortyapi.com/api/character/');
        const errorCode = res.statusCode > 200 ? res.statusCode : false
        const json = await res.json()
        return { errorCode, characters: json.results }
    }

    render() {
        const { characters, errorCode } = this.props
        if( errorCode ) {
            return <Error statusCode={errorCode}></Error>
        }
        return (
            <Layout title="RickandMorty" >
                <CharacterGrid characters={ characters } />
            </Layout>
        )
    }
}


