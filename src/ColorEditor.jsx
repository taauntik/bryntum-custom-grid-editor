import { Component } from 'react';
export default class ColorEditor extends Component {
    state = { value : null };

    colors = ['green', 'blue', 'yellow', 'black', 'pink', 'cyan', 'red'];

    //region Cell editing interface, required functions
    // Should return the value to be applied when editing finishes
    getValue() {
        return this.state.value;
    }

    // React setState is asynchronous so we return Promise which is resolved when setState finishes
    setValue(value) {
        return new Promise((resolve) => this.setState({ value }, () => { console.log(value); resolve(value);}));
    }

    // Invalid editors are note allowed to close (unless grid is so configured). Implement this function to handle
    // validation of your editor
    isValid() {
        // This simple editor is always valid
        return true;
    }

    // // Called when editing starts, to set focus at the desired place in your editor
    focus() {
    }

    render() {
        return (
            <div className="b-popup">
            <h2>Color Selector</h2>
            <p>{this.state.value}</p>
            <div className="color-options">
                {
                    this.colors.map(color => (
                        
                        <button key={color}
                        className="color-box"
                        tabIndex={-1}
                        onClick={async (e) => {
                            await this.setValue(color);
                            e.target.blur();
                        }}
                        style={{
                            backgroundColor: color,
                            width: '40px',
                            height: '40px',
                            margin: '5px',
                            border: this.selectedColor === color ? '2px solid black' : '1px solid gray',
                            cursor: 'pointer',
                            display: 'inline-block',
                        }}></button>
                    ))
                }
            </div>
        </div>
        );
    }
}
