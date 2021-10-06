import React, {useState, useEffect} from 'react';
import FormatDateTime from './FormatDateTime';

export default function DateTimePretty(Component) {
    function NewDateTime(props) {
        const [list, setList] = useState([]);
        useEffect(() => {
            formatList(props.list)
            .then((el) => {
                setList(el)
                })
        }, []);
        return <Component list={list} />;
    }
    return NewDateTime;
}

async function formatList(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].date = await FormatDateTime(arr[i].date);
    }
    return arr;
}