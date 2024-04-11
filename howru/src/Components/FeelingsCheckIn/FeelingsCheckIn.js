import React, {useState} from 'react';
import AuthServiceInstance from '../GeneralComponents/AuthService';
import SkeletonForAllPages from '../GeneralComponents/SkeletonForAllPages';
import "./FeelingsCheckInStyling/FeelingsCheckInStyling.scss";
const FeelingsCheckIn = () => {

    const [feeling, setFeeling] = useState(1);
    const [control, setControl] = useState(1);
    const [page, setCurrentPage] = useState('feelingsPage');

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

    const [formSection, setFormSection] = useState('feeling');
    // used to navigate which section of the should be displayed.
    // [feeling, control, stressorOfTheDay, home, work, school, social]
    return (
        <SkeletonForAllPages>
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

                <fieldset className="main-container">
                    <div className="radio-buttons">
                        <legend>Stressor of the Day</legend>

                        <label className="custom-radio">
                            <input type="radio" id="home" name="stressor" value="home" checked />
                            <span className="radio-btn"><i className="las la-check"></i>
                                <div className="hobbies-icon">
                                {/* <img src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?size=626&ext=jpg" /> */}
                                    <h3>Home</h3>
                                </div>
                                
                            </span>
                        </label>


                        <label className="custom-radio">
                            <input type="radio" id="work" name="stressor" value="work" checked />
                            <span className="radio-btn"><i className="las la-check"></i>
                                <div className="hobbies-icon">
                                {/* <img src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?size=626&ext=jpg" /> */}
                                    <h3>Work</h3>
                                </div>
                                
                            </span>
                        </label>

                        <label className="custom-radio">
                            <input type="radio" id="school" name="stressor" value="school" checked />
                            <span className="radio-btn"><i className="las la-check"></i>
                                <div className="hobbies-icon">
                                {/* <img src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?size=626&ext=jpg" /> */}
                                    <h3>School</h3>
                                </div>
                    
                            </span>
                        </label>

                        <label className="custom-radio">
                            <input type="radio" id="socialsetting" name="stressor" value="socialsetting" checked />
                            <span className="radio-btn"><i className="las la-check"></i>
                                <div className="hobbies-icon">
                                {/* <img src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?size=626&ext=jpg" /> */}
                                    <h3>Social Setting</h3>
                                </div>
                                
                            </span>
                        </label>
                    </div>
                </fieldset>

                <fieldset className="main-container">
                    <div className="radio-buttons">
                        <legend>What are the home stressors?</legend>

                        <label className="custom-radio">
                            <input type="radio" id="partner" name="homeStressors" value="partner" checked />
                            <span className="radio-btn"><i className="las la-checked"></i>
                                <div className="hobbies-icon">
                                    {/* <img src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?size=626&ext=jpg" /> */}
                                    <h3>Partner</h3>
                                </div>
                            </span>
                        </label>

                        <label className="custom-radio">
                            <input type="radio" id="family" name="homeStressors" value="family" checked />
                            <span className="radio-btn"><i className="las la-checked"></i>
                                <div className="hobbies-icon">
                                    {/* <img src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?size=626&ext=jpg" /> */}
                                    <h3>Family</h3>
                                </div>
                            </span>
                        </label>

                        <label className="custom-radio">
                            <input type="radio" id="Financial" name="homeStressors" value="Financial" checked />
                            <span className="radio-btn"><i className="las la-checked"></i>
                                <div className="hobbies-icon">
                                    {/* <img src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?size=626&ext=jpg" /> */}
                                    <h3>Financial</h3>
                                </div>
                            </span>
                        </label>

                        <label className="custom-radio">
                            <input type="radio" id="domesticduties" name="homeStressors" value="domesticduties" checked />
                            <span className="radio-btn"><i className="las la-checked"></i>
                                <div className="hobbies-icon">
                                    {/* <img src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?size=626&ext=jpg" /> */}
                                    <h3>Domestic Duties</h3>
                                </div>
                            </span>
                        </label>

                        <label className="custom-radio">
                            <input type="radio" id="sickness" name="homeStressors" value="sickness" checked />
                            <span className="radio-btn"><i className="las la-checked"></i>
                                <div className="hobbies-icon">
                                    {/* <img src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?size=626&ext=jpg" /> */}
                                    <h3>Sickness</h3>
                                </div>
                            </span>
                        </label>
                    </div>
                </fieldset>


                <fieldset className="main-container">
                    <div className="radio-buttons">
                        <legend>What are your work stressors?</legend>

                        <label className="custom-radio">
                            <input type="radio" id="colleagues" name="workStressors" value="colleagues" checked />
                            <span className="radio-btn"><i className="las la-checked"></i>
                                <div className="hobbies-icon">
                                    {/* <img src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?size=626&ext=jpg" /> */}
                                    <h3>Colleagues</h3>
                                </div>
                            </span>
                        </label>

                        <label className="custom-radio">
                            <input type="radio" id="boss" name="workStressors" value="boss" checked />
                            <span className="radio-btn"><i className="las la-checked"></i>
                                <div className="hobbies-icon">
                                    {/* <img src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?size=626&ext=jpg" /> */}
                                    <h3>Boss</h3>
                                </div>
                            </span>
                        </label>

                        <label className="custom-radio">
                            <input type="radio" id="employees" name="workStressors" value="employees" checked />
                            <span className="radio-btn"><i className="las la-checked"></i>
                                <div className="hobbies-icon">
                                    {/* <img src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?size=626&ext=jpg" /> */}
                                    <h3>Employees</h3>
                                </div>
                            </span>
                        </label>

                        <label className="custom-radio">
                            <input type="radio" id="workload" name="workStressors" value="workload" checked />
                            <span className="radio-btn"><i className="las la-checked"></i>
                                <div className="hobbies-icon">
                                    {/* <img src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?size=626&ext=jpg" /> */}
                                    <h3>Workload</h3>
                                </div>
                            </span>
                        </label>

                        <label className="custom-radio">
                            <input type="radio" id="timemanagement" name="workStressors" value="timemanagement" checked />
                            <span className="radio-btn"><i className="las la-checked"></i>
                                <div className="hobbies-icon">
                                    {/* <img src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?size=626&ext=jpg" /> */}
                                    <h3>Time Management</h3>
                                </div>
                            </span>
                        </label>

                        <label className="custom-radio">
                            <input type="radio" id="workculture" name="workStressors" value="workculture" checked />
                            <span className="radio-btn"><i className="las la-checked"></i>
                                <div className="hobbies-icon">
                                    {/* <img src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?size=626&ext=jpg" /> */}
                                    <h3>Work Culture</h3>
                                </div>
                            </span>
                        </label>
                    </div>
                </fieldset>

                <fieldset className="main-container">
                    <div className="radio-buttons">
                        <legend>What are your school stressors?</legend>

                        <label className="custom-radio">
                            <input type="radio" id="homework" name="schoolStressors" value="homework" checked />
                            <span className="radio-btn"><i className="las la-checked"></i>
                                <div className="hobbies-icon">
                                    {/* <img src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?size=626&ext=jpg" /> */}
                                    <h3>Homework</h3>
                                </div>
                            </span>
                        </label>

                        <label className="custom-radio">
                            <input type="radio" id="exams" name="schoolStressors" value="exams" checked />
                            <span className="radio-btn"><i className="las la-checked"></i>
                                <div className="hobbies-icon">
                                    {/* <img src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?size=626&ext=jpg" /> */}
                                    <h3>Exams</h3>
                                </div>
                            </span>
                        </label>

                        <label className="custom-radio">
                            <input type="radio" id="organization" name="schoolStressors" value="organization" checked />
                            <span className="radio-btn"><i className="las la-checked"></i>
                                <div className="hobbies-icon">
                                    {/* <img src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?size=626&ext=jpg" /> */}
                                    <h3>Organization</h3>
                                </div>
                            </span>
                        </label>

                        <label className="custom-radio">
                            <input type="radio" id="bullying" name="schoolStressors" value="bullying" checked />
                            <span className="radio-btn"><i className="las la-checked"></i>
                                <div className="hobbies-icon">
                                    {/* <img src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?size=626&ext=jpg" /> */}
                                    <h3>Bullying</h3>
                                </div>
                            </span>
                        </label>

                        <label className="custom-radio">
                            <input type="radio" id="performance" name="schoolStressors" value="performance" checked />
                            <span className="radio-btn"><i className="las la-checked"></i>
                                <div className="hobbies-icon">
                                    {/* <img src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?size=626&ext=jpg" /> */}
                                    <h3>Performance</h3>
                                </div>
                            </span>
                        </label>

                        <label className="custom-radio">
                            <input type="radio" id="financial" name="schoolStressors" value="financial" checked />
                            <span className="radio-btn"><i className="las la-checked"></i>
                                <div className="hobbies-icon">
                                    {/* <img src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?size=626&ext=jpg" /> */}
                                    <h3>Financial</h3>
                                </div>
                            </span>
                        </label>
                    </div>
                </fieldset>

                <fieldset className="main-container">
                    <div className="radio-buttons">
                        <legend>What are your social stressors?</legend>

                        <label className="custom-radio">
                            <input type="radio" id="socialmedia" name="socialStressors" value="socialmedia" checked />
                            <span className="radio-btn"><i className="las la-checked"></i>
                                <div className="hobbies-icon">
                                    {/* <img src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?size=626&ext=jpg" /> */}
                                    <h3>Social Media</h3>
                                </div>
                            </span>
                        </label>

                        <label className="custom-radio">
                            <input type="radio" id="traffic" name="socialStressors" value="traffic" checked />
                            <span className="radio-btn"><i className="las la-checked"></i>
                                <div className="hobbies-icon">
                                    {/* <img src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?size=626&ext=jpg" /> */}
                                    <h3>Traffic</h3>
                                </div>
                            </span>
                        </label>

                        <label className="custom-radio">
                            <input type="radio" id="isolation" name="socialStressors" value="isolation" checked />
                            <span className="radio-btn"><i className="las la-checked"></i>
                                <div className="hobbies-icon">
                                    {/* <img src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?size=626&ext=jpg" /> */}
                                    <h3>Isolation</h3>
                                </div>
                            </span>
                        </label>

                        <label className="custom-radio">
                            <input type="radio" id="friendsdispute" name="socialStressors" value="friendsdispute" checked />
                            <span className="radio-btn"><i className="las la-checked"></i>
                                <div className="hobbies-icon">
                                    {/* <img src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?size=626&ext=jpg" /> */}
                                    <h3>Friends Dispute</h3>
                                </div>
                            </span>
                        </label>

                        <label className="custom-radio">
                            <input type="radio" id="sportsperformance" name="socialStressors" value="sportsperformance" checked />
                            <span className="radio-btn"><i className="las la-checked"></i>
                                <div className="hobbies-icon">
                                    {/* <img src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?size=626&ext=jpg" /> */}
                                    <h3>Sports Performance</h3>
                                </div>
                            </span>
                        </label>
                    </div>
                </fieldset>
                <button type="submit">Document Feeling</button>
            </form>
        </SkeletonForAllPages>
    );
};

export default FeelingsCheckIn;