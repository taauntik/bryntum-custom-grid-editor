import { useRef } from 'react';
import { BryntumGrid, BryntumRadio } from '@bryntum/grid-react';
import { gridProps } from './GridConfig.jsx';
import './App.scss';

function App() {
    const gridRef    = useRef(null);

    return (
        <>
        <BryntumRadio />
        <BryntumGrid
        ref={gridRef}
        {...gridProps}
        />
        </>
    );
}

export default App;
