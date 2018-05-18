import React from 'react';
import Logo from './Logo';
import SearchBox from './SearchBox';
import RandomSearch from './RandomSearch';
import Result from './Result';

class WikiViewer extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='top'>
                    <Logo />
                    <SearchBox />
                    <RandomSearch />
                </div>

                <div className='mid'>
                    <Result />
                </div>
            </div>
        );
    }
}

export default WikiViewer;