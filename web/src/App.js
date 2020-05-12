import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { Container, Header, Button, Form, Table} from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';


class App extends Component {

  constructor() {
    super();
    this.state={
      name:"",
      allUsers: []
    }
  }

  tableRow = [];

  getAllUsers() {
    axios.get("/users/api/v1/users")
    .then( response =>{
      this.setState({allUsers: response.data});
      console.log('allusers : ', this.state.allUsers);
      
    })
  }

  submit() {
    axios.post("/users/api/v1/users", { name: this.state.name})
    .then(response => {
      this.getAllUsers();
    })
  }

  renderRowTable() {
    let rows = this.state.allUsers.map(item => {
      return (
        <Table.Row
          key={item._id}
        //   active={item._id === this.state.activeRowId}
        //   onClick={() => {
        //     this.setActiveRow(item.id);
        //   }
        // }
        >
          <Table.Cell title={item.name}>{item.name}</Table.Cell>
          {/* <Table.Cell title={item.date}>{item.date}</Table.Cell> */}
        </Table.Row>
      );
    });

    return rows;
  }

  componentDidMount() {
    this.getAllUsers();
  }

  render() {
    return (
      <Container style={{ margin: 20 }}>
        <Header as="h3">This is React Client</Header>
        <Form>
          <Form.Field>
            <label>Enter User Name</label>
            <input placeholder='User Name' onChange={(item)=>{this.setState({name: item.target.value})}}/>
          </Form.Field>
          <Button type='submit' onClick={()=>{this.submit()}}>Submit</Button>
        </Form>
        <hr></hr>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>User</Table.HeaderCell>
              {/* <Table.HeaderCell>View Device</Table.HeaderCell>
              <Table.HeaderCell>Add Device</Table.HeaderCell> */}
            </Table.Row>
          </Table.Header>
          <Table.Body>
          {this.renderRowTable()}
          </Table.Body>
        </Table>
      </Container>
    )
  }
}

export default App;
