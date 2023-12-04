import { useState } from 'react';

import "./editUserModal.css"

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


//TODO fix the useState
const EditRecipeModal = (props) => {
    const initialState = {
        recipeName: '',
        recipeText: '',
        recipePicture: '',
        category: '',
    };
    const [recipe, setRecipe] = useState(initialState);

    // const updateUser = (e) => {
    //     e.preventDefault();

    //     let data = {
    //         firstName: firstName,
    //         lastName: lastName,
    //         address: address,
    //         description: description
    //     }

    //     userService.updateUserData(data, props.uid)
    //         .then(() => {
    //             props.onHide()
    //         })
    //         .catch(e => {
    //             console.log(e);
    //         });
    // }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Edit Recipe
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form className={styles.form}>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Recipe name</Form.Label>
                    <Form.Control type="text"
                        value={recipe.recipeName}
                        onChange={handleInputChange}
                        name="recipeName"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Select category</Form.Label>
                    <Form.Select aria-label="Default select example" name="category" onChange={handleInputChange} value={recipe.category}>
                        <option>Select Category</option>
                        <option>Appetizers</option>
                        <option>Main Courses</option>
                        <option>Soups</option>
                        <option>Desserts</option>
                        <option>Salads</option>
                        <option>Beverages</option>
                        <option>Baking</option>
                        <option>Vegetarian/Vegan</option>
                        <option>Grilling/BBQ</option>
                        <option>International Cuisine</option>
                        <option>Burgers/Sandwiches</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInputPicture">
                    <Form.Label>Recipe image</Form.Label>
                    <Form.Control type="text"
                        value={recipe.recipePicture}
                        onChange={handleInputChange}
                        name="recipePicture"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Select preparation time</Form.Label>
                    <Form.Select aria-label="Default select example" name="time" onChange={handleInputChange} value={recipe.time}>
                        <option>less then 15min</option>
                        <option>15min</option>
                        <option>30min</option>
                        <option>45min</option>
                        <option>1hour</option>
                        <option>1h:15min</option>
                        <option>1h:30min</option>
                        <option>1h:45min</option>
                        <option>2hours</option>
                        <option>more then 2 hours</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Recipe text</Form.Label>
                    <Form.Control as="textarea"
                        value={recipe.recipeText}
                        onChange={handleInputChange}
                        name="recipeText" rows={3} />
                </Form.Group>
                <Button variant="primary" onClick={saveRecipe}>
                    Submit
                </Button>
            </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button type='submit'>Save</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default EditRecipeModal;