import React from 'react';
import { Search } from 'react-bootstrap-icons';

interface SearchBarProps {
    onChangeFn(val: string): void;
    value: string;
}

const SearchBar = ({ onChangeFn, value }: SearchBarProps) => {
    return (
        <div className="search-bar p-3 ">
            <div className="d-flex position-relative">
                <input
                    className="search-input w-100 rounded-pill border-0 ps-5 pe-3 py-1"
                    onChange={(e) => onChangeFn(e.target.value)}
                    value={value}
                    placeholder="Search..."
                ></input>
                <Search className={`position-absolute search-icon ${value ? 'active' : ''}`} />
            </div>
        </div>
    );
};

export default SearchBar;
