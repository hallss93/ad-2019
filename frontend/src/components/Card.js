// Libary
import React from 'react'

export default function Card({ ...props }) {

    return (
        <div className="pl-10 pr-10 pt-10" key={props.person._id}>
            <div className="c-card width-200 height-150 mr-30 relative">
                <div className="center">
                    <img
                        src={require("./../assets/img/account.png")}
                        alt={props.person.name}
                        className="c-avatar small"
                    />
                    <p className="emperor gigant mt-10">{props.person.name}</p>
                    <p className="emperor mt-5">{props.person.email}</p>
                </div>
                <div className="absolute bottom-10 right-10">

                    <img
                        src={require("./../assets/img/edit.png")}
                        alt={props.person.name}
                        style={{ width: '20px' }}
                        className="mr-10 o-link"
                        onClick={() => props.changeModeEdit(props.person)}
                    />
                    <img
                        src={require("./../assets/img/bin.png")}
                        alt={props.person.name}
                        style={{ width: '20px' }}
                        className="mr-10 o-link"
                        onClick={() => props.changeModalDelete(props.person, true)}
                    />
                </div>
            </div>
        </div>
    );
}

