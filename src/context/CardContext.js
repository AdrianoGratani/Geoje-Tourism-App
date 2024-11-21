import {useState, useContext, createContext} from 'react';

// data from Context is accessible anywhere. if user clicks on a card, the following useContext state gets triggered INSIDE that particular Card.
// then, one data changes, an Extended version of the card compares, absolutely positioned in the Section component.

// useState data goes inside a Provided component right here. this provider must hold the childrend component. so Provider should wrap the <App /> component.
//  Provider just 'provides' the component that's why useContext is needed as well.


const CardContext = createContext();                                                      // create the Context 

export const  CardContextProvider = ( {children} ) => {                                   // this generates a Provider for the useState data.

    const [cardIsClicked, setCardIsClicked] = useState(false);                            // which is this data.

    return (
        <CardContext.Provider cardIsClicked={{ cardIsClicked, setCardIsClicked }}>         {/* return a Provider of the Context, which is just a component storing the useState GLOBALLY. */}      
            { 
                children                                                                   // any other component which is wrapped within this useState Context Provider, receives the Context with the useState. 
            }
        </CardContext.Provider>
    )
};

export const useCardContext = () => useContext(CardContext);                               // this function is vital to actually manipulate and USE the global context data.
