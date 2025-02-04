import { useRef } from 'react';
import { BryntumGrid } from '@bryntum/grid-react';
import { gridProps } from './GridConfig.jsx';
import './App.scss';

function App() {
    const gridRef    = useRef(null);

    return (
        <>
        <BryntumGrid
        ref={gridRef}
        {...gridProps}
        />
        </>
    );
}

export default App;
