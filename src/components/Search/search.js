import React from 'react';

export default function Search(props) {
    return (
        <div className="search">
            <header className="main-header">
                <h2>Search</h2>
            </header>
            <div className="search-bar">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search Your Perfect Car" aria-label="search cars" />
                    <button className="btn btn-primary" type="button">Search Cars</button>
                </div>
            </div>
        </div>
        
    )
}