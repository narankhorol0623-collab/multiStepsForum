import React from "react";

const SuccessInfo = () => {
	return (
		<div>
			<div className="text-yellow-500 text-3xl font-bold  pt-5 pb-5">
				<img src="pinecone.svg" alt="" />
				<p>You're All Set💥</p>
				<p className="text-yellow-600 text-xs p-2">
					Congratulations!🥳 You deployed your project!💕
				</p>
				<p className="text-gray-400 text-lg">
					We have recived your submission. Thank you!
				</p>
			</div>
		</div>
	);
};

export default SuccessInfo;
