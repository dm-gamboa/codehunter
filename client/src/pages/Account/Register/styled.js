import styled from "styled-components";

const StyledRegistration = styled.div`
    /* margin: 50px 10% 0 10%; */
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    
    .signup {
        margin-bottom: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        h1 {
            color: steelblue;
        }
    }

    .registration {
        color: steelblue;
        text-align: left;
        width: 100%;
        /* width: 100;
        max-width: 500px; */
    }

    .ant-form-item-control-input-content {
        display: flex;
        justify-content: space-between;
    }

    .ant-form-item {
        margin-bottom: 10px;
        /* width: 100%; */
    }

    .login-btn {
        display: flex;
        flex-direction: row;
        /* .login-form-button {
            width: 100%;
        } */
    }

    a {
        span {
            color: #000;
        }
    }

    p {
        margin-top: 40px;
        text-align: center;
    }

    .full-length {
        width: 100%;
    }

    .logo {
        font-size: clamp(6rem, 10vw, 8rem);
    }
`;

export default StyledRegistration;