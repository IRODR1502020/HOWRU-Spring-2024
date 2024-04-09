import React, {useState} from 'react';
import AuthServiceInstance from '../GeneralComponents/AuthService';

const FeelingsCheckIn = () => {

    const [feeling, setFeeling] = useState(1);
    const [control, setControl] = useState(1);

    const updateFeeling = (e) => {
        setFeeling(parseInt(e.target.value));
    }

    const updateControl = (e) => {
        setControl(parseInt(e.target.value));
    }
// ###################################################################################
    const uploadFeelingCheckIn = (e) => {
        e.preventDefault();
        const feelingCheckInToken = {}
        feelingCheckInToken['uid'] = sessionStorage.getItem('login_token');
        feelingCheckInToken['feeling_rating'] = feeling;
        feelingCheckInToken['control_rating'] = control;

        console.log(feelingCheckInToken)
        const feelingCheckIn = AuthServiceInstance.addFeelingCheckIn(feelingCheckInToken);
    }
// ###################################################################################
    return (
        <form onSubmit={uploadFeelingCheckIn}>
            <legend>Feeling Check In</legend>
            <div className="range-container">
                <label htmlFor="rangeInput">How are you feeling today?</label>
                <input type="range" 
                        id="rangeInput" 
                        min="1" 
                        max="5" 
                        value = {feeling}
                        onChange={updateFeeling} />
                <span id="textInput">{feeling}</span>
            </div>

            <div className="range-container">
                <label htmlFor="rangeInput">How in control are you today?</label>
                <input type="range" 
                        id="rangeInput" 
                        min="1" 
                        max="5" 
                        value = {control}
                        onChange={updateControl} />
                <span id="textInput">{control}</span>
            </div>

            <button type="submit">Document Feeling</button>
        </form>
    );
};

export default FeelingsCheckIn;