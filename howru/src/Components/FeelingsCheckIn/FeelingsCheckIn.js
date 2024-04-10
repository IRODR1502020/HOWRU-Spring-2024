import React, {useState} from 'react';
import AuthServiceInstance from '../GeneralComponents/AuthService';
import SkeletonForAllPages from '../GeneralComponents/SkeletonForAllPages';

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

                <fieldset>
                    <legend>Stressor of the Day</legend>

                    <div>
                        <input type="radio" id="home" name="stressor" value="home" checked />
                        <label for="home">Home</label>
                    </div>

                    <div>
                        <input type="radio" id="work" name="stressor" value="work" />
                        <label for="work">Work</label>
                    </div>

                    <div>
                        <input type="radio" id="school" name="stressor" value="school" />
                        <label for="school">School</label>
                    </div>

                    <div>
                        <input type="radio" id="socialSetting" name="stressor" value="socialSetting" />
                        <label for="socialSetting">Social Setting</label>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>What are the home stressors?</legend>

                    <div>
                        <input type="radio" id="partner" name="homeStressors" value="partner" checked />
                        <label for="partner">Partner</label>
                    </div>

                    <div>
                        <input type="radio" id="family" name="homeStressors" value="family" />
                        <label for="family">Family</label>
                    </div>

                    <div>
                        <input type="radio" id="financial" name="homeStressors" value="financial" />
                        <label for="financial">Financial</label>
                    </div>

                    <div>
                        <input type="radio" id="domesticDuties" name="homeStressors" value="domesticDuties" />
                        <label for="domesticDuties">Domestic Duties</label>
                    </div>

                    <div>
                        <input type="radio" id="sickness" name="homeStressors" value="sickness" />
                        <label for="sickness">Sickness</label>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>What are your work stressors?</legend>

                    <div>
                        <input type="radio" id="colleagues" name="workStressors" value="colleagues" checked />
                        <label for="colleagues">Colleagues</label>
                    </div>

                    <div>
                        <input type="radio" id="boss" name="workStressors" value="boss" />
                        <label for="boss">Boss</label>
                    </div>

                    <div>
                        <input type="radio" id="employees" name="workStressors" value="employees" />
                        <label for="employees">Employees</label>
                    </div>

                    <div>
                        <input type="radio" id="workload" name="workStressors" value="workload" />
                        <label for="workload">Workload</label>
                    </div>

                    <div>
                        <input type="radio" id="timeManagement" name="workStressors" value="timeManagement" />
                        <label for="timeManagement">Time Management</label>
                    </div>

                    <div>
                        <input type="radio" id="workCulture" name="workStressors" value="workCulture" />
                        <label for="workCulture">Work Culture</label>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>What are your school stressors?</legend>

                    <div>
                        <input type="radio" id="homework" name="scsocialStressors" value="homework" checked />
                        <label for="homework">Homework</label>
                    </div>

                    <div>
                        <input type="radio" id="exams" name="schoolStressors" value="exams" />
                        <label for="exams">Exams</label>
                    </div>

                    <div>
                        <input type="radio" id="organization" name="schoolStressors" value="organization" />
                        <label for="organization">Organization</label>
                    </div>

                    <div>
                        <input type="radio" id="bullying" name="schoolStressors" value="bullying" />
                        <label for="bullying">Bullying</label>
                    </div>

                    <div>
                        <input type="radio" id="performance" name="schoolStressors" value="performance" />
                        <label for="performance">Performance</label>
                    </div>

                    <div>
                        <input type="radio" id="financial" name="schoolStressors" value="financial" />
                        <label for="financial">Financial</label>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>What are your social stressors?</legend>

                    <div>
                        <input type="radio" id="socialMedia" name="socialStressors" value="socialMedia" checked />
                        <label for="socialMedia">Social Media</label>
                    </div>

                    <div>
                        <input type="radio" id="traffic" name="socialStressors" value="traffic" />
                        <label for="traffic">Traffic</label>
                    </div>

                    <div>
                        <input type="radio" id="isolation" name="socialStressors" value="isolation" />
                        <label for="isolation">Isolation</label>
                    </div>

                    <div>
                        <input type="radio" id="pandemic" name="socialStressors" value="pandemic" />
                        <label for="pandemic">Pandemic</label>
                    </div>

                    <div>
                        <input type="radio" id="friendsDispute" name="socialStressors" value="friendsDispute" />
                        <label for="friendsDispute">Friends dispute</label>
                    </div>

                    <div>
                        <input type="radio" id="sportPerformance" name="socialStressors" value="sportPerformance" />
                        <label for="sportPerformance">Sports Performance</label>
                    </div>
                </fieldset>
                <button type="submit">Document Feeling</button>
            </form>
        </SkeletonForAllPages>
    );
};

export default FeelingsCheckIn;