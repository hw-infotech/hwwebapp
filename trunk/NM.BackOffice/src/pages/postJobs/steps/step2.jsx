import { useFormikContext } from "formik";
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
  const first = useFormikContext();
  // const selector = useSelector(state => state.data.apidata.edit_data)

  useEffect(() => {
    document.title = "Add Job";
  }, []);

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
              className={
                touched.responsibility || errors.responsibility ? "invalid" : ""
              }
              value={values.requirment}
              onChange={handleChange}
            />
            <Form.Label className="label-size">Responsibility</Form.Label>
            {console.log(
              touched.responsibility,
              errors.responsibility,
              "dskldfkld"
            )}
            <CreatableSelectField
              name="responsibility"
              placeholder="Type and press tab/enter button"
              formState={state}
              id={"res"}
              setFormState={setState}
              className={
                touched.responsibility || errors.responsibility ? "invalid" : ""
              }
              value={values.responsibility}
              onChange={handleChange}
            />
            <Form.Label className="label-size">Benefits</Form.Label>
            <div className="mb-3">
              <CreatableSelectField
                name="benefits"
                formState={state}
                className=""
                setFormState={setState}
                placeholder="Type and press tab/enter button"
                value={values.benefits}
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
              "responsibility",
              state.responsibility.map((_) => _)
            );
            setFieldValue(
              "requirment",
              state.requirment.map((_) => _)
            );
            setFieldValue(
              "benefits",
              state.benefits.map((_) => _)
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
