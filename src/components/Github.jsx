import React, { Component } from 'react';
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';


class Github extends Component {
    render() {
        return (
            <div>
                 <GitHubCalendar blockSize={15} blockMargin={5} fontSize={16} username = "gaursafal">
                    <ReactTooltip delayShow={50} /> 
                </GitHubCalendar>
            </div>
        );
    }
}

export default Github;