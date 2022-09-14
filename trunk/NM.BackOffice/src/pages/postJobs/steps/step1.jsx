import { useFormikContext } from "formik";
import { error } from "jquery";
import { useEffect } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Input } from "../../../components/commoninputfield";
import CreatableSelectField from "../../../components/selectfield";

const Step1 = ({
  setGoSteps,
  state,
  setState,
  handleChange,
  values,
  touched,
  errors,
  dirty,
  isValid
}) => {
  const formik_context = useFormikContext();
console.log(formik_context,"formikcontext")
  useEffect(() => {
    document.title = "Add Job";
  }, []);
  return (
    <div className="main-wrap-box w-100 m-auto">
      <Row>
        <Col md={12}>
          <div className="d-flex w-100 gap-1">
            <Form.Group className="mb-3 w-100">
              <Input
                as="select"
                name="title"
                onChange={handleChange}
                label={"Title"}
                value={values?.title}
                id="jobtitle"
                className="form-control label-size"
                options={[
                  { value: "UI/UX", label: "UI/UX" },
                  { value: "Project Manager", label: "Project Manager" },
                  { value: "Web Development", label: "Web Development" },
                ]}
              ></Input>
            </Form.Group>
            <Form.Group className="w-100">
              <Input
                type="text"
                className="form-control w-100 label-size"
                placeholder={"Function"}
                value={values?.functions}
                name="functions"
                label={"Function"}
                id={touched.functions && errors.functions ? "invalid" : ""}
                onChange={handleChange}
              />
            </Form.Group>
          </div>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Input
              as="textarea"
              label={"Descritption"}
              className={"label-size form-control w-100"}
              placeholder={"Descritption"}
              id={touched.description && errors.description ? "invalid" : ""}
              rows={3}
              name="description"
              value={values?.description}
              onChange={handleChange}
            />
          </Form.Group>
        
        </Col>
      </Row>
      <div className="d-flex justify-content-end ">
      {
        <Button
          variant="primary"
          disabled={formik_context.values.functions && formik_context.values.description ? false:true}
          className="btn-sm"
          onClick={() => setGoSteps(1)}
        >
          Next
        </Button>
      }
      </div>
    </div>
  );
};

export default Step1;
