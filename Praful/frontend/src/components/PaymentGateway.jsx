import React, { useState } from 'react'
import { useHistory } from 'react-router'
function PaymentGateway() {
    const history = useHistory();
    const [total, setTotal] = useState([])
    const [payTime, setPaytime] = useState([])
    const loadScript = (src) => {
        return new Promise((resovle) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resovle(true);
            };
            script.onerror = () => {
                resovle(false);
            };
            document.body.appendChild(script);
        });
    };
    const displayRazorpay = async (amount) => {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );
        if (!res) {
            alert("You are offline... Failed to load Razorpay SDK");
            return;
        }
        const options = {
            key: "rzp_test_jsLuprdrrE8zzC",
            currency: "INR",
            amount: amount * 100,
            name: "RazorayPay",
            description: "Thanks for purchasing",
            image:
                "https://i0.wp.com/www.ecommerce-nation.com/wp-content/uploads/2019/02/Razorpay-the-new-epayment-that-will-break-everything-in-2019.png?fit=1000%2C600&ssl=1",
            handler: function (response) {
                alert(response.razorpay_payment_id);
                alert("Payment Successfully");
            },
            prefill: {
                name: "RazorayPay"
            },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };
    const Save = (e) => {
        e.preventDefault()
        const a = { total }
        console.log(a)
        fetch("http://localhost:8084/allPayments", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(a)
        }).then(() => {
            console.log("added")
        })
    }
    const cancel = () => {
        history.push('/reservations')
    }
    const back = () => {
        history.push('/SetRates/issueBills')
    }

    return (
        <div>

            <div className="col-md-6 offset-md-3 offset-md-3">
                <form>
                    <div className="form-group">
                        <label> Total </label>
                        <input placeholder="Total"
                            name="total"
                            className="form-control"
                            value={total}
                            onChange={(e) => setTotal(e.target.value)} />
                    </div>
                    <input
                        placeholder="PayTime" name="payTime"
                        value={payTime} onChange={(e) => setPaytime(e.target.value)}
                        id="datetime-local"
                        label="Next appointment"
                        type="datetime-local"
                        defaultValue="2017-05-24T10:30"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <div style={{ marginTop: "10px" }}>
                        <button className="btn btn-success Sbutton" onClick={Save}>Save</button>
                        <button className="btn btn-danger Rbutton" onClick={cancel} style={{ marginLeft: "10px" }}>Cancel</button>
                        <button className="btn btn-secondary" onClick={back} style={{ marginLeft: "10px" }}>Back</button>
                    </div>
                </form>
                <button className="btn btn-primary Sbutton" onClick={() => displayRazorpay(total)} style={{ marginTop: "30px" }}>
                    Pay
                </button>

            </div>
        </div>
    )
}
export default PaymentGateway