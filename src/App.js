import React, { useState, useRef, useEffect } from 'react';
import './App.scss';
import CardGenerator from './view_handler/card/card'
import NavGenerator from './view_handler/nav/nav'
import HeaderGenerator from './view_handler/header/header'
import logo from './image_assets/test.png'

// Hook
function useWindowSize() {
  // Initialize state with width
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 620;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  // Empty array to only run on mount

  return (width < breakpoint ? 'mobile' : 'desktop')
}

function App() {
  const device_type = useWindowSize();
  const [selected, setSelected] = useState()
  let menuType_ = 'grid'
  const [menuType, setMenuType] = useState(menuType_)
  const [clickedOutside, setClickedOutside] = useState(false);
  const myRef = useRef();

  function handleToggle() {
    setMenuType(menuType == 'grid' ? 'list': 'grid')
    return menuType
  }
  useEffect(() => {
      window.addEventListener('resize', () => {
        if (window.innerWidth > 800) {
          window.location.reload();
        }
      });
    },[])

  const handleClickOutside = e => {
      if (!myRef.current.contains(e.target)) {
          setSelected(false);
      }
  };

  const handleClickInside = () => setClickedOutside(false);

  useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  return (
    <div className="main row">
      <div id='desktop' style={{ display: device_type == 'mobile' ? 'none' : 'block' }}>
        <NavGenerator type='desktop' />
      </div>
      <div className="row">
        <div className="column">
          <div className="header">
            {/* <Header type={device_type} viewType={menuType} handleClick={(text) => text ? setMenuType(text) : ""}/> */}
            <HeaderGenerator type={device_type} click = {()=>handleToggle} viewType={menuType} />
          </div>
          <div className='card-container row' ref={myRef} onClick={handleClickInside}>
            {/* Add Cards logic the loop should be here */}
            {Array(10).fill(1).map((_, i) => <CardGenerator
              key={i}
              selected={selected === i}
              handleSelect={() => setSelected(i)}
              img={logo}
              title={"John Doe"}
              tags={["test1", "test2"]}
              content="Some example text some example text. John Doe is an architect and engineer"
              // type = {menuType_}
              type={menuType || menuType_} 
              />)}
          </div>
        </div>
      </div>
      <div id = 'mobile'  style={{ display: device_type == 'desktop' ? 'none' : 'block' }}>
        <NavGenerator type = 'mobile' />
      </div>
    </div>
  );
}

export default App;
