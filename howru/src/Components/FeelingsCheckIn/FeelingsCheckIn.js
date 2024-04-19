import React, {useState} from 'react';
import AuthServiceInstance from '../GeneralComponents/AuthService';
import SkeletonForAllPages from '../GeneralComponents/SkeletonForAllPages';
import "./FeelingsCheckInStyling/FeelingsCheckInStyling.scss";
const FeelingsCheckIn = () => {

    const [feeling, setFeeling] = useState(1);
    const [control, setControl] = useState(1);
    const [stressorOTD, setStressorOTD] = useState("");
    const [homeStressor, setHomeStressor] = useState("");
    const [workStressor, setWorkStressor] = useState("");
    const [schoolStressor, setSchoolStressor] = useState("");
    const [socialStressor, setSocialStressor] = useState("");
    const [page, setCurrentPage] = useState('feelingTodayPage');


    const styles = {
        feelingTodayPage: {
            display: page === "feelingTodayPage" ? "block" : "none"
        },
        controlTodayPage: {
            display: page === "controlTodayPage" ? "block" : "none"
        },
        stressorOfTheDayPage: {
            display: page === "stressorOfTheDayPage" ? "block" : "none"
        },
        homeStressorsPage: {
            display: page === "homeStressorsPage" ? "block" : "none"
        },
        workStressorsPage: {
            display: page === "workStressorsPage" ? "block" : "none"
        },
        schoolStressorsPage: {
            display: page === "schoolStressorsPage" ? "block" : "none"
          },
        socialStressorsPage: {
            display: page === "socialStressorsPage" ? "block" : "none"
        },

        thankYouPage : {
            display: page === "thankYouPage" ? "block" : "none"
        }
      };
      

    const updateFeeling = (e) => {
        console.log(e.target.value)
        setFeeling(parseInt(e.target.value));
        console.log(page)
    }

    const updateControl = (e) => {
        setControl(parseInt(e.target.value));
        console.log(page)
    }
// ###################################################################################
    const uploadFeelingCheckIn = (e) => {
        e.preventDefault();
        const feelingCheckInToken = {}
        feelingCheckInToken['uid'] = sessionStorage.getItem('login_token');
        feelingCheckInToken['feeling_rating'] = feeling;
        feelingCheckInToken['control_rating'] = control;

        console.log(feelingCheckInToken)
        AuthServiceInstance.addFeelingCheckIn(feelingCheckInToken);
    }
// ###################################################################################

    // used to navigate which section of the should be displayed.
    // [feeling, control, stressorOfTheDay, home, work, school, social]
    return (
        <SkeletonForAllPages>
            <form onSubmit={uploadFeelingCheckIn}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 questions d-flex align-items-center justify-content-center flex-column">
                                <legend className="text-center fs-1">Feeling Check In</legend>
                                <div className="range-container" style={ styles.feelingTodayPage }>
                                    <label htmlFor="rangeInput">How are you feeling today?</label>
                                    <input type="range" 
                                            id="rangeInput" 
                                            min="1" 
                                            max="5" 
                                            value = {feeling}
                                            onChange={updateFeeling} 
                                            onMouseUp={() => setCurrentPage("controlTodayPage")}/>
                                    <span id="textInput">{feeling}</span>
                                </div>
                                
                                <div className="range-container" style={ styles.controlTodayPage }>
                                    <label htmlFor="rangeInput">How in control are you today?</label>
                                    <input type="range" 
                                            id="rangeInput" 
                                            min="1" 
                                            max="5" 
                                            value = {control}
                                            onChange={updateControl} 
                                            onMouseUp={() => setCurrentPage("stressorOfTheDayPage")}/>
                                    <span id="textInput">{control}</span>
                                </div>
                                
                                <fieldset className="main-container" style={ styles.stressorOfTheDayPage }>
                                    <div className="radio-buttons">
                                        <legend>Stressor of the Day</legend>

                                        <label className="custom-radio">
                                            <input type="radio" id="home" name="stressor" value="home" 
                                            onClick={() => {
                                                setCurrentPage("homeStressorsPage"); 
                                                setStressorOTD("home");
                                            }}/>
                                            <span className="radio-btn"><i className="las la-check"></i>
                                                <div className="hobbies-icon">
                                                {/* <img src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?size=626&ext=jpg" /> */}
                                                    <h3>Home</h3>
                                                </div>
                                                
                                            </span>
                                        </label>

                                        <label className="custom-radio">
                                            <input type="radio" id="work" name="stressor" value="work" 
                                                onClick={() => {
                                                    setCurrentPage("workStressorsPage"); 
                                                    setStressorOTD("work");
                                                }}/>
                                            <span className="radio-btn"><i className="las la-check"></i>
                                                <div className="hobbies-icon">
                                                {/* <img src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?size=626&ext=jpg" /> */}
                                                    <h3>Work</h3>
                                                </div>
                                                
                                            </span>
                                        </label>

                                        <label className="custom-radio">
                                            <input type="radio" id="school" name="stressor" value="school"                                                 
                                            onClick={() => {
                                                setCurrentPage("schoolStressorsPage"); 
                                                setStressorOTD("school");
                                            }}/>
                                            <span className="radio-btn"><i className="las la-check"></i>
                                                <div className="hobbies-icon">
                                                {/* <img src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?size=626&ext=jpg" /> */}
                                                    <h3>School</h3>
                                                </div>
                                    
                                            </span>
                                        </label>

                                        <label className="custom-radio">
                                            <input type="radio" id="socialsetting" name="stressor" value="socialsetting"                                                 
                                            onClick={() => {
                                                setCurrentPage("socialStressorsPage"); 
                                                setStressorOTD("socialsetting");
                                            }}/>
                                            <span className="radio-btn"><i className="las la-check"></i>
                                                <div className="hobbies-icon">
                                                {/* <img src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?size=626&ext=jpg" /> */}
                                                    <h3>Social Setting</h3>
                                                </div>
                                                
                                            </span>
                                        </label>
                                    </div>
                                </fieldset>
                                
                                <fieldset className="main-container" style={ styles.homeStressorsPage }>
                                    <div className="radio-buttons">
                                        <legend>What are the home stressors?</legend>

                                        <label className="custom-radio">
                                            <input type="radio" id="partner" name="homeStressors" value="partner" 
                                            onClick={() => {
                                                setCurrentPage("thankYouPage"); 
                                                setHomeStressor("partner");
                                            }}/>
                                            <span className="radio-btn"><i className="las la-checked"></i>
                                                <div className="hobbies-icon">
                                                    {/* <img src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?size=626&ext=jpg" /> */}
                                                    <h3>Partner</h3>
                                                </div>
                                            </span>
                                        </label>

                                        <label className="custom-radio">
                                            <input type="radio" id="family" name="homeStressors" value="family"                                             
                                            onClick={() => {
                                                setCurrentPage("thankYouPage"); 
                                                setHomeStressor("family");
                                            }}/>
                                            <span className="radio-btn"><i className="las la-checked"></i>
                                                <div className="hobbies-icon">
                                                    {/* <img src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?size=626&ext=jpg" /> */}
                                                    <h3>Family</h3>
                                                </div>
                                            </span>
                                        </label>

                                        <label className="custom-radio">
                                            <input type="radio" id="Financial" name="homeStressors" value="Financial"                                             
                                            onClick={() => {
                                                setCurrentPage("thankYouPage"); 
                                                setHomeStressor("financial");
                                            }}/>
                                            <span className="radio-btn"><i className="las la-checked"></i>
                                                <div className="hobbies-icon">
                                                    {/* <img src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?size=626&ext=jpg" /> */}
                                                    <h3>Financial</h3>
                                                </div>
                                            </span>
                                        </label>

                                        <label className="custom-radio">
                                            <input type="radio" id="domesticduties" name="homeStressors" value="domesticduties"                                             
                                            onClick={() => {
                                                setCurrentPage("thankYouPage"); 
                                                setHomeStressor("domesticduties");
                                            }}/>
                                            <span className="radio-btn"><i className="las la-checked"></i>
                                                <div className="hobbies-icon">
                                                    {/* <img src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?size=626&ext=jpg" /> */}
                                                    <h3>Domestic Duties</h3>
                                                </div>
                                            </span>
                                        </label>

                                        <label className="custom-radio">
                                            <input type="radio" id="sickness" name="homeStressors" value="sickness"                                             
                                            onClick={() => {
                                                setCurrentPage("thankYouPage"); 
                                                setWorkStressor("sickness");
                                            }}/>
                                            <span className="radio-btn"><i className="las la-checked"></i>
                                                <div className="hobbies-icon">
                                                    {/* <img src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?size=626&ext=jpg" /> */}
                                                    <h3>Sickness</h3>
                                                </div>
                                            </span>
                                        </label>
                                    </div>
                                </fieldset>

                                <fieldset className="main-container" style={ styles.workStressorsPage } >
                                    <div className="radio-buttons">
                                        <legend>What are your work stressors?</legend>

                                        <label className="custom-radio">
                                            <input type="radio" id="colleagues" name="workStressors" value="colleagues" 
                                            onClick={() => {
                                                setCurrentPage("thankYouPage"); 
                                                setWorkStressor("colleagues");
                                            }}/>
                                            <span className="radio-btn"><i className="las la-checked"></i>
                                                <div className="hobbies-icon">
                                                    {/* <img src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?size=626&ext=jpg" /> */}
                                                    <h3>Colleagues</h3>
                                                </div>
                                            </span>
                                        </label>

                                        <label className="custom-radio">
                                            <input type="radio" id="boss" name="workStressors" value="boss"                                             
                                            onClick={() => {
                                                setCurrentPage("thankYouPage"); 
                                                setWorkStressor("boss");
                                            }}/>
                                            <span className="radio-btn"><i className="las la-checked"></i>
                                                <div className="hobbies-icon">
                                                    {/* <img src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?size=626&ext=jpg" /> */}
                                                    <h3>Boss</h3>
                                                </div>
                                            </span>
                                        </label>

                                        <label className="custom-radio">
                                            <input type="radio" id="employees" name="workStressors" value="employees" 
                                            onClick={() => {
                                                setCurrentPage("thankYouPage"); 
                                                setWorkStressor("employees");
                                            }}/>
                                            <span className="radio-btn"><i className="las la-checked"></i>
                                                <div className="hobbies-icon">
                                                    {/* <img src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?size=626&ext=jpg" /> */}
                                                    <h3>Employees</h3>
                                                </div>
                                            </span>
                                        </label>

                                        <label className="custom-radio">
                                            <input type="radio" id="workload" name="workStressors" value="workload"                                             
                                            onClick={() => {
                                                setCurrentPage("thankYouPage"); 
                                                setWorkStressor("workload");
                                            }}/>
                                            <span className="radio-btn"><i className="las la-checked"></i>
                                                <div className="hobbies-icon">
                                                    {/* <img src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?size=626&ext=jpg" /> */}
                                                    <h3>Workload</h3>
                                                </div>
                                            </span>
                                        </label>

                                        <label className="custom-radio">
                                            <input type="radio" id="timemanagement" name="workStressors" value="timemanagement"                                            
                                            onClick={() => {
                                                setCurrentPage("thankYouPage"); 
                                                setWorkStressor("timemanagement");
                                            }}/>
                                            <span className="radio-btn"><i className="las la-checked"></i>
                                                <div className="hobbies-icon">
                                                    {/* <img src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?size=626&ext=jpg" /> */}
                                                    <h3>Time Management</h3>
                                                </div>
                                            </span>
                                        </label>

                                        <label className="custom-radio">
                                            <input type="radio" id="workculture" name="workStressors" value="workculture"                                             
                                            onClick={() => {
                                                setCurrentPage("thankYouPage"); 
                                                setWorkStressor("workculture");
                                            }}/>
                                            <span className="radio-btn"><i className="las la-checked"></i>
                                                <div className="hobbies-icon">
                                                    {/* <img src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?size=626&ext=jpg" /> */}
                                                    <h3>Work Culture</h3>
                                                </div>
                                            </span>
                                        </label>
                                    </div>
                                </fieldset>
                                
                                <fieldset className="main-container" style={ styles.schoolStressorsPage }>
                                    <div className="radio-buttons">
                                        <legend>What are your school stressors?</legend>

                                        <label className="custom-radio">
                                            <input type="radio" id="homework" name="schoolStressors" value="homework" 
                                            onClick={() => {
                                                setCurrentPage("thankYouPage"); 
                                                setSchoolStressor("homework");
                                            }}/>
                                            <span className="radio-btn"><i className="las la-checked"></i>
                                                <div className="hobbies-icon">
                                                    {/* <img src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?size=626&ext=jpg" /> */}
                                                    <h3>Homework</h3>
                                                </div>
                                            </span>
                                        </label>

                                        <label className="custom-radio">
                                            <input type="radio" id="exams" name="schoolStressors" value="exams"                                             
                                            onClick={() => {
                                                setCurrentPage("thankYouPage"); 
                                                setSchoolStressor("exams");
                                            }}/>
                                            <span className="radio-btn"><i className="las la-checked"></i>
                                                <div className="hobbies-icon">
                                                    {/* <img src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?size=626&ext=jpg" /> */}
                                                    <h3>Exams</h3>
                                                </div>
                                            </span>
                                        </label>

                                        <label className="custom-radio">
                                            <input type="radio" id="organization" name="schoolStressors" value="organization"                                             
                                            onClick={() => {
                                                setCurrentPage("thankYouPage"); 
                                                setSchoolStressor("organization");
                                            }}/>
                                            <span className="radio-btn"><i className="las la-checked"></i>
                                                <div className="hobbies-icon">
                                                    {/* <img src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?size=626&ext=jpg" /> */}
                                                    <h3>Organization</h3>
                                                </div>
                                            </span>
                                        </label>

                                        <label className="custom-radio">
                                            <input type="radio" id="bullying" name="schoolStressors" value="bullying"                                             
                                            onClick={() => {
                                                setCurrentPage("thankYouPage"); 
                                                setSchoolStressor("bullying");
                                            }}/>
                                            <span className="radio-btn"><i className="las la-checked"></i>
                                                <div className="hobbies-icon">
                                                    {/* <img src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?size=626&ext=jpg" /> */}
                                                    <h3>Bullying</h3>
                                                </div>
                                            </span>
                                        </label>

                                        <label className="custom-radio">
                                            <input type="radio" id="performance" name="schoolStressors" value="performance"                                             
                                            onClick={() => {
                                                setCurrentPage("thankYouPage"); 
                                                setSchoolStressor("performance");
                                            }}/>
                                            <span className="radio-btn"><i className="las la-checked"></i>
                                                <div className="hobbies-icon">
                                                    {/* <img src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?size=626&ext=jpg" /> */}
                                                    <h3>Performance</h3>
                                                </div>
                                            </span>
                                        </label>

                                        <label className="custom-radio">
                                            <input type="radio" id="financial" name="schoolStressors" value="financial"                                             
                                            onClick={() => {
                                                setCurrentPage("thankYouPage"); 
                                                setSchoolStressor("financial");
                                            }}/>
                                            <span className="radio-btn"><i className="las la-checked"></i>
                                                <div className="hobbies-icon">
                                                    {/* <img src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?size=626&ext=jpg" /> */}
                                                    <h3>Financial</h3>
                                                </div>
                                            </span>
                                        </label>
                                    </div>
                                </fieldset>

                                <fieldset className="main-container" style={ styles.socialStressorsPage } >
                                    <div className="radio-buttons">
                                        <legend>What are your social stressors?</legend>

                                        <label className="custom-radio">
                                            <input type="radio" id="socialmedia" name="socialStressors" value="socialmedia" 
                                            onClick={() => {
                                                setCurrentPage("thankYouPage");
                                                setSocialStressor("socialmedia");
                                            }}/>
                                            <span className="radio-btn"><i className="las la-checked"></i>
                                                <div className="hobbies-icon">
                                                    {/* <img src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?size=626&ext=jpg" /> */}
                                                    <h3>Social Media</h3>
                                                </div>
                                            </span>
                                        </label>

                                        <label className="custom-radio">
                                            <input type="radio" id="traffic" name="socialStressors" value="traffic"                                             
                                            onClick={() => {
                                                setCurrentPage("thankYouPage");
                                                setSocialStressor("traffic");
                                            }}/>
                                            <span className="radio-btn"><i className="las la-checked"></i>
                                                <div className="hobbies-icon">
                                                    {/* <img src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?size=626&ext=jpg" /> */}
                                                    <h3>Traffic</h3>
                                                </div>
                                            </span>
                                        </label>

                                        <label className="custom-radio">
                                            <input type="radio" id="isolation" name="socialStressors" value="isolation"                                             
                                            onClick={() => {
                                                setCurrentPage("thankYouPage");
                                                setSocialStressor("traffic");
                                            }}/>
                                            <span className="radio-btn"><i className="las la-checked"></i>
                                                <div className="hobbies-icon">
                                                    {/* <img src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?size=626&ext=jpg" /> */}
                                                    <h3>Isolation</h3>
                                                </div>
                                            </span>
                                        </label>

                                        <label className="custom-radio">
                                            <input type="radio" id="friendsdispute" name="socialStressors" value="friendsdispute"                                             
                                            onClick={() => {
                                                setCurrentPage("thankYouPage");
                                                setSocialStressor("friendsdispute");
                                            }}/>
                                            <span className="radio-btn"><i className="las la-checked"></i>
                                                <div className="hobbies-icon">
                                                    {/* <img src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?size=626&ext=jpg" /> */}
                                                    <h3>Friends Dispute</h3>
                                                </div>
                                            </span>
                                        </label>

                                        <label className="custom-radio">
                                            <input type="radio" id="sportsperformance" name="socialStressors" value="sportsperformance"                                             
                                            onClick={() => {
                                                setCurrentPage("thankYouPage");
                                                setSocialStressor("sportsperformance");
                                            }}/>
                                            <span className="radio-btn"><i className="las la-checked"></i>
                                                <div className="hobbies-icon">
                                                    {/* <img src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?size=626&ext=jpg" /> */}
                                                    <h3>Sports Performance</h3>
                                                </div>
                                            </span>
                                        </label>
                                    </div>
                                </fieldset>

                                <h1 style={ styles.thankYouPage }>Thank you!</h1>
                        </div>
                        <div className="col-md-6 results d-flex align-items-center justify-content-center flex-column" style={ styles.thankYouPage }>
                            <div className="font-monospace">Feeling 1-5: {feeling}</div>
                            <div className="font-monospace">Control 1-5: {control}</div>
                            <div className="font-monospace">Stressor of the day: {stressorOTD}</div>
                            <div className="font-monospace">Home stressor: {homeStressor}</div>
                            <div className="font-monospace">Work stressor: {workStressor}</div>
                            <div className="font-monospace">School stressor: {schoolStressor}</div>
                            <div className="font-monospace">Social stressor: {socialStressor}</div>
                            <button type="reset" onClick={() => {window.location.reload()}}>Restart</button>
                            <button type="submit">Document Feeling</button>
                        </div>
                    </div>
                </div>
            </form>
        </SkeletonForAllPages>
    );
};

export default FeelingsCheckIn;