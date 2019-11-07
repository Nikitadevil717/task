import React from 'react';
import { WidthProvider, Responsive } from "react-grid-layout";
import _ from "lodash";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const itemBlock = [
  {
    id: 1,
    name: "150 x 70",
    amount: 3,
    width: 16.2,
    height: 4.3,
    left: 0,
    top: 0
  },
  {
    id: 2,
    name: "120 x 70",
    amount: 10,
    width: 13.1,
    height: 4.3,
    left: 16.2,
    top: 0
  },
  {
    id: 3,
    name: "200 x 100",
    amount: 9,
    width: 21.4,
    height: 6,
    left: 0,
    top: 4.3
  },
  {
    id: 4,
    name: "100 x 100",
    amount: 15,
    width: 11,
    height: 6,
    left: 21.4,
    top: 4.3
  },
  {
    id: 5,
    name: "30 x 150",
    amount: 3,
    width: 3.7,
    height: 8.85,
    left: 32.4,
    top: 0
  },
  {
    id: 5,
    name: "150 x 190",
    amount: 4,
    width: 16.2,
    height: 11.15,
    left: 36.1,
    top: 0
  },
  {
    id: 5,
    name: "240 x 140",
    amount: 5,
    width: 25.6,
    height: 8.3,
    left: 52.3,
    top: 0
  },
  {
    id: 6,
    name: "360 x 50",
    amount: 7,
    width: 38.1,
    height: 3.15,
    left: 52.3,
    top: 8.3
  },
  {
    id: 7,
    name: "80 x 120",
    amount: 3,
    width: 8.9,
    height: 7.15,
    left: 77.9,
    top: 0
  },
  {
    id: 8,
    name: "60 x 190",
    amount: 8,
    width: 6.8,
    height: 11.15,
    left: 90.4,
    top: 0
  }
];

const gridSetting = {
    className: "layout",
    onLayoutChange: function() {},
    cols: { lg: 104, md: 104, sm: 104, xs: 104, xxs: 104 },
    isDraggable: false,
    isResizable: false,
    rowHeight: 12.5,
    margin: [5, 5]
  };

export default class AddRemoveLayout extends React.PureComponent {
  
  constructor(props) {
    super(props);


    this.state = {
      items: itemBlock.map(function(i, key, list) {
        return {
          i: i.name.toString(),
          x: i.left,
          y: i.top,
          w: i.width,
          h: i.height,
          keyID: _.uniqueId(),
          am: i.amount,
          drag: true,
          hidden: false,
          mouseDown: false,
          static: true,
          btnClose: false
        };
      }),
      startDrag: true,
      resetLayout: [],
      items2: [],
      newItem: [{}],
      dropOn: false,
      gridSet: [{
                className: "layout",
                onLayoutChange: function() {},
                cols: { lg: 246, md: 246, sm: 246, xs: 246, xxs: 246 },
                rowHeight: 55,
                containerPadding: [5, 6],
                margin: [5, 5],
                droppingItem: {i:'', w:1, h:1},
              }]

    };

    this.onBreakpointChange = this.onBreakpointChange.bind(this);
  }

  createElement(el) {
    const i = el.keyID;
    return (
      <div
      key={i} 
      data-grid={el}
      draggable={el.drag}
      unselectable="on"
      onDragStart={this.DragStartHandle.bind(this, i)}
      onMouseLeave={this.MouseLeaveHandle.bind(this, i)}
      onMouseEnter={this.MouseEnterHandle.bind(this, i)}
      className={ el.hidden === true ? 'hiddenItem' : '' }
      >
        <span className="text">{el.i}</span>
        <span className="amount">{el.am}</span>
        {el.btnClose === true ? 
        <span
          className="remove"
          onClick={this.onRemoveItem.bind(this, i)}
        >
          x
        </span>
        : ''}
        
        
      </div>
    );
  }

  MouseEnterHandle = event => {
    this.setState({
      dropOn: false,
    });
  };

