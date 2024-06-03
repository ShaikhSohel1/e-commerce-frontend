import { ModeToggle } from "@/components/toogle-mode"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Image } from "lucide-react"
import { Link } from "react-router-dom"
import banner from '../../../assets/banner.jfif'
import { useState } from "react"


const SignUp = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formValues.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formValues.password) {
      newErrors.password = "Password is required";
    } else if (formValues.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formValues.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (formValues.confirmPassword !== formValues.password) {
      newErrors.confirmPassword = "Passwords must match";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log(formValues);
      // Perform sign-up logic here
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="flex justify-center items-center h-[100vh] ">
      <div className="w-full lg:grid h-full lg:grid-cols-2 ">
        <div className="flex items-center justify-center ">
          <Card className="mx-auto max-w-sm  mt-[20vh] lg:mt-0 ">
            <CardHeader>
              <CardTitle className="text-2xl">
                <div className="flex justify-between">
                  <div>Register</div>
                  <div><ModeToggle/></div>
                </div>
              </CardTitle>
              <CardDescription>
                Enter your email below to login to your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="m@example.com"
                      value={formValues.email}
                      onChange={handleChange}
                    />
                    {errors.email && <span className="text-red-600">{errors.email}</span>}
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password">Password</Label>
                    </div>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      value={formValues.password}
                      onChange={handleChange}
                    />
                    {errors.password && <span className="text-red-600">{errors.password}</span>}
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                    </div>
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      value={formValues.confirmPassword}
                      onChange={handleChange}
                    />
                    {errors.confirmPassword && <span className="text-red-600">{errors.confirmPassword}</span>}
                  </div>
                  <Button type="submit" className="w-full">Sign Up</Button>
                </div>
                <div className="mt-4 text-center text-sm">
                  Already have an account?{" "}
                  <Link to="/login" className="underline">LogIn</Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
        <div className="hidden bg-muted lg:block">
          <img
            src={banner}
            alt="Image"
            width="1920"
            height="1080"
            className="h-full w-full object-cover dark:brightness-[0.6]"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;