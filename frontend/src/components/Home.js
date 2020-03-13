// Libary
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Formik } from "formik";
import * as yup from "yup";

// Store
import Opx from './../store/operations'

import Card from './Card'

function Home() {
    const dispatch = useDispatch();
    let users = useSelector(state => state.data);
    const [modalOpen, modalOpenFunc] = useState(false);
    const [modalDeleteOpen, modalDeleteOpenFunc] = useState(false);
    const [modeEdit, modeEditFunc] = useState(false);
    const [personEdit, personEditFunc] = useState(false);
    const [initialValues, initialValuesFunc] = useState({
        name: '',
        email: ''
    });


    useEffect(() => {
        dispatch(Opx.getUsers());
    }, []);

    const changeModal = (action, edit = false) => {
        modeEditFunc(edit)
        modalOpenFunc(action)
    }

    const changeModalDelete = (person, action) => {
        personEditFunc(person)
        modalDeleteOpenFunc(action)
    }

    const changeModeEdit = (person) => {
        modeEditFunc(true)
        personEditFunc(person)
        initialValuesFunc({ name: person.name, email: person.email })
        changeModal(true, true)
    }

    const save = (formikProps, submit, e) => {
        e.preventDefault();
        console.log(formikProps)
        Schema.isValid(formikProps.values).then(async function (valid) {
            if (!valid) {
                console.log(valid)
                alert("Check the fields and try again!");
            } else {
                console.log("ok");
                if (modeEdit) {
                    await dispatch(Opx.updateUser(personEdit._id, formikProps.values));
                    await modalOpenFunc(false);
                    dispatch(Opx.getUsers());

                } else {
                    await dispatch(Opx.saveUser(formikProps.values));
                    await modalOpenFunc(false);
                    dispatch(Opx.getUsers());
                }
            }
        });
    }

    const deleteUser = async () => {
        await dispatch(Opx.deleteUser(personEdit._id));
        await modalDeleteOpenFunc(false);
        dispatch(Opx.getUsers());
        //window.location.reload()
    }

    const Schema = yup.object({
        name: yup.string().required("Required field!"),
        email: yup.string().email("Invalid email!").required("Required field!")
    });

    const Modal = () => {
        return (
            <div className="c-modal" >
                <div className="modal-content">
                    <span className="modal-close close" onClick={() => changeModal(false)}>&times;</span>
                    <div>
                        <p className="emperor gigant center mb-20">Fill in the new user's information</p>
                        <Formik
                            initialValues={initialValues}
                            render={formikProps => (
                                <form
                                    onSubmit={save.bind(this, formikProps, true)}
                                >

                                    <div className="c-form__row">
                                        <div className="c-form__field half exact">
                                            <div className="c-form__flex-column">
                                                <label className="c-form__label" htmlFor="name">Name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder="Name"
                                                    className="o-input holder full-color"
                                                    value={formikProps.values.name}
                                                    onChange={formikProps.handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="c-form__field half exact">
                                            <div className="c-form__flex-column">
                                                <label className="c-form__label" htmlFor="last-name">E-mail</label>
                                                <input
                                                    type="text"
                                                    name="email"
                                                    placeholder="E-mail"
                                                    className="o-input holder full-color"
                                                    value={formikProps.values.email}
                                                    onChange={formikProps.handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="c-form__row row justify-content-flex-end mt-40">
                                        <button className="o-button upper main small o-link relative width-190 mr-40" type="submit">
                                            <span className="c-icon absolute left-10"></span> {modeEdit ? 'Update' : 'Save'}
                                        </button>
                                        <button onClick={() => changeModal(false)} type="button" className="modal-close o-button upper danger small o-link relative width-130">
                                            <span className="c-icon arrow-back-red absolute left-10"></span> Cancel
                            </button>
                                    </div>
                                </form>
                            )}
                        />
                    </div>
                </div>
            </div >

        )
    }

    const ModalDelete = () => {
        return (
            <div className="c-modal" >
                <div className="modal-content">
                    <span className="modal-close close" onClick={() => changeModalDelete(null, false)}>&times;</span>
                    <div>
                        <p className="emperor gigant center mb-20">Do you really want to delete the user {personEdit.name}?</p>

                        <div className="c-form__row row justify-content-center mt-40">
                            <button onClick={() => deleteUser()} className="o-button upper main small o-link relative width-190 mr-40" type="button">
                                <span className="c-icon absolute left-10"></span> Delete
                            </button>
                            <button onClick={() => changeModalDelete(null, false)} type="button" className="modal-close o-button upper danger small o-link relative width-130">
                                <span className="c-icon arrow-back-red absolute left-10"></span> Cancel
                            </button>
                        </div>

                    </div>
                </div>
            </div >

        )
    }


    return (
        <div className="c-container-body">
            <div className="p-30">
                {modalOpen && Modal()}
                {modalDeleteOpen && ModalDelete()}
                <div className="c-form__row row">
                    {users && users.map((person) => {
                        return <Card person={person} changeModeEdit={changeModeEdit} changeModalDelete={changeModalDelete}></Card>
                    })}
                    <div className="pl-10 pr-10 pt-10">
                        <div onClick={() => changeModal(true)}
                            className="c-card mr-30 width-200 height-150 row justify-content-center align-items-center o-link">
                            <img
                                src={require("./../assets/img/add.png")}
                                alt="profile"
                                className="c-avatar small"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
