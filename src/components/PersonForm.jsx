import { usePersons } from "../hooks";
export const PersonForm = ({ newName, setNewName, newNumber, handleNewNumber, persons, setPersons }) => {
    const {handleUpdatePerson} = usePersons();
    const {createPerson} = usePersons();

    const addNewPerson = (event) => {
		event.preventDefault();
		if (!persons.some(person => (person.name === newName))) {
			const newPerson = {
                id: Date.now(),
				name: newName,
				number: newNumber

			};
            createPerson(newPerson);
			setPersons([...persons, newPerson]);
            
        
        
		} else {
            const existingPerson = persons.find(person => person.name === newName);
            handleUpdatePerson(existingPerson.id, newNumber, existingPerson.name);
        }
	};

    return (
        <div>
            <h2>Add a New Person:</h2>
                <form onSubmit={ addNewPerson }>
                    <div>
                        <label htmlFor="new-Name">Name: </label>
                        <input id="new-Name" value={ newName } onChange={ setNewName } />
                        <br /><br />
                        <label htmlFor="new-Number">Number: </label>
                        <input id="new-Number" value={ newNumber } onChange={ handleNewNumber } />
                    </div>
                    <br /><br />
                    <div>
                        <button type="submit">add</button>
                    </div>
                </form>
        </div>
    );

}