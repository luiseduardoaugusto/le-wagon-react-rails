import React , {useState} from 'react'

const initialFormValue = {
    title: "",
    description: "",
  };

export default function TodoForm({todoAdd}) {
    
    const [ formValue, setFormValue ] = useState(initialFormValue)
    const { title, description } = formValue;

    const handleInputChange = (e) => {
        const changedFormValues = {
          ...formValue,
          [e.target.name]: e.target.value,
        };
    
        setFormValue(changedFormValues);
      };

      const handleSubmit = (e) => {
          e.preventDefault();
          todoAdd(formValue);
          setFormValue(initialFormValue);
      };

    return (
        <div>
           TODO FORM
            <form onSubmit={handleSubmit}>
            <input 
        type="text"
        placeholder="Titulo"
        name="title"
        value={title}
        onChange={handleInputChange}/>
        <textarea 
        placeholder="Descripcion"
        name="description"
        value={description}
        onChange={handleInputChange}
        > </textarea>
            <button > agregar </button>
            </form>
        </div>
    )
}