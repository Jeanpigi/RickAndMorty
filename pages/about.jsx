import React, {Component} from 'react';
import Link from 'next/link';
import Layout from '../components/Layout'

class About extends Component {
    render() {
        return (
            <Layout title="RickandMorty">
                <img src="../static/logo.png" alt="logo"></img>
                <h1>Jean Pierre Giovanni Arenas Ortiz</h1>
                <Link href="/">
                    <a>Home Page</a>
                </Link>
                <style jsx>{`
                h1 {
                    color:red;
                    text-align: center;
                }
                            
                img {
                    max-width: 50%;
                    display:block;
                    margin: 0 auto;
                }
                a {
                    text-decoration: none;
                    align-content:center;
                }
                `}</style> 
            </Layout>
        );
    }
}


export default About
