import React, { useEffect } from "react";
import logo from "/logo.svg";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "@/Services/login";
import { addUserData } from "@/features/user/userFeatures";
import { Container } from "../ui/container";

function Header({user}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if(user){
      console.log("Printing From Header User Found");
    }
    else{
      console.log("Printing From Header User Not Found");
    }
  }, []);

  const handleLogout = async () => {
    try {
      const response = await logoutUser();
      if (response.statusCode == 200) {
        dispatch(addUserData(""));
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <header
      id="printHeader"
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 bg-background/80"
    >
      <Container className="flex justify-between py-4 items-center">
        <div className="flex items-center">
          <img src={logo} alt="AI Resume Builder" width={40} height={40} className="mr-3" />
          <span className="font-sora font-semibold text-xl text-foreground">Resume Builder</span>
        </div>
        {user ? (
          <nav className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="focus-ring text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => {
                navigate("/dashboard");
              }}
            >
              Dashboard
            </Button>
            <Button 
              size="sm"
              className="btn-sheen bg-gradient-to-r from-teal-500 to-purple-600 hover:from-teal-600 hover:to-purple-700 focus-ring text-white border-0"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </nav>
        ) : (
          <Link to="/auth/sign-in">
            <Button className="btn-sheen bg-gradient-to-r from-teal-500 to-purple-600 hover:from-teal-600 hover:to-purple-700 focus-ring text-white border-0">
              Get Started
            </Button>
          </Link>
        )}
      </Container>
    </header>
  );
}

export default Header;
