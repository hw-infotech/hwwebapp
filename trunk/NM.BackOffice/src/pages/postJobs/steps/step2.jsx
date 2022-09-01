import { useFormikContext, Formik } from "formik";
import { useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import CreatableSelectField from "../../../components/selectfield";

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
}) => {
  const { setFieldValue } = useFormikContext();
  // const selector = useSelector(state => state.data.apidata.edit_data)
  useEffect(() => {
    document.title = "Add Job";
  }, []);

  // let mDate = new Date("09-01-2022 13:25:00");
  // const SecondsDif = Math.abs((new Date().getTime() - mDate.getTime()) / 1000);
  // const result = new Date(SecondsDif * 1000).toISOString().slice(11, 19);
  //console.log(result); // 👉️ "00:10:00" (hh:mm:ss)
  const f_context = useFormikContext();
  //Formik.setTouched({ responsibility: true });
  console.log(state)
  return (
    <div className="w-100 m-auto">
      <Row>
        <Col md={12}>
          <Form.Group>
            <Form.Label className="label-size">Requirement</Form.Label>
            <CreatableSelectField
              name="requirment"
              id={"requ"}
              placeholder="Type and press tab/enter button"
              formState={state}
              errors={errors.requirment}
              setFormState={setState}
              touched={touched.requirment}
              value={values.requirment}
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
              setTouched={true}
              id={"res"}
              setFormState={setState}
              className={
                touched.responsibility && errors.responsibility ? "invalid" : ""
              }
              //value={values.responsibility}
              onChange={handleChange}
            />
            <div className="mb-3">
              <Form.Label className="label-size">Benefits</Form.Label>
              <CreatableSelectField
                name="benefit"
                placeholder="Type and press tab/enter button"
                formState={state}
                id={"benefit"}
                setTouched={true}
                touched={touched.benefit}
                errors={errors.benefit}
                setFormState={setState}
                className={touched.errors && errors.benefit ? "invalid" : ""}
                value={values.benefit}
                onChange={handleChange}
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
        {state.requirment.length > 0 &&
        state.responsibility.length > 0 &&
        state.benefit.length > 0 ? 
          <Button
            variant="primary"
            className="btn-sm"
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
                state.requirment.map((_) => _)
              );

              setGoSteps(2);
            }}
          >
            Next
          </Button>
         : (
          ""
        )}
      </div>
    </div>
  );
};

export default Step2;
