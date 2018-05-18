import React from 'react';

class SearchBox extends React.Component {
    render() {
        return (
            <form className='search-form'>
                <input type='text' className='search' placeholder='What are you looking for?' />
                <ul className='search-suggestions'>
                </ul>
            </form>
        );
    }
}

export default SearchBox;