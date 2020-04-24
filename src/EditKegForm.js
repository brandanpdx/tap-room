import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';

function EditKegForm(props) {

  const { keg } = props;

  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    console.log("reached handle edit item form submission function");
    props.onEditKeg({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      ABV: event.target.ABV.value,
      quantity: event.target.quantity.value,
      id: keg.id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissonHandler={handleEditKegFormSubmission}
        buttonText="Update Keg Details" />
    </React.Fragment>
  );
}

EditKegForm.propTypes = {
  onEditKeg: PropTypes.func
}

export default EditKegForm; 