import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SuccessSection = () => {
    const [hasPaid, setHasPaid] = useState(true);
    const [searchParams] = useSearchParams();
    // useEffect(() => {
    //     const verifyPayment = async () => {
    //         const paymentId = searchParams.get('payment_id');
    //         if(paymentId) {
    //             setHasPaid(true);
    //         }
    //     }
    //     verifyPayment();
    // }, [searchParams]);

    return (
        <section className={`p-5 d-flex justify-content-center flex-column vh-100`}>
        {hasPaid && (
            <>
                <h1 className={`text-center text-light pt-5 fw-bold`}>Congratulations!</h1>
                <iframe src="https://embed.lottiefiles.com/animation/8785" title='Success'></iframe>
                <h2 className={`text-center text-light`}>You are now a part of <span className={`fw-bold text-primary`}>DevComm</span>!</h2>
                <h4 className={`text-center text-light pt-3`}>You will soon be added to the members only group. Ready to dive in?</h4>
            </>
        )}
        {!hasPaid && (
            <>
                <h1 className={`text-center text-danger pt-5 fw-bold`}>Oops! Invalid attempt!</h1>
                <iframe style={{height: '250px'}} src="https://embed.lottiefiles.com/animation/91846" title='Invalid'></iframe>
            </>
        )}
        </section>
    )
}

export default SuccessSection;
