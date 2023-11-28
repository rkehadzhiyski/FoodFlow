import { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import styles from '../login/login.module.css';
import userService from '../../services/userService';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Register = () => {
    // const initialState = {
    //     email: '',
    //     username: '',
    //     uid: '',
    // };
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate('');

    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    };

    const usernameChangeHandler = (e) => {
        setUsername(e.target.value);
    };

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    };

    // const handleInputChange = (e) => {
    //     setRecipe({ ...recipe, [e.target.name]: e.target.value });
    // };

    const saveUser = (uid) => {
        let data = {
            email: email,
            username: username,
            uid: uid,
        }
        userService.create(data, uid)
            .then(() => {
            })
            .catch(e => {
                console.log(e);
            });
    }

    const register = (e) => {
        e.preventDefault();

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                updateProfile(userCredential.user, { displayName: username })
                saveUser(userCredential.user.uid);
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const navigateLogin = () => {
        navigate('/login');
    }

    return (
        <div className={styles['form-container']}>
            <h2>Register</h2>
            <Form className={styles.form} onSubmit={register}>
                <Form.Group className="mb-3" controlId="formGroupUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username" value={username} onChange={usernameChangeHandler} placeholder="Enter username" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={email} onChange={emailChangeHandler} placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={passwordChangeHandler} placeholder="Password" />
                </Form.Group>
                <Form.Text className="text-muted">
                    Already have an account? <span className={styles.navigate} onClick={navigateLogin}>Login</span>.
                </Form.Text>
                <div className={styles['button-container']}>
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </div>
            </Form>
        </div>

    );
}

export default Register;