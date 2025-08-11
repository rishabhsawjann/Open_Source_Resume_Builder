import Header from "@/components/custom/Header";
import React, { useEffect } from "react";
import heroSnapshot from "@/assets/heroSnapshot.png";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaCircle, FaInfoCircle, FaStar, FaCode, FaBolt, FaPalette, FaRocket, FaCheck } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { startUser } from "../../Services/login.js";
import { useDispatch, useSelector } from "react-redux";
import { addUserData } from "@/features/user/userFeatures.js";

function HomePage() {
  const user = useSelector((state) => state.editUser.userData);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    window.open(
      "https://github.com/rishabhsawjann/Open_Source_Resume_Builder",
      "_blank"
    );
  };

  useEffect(() => {
    const fetchResponse = async () => {
      try {
        const response = await startUser();
        if (response.statusCode == 200) {
          dispatch(addUserData(response.data));
        } else {
          dispatch(addUserData(""));
        }
      } catch (error) {
        console.log(
          "Printing from Home Page there was a error ->",
          error.message
        );
        dispatch(addUserData(""));
      }
    };
    fetchResponse();
  }, []);

  const hadnleGetStartedClick = () => {
    if (user) {
      console.log("Printing from Homepage User is There ");
      navigate("/dashboard");
    } else {
      console.log("Printing for Homepage User Not Found");
      navigate("/auth/sign-in");
    }
  };

  return (
    <div className="min-h-screen bg-background dark">
      <Header user={user} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-aurora opacity-60"></div>
        <Container className="relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="mb-8 text-5xl md:text-7xl font-sora font-bold leading-none text-tight animate-fade-up">
              <span className="text-foreground">Start </span>
              <span className="gradient-text">building a Resume</span>
              <span className="text-foreground"> for your next Job</span>
            </h1>
            <p className="mx-auto mb-12 text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed animate-fade-up [animation-delay:0.2s]">
              Build. Refine. Shine. With AI-Driven Resumes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up [animation-delay:0.4s]">
              <Button
                size="lg"
                className="btn-sheen bg-gradient-to-r from-teal-500 to-purple-600 hover:from-teal-600 hover:to-purple-700 focus-ring text-white border-0 text-lg px-8 py-4 h-auto"
                onClick={hadnleGetStartedClick}
              >
                Get Started →
              </Button>
              <Button 
                variant="ghost" 
                size="lg"
                className="glass border border-white/20 hover:bg-white/10 focus-ring text-lg px-8 py-4 h-auto"
              >
                Learn More
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Hero Screenshot */}
      <section className="pb-24">
        <Container>
          <div className="max-w-5xl mx-auto animate-fade-up [animation-delay:0.6s]">
            <div className="glass-card p-2 shadow-2xl animate-float">
              <div className="bg-gradient-to-r from-teal-400 via-purple-500 to-cyan-400 p-px rounded-2xl">
                <div className="bg-background/95 rounded-2xl overflow-hidden">
                  <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-teal-500/20 via-purple-500/20 to-cyan-400/20">
                    <div className="flex space-x-2">
                      <FaCircle className="w-3 h-3 text-teal-400" />
                      <FaCircle className="w-3 h-3 text-purple-400" />
                      <FaCircle className="w-3 h-3 text-cyan-400" />
                    </div>
                    <FaInfoCircle className="text-muted-foreground" />
                  </div>
                  <img
                    className="w-full object-cover"
                    src={heroSnapshot}
                    alt="AI Resume Builder Dashboard"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-aurora-subtle">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-sora font-bold text-foreground mb-4">
              Features that <span className="gradient-text">Empower</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to create professional, AI-enhanced resumes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: FaBolt, title: "AI-Powered", desc: "Smart suggestions for content" },
              { icon: FaPalette, title: "Customizable", desc: "Multiple templates & themes" },
              { icon: FaCode, title: "Live Preview", desc: "Real-time updates" },
              { icon: FaRocket, title: "Export Ready", desc: "PDF download & sharing" }
            ].map((feature, index) => (
              <div key={index} className="glass-card p-6 hover:scale-105 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-teal-400 mb-4" />
                <h3 className="font-sora font-semibold text-lg text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How it Works */}
      <section className="py-24">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-sora font-bold text-foreground mb-4">
              How it <span className="gradient-text">Works</span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-teal-400 via-purple-500 to-cyan-400"></div>
              {[
                { step: "1", title: "Choose Template", desc: "Select from our collection of professional templates" },
                { step: "2", title: "Add Content", desc: "Fill in your details with AI-powered suggestions" },
                { step: "3", title: "Download & Share", desc: "Export your resume as PDF or share online" }
              ].map((item, index) => (
                <div key={index} className="relative flex items-start mb-12 last:mb-0">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-teal-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-8">
                    {item.step}
                  </div>
                  <div className="glass-card p-6 flex-grow">
                    <h3 className="font-sora font-semibold text-xl text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Open Source Section */}
      <section className="py-24 bg-aurora-subtle">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <div className="glass-card p-8">
              <h2 className="text-3xl md:text-4xl font-sora font-bold text-foreground mb-4">
                Open Source & <span className="gradient-text">Free</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Built with love for the community. MIT licensed and completely free to use.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="gradient-border">
                  <div className="gradient-border-content">
                    <Button
                      variant="ghost"
                      size="lg"
                      className="bg-transparent hover:bg-transparent text-foreground text-lg px-8 py-4 h-auto w-full"
                      onClick={handleClick}
                    >
                      <FaGithub className="w-5 h-5 mr-2" />
                      Star on GitHub
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <span className="px-3 py-1 bg-teal-500/20 text-teal-400 rounded-full text-sm font-medium">MIT</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <Container>
          <div className="gradient-border max-w-4xl mx-auto">
            <div className="gradient-border-content p-12 text-center">
              <h2 className="text-3xl md:text-5xl font-sora font-bold text-foreground mb-6">
                Ready to <span className="gradient-text">Build</span> Your Future?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of professionals who've crafted their perfect resume with AI assistance.
              </p>
              <Button
                size="lg"
                className="btn-sheen bg-gradient-to-r from-teal-500 to-purple-600 hover:from-teal-600 hover:to-purple-700 focus-ring text-white border-0 text-lg px-12 py-4 h-auto"
                onClick={hadnleGetStartedClick}
              >
                Start Building Now →
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; 2024 AI Resume Builder. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm"
                className="text-muted-foreground hover:text-foreground focus-ring"
                onClick={handleClick}
              >
                <FaGithub className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default HomePage;