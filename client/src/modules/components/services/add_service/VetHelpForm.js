import React from 'react';
import Field from "../../forms/Field";

const VetHelpForm = ({errors}) => {
    return (
        <>
            <label htmlFor="street">Street</label>
            <Field type="text" name="street" placeholder="Type street" error={errors.street}/>
            <label htmlFor="indexAndCity">Index and City</label>
            <Field type="text" name="indexAndCity" placeholder="Type index and city" error={errors.indexAndCity}/>
            <label htmlFor="phone">Telephone</label>
            <Field type="tel" name="phone" placeholder="+11(111)-111-11-11" pattern="[\+]\d{2}[\(]\d{3}[\)]\d{3}[\-]\d{2}[\-]\d{2}" error={errors.phone}/>
            <label htmlFor="fax">Telefax</label>
            <Field type="tel" name="fax" placeholder="+11(111)-111-11-11" pattern="[\+]\d{2}[\(]\d{3}[\)]\d{3}[\-]\d{2}[\-]\d{2}" error={errors.fax}/>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" placeholder="Type email" error={errors.email}/>
            <label htmlFor="workhours">Work hours</label>
            <textarea name="workhours" placeholder="Type work hours" error={errors.workhours} style={{height: 100,paddingTop: 10}}/>
        </>
    );
};

export default VetHelpForm;