import React, { useState } from 'react';
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
        <form>
            <div class="form-group">
                <input type="text" id="formControlemail" class="form-control" name='email' placeholder='Enter your Email' />
            </div>
            <div class="form-group">
                <input type="text" id="formControlphn" class="form-control " name='phone' placeholder='Enter your Phone Number' />
            </div>
            <div class="form-group">
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="2" name='message' placeholder='enter your message here'></textarea>
            </div>
            <button type="button" class="chatbotbutton">Submit</button>
        </form>
    </div>
    )
}
function Chatbot1() {
    const [close, setclose] = useState(false)
    const [state, setState] = useState(
        {
            message: '',
            Phone: '',
            email: ""
        })

    const open = ({ opened }) => {
        setclose(opened)

    }
    const close1 = () => {
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

        <div className='heading' >Have a Question ?
        </div>
        <div className='crosssign' onClick={() => {
            close1()
        }}><div className=''><i class="fs-2 bi-x"></i></div></div>
    </div>)
    const config = {
        width: "400px",
        height: "500px",
        floating: true,
    }
    const stepArray = [
        {
            id: '1',
            message: 'Enter your message and we will write back to you?',
            trigger: '3',
        },
        {
            id: 'name',
            user: true,
            trigger: '3',
        },
        {
            id: '3',
            component: <Tab />,
            asMessage: true,
            trigger: '12'
        },

        {
            id: 'Phone',
            user: true,
            trigger: '12',
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
                hideSubmitButton={true}
            />
        </ThemeProvider>
    );
}

export default Chatbot1;

