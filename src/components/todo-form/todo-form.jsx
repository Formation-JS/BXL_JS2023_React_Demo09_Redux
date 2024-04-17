import { useId } from 'react';
import { Form, useForm } from 'react-hook-form';

const TodoForm = ({ onValidate, btnSubmitName, defaultValues }) => {

    const formId = useId();
    const { register, handleSubmit, reset, setFocus } = useForm({
        defaultValues,
    });

    const handleFormSubmit = (data) => {
        onValidate(data);
        setFocus('name');
        reset();
    };

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div>
                <label htmlFor={formId + '-name'}>Nom : </label>
                <input type="text" id={formId + '-name'} {...register('name', { required: true })} />
            </div>
            <div>
                <label htmlFor={formId + 'desc'}>Description : </label>
                <textarea id={formId + 'desc'} {...register('desc')} />
            </div>
            <div>
                <button type="submit">{btnSubmitName}</button>
            </div>
        </form>
    );
};

TodoForm.defaultProps = {
    onValidate: () => {}, // NOOP
    btnSubmitName: 'Valider'
};

export default TodoForm;