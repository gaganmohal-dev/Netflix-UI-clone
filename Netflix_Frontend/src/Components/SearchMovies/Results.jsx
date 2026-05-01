import React from "react";
import TopResults from "./TopResults";
import MoreResults from "./MoreResults";

function Results({topResults, moreResults}) {
  return (
    
        <div>
            
             <TopResults topResults={topResults} />
            <MoreResults moreResults={moreResults}/> 
        </div>
    
  );
}

export default Results;