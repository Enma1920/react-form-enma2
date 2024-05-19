import { useState, useEffect} from "react";
import {personService} from "../services"; 

export const usePersons = () => {
    const [persons, setPersons] = useState([]);
    
    useEffect(() =>{
        personService.getAll().then(data => {
            handleChangePersonsValue(data);
        })
    }, []);

    const handleChangePersonsValue = (newValue) => {
        setPersons(newValue);
    };

    const createPerson = (newPerson)=>{
        personService.create(newPerson);
    };

    
    const handleDeletePerson = (id) => {
        // const deletePerson = persons.some(person => person.id === id);
        const response = window.confirm(`¿Quieres eliminar ${id} ?`);

        if(response){
            personService.deletePerson(id).then(() =>{
                setPersons(persons.filter(person => person.id !== id));
                personService.getAll().then(persons =>{
                    setPersons(persons);
                })
                .catch(error => {
                    console.log(error);
                });
            })
            
        }
    };
    
    const handleUpdatePerson = (id, newNumber, name) => {
        const personExists = persons.some(person => person.id === id);
        if(personExists){
            const confirmed = window.confirm(
                `User ${name} is already in the phone book. Do you want to replace your existing number?`
                );
                if (confirmed) {
                    personService.update(id, { number: newNumber, name: name })
                    .then(updatedPerson => {
                        setPersons(persons.map(person => person.id !== id ? person : updatedPerson));
                    })
                    .catch(error => {
                        console.log(error);
                    });
                }
        

        }
    };    
    return { persons, handleChangePersonsValue, handleDeletePerson, handleUpdatePerson, createPerson};
};


