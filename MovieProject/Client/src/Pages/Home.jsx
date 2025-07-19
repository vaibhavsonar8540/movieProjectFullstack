import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const Home = () => {
  const featuredMovie = {
    title: "Inception",
    description: "A mind-bending thriller that blurs the line between dream and reality.",
    image: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
  };

  const categories = [
    { name: "Action", image: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2024/12/10-best-action-movies-of-the-last-25-years.jpg" },
    { name: "Comedy", image: "https://filmfare.wwmindia.com/thumb/content/2022/nov/top-comedy-films-21667975848.jpg?width=1280&height=720" },
    { name: "Drama", image: "https://hips.hearstapps.com/hmg-prod/images/before-sunrise-everett-1651175088.jpg?crop=1xw:1xh;center,top&resize=980:*" },
    { name: "Horror", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYpE5fhJdprt4Xdij2NSx9gGYl4Mq8x6ljMg&s" },
  ];

  return (
    <div className="mb-2">

      <div className="bg-dark text-white py-5 mt-3">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1>{featuredMovie.title}</h1>
              <p>{featuredMovie.description}</p>
              <Button variant="primary">Watch Now</Button>
            </Col>
            <Col md={6}>
              <img
                src={featuredMovie.image}
                alt={featuredMovie.title}
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Categories */}
      <Container className="py-5">
        <h2 className="mb-4 text-center">Browse by Genre</h2>
        <Row>
          {categories.map((cat, index) => (
            <Col md={3} sm={6} key={index} className="mb-4">
              <Card className="h-100">
                <Card.Img variant="top" src={cat.image} style={{height:"250px"}}/>
                <Card.Body className="text-center">
                  <Card.Title>{cat.name}</Card.Title>
                  <Button variant="outline-primary" size="sm">Explore</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-white py-3 text-center">
        <Container>
          <p className="mb-0">© 2025 MovieMania. All rights reserved.</p>
        </Container>
      </footer>
    </div>
  );
};

export default Home;
