"use client";
import React, { useState , useEffect , useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const mentorshipStages = [
  {
    index: 1,
    title: "IDEATION STAGE",
    duration: "36 Hours + 12 hours Industry Design Sprint",
    objective: "Brainstorm and develop innovative ideas.",
    mentorshipFocus:
      "Brainstorming Sessions: Mentors will facilitate group discussions to inspire creativity and refine ideas.",
    feedbackLoops:
      "Participants will receive constructive feedback on their concepts from mentors and peers.",
    expectedOutcomes:
      "Clear, innovative ideas aligned with the problem statements.",
    image: "/image.png",
  },
  {
    index: 2,
    title: "Go-to-Market Strategy Stage",
    duration: "36 Hours + 12 hours Industry Design Sprint",
    objective: "Develop a comprehensive go-to-market strategy.",
    mentorshipFocus:
      "Market Analysis: Mentors will assist in identifying target markets and conducting competitive analysis. Strategy Workshops: Sessions will be held to develop customer acquisition, retention strategies, and define the value proposition.",
    feedbackLoops: "",
    expectedOutcomes:
      "A comprehensive go-to-market strategy ready for implementation.",
    image: "/image2.png",
  },
  {
    index: 3,
    title: "Inculcation of Government Schemes Stage",
    duration: "36 Hours + 12 hours Industry Design Sprint",
    objective: "Integrate relevant government initiatives into the solution.",
    mentorshipFocus:
      "Expert Sessions: Mentors with expertise in government schemes will provide insights on applicable programs (e.g., Aditi Scheme, iDEX). Implementation Guidance: Assistance in aligning the solution with government objectives and maximizing potential benefits.",
    feedbackLoops: "",
    expectedOutcomes:
      "A well-defined business model incorporating relevant government schemes.",
    image: "/image3.png",
  },
  {
    index: 4,
    title: "TECHNICAL ROUND STAGE",
    duration: "36 Hours + 12 hours Industry Design Sprint",
    objective: "Assess the technical viability of the solution.",
    mentorshipFocus:
      "Technical Reviews: Mentors will evaluate prototypes or MVPs, offering technical insights and suggestions for improvement. Problem-Solving Workshops: Sessions focused on addressing technical challenges and refining the solution's architecture.",
    feedbackLoops: "",
    expectedOutcomes:
      "A technically sound solution ready for demonstration.",
    image: "/image4.png",
  },
  {
    index: 5,
    title: "PITCH STAGE",
    duration: "36 Hours + 12 hours Industry Design Sprint",
    objective: "Present the solution to judges and stakeholders.",
    mentorshipFocus:
      "Pitch Preparation: Mentors will help participants craft compelling narratives, focusing on clarity and engagement. Mock Presentations: Practice sessions will allow participants to refine their delivery and receive feedback.",
    feedbackLoops: "",
    expectedOutcomes:
      "A polished pitch that effectively communicates the solution and its market potential.",
    image: "/image5.png",
  },
  {
    index: 6,
    title: "MENTORSHIP FORMAT",
    duration: "Throughout the Hack-a-thon",
    objective: "Provide continuous mentorship and support.",
    mentorshipFocus:
      "One-on-One Sessions: Participants will have scheduled meetings with mentors for personalized guidance. Group Workshops: Collaborative sessions focused on specific topics, encouraging peer learning and support. Continuous Support: Mentors will be available for questions and guidance throughout the Hack-a-thon.",
    feedbackLoops: "",
    expectedOutcomes: "Enhanced participant engagement and support.",
    image: "/image6.png",
  },
];

const MentorshipStage = ({
  title,
  duration,
  objective,
  mentorshipFocus,
  feedbackLoops,
  expectedOutcomes,
}) => {
  return (
    <div className="w-full text-justify items-start">
      <div className=" mx-auto">
        <h2 className="text-lg lg:text-3xl font-bold mb-4">✶ {title}</h2>
        <div className="space-y-2 border-l-2 border-green-400 pl-4">
          <p className="text-lg lg:text-xl">
            <span className="font-bold">Duration:</span> {duration}
          </p>
          <p className="text-lg lg:text-xl">
            <span className="font-bold">Objective:</span> {objective}
          </p>
          <p className="text-lg lg:text-xl">
            <span className="font-bold">Mentorship Focus:</span> {mentorshipFocus}
          </p>
          {feedbackLoops && (
            <p className="text-lg lg:text-xl">
              <span className="font-bold">Feedback Loops:</span> {feedbackLoops}
            </p>
          )}
          <p className="text-lg lg:text-xl">
            <span className="font-bold">Expected Outcomes:</span> {expectedOutcomes}
          </p>
        </div>
      </div>
    </div>
  );
};

const MentorshipStagesList = () => {
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const adjustImageHeight = () => {
      if (contentRef.current && imageRef.current) {
        imageRef.current.style.height = `${contentRef.current.clientHeight}px`;
      }
    };

    adjustImageHeight();
    window.addEventListener("resize", adjustImageHeight);

    return () => {
      window.removeEventListener("resize", adjustImageHeight);
    };
  }, [currentStageIndex]);

  const handleNext = () => {
    if (currentStageIndex < mentorshipStages.length - 1) {
      setCurrentStageIndex(currentStageIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStageIndex > 0) {
      setCurrentStageIndex(currentStageIndex - 1);
    }
  };

  const currentStage = mentorshipStages[currentStageIndex];

  return (
    <div
      id="mentorship-container"
      className="container mx-auto p-4 lg:p-8 flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8 relative"
      style={{ minHeight: "70vh" }}
    >
      {/* Left Section: Image */}
      <h1 className="text-4xl flex lg:hidden font-bold mb-4 text-center">
        HACK-A-THON MENTORSHIP AND COHORT STAGES
      </h1>
      <p className="text-lg flex lg:hidden lg:text-xl mb-6 text-center">
        The mentorship program is designed to support participants throughout the
        Hack-a-thon, providing guidance and expertise at each stage of
        development. Participants will progress through five key stages, each
        structured to foster collaboration and innovation.
      </p>

      {/* Image display */}
      <div
        className="w-full lg:w-1/3 flex justify-center"
        ref={imageRef}
      >
        <img
          src={currentStage.image}
          alt="Hack-a-thon Stage"
          className="w-full h-full rounded-lg  object-cover"
        />
      </div>

      {/* Static and Dynamic Content on Left */}
      <div
        className="w-full lg:w-1/2 flex flex-col justify-between items-left lg:sticky lg:top-0"
        ref={contentRef}
      >
        {/* Static Content */}
        <div className="mb-20 ">
          <p className="text-lg hidden  lg:flex lg:text-4xl font-bold text-center">
            HACK-A-THON MENTORSHIP AND COHORT STAGES
          </p>
          <p className="text-sm hidden lg:flex lg:text-lg text-center">
            The mentorship program is designed to support participants
            throughout the Hack-a-thon, providing guidance and expertise at each
            stage of development. Participants will progress through five key
            stages, each structured to foster collaboration and innovation.
          </p>
        </div>

        {/* Dynamic Content (Mentorship Stage) */}
        <MentorshipStage
          key={currentStageIndex}
          title={currentStage.title}
          duration={currentStage.duration}
          objective={currentStage.objective}
          mentorshipFocus={currentStage.mentorshipFocus}
          feedbackLoops={currentStage.feedbackLoops}
          expectedOutcomes={currentStage.expectedOutcomes}
        />
      </div>

      {/* Vertical Navigation Buttons for Large Screens */}
      <div className="hidden lg:flex absolute right-10 top-1/2 transform -translate-y-1/2 flex-col space-y-14">
        <button
          className={`${
            currentStageIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          } bg-[#007F40] text-white px-4 py-2 rounded transform rotate-90`}
          onClick={handlePrevious}
          disabled={currentStageIndex === 0}
        >
          <FaArrowLeft />
        </button>
        <button
          className={`${
            currentStageIndex === mentorshipStages.length - 1
              ? "opacity-50 cursor-not-allowed"
              : ""
          } bg-[#007F40] text-white px-4 py-2 rounded transform rotate-90`}
          onClick={handleNext}
          disabled={currentStageIndex === mentorshipStages.length - 1}
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Horizontal Navigation Buttons for Medium Screens */}
      <div className="flex lg:hidden justify-between space-x-6 mt-6">
        <button
          className={`${
            currentStageIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          } bg-[#007F40] text-white px-4 py-2 rounded`}
          onClick={handlePrevious}
          disabled={currentStageIndex === 0}
        >
          <FaArrowLeft />
        </button>
        <button
          className={`${
            currentStageIndex === mentorshipStages.length - 1
              ? "opacity-50 cursor-not-allowed"
              : ""
          } bg-[#007F40] text-white px-4 py-2 rounded`}
          onClick={handleNext}
          disabled={currentStageIndex === mentorshipStages.length - 1}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};
export default MentorshipStagesList;