import Alert from "react-bootstrap/Alert";

const CustomAlert = ({ setShow }) => {
    return (
        <Alert
            variant="warning"
            onClose={() => setShow(false)}
            dismissible
        >
            <Alert.Heading>Please Login</Alert.Heading>
            <p>
                Enter your account credentials or{" "}
                <Alert.Link href="/register">create an account</Alert.Link>
            </p>
        </Alert>
    );
};

export default CustomAlert;