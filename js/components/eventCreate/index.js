import React, { Component } from "react";

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Text,
  Subtitle
} from "native-base";

import styles from "./styles";

class EventCreate extends Component {
  // eslint-disable-line

  render() {
    return (
      <Container style={styles.container}>
        <Header hasSubtitle>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Title</Title>
            <Subtitle>Subtitle</Subtitle>
          </Body>
          <Right />

        </Header>

        <Content padder>
          <Text>
            Header with Title Subtitle
          </Text>
        </Content>
      </Container>
    );
  }
}

export default EventCreate;