import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import HotTable from 'react-handsontable';
import myData from './instances.json';

class ExampleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handsontableData = myData;
    this.headers = Object.keys(myData[0]);
  }

  render() {
    return (
      <div id="example-component">
        <HotTable root="hot" settings={{
            data: this.handsontableData,
            stretchH: 'all',
            width: 'max',
            autoWrapRow: true,
            rowHeaders: true,
            colHeaders: this.headers,
            columnSorting: true,
            sortIndicator: true,
            autoColumnSize: {
                samplingRatio: 23
            },
            manualRowResize: true,
            manualColumnResize: true,
            manualRowMove: true,
            manualColumnMove: true,
            contextMenu: true,
            filters: true,
            dropdownMenu: true
        }} />
      </div>
    );
  }
}

ReactDOM.render(
  <ExampleComponent/>,
  document.getElementById('root')
);