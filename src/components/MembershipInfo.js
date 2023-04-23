import React from "react";
import { Card } from "react-bootstrap";

export default function MembershipInfo() {
  return (
    <>
      <div className="container d-flex justify-content-around">
        <Card style={{ width: "25rem" }}>
          <Card.Body>
            <Card.Title>Membership info</Card.Title>
            <Card.Text>
              ACM is not about an individual, it is a family of 820+ members.
              Our members are as important to us as the people who lead us.
              Anyone who is driven by the zeal to learn something, to make their
              place in this tech world can come and join us. All the ACM members
              are entitled to all the events ACM conducts like coding contests,
              trainings on trending technologies, hackathons, quiz contests and
              many more. All the members also get the latest tech news to their
              mails so that they are up to date on the recent technological
              advancements.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "25rem" }}>
          <Card.Body>
            <Card.Title>Volunteers info</Card.Title>
            <Card.Text>
              Volunteers are the supporting pillars of any student chapter. It
              is the same with ACM. In our student chapter, we have volunteers
              working under 5 teams: Technical team, Events and PR team, Social
              Media team, Design team and Coding team. Be it any event, our
              volunteers are our strength that make the event successful.
              Together, we celebrate our success; these teams work as pillars
              for ACM. By helping each other and appreciating others work, Team
              ACM moves forward. Vol List
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      
    </>
  );
}
