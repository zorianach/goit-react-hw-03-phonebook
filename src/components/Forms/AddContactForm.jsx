import { Component } from "react";
import {Form, Label, Input, Button} from "./AddContactForm.styled";


class AddContactForm extends Component{
    state = {
        name: '',
        number: '',
      }

      handleChange = ({ target: { value, name } }) =>  {
        this.setState({
          [name]: value,
        });
        console.log(this.state)
      };

      handleSubmit = (e) => {
        e.preventDefault()
        const { onSubmit } = this.props;
        onSubmit(this.state);
        this.resetForm();
      }

      resetForm = () => {
        this.setState({
          name: '',
          number: '',
        });
      };

      render(){
        const {name, number}= this.state;
        return (
          <>
          <Form onSubmit={this.handleSubmit} >
					<Label htmlFor='exampleInputEmail1' className='form-label'>
						Name
					</Label>
					<Input
						name='name'
						type='text'
						className='form-control'
						id='exampleInputEmail1'
						aria-describedby='emailHelp'
						value={name}
						onChange={this.handleChange}
            required
					/>
          <Label htmlFor='exampleInputEmail1' className='form-label'>
						Number
					</Label>
          <Input 
          type="tel" 
          name="number" 
          value={number}
          onChange={this.handleChange}
          required
          />
				<Button type='submit' className='btn btn-primary'>
					Add contact
				</Button>
			</Form>
      </>
        )
        }
}

export default AddContactForm;