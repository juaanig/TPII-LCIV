import React from 'react'

export const legalAge = (age) =>{
    
    let aux = age >= 18 ? true :  age < 18 && age > 0 ? false : null;   

    return aux;
    
} 
    
const Age = () => {
    
    return (
    <>
        <h1>Hello , It's a Test </h1>
    </>
    )

}

export default Age