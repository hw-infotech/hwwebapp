import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import { Input } from "../../../components/commoninputfield";
import CreatableSelectField from "../../../components/selectfield";
import { useDispatch, useSelector } from "react-redux";
import { Send_data } from "../../../Services/redux/action/action";
import { useEffect } from "react";
import { useFormikContext } from "formik";

const Step3 = ({
  setGoSteps,
  state,
  setState,
  onhandlechange,
  handleChange,
  values,
  errors,
  touched,
}) => {
  //const nevigate=useNavigate()
  //  const selector = useSelector(state => state.data.apidata.edit_data)
  useEffect(() => {
    document.title = "Add Job";
  }, []);
  const f_context = useFormikContext();
  const dispatch = useDispatch();
  return (
    <div className="m-auto w-100">
      <Form.Group>
        <Input
          as="select"
          placeholder="Level"
          value={values.level}
          className="form-control label-size"
          name="level"
          onChange={handleChange}
          label={"Level"}
          id="seneritylevel"
          options={[
            { value: "Senior", label: "Senior" },
            { value: "Junior", label: "Junior" },
          ]}
        />
        <Input
          as="select"
          className="form-control label-size"
          onChange={handleChange}
          placeholder="Type"
          value={values.jobType}
          name="jobType "
          label={"Type"}
          id="name"
          options={[{ value: "Full time" }, { value: "Part time" }]}
        ></Input>
      </Form.Group>
      <Form.Group>
        <Input
          type="text"
          className="form-control label-size mb-3"
          onChange={handleChange}
          placeholder="Industries"
          name="industries"
          value={values.industries}
          label={"Industries"}
          id={touched.industries && errors.industries ? "invalid" : ""}
        />
      </Form.Group>
      <div className="d-flex justify-content-end gap-2">
        <Button
          variant=""
          className="btn-sm back-buttonn"
          onClick={() => setGoSteps(1)}
        >
          Back
        </Button>

        <Button
          variant="primary"
          className="btn-sm"
          disabled={f_context?.values.industries ? false : true}
          onClick={() => {
            setGoSteps(3);
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Step3;
