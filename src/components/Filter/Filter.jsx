import {FilterField, FilterData } from './Filter.styled.js';

const Filter = ({ filter, onInput }) => {

    return (
        <>
            <FilterField>
                Find contacts by name
                <FilterData
                    type="text"
                    name="filter"
                    value={filter}
                    onChange={onInput}
                />
            </FilterField>
        </>
    )
};

export default Filter; 