import "./SplashPageStyling/SplashPageStyling.scss";

const MembershipSection = () => {
    return (
        <div className="row lightBlueBG" id="membership-container">

            <h1>Membership</h1>
            <div id="plans">
                <div className="plan basic">
                    <h2>Basic</h2>
                    <p>1 Month at $3.99</p>
                    <p className="price-per-month">$3.99 / mo*</p>
                </div>
                <div className="plan balanced">
                    <h2>Balanced</h2>
                    <p>3 Months at $7.99</p>
                    <p className="price-per-month">$2.66 / mo*</p>
                </div>
                <div className="plan pro">
                    <h2>Pro</h2>
                    <p>12 Months at $19.99</p>
                    <p className="price-per-month">$1.66 / mo*</p>
                </div>
            </div>
            {/* <div class="confirm-button-container">
                <button class="confirm-button">Confirm</button>
            </div> */}
            {/* <div class="terms">
                <p>By making this purchase, you are accepting the application's terms and agreements.</p>
            </div> */}
        </div>
    );
};


export default MembershipSection;