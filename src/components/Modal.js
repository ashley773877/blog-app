//THIS FILE IS CREATING A PORTAL 9POP UP)
import {createPortal} from 'react-dom';
import { Container, Title, Button } from './styled'

function Modal() {
    // creatig portal directly to the real DOM
    // and going thru the virtual DOM
    // in the doc directly and rendering this info through 
    //the code in line 16
    return createPortal(
        <Container>
            <Title>Modal</Title>
            <p>Hello Bloggers</p>
            <Button>Sign Up!</Button>
        </Container>,
        document.getElementById('modal') // passing thru postal 
// and reaching out to the real dom to render the content in lines 
// 5-11

    )

}

export default Modal;