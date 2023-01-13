import { useSelector } from "react-redux";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ShowUser() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  let interests = "";
  for (let interest of user.interests) {
    interests += interest;
    interests += ", ";
  }
  return (
    <div className="mt-5 d-flex justify-content-center align-items-center">
      <Card style={{ width: "50%" }}>
        <Card.Body>
          <Card.Title className="h1">User profile</Card.Title>
          <Card.Text>
            <div className="d-flex flex-column">
              <div>
                <span className="h6">Name: </span>
                {`${user.firstName} ${user.lastName}`}
              </div>
              <div>
                <span className="h6">Email: </span>
                {user.email}
              </div>
              <div>
                <span className="h6">Contact: </span>
                {user.contact}
              </div>
              <div>
                <span className="h6">Gender: </span>
                {user.gender}
              </div>
              <div>
                <span className="h6">Interests: </span>
                {interests}
              </div>
              <div>
                <span className="h6">Location: </span>
                {user.location}
              </div>
              <div>
                <span className="h6">About: </span>
                {user.about}
              </div>
            </div>
          </Card.Text>
          <Button onClick={() => navigate("/edit")} variant="primary">
            Edit
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ShowUser;
