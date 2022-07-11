import React from "react";

const Jumbotron=(props) => {
    return(
        <div className="container">
            <div className="jumbotron pt-6 pb-6">
    	        <h1 className="display-4">
				{" "}
          		{props.texto1}
				</h1>

	            <p className="lead">
				{" "}
          		{props.texto2}
				</p>
	    	    <p className="lead"><a className="btn btn-primary btn-lg" href="/#" role="button">
				{" "}
          		{props.texto3}
				</a></p>
        	</div>
    	</div>
    );
};

export default Jumbotron;