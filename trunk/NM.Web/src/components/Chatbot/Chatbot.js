import { flexbox } from '@mui/system';
import React, { Component, useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
//import image from './logo512.png'
//import icon1 from './ne.png'



function GoToPage1() {
    window.open('https://github.com/', "_blank");
}
function GoToPage() {
    window.open('https://nestormind.com/', "_blank");

}
const Tab = (e) => {
    //const { stepArray } = state;
    //const { name, gender, Phone, email } = stepArray;
    console.log("this is the inner of tab", e)
    //const { name, gender, Phone, email } = e.target;

    return (<div style={{ width: '100%' }}>
        <h3>Summary</h3>
        <table>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>{e.steps.name.message}</td>
                </tr>
                <tr>
                    <td>Gender</td>
                    <td>{e.steps.gender.message}</td>
                </tr>
                <tr>
                    <td>Phone</td>
                    <td>{e.steps.Phone.message}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{e.steps.email.message}</td>
                </tr>
            </tbody>
        </table>
    </div>
    )
}
function Chatbot1() {
    const[close,setclose]=useState(false)
    const [state, setState] = useState(
        {
            name: '',
            gender: '',
            Phone: '',
            email: ""
        })

        const open=({opened})=>{
            setclose(opened)
        
        }
        const close1=()=>{
            setclose(false)
        }
    //Review.propTypes = {
    /// steps: PropTypes.object,
    //};

    //Review.defaultProps = {
    //  steps: undefined,
    //}//;

    const theme = {
        background: '#f5f8fb',
        fontFamily: 'Helvetica Neue',
        headerBgColor: '#EF6C00',
        headerFontColor: '#fff',
        headerFontSize: '25px',
        botBubbleColor: '#EF6C00',
        botFontColor: '#fff',
        userBubbleColor: '#fff',
        userFontColor: '#4a4a4a',
        headerImage: "logo192.png",
    };

    const Header = (props) => (<div className='chatboatHeaderStyle'>
        {console.log(props, "hellksdalksadkldsfkl;")}
        <div className='dot'></div>
        <div> <img src="/ne.png" height={40} style={{
            border: "2px solid transparent",
            borderRadius: "50px",
            marginRight: "8px",
            marginLeft: "57px",
            backgroundColor: "white"
        }} /></div>
        <div className='heading' >Nestormind
            <div style={{ fontSize: "13px" }}>Online</div>
            
        </div>
        <div style={{marginLeft:"60px"}} onClick={()=>{
            close1()
        }}><i class="fs-2 bi-x"></i></div>
    </div>)
    const config = {
        width: "400px",
        height: "500px",
        floating: true,
    }


    const stepArray = [
        {
            id: '1',
            message: 'What is your name?',
            trigger: 'name',
        },
        {
            id: 'name',
            user: true,
            trigger: '3',
        },
        {
            id: '3',
            message: 'Hi {previousValue}! What is your gender?',
            trigger: 'gender',
        },
        {
            id: 'gender',
            options: [
                { value: 'male', label: 'Male', trigger: '5' },
                { value: 'female', label: 'Female', trigger: '5' },
            ],
        },
        {
            id: '5',
            message: 'Enter Your Mobile Number?',
            trigger: 'Phone',
        },
        {
            id: 'Phone',
            user: true,
            trigger: '7',
            validator: (value) => {
                if (isNaN(value)) {
                    return 'value must be a number';
                } else if (value < 0) {
                    return 'value must be positive';
                }

                return true;
            },
        },
        {
            id: '7',
            message: 'Enter Your Email Id?',
            trigger: 'email',
        },
        {
            id: 'email',
            user: true,
            trigger: '9',
        },
        {
            id: '9',
            message: 'Great! Check out your summary',
            trigger: 'review',
        },
        {
            id: 'review',
            component: <Tab />,
            asMessage: true,
            trigger: 'update',
        },
        {
            id: 'update',
            message: 'Would you like to update some field?',
            trigger: 'update-question',
        },
        {
            id: 'update-question',
            options: [
                { value: 'yes', label: 'Yes', trigger: 'update-yes' },
                { value: 'no', label: 'No', trigger: 'end-message' },
            ],
        },
        {
            id: 'update-yes',
            message: 'What field would you like to update?',
            trigger: 'update-fields',
        },
        {
            id: 'update-fields',
            options: [
                { value: 'name', label: 'Name', trigger: 'update-name' },
                { value: 'gender', label: 'Gender', trigger: 'update-gender' },
                { value: 'Phone', label: 'Phone Number', trigger: 'update-Phone' },
                { value: 'email', label: 'Phone Number', trigger: 'update-email' }
            ],
        },
        {
            id: 'update-name',
            update: 'name',
            trigger: '9',
        },
        {
            id: 'update-gender',
            update: 'gender',
            trigger: '9',
        },
        {
            id: 'update-Phone',
            update: 'Phone',
            trigger: '9',
        },
        {
            id: 'update-email',
            update: 'email',
            trigger: '9',
        },
        {
            id: 'end-message',
            message: 'Thanks! Your data was submitted successfully!',
            trigger: '10',
        },
        {
            id: '10',
            message: "Choose your Query",
            trigger: '13'

        },
        {
            id: '13',
            options: [
                { label: 'UI/UX', value: '1', trigger: '11' },
                { label: 'Product Manager', value: '2', trigger: '11' },
            ],

            trigger: '10'

        },
        {
            id: '11',
            component: <GoToPage />,
            asMessage: true,
            trigger: '13'

        },
        {
            id: '12',
            user: true,

            end: true,
        },
    ]

    return (
        <ThemeProvider theme={theme}>
            <ChatBot
                botAvatar="ne.png"
                //userAvatar={image}
                headerComponent={<Header />}
                opened={close}
                toggleFloating={open}
                {...config}
                steps={stepArray}
            />
        </ThemeProvider>
    );
}

export default Chatbot1;

