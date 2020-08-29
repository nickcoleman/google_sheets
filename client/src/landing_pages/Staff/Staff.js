import React from "react";
import Container from "@material-ui/core/Container";
import Content from "./Content";
import Header from "../../shared/Header";
import ColorBar from "../../shared/ColorBar";

const Staff = () => {
  return (
    <>
		<Header logo/>
		<Container>
			<Content />
		</Container>
		<ColorBar />
    </>
  );
};

export default Staff;