  MouseLeaveHandle = event => {

    if(this.state.dropOn === false) {

      this.setState({
        startDrag: true
      })

      let updateArray = [];
      let fieldHeight = document.querySelector('#block-2');
      for(let itemState of this.state.resetLayout) {
        this.state.items2.forEach(item => {
          if(item.keyID === itemState.i) {
            item.x = itemState.x
            item.y = itemState.y
          }
        })
      }

      updateArray = this.state.items2;
      

      if( fieldHeight.offsetHeight < fieldHeight.children[0].offsetHeight ) {

      this.setState({ items2: _.reject(this.state.items2, {}) });
        setTimeout(() => {
          this.setState({
            items2: updateArray
          });
          alert('Here not enought space')
        },200);
      }

    }
    
  };

  onDraging = element => {

    setTimeout(() => {
      if(this.state.startDrag === true) {

        this.setState({
          resetLayout: element,
          startDrag: false
        });
      }

    }, 10)
    
  }


  onBreakpointChange(breakpoint, cols) {
    this.setState({
      breakpoint: breakpoint,
      cols: cols
    });
  }

  onLayoutChange(layout) {
    this.props.onLayoutChange(layout);
    this.setState({ layout: layout });
  }

  DragStartHandle(event, i) {
        i.dataTransfer.setData("dragContent", "");

        let filterItem = this.state.items.filter(item => item.keyID === event);
        this.setState({
          newItem: [{
            i: filterItem[0].i,
            w: filterItem[0].w * 4,
            maxW: filterItem[0].w * 4,
            h: filterItem[0].h,
            keyID: _.uniqueId(),
            static: false,
            btnClose: true
          }],
          gridSet: [{
                     className: "layout",
                     onLayoutChange: function() {},
                     cols: { lg: 246, md: 246, sm: 246, xs: 246, xxs: 246 },
                     rowHeight: 12.5,
                     containerPadding: [5, 5],
                     margin: [5, 5],
                     droppingItem: {i:filterItem[0].i, w:filterItem[0].w * 4, h:filterItem[0].h}
                   }]
          })
  }

  onRemoveItem(i) {
    let itemName;
    this.setState({ items2: _.reject(this.state.items2, { keyID: i }) });

    this.state.items2.forEach(item => {
      if(item.keyID === i) {
        itemName = item.i
      }
    });
    this.state.items.forEach(item => {
      if(item.i === itemName) {
        item.am = item.am + 1;
        if(item.am > 0) {
            item.hidden = false;
          }
      }
    })
  }

  onDrop = elemParams => {
    this.setState({
      dropOn: true,
      newItem: [{
        i: this.state.newItem[0].i,
        w: this.state.newItem[0].w,
        maxW: this.state.newItem[0].w,
        h: this.state.newItem[0].h,
        keyID: this.state.newItem[0].keyID,
        drag: false,
        x: elemParams.x,
        y: elemParams.y,
        mouseDown: false,
        static: false,
        btnClose: true
      }]
    })

    setTimeout(() => {
      let fieldHeight = document.querySelector('#block-2');

      if( fieldHeight.offsetHeight < fieldHeight.children[0].offsetHeight ) {
        alert('Here not enought space')
      } else {
        this.state.items.forEach(item => {
          if(item.i === this.state.newItem[0].i) {
            item.am = item.am - 1;
            if(item.am === 0) {
              item.hidden = true;
            }
          }
        });
        this.setState({
          items2: this.state.items2.concat(this.state.newItem)
        })
      }
      
    }, 10);
  };

  render() {
    return (
      <div>
        <div className="grid-field" id='block-1'>
          <ResponsiveReactGridLayout
            onLayoutChange={this.onLayoutChange}
            onBreakpointChange={this.onBreakpointChange}
            preventCollision={true}
            {...gridSetting}
          >
            {_.map(this.state.items, el => this.createElement(el))}
          </ResponsiveReactGridLayout>
        </div>
        <p className="items2__counter">колличество блоков {this.state.items2.length}</p>
        <div className="grid-field" id="block-2">
          <ResponsiveReactGridLayout
            onLayoutChange={this.onLayoutChange}
            onBreakpointChange={this.onBreakpointChange}
            isDroppable={true}
            onDrop={this.onDrop}
            onDrag={this.onDraging}
            compactType={'vertical'}
            isResizable={false}
            useCSSTransforms={false}
            measureBeforeMount={false}
            preventCollision={true}
            {...this.state.gridSet[0]}
          >
            {_.map(this.state.items2, el => this.createElement(el))}
          </ResponsiveReactGridLayout>
        </div>
      </div>
    );
  }
}