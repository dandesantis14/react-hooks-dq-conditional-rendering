import React, {useState} from "react";
import MenuBar from "./MenuBar";
import { Profile, Photos, Cocktails, Pokemon } from "./pages";

function MainBox() {
  /*
    Replace the code below! Depending on what menu item is selected in the menu, 
    I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected. 
    - Which component should have state? 
    - Which component should have methods to control state? 
    - Where should these methods be called?
  */
    const [menuSelection, setMenuSelection] = useState("Profile");
  
    function handleMenuChange(menuChoice) {
      // do whatever we want with the data (usually setting state)
      
      setMenuSelection(menuChoice);
    }

    let detailsToDisplay;
    if (menuSelection === "Profile") {
      detailsToDisplay = <Profile />;
    } else if (menuSelection === "Photos") {
      detailsToDisplay = <Photos />;
    } else if (menuSelection === "Cocktails") {
      detailsToDisplay = <Cocktails />;
    } else if (menuSelection === "Pokemon") {
      detailsToDisplay = <Pokemon />;
    }


  return (
    <div>
    {/* //  pass down handleSearchChange as a callback function */}
    {/* //     <Child onSearchChange={handleSearchChange} /> */}
    {/* //     <p>You searched for: {search}</p> */}
      <MenuBar onMenuChange={handleMenuChange} currentMenuSelection={menuSelection}/>
      {detailsToDisplay}
    </div>
  );
}

export default MainBox;
