import { useId } from 'react';
import { useForm } from 'react-hook-form';

const SearchBar = ({ label, btnSubmitName, onSearch }) => {

    const formId = useId();
    const { register, handleSubmit, reset, setFocus } = useForm();

    const handleSearchSubmit = (data) => {
        if(!data.query || data.query.trim() === '') {
            return; // Test de garde
        }

        console.log(data);
        onSearch(data.query);
        setFocus('query');
        reset();
    };

    return (
        <form onSubmit={handleSubmit(handleSearchSubmit)}>
            {label && (
                <label htmlFor={formId}>{label}</label>
            )}
            <input id={formId} type="text"
                {...register('query', { required: true, minLength: 2 })}
            />
            <button type='submit'>{btnSubmitName}</button>
        </form>
    )
};

SearchBar.defaultProps = {
    btnSubmitName: 'Rechercher',
    onSearch: () => { }
};

export default SearchBar;