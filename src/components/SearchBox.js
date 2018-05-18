import React from 'react';

class SearchBox extends React.Component {
    render() {
        return (
            <div className='search-box'>
                <form className='search-form'>
                    <input type='text' className='search' placeholder='What are you looking for?' />
                    <ul className='search-suggestions'>
                    </ul>
                </form>
            </div>
        );
    }
}

export default SearchBox;