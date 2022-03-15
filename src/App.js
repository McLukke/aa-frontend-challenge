import React from "react";
import { Row, Col } from "antd";
import Card from "./components/Card";

import styles from "./App.module.scss";

const cities = ["Ottawa", "Moscow", "Tokyo"];
const apiKey = "e47851098af3179c1a8ee53df6ee4a93";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCity: cities[0],
      isLoading: false,
      weatherData: null,
      hasError: null,
    };
  }

  componentDidMount() {
    const { selectedCity } = this.state;

    this.getWeatherForCity(selectedCity);
  }

  getWeatherForCity = (city) => {
    this.setState({ isLoading: true, weatherData: null, hasError: null });

    fetch(
      `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&appid=${apiKey}`
    )
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          isLoading: false,
          weatherData: {
            ...res,
            list: res.list
              .sort((prev, next) => prev.dt - next.dt)
              .map((forecast) => ({
                ...forecast,
                date: new Date(forecast.dt * 1000 - res.city.timezone * 1000),
              })),
          },
        })
      )
      .catch((err) =>
        this.setState({
          isLoading: false,
          hasError: err,
        })
      );
  };

  handleCitySelect = (selectedCity) => this.setState({ selectedCity });

  render() {
    const { selectedCity, weatherData } = this.state;
    const noopUrl = "#";

    console.log("weatherData: ", weatherData);

    return (
      <>
        <Row justify="center" align="middle">
          <Col xs={24} md={20} lg={16} xl={12} xxl={4}>
            <div className={styles.cityLinks}>
              {cities.map((city) => (
                <a
                  key={city}
                  href={noopUrl}
                  className={city === selectedCity ? styles.active : ""}
                  onClick={() => this.handleCitySelect(city)}
                >
                  {city.toUpperCase()}
                </a>
              ))}
            </div>
          </Col>
        </Row>

        <Row justify="center" align="middle">
          <Col xs={24} md={20} lg={16} xl={12} xxl={4}>
            <Card>
              <Row justify="center">
                <Col>
                  <div>Today</div>
                  <div>
                    <span>image</span>
                    <div>19&deg;</div>
                    <div>Clouds</div>
                  </div>
                </Col>
              </Row>

              <Row justify="center">
                <Col style={{ border: "1px solid white" }} xs={6}>
                  test 1
                </Col>
                <Col style={{ border: "1px solid white" }} xs={6}>
                  test 2
                </Col>
                <Col style={{ border: "1px solid white" }} xs={6}>
                  test 3
                </Col>
                <Col style={{ border: "1px solid white" }} xs={6}>
                  test 4
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}
