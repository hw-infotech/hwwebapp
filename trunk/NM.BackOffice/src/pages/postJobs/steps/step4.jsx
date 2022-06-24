import { Button } from "react-bootstrap"

const Step4 = ({ setGoSteps, state, setState, handleChange }) => {
    return <div className="w-100 m-auto">
        <div className="justify-content-end d-flex">
            <Button variant="secondary" onClick={() => setGoSteps(2)}>Back</Button>
            <Button variant="primary" onClick={() => setGoSteps(3)}>Next</Button>
        </div>
    </div>
}

export default Step4