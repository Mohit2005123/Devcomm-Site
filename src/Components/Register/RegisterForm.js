import { initializeApp } from "firebase/app";
import { useState, useEffect } from "react";
import { Form, Row, Col, Container, Button } from "react-bootstrap";
import styles from "./RegisterSection.module.css";
import { supabase } from "../../supabaseClient";
import { Divider } from "@mui/material";
import { doc, getFirestore, setDoc, collection } from "firebase/firestore";
import { getDownloadURL, uploadBytes, getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCRvqMs1dBO4gOZTA6OVyXmGTCSp4_tofo",
  authDomain: "devcomm-a620e.firebaseapp.com",
  projectId: "devcomm-a620e",
  storageBucket: "devcomm-a620e.appspot.com",
  messagingSenderId: "439912454006",
  appId: "1:439912454006:web:547a7db4506e3c04e38c57",
  measurementId: "G-RPW7F1VXSH"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

const RegisterForm = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [hasPaid, setHasPaid] = useState(false);
  const [fullName, setFullName] = useState("");
  const [personalEmail, setPersonalEmail] = useState("");
  const [collegeEmail, setCollegeEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [fileurl, setfileurl] = useState(null);
  // useEffect(() => {
  //   if (isRegistered && !hasPaid) {
  //     const script = document.createElement("script");
  //     script.src = "https://checkout.razorpay.com/v1/payment-button.js";
  //     script.async = true;
  //     script.setAttribute("data-payment_button_id", "pl_KWoLZZqc6bNdwJ");
  //     const form = document.getElementById("register-form-btn");
  //     form.appendChild(script);
  //   }
  //   return () => {
  //     if (isRegistered && !hasPaid) {
  //       const script = document.getElementById("razorpay-payment-button");
  //       script.remove();
  //     }
  //   };
  // }, [isRegistered, hasPaid]);

  // const handleUpload = async (e) =>{
  //   let file;
  //   if(e.target.files){
  //     file = e.target.files[0];
  //   }
  //   const {data, error} = await supabase.storage
  //   .from("images")
  //   .upload("public/" + file?.name, file);

  //   if(data){
  //     console.log(data);
  //   }
  //   else if(error){
  //     console.log(error);
  //   }
  // }

  const handleUpload = async (e) => {
    let file;
    if (e.target.files) {
      file = e.target.files[0];
    }
  
    if (file) {
      const storageRef = ref(storage, `public/${file.name}`);
      try {
        const snapshot = await uploadBytes(storageRef, file);
        console.log("Uploaded a file!", snapshot);
  
        // Optionally, get the download URL for the uploaded file
        const downloadURL = await getDownloadURL(snapshot.ref);
        setfileurl(downloadURL);
        console.log("File available at", downloadURL);
      } catch (error) {
        console.error("Upload failed:", error);
      }
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (
      fullName &&
      personalEmail &&
      collegeEmail &&
      phoneNumber &&
      rollNumber 
      && (fileurl != null)
    ) {
      // supabase
      //   // .from("users")
      //   .from("Users")
      //   .insert([
      //     {
      //       full_name: fullName,
      //       personal_email: personalEmail,
      //       college_email: collegeEmail,
      //       phone_number: phoneNumber,
      //       roll_number: rollNumber,
      //     },
      //   ])
      //   .then(({ data, error }) => {
      //     if (!error) {
      //       setIsRegistered(true);
      //       setHasPaid(false);
      //     }
      //     if (error) {
      //       alert(error.message);
      //     }
      //   })
      //   .finally(() => {
      //     setIsLoading(false);
      //   });
      const subCollectionRef = collection(db, 'regs', rollNumber, 'details');

// Set the document within the subcollection
        await setDoc(doc(subCollectionRef, 'info'), {
          full_name: fullName,
          personal_email: personalEmail,
          college_email: collegeEmail,
          phone_number: phoneNumber,
          roll_number: rollNumber,
          photo: fileurl,
        });
      
            setIsLoading(false);
            setIsRegistered(true);
            setHasPaid(true);
        alert('registered');
    } else {
      alert("Please fill all the fields");
    }
  }
  catch(e) {
    console.log(e);
    alert(e);
  }
  };

  return (
    <Container fluid>
      {!isRegistered && (
        <Row className={`justify-content-center`}>
          <Col md={6}>
            <Form className={`${styles["register-form-bg"]} p-4 rounded-2`}>
              {/* <Form.Group className={`mb-3`}>
                <Form.Label className={`fw-bold`}>Full Name</Form.Label>
                <Form.Control
                  onChange={(e) => setFullName(e.target.value)}
                  value={fullName}
                  className={`${styles["register-form-bg"]}`}
                  type="text"
                  placeholder="Enter Full Name"
                  required
                />
              </Form.Group> */}
              {/* <Form.Group className={`mb-3`}>
                <Form.Label className={`fw-bold`}>Roll Number</Form.Label>
                <Form.Control
                  onChange={(e) => setRollNumber(e.target.value)}
                  value={rollNumber}
                  className={`${styles["register-form-bg"]}`}
                  type="text"
                  placeholder="Enter Roll Number"
                  required
                />
              </Form.Group> */}
              {/* <Form.Group className={`mb-3`}>
                <Form.Label className={`fw-bold`}>Phone Number</Form.Label>
                <Form.Control
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  value={phoneNumber}
                  className={`${styles["register-form-bg"]}`}
                  type="text"
                  placeholder="Enter Phone Number"
                  required
                />
              </Form.Group> */}
              {/* <Form.Group className={`mb-3`}>
                <Form.Label className={`fw-bold`}>Personal Email</Form.Label>
                <Form.Control
                  onChange={(e) => setPersonalEmail(e.target.value)}
                  value={personalEmail}
                  className={`${styles["register-form-bg"]}`}
                  type="email"
                  placeholder="Enter Personal Email"
                  required
                />
              </Form.Group> */}
              {/* <Form.Group className={`mb-3`}>
                <Form.Label className={`fw-bold`}>College Email</Form.Label>
                <Form.Control
                  onChange={(e) => setCollegeEmail(e.target.value)}
                  value={collegeEmail}
                  className={`${styles["register-form-bg"]}`}
                  type="email"
                  placeholder="Enter College Email"
                  required
                />
              </Form.Group> */}
              <div
            className={`px-3 rounded-pill d-flex flex-column align-items-center mt-5`}
            id="register-form-btn"
          >
            {/* <div>
              <a
                className={styles["stripe-button"]}
                href="https://imjo.in/7AZeSB"
                target="_blank"
                rel="noreferrer"
              >
                <span>Pay(Instamojo)</span>
              </a>
            </div>
            <Divider style={{ color: "white", margin: "1rem 0" , color:"black"}}>Or</Divider> */}
            {/* <div>
              <a
                className={styles["stripe-button"]}
                href="https://buy.stripe.com/8wMdRLcYYaGH17adQQ"
                target="_blank"
                rel="noreferrer"
              >
                <span>Pay(Stripe)</span>
              </a>
            </div> */}
            {/* <div>
              <img
                className={styles.qr}
                src="/assets/images/new_qr.jpg"
                alt="qr"
              />
              <p className="text-center text-dark mt-1">Amount: 1000</p>
            </div> */}
            <h5 className={`text-dark text-center p-4`}>
            {/* <Button
            className="w-fit fw-bold"
            variant="primary"
            onClick={() => window.open("https://forms.gle/ypi6NY9REPvivBtb7", "_blank")}
          >
            Register
          </Button> */}
              {/* <div style={{margin: '15px'}}>Note: Please open using College Email ID.</div> */}
              <form>
              <a href="https://payments.cashfree.com/forms/devcomm-registration" target="_parent" style={styles2.a}>
                <div className="button-container" style={{...styles2.buttoncontainer, background: '#0A0A1C'}}>
                  <div>
                    <img src="https://cashfree-checkoutcartimages-prod.cashfree.com/logoV78si4bier60_prod.png" alt="logo" style={styles2.logocontainer} />
                  </div>
                  <div style={styles2.textcontainer}>
                    <div 
                    style={{fontFamily: 'Arial', color: '#fff', marginBottom: '5px', fontSize: '14px'}}>
                      Register Now
                    </div>
                    <div style={{fontFamily: 'Arial', color: '#fff', fontSize: '10px'}}>
                        <span>Powered By Cashfree</span>
                        <img src="https://cashfreelogo.cashfree.com/cashfreepayments/logosvgs/Group_4355.svg" alt="logo" 
                        style={styles2.secondaylogocontainer} />
                    </div>
                  </div>
                </div>
              </a>
            </form>
            {/* <div>
              Registrations Closed.
            </div> */}
            </h5>
            {/* <h5 className={`text-dark text-center p-4`}>
              Kindly inform any of the POCs after successfull payment. :)
            </h5> */}
          </div>
              {/* <Form.Group className={`mb-3`}>
                <Form.Label className={`fw-bold`}>Upload the screenshot of payment</Form.Label>
                <Form.Control
                  onChange={(e) => handleUpload(e)}
                  // value={collegeEmail}
                  className={`${styles["register-form-bg"]}`}
                  type="file"
                  placeholder="Enter College Email"
                  required
                />
              </Form.Group> */}
            
            
              <Container fluid className={`d-flex justify-content-center mt-4`}>
                { (
                  // <Button
                  //   onClick={submitHandler}
                  //   className={`w-75 fw-bold`}
                  //   variant="primary"
                  //   type="submit"
                  //   // disabled={true}
                  // >
                  //   Submit
                   
                  // </Button>
                   null
                )}
                {/* {!isLoading && <Button onClick={submitHandler} className={`w-75 fw-bold`} variant="primary" type="submit" disabled={true}>
                                Registrations has ended.
                            </Button>} */}
                {/* {isLoading && (
                  <Button
                    className={`w-75 fw-bold`}
                    variant="primary"
                    type="submit"
                    disabled
                  >
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Loading...
                  </Button>
                )} */}
              </Container>
              {/* <p className="mt-2">
                Note: Registrations will be resumed during DevWeek. Please check
                our Instagram page for further updates.
              </p> */}
            </Form>
          </Col>
        </Row>
      )}
      {/* {isRegistered && !hasPaid && ( */}
        <>
          {/* <Form
            className={`px-3 rounded-pill d-flex flex-column align-items-center`}
            id="register-form-btn"
          >
            <div>
              <a
                className={styles["stripe-button"]}
                href="https://buy.stripe.com/fZe15veQw4ai79S288"
                target="_blank"
                rel="noreferrer"
              >
                <span>Pay With Stripe</span>
              </a>
            </div>
            <Divider style={{ color: "white", margin: "1rem 0" }}>Or</Divider>
            <div>
              <img
                className={styles.qr}
                src="/assets/images/naman_qr.jpeg"
                alt="qr"
              />
              <p className="text-center text-white mt-1">Amount: 1000</p>
            </div>
            <h5 className={`text-light text-center p-4`}>
              Kindle inform any of the POCs after successfull payment. :)
            </h5>
          </Form> */}
          {/* <p className={`text-center text-primary`}>
            <span className={`fw-bold`}>You are now a part of Devcomm<br /></span> The payment through this
            portal is directed towards DevComm Organisation.
            <br />
            You'll soon be added to Devcomm's whatsapp group.
          </p> */}
        </>
      {/* )} */}
    </Container>
  );
};

const styles2 = {
  buttoncontainer :{
      border: '1px solid black',
      borderRadius: '15px',
      display: 'flex',
      padding: '10px',
      width: 'fit-content',
      cursor: 'pointer',
  },
  textcontainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginLeft: '10px',
      justifyContent: 'center',
      marginRight: '10px',
  },
  logocontainer: {
      width: '40px',
      height: '40px',
  },
  secondaylogocontainer: {
    width: '16px',
    height: '16px',
    verticalAlign: 'middle',
  },
  a:{
    textDecoration: 'none',
  }
};

export default RegisterForm;
