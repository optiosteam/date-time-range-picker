import React from 'react'

interface IProps {
    backgroundColor?: string
}

const ExampleButton: React.FunctionComponent<IProps> = (props: IProps) => {
    return (
        <div 
        style={{
            backgroundColor: props.backgroundColor ? props.backgroundColor : 'grey'
        }}
        >
            <button> example button</button>
        </div>
    )
}

export default ExampleButton