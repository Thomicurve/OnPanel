import React from "react";
import { Link } from "react-router-dom";
import { ButtonLogin, ButtonRegister } from "./styles";

const Buttons = ({ linkUrl, register, buttonText, formMode = false, handleSubmit }) => {
    return (
        <>
            {!formMode
                ?
                <Link to={linkUrl} style={{ color: '#fff' }}>
                    {register
                        ? <ButtonRegister>{buttonText}</ButtonRegister>
                        : <ButtonLogin>{buttonText}</ButtonLogin>
                    }
                </Link>
                : 
                <>
                    {!register 
                    ? <ButtonLogin onSubmit={handleSubmit} type="submit">{buttonText}</ButtonLogin>
                    : <ButtonRegister onSubmit={handleSubmit} type="submit">{buttonText}</ButtonRegister>
                }
                </>
            }

        </>
    )
}

export default Buttons;