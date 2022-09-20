import { useFormikContext, Formik } from "formik";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CreatableSelectField from "../../../components/selectfield";
import {
  Benefits_Getall,
  Requirement_Getall,
  Responsibility_Getall,
} from "../../../Services/redux/action/action";

const Step2 = ({
  setGoSteps,
  state,
  setState,
  handleChange,
  values,
  touched,
  errors,
  onFocus,
  className,
  setTouched,
  options,
  value,
}) => {
  const [benefits, setbenefits] = useState();
  const [requirment, setRequirment] = useState();
  const [responsibility, setresponsibility] = useState();
  const { setFieldValue } = useFormikContext();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state?.data?.apidata);
  const [requr, setRequr] = useState({
    req: [],
  });
  useEffect(() => {
    dispatch(Benefits_Getall());
    // dispatch(Requirement_Getall());
    // dispatch(Responsibility_Getall());
    document.title = "Add Job";
  }, []);
  useEffect(() => {
    setbenefits(selector?.benefits.data);
    // setresponsibility(selector?.responsibility.data);
    // setRequirment(selector?.requirment.data);
  }, [selector]);
  console.log(requr, "requirnments");
  // let mDate = new Date("09-01-2022 13:25:00");
  // const SecondsDif = Math.abs((new Date().getTime() - mDate.getTime()) / 1000);
  // const result = new Date(SecondsDif * 1000).toISOString().slice(11, 19);
  // console.log(result); // 👉️ "00:10:00" (hh:mm:ss)
  const f_context = useFormikContext();
  //Formik.setTouched({ responsibility: true });
  const requirmentt = [
    //{ value: requirment?.id, label:requirment[0]?.jobRequirment },
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "salted-caramel", label: "Salted Caramel" },
  ];
  return (
    <div className="w-100 m-auto">
      <Row>
        <Col md={12}>
          <Form.Group>
            <Form.Label className="label-size">Requirement</Form.Label>
            <CreatableSelectField
              name="JobRequirments"
              id={"requ"}
              //  options={requirment?.map((data, index) => ({
              //     value: data?.id,
              //     label: data?.jobRequirment,
              //   }))}
              placeholder="Type and press tab/enter button"
              formState={state}
              setFormState={setState}
              errors={errors.JobRequirments}
              touched={touched.JobRequirments}
              //value={values.JobRequirments}
              onChange={handleChange}
              setTouched={true}
              className={
                touched.errors && errors.JobRequirments ? "invalid" : ""
              }
            />
            <Form.Label className="label-size">Responsibility</Form.Label>
            <CreatableSelectField
              name="JobResponsibilityTypes"
              touched={touched.JobResponsibilityTypes}
              errors={errors.JobResponsibilityTypes}
              onChange={handleChange}
              placeholder="Type and press tab/enter button"
              formState={state}
              setTouched={true}
              id={"res"}
              setFormState={setState}
              className={
                touched.errors && errors.JobResponsibilityTypes ? "invalid" : ""
              }
              value={values.JobResponsibilityTypes}
            />
            <div className="mb-3">
              <Form.Label className="label-size">Benefits</Form.Label>
              <CreatableSelectField
                name="JobBenefits"
                placeholder="Type and press tab/enter button"
                formState={state}
                options={benefits?.map((data, index) => ({
                  id: data?.id,
                  label: data?.benefitType,
                }))}
                id={"benefit"}
                onChange={handleChange}
                setTouched={true}
                touched={touched.JobBenefits}
                errors={errors.JobBenefits}
                setFormState={setState}
                className={
                  touched.errors && errors.JobBenefits ? "invalid" : ""
                }
                //value={values.JobBenefits}
              />
            </div>
          </Form.Group>
        </Col>
      </Row>
      <div className="d-flex w-100 justify-content-end gap-2">
        <Button
          variant=""
          className="btn-sm back-buttonn"
          onClick={() => setGoSteps(0)}
        >
          Back
        </Button>

        <Button
          variant="primary"
          className="btn-sm"
          // disabled={
          //   requr.req.length > 0
          //   // state.responsibility.length > 0 &&
          //   // state.benefit.length > 0
          //     ? false
          //     : true
          // }
          onClick={() => {
            setFieldValue(
              "JobBenefits",
              JSON.stringify(state?.JobBenefits?.map((f) => f))
            );
            setFieldValue(
              "JobResponsibilityTypes",
              JSON.stringify(state.JobResponsibilityTypes.map((_) => _))
            );
            setFieldValue(
              "JobRequirments",
              JSON.stringify(state.JobRequirments.map((_) => _))
            );
            console.log(values);
            setGoSteps(2);
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Step2;
