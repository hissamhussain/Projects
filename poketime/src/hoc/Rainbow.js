import React from 'react';

const Rainbow = (WrappedComponent) => {

    const colours = ['Red','Pink','Yellow','Green']
    const colour = colours[Math.floor(Math.random() *3)]
    const ClassName ='center ' + colour + '-text';
    console.log(ClassName)
    return (props) => 
    {
        return(
           
            <div className={ClassName}>
                
                <WrappedComponent  {...props}/>
            </div>
        )
        

    }
}

export default Rainbow