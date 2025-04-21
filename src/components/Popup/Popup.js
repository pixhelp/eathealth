import { useState, useEffect } from "react";

const Popup = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isVisible) {
            console.log("Popup is visible");
        }
    }, [isVisible]);
    
    const acceptCookies = () => {
        return setIsVisible(true);
    }

  return (
    <div className="popup">
        {!isVisible && (
            <div className="popup-content">
                <h2>Acceptez les cookies s'il vous plait.</h2>
                <p>Voici une belle popup de cookies</p>
                <button onClick={acceptCookies} className="popup-button">Accepter</button>
            </div>
        )}
    </div>
  );
}

export default Popup;