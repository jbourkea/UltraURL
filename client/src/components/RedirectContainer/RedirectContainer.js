import React from 'react'
import { useHistory } from 'react-router-dom';

export default function RedirectContainer(props) {
    const history = useHistory();
    return (
        <div>
            {JSON.stringify(history)}
        </div>
    )
}
