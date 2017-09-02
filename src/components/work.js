import React, { Component } from 'react';

const Work = () => {

  const jobList = [
    ['Flight Safety Manager', 'Air Canada, Corporate Safety, Env. & Quality', 'Jul 2012 - May 2017', 'Provided expert feedback to flight crews regarding Air Safety Reports and matters of fatigue, hazards, and OSH. Managed complex safety studies and supported requests for safety data from a range of clients including Branch Managers, Business Intelligence and Executive Management. Drafted incident/accident notifications for submittal to the Transportation Safety Board of Canada. Generated presentations highlighting safety statistics, hazards, trends, and top concerns.'],
    ['Safety Specialist', 'Air Canada, Flight Operations', 'Aug 2011 - Jun 2012', 'Received, coordinated, and addressed safety issues reported by flight crews. Identified and investigated latent risks. Maintained the Air Safety Report database and ensured files were properly completed. Composed feedback to flight crews with findings and safety action taken. Monitored effectiveness of corrective actions. Communicated safety information and operational risks to company branches.'],
    ['Owner / Photographer', 'Duke Aerial Photography', 'Jun 2006 - Dec 2011', 'Performed oblique aerial photography for clients across Southern Ontario and Quebec. Oversaw all aspects of business launch and operation. Captured imagery from a variety of fixed-wing and rotary aircraft.'],
    ['Flight Safety Analyst', 'Air Canada, Flight Operations', 'Mar 2010 - Aug 2011', 'In this role I was the in-house expert on safety reporting tools and data trending for the Flight Operations branch. Spearheaded the development of safety performance metrics and benchmarked Air Canada against peer carriers to enhance overall safety picture. Authored statistical and technical information for a wide variety of stakeholders including Chief Pilots and Senior Management.']
  ]

  const renderJobs = jobList.map((job) => {
    return (
      <div className="fl w-100 w-25-l pa3-m pa4-l" key={job[0]}>
        <p className="f6 lh-copy b">{job[0]}</p>
        <p className="f6 lh-copy">{job[1]}</p>
        <p className="f6 lh-copy">{job[3]}</p>
        <p className="f6 lh-copy">{job[2]}</p>
      </div>
    );
  });

  return (
    <article className="cf pa3 mw9 center bb b--black-10">

      <header className="tc">
        <h1 className="f4 f3-m f2-l fw2 black-90 mv4">
          work experience
        </h1>
      </header>

      <section className="fl w-100">
        {renderJobs}
      </section>
    </article>
  );

}

export default Work;
