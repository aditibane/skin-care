import React, { useContext, useState } from "react";
import { StateContext } from "../Context/Context";
import { Link } from "react-router-dom";

const QuestionSeven = () => {
	const { questions, setQuestions } = useContext(StateContext);

	return (
		<div className="flex">
			<div className="h-[100vh] w-[70vw] flex justify-center items-center">
				<div className="h-[50vh] w-[50vw]">
					<div>
						<p className="text-[#7BC4AB] font-[700] text-[15px]">SLEEP HOURS</p>
						<p className="font-[500] text-[30px]">
							On average, how many hours of sleep do you get each night?
						</p>
						<p className="font-[500] opacity-[0.5] text-[12px]">Choose that apply</p>
					</div>
					<div className="flex mt-[2rem] flex-col gap-[0.5rem]">
						<div className="flex shrink-0 flex-wrap gap-[1rem]">
							<input
								value={questions.sleepHours}
								onChange={(e) =>
									setQuestions({ ...questions, sleepHours: e.target.value })
								}
								placeholder="Your Sleep Hours"
								className="w-[20rem] px-[1rem] focus:outline-none transition text-[20px] font-[500] opacity-[0.9] h-[3rem] transition border rounded border-[#7BC4AB]"
							/>
						</div>
					</div>
					<div className="flex w-[50vw] justify-start mt-[2rem]">
						<Link
							to={"/8"}
							className={`w-[20rem] flex items-center justify-center ${
								questions.sleepHours === "" ? "cursor-not-allowed" : ""
							} hover:bg-[#6fb09a] transition text-[20px] font-[500] opacity-[0.9] h-[3rem] bg-[#7BC4AB] text-[#fff] transition border rounded border-[#7BC4AB]`}
						>
							NEXT
						</Link>
					</div>
				</div>
			</div>
			<div className="h-[100vh]  bg-[#EFF9F4] w-[30vw]"></div>
		</div>
	);
};

export default QuestionSeven;
