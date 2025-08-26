// PersonForm: Handles the form for adding a new person
const PersonForm = ({ addPerson, newName, handlePersonChange, newNumber, handleNumberChange }) => (
    <form onSubmit={addPerson}>
    <div>
        name:<br />
        <input value={newName} onChange={handlePersonChange} />
    </div>
    <div>
        number:<br />
        <input value={newNumber} onChange={handleNumberChange} />
    </div>
    <div>
        <br />
        <button type="submit">add</button>
    </div>
    </form>
    )

export default PersonForm