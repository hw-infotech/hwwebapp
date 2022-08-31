import { useFormikContext,Formik } from "formik";
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
  const first = useFormikContext();
  //Formik.setTouched({ responsibility: true });
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
              setFormState={setState}
              touched={touched.requirment}
              errors={errors}
              value={values.requirment}
              onChange={handleChange}
            />
            <Form.Label className="label-size">Responsibility</Form.Label>

            <CreatableSelectField
              name="responsibility"
              placeholder="Type and press tab/enter button"
              formState={state}
              touched={touched.responsibility}
              errors={errors.responsibility}
              id={"res"}
              setFormState={setState}
              className={
                touched.responsibility && errors.responsibility ? "invalid" : ""
              }
              //value={values.responsibility}
              onChange={handleChange}
            />
            <Form.Label className="label-size">Benefits</Form.Label>
            <div className="mb-3">
              <CreatableSelectField
                name="benefit"
                placeholder="Type and press tab/enter button"
                formState={state}
                id="benefit"
                touched={touched.responsibility}
                errors={errors.responsibility}
                setFormState={setState}
                className={touched.benefit && errors.benefit ? "invalid" : ""}
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
      </div>
    </div>
  );
};

export default Step2;
