import { IonSpinner } from "@ionic/react"
import React from "react"
import"./LoadingSpinner.css"

const loadingSpinner: React.FC = () => {
    return (
        <div className="loading-overlay">
            <IonSpinner name="circular" color="primary" className="loading-spinner"/>
        </div>
    );
}

export default loadingSpinner