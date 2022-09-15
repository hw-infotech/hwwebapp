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
    dispatch(Requirement_Getall());
    dispatch(Responsibility_Getall());
    document.title = "Add Job";
  }, []);
  useEffect(() => {
    setbenefits(selector?.benefits.data);
    setresponsibility(selector?.responsibility.data);
    setRequirment(selector?.requirment.data);
  }, [selector]);
  console.log(requr, "requirnments");
  // let mDate = new Date("09-01-2022 13:25:00");
  // const SecondsDif = Math.abs((new Date().getTime() - mDate.getTime()) / 1000);
  // const result = new Date(SecondsDif * 1000).toISOString().slice(11, 19);
  //console.log(result); // 👉️ "00:10:00" (hh:mm:ss)
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
              name="req"
              id={"requ"}
              options={requirment?.map((data, index) => ({
                value: data?.id,
                label: data?.jobRequirment,
              }))}
              placeholder="Type and press tab/enter button"
              formState={requr}
              setFormState={setRequr}
              errors={errors.requirment}
              touched={touched.requirment}
              value={requr.req}
              onChange={handleChange}
              setTouched={true}
              className={
                touched.requirment && errors.requirment ? "invalid" : ""
              }
            />
            <Form.Label className="label-size">Responsibility</Form.Label>
            <CreatableSelectField
              name="responsibility"
              touched={touched.responsibility}
              errors={errors.responsibility}
              placeholder="Type and press tab/enter button"
              formState={state}
              options={responsibility?.map((data, index) => ({
                value: data?.id,
                label: data?.responsibility,
              }))}
              setTouched={true}
              id={"res"}
              setFormState={setState}
              className={
                touched.responsibility && errors.responsibility ? "invalid" : ""
              }
              //value={values.responsibility}
            />
            <div className="mb-3">
              <Form.Label className="label-size">Benefits</Form.Label>
              <CreatableSelectField
                name="benefit"
                placeholder="Type and press tab/enter button"
                formState={state}
                options={benefits?.map((data, index) => ({
                  id: data?.id,
                  label: data?.benefitType,
                }))}
                id={"benefit"}
                setTouched={true}
                touched={touched.benefit}
                errors={errors.benefit}
                setFormState={setState}
                className={touched.errors && errors.benefit ? "invalid" : ""}
                // value={values.benefit}
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
              "benefit",
              state?.benefit?.map((f) => f)
            );
            setFieldValue(
              "responsibility",
              state.responsibility.map((_) => _)
            );
            setFieldValue(
              "requirment",
              requr.req.map((_) => _.value)
            );
            console.log(values);
            // setGoSteps(2);
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Step2;
