import samples from '../data/samples'
import {useState} from 'react';

const Samples = () =>{

    return (
        <>
            <div id='Samples'>
                <ul id='SampleList'>
                    {samples.map((sample) => {
                        return <li className='SampleCard' key={sample.index}>
                            <p>{sample.title}</p>
                            <p>{sample.img}</p>
                            <p>{sample.desc}</p>
                            <p>{sample.git}</p>
                            <p>{sample.demo}</p>
                        </li>
                    })}
                </ul>
            </div>
        </>
    )
}

export default Samples;