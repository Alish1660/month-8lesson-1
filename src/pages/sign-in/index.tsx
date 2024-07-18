import React, { useEffect, useState } from "react";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import * as Yup from "yup";
import auth from "../../service/auth";

const Index: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const SignIn = async (values: { email: string; password: string }) => {
    try {
      const response = await auth.sign_in(values);
      if (response.status === 200) {
        navigate("/");
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-[35px] text-blue-500 font-normal sm:text-[36px] md:text-[56px]">
        Login
      </h1>
      <div className="max-w-[600px] w-full">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            password: Yup.string().required("Required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            SignIn(values).finally(() => {
              setSubmitting(false);
            });
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field
                name="email"
                type="email"
                as={TextField}
                label="Email address"
                fullWidth
                margin="normal"
                variant="outlined"
                helperText={
                  <ErrorMessage
                    name="email"
                    component="span"
                    className="text-red-500 text-sm"
                  />
                }
              />
              <Field
                name="password"
                type={showPassword ? "text" : "password"}
                as={TextField}
                label="Password"
                fullWidth
                margin="normal"
                variant="outlined"
                helperText={
                  <ErrorMessage
                    name="password"
                    component="span"
                    className="text-red-500 text-sm"
                  />
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <p className="mb-3 cursor-pointer hover:text-blue-500">
                Parolni unutdingizmi?
              </p>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={isSubmitting}
                sx={{ marginBottom: "8px" }}
              >
                {isSubmitting ? "Signing in..." : "Sign In"}
              </Button>
              <span
                onClick={() => navigate("/sign-up")}
                className="text-blue-300 cursor-pointer hover:text-blue-500"
              >
                Registration
              </span>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Index;
