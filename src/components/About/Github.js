import React from "react";
import GitHubCalendar from "react-github-calendar";
import Row from "react-bootstrap/Row";

function Github() {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
			<h2 className="project-heading" style={{ paddingBottom: "20px" }}>
				Jours de <strong className="purple">Code</strong>
			</h2>
			<GitHubCalendar
				username="arnaudmorillo"
				blockSize={15}
				blockMargin={5}
				color="#6fa8dc"
				fontSize={16}
			/>
		</Row>
	);
}

export default Github;
